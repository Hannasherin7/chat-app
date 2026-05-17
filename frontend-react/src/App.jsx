import { useEffect, useMemo, useState } from 'react';

const WS_URL = 'ws://localhost:8080/chat';

function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [status, setStatus] = useState('Connecting...');

  const socket = useMemo(() => new WebSocket(WS_URL), []);

  useEffect(() => {
    socket.addEventListener('open', () => setStatus('Connected'));
    socket.addEventListener('message', event => {
      const payload = JSON.parse(event.data);
      setMessages(current => [...current, payload]);
    });
    socket.addEventListener('close', () => setStatus('Disconnected'));
    socket.addEventListener('error', () => setStatus('Error'));

    return () => {
      socket.close();
    };
  }, [socket]);

  const sendMessage = () => {
    if (!input.trim()) return;
    const message = {
      user: 'Guest',
      text: input.trim(),
      timestamp: new Date().toISOString()
    };
    socket.send(JSON.stringify(message));
    setInput('');
  };

  return (
    <div className="app-shell">
      <div className="chat-card">
        <header>
          <h1>Real-time Chat</h1>
          <div className="status">{status}</div>
        </header>

        <section className="messages">
          {messages.length === 0 ? (
            <div className="empty">No messages yet. Send one to start.</div>
          ) : (
            messages.map((message, index) => (
              <div key={index} className="message-row">
                <div className="message-user">{message.user}</div>
                <div className="message-text">{message.text}</div>
                <div className="message-ts">{new Date(message.timestamp).toLocaleTimeString()}</div>
              </div>
            ))
          )}
        </section>

        <footer>
          <input
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && sendMessage()}
            placeholder="Type a message..."
          />
          <button onClick={sendMessage}>Send</button>
        </footer>
      </div>
    </div>
  );
}

export default App;
