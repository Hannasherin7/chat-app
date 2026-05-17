# Chat App

This repository contains a real-time chat application with:

- `frontend-react`: React + Vite chat client
- `backend-java`: Java Spring Boot WebSocket server

## Run Backend

1. Navigate to `backend-java`
2. Run `mvn spring-boot:run`

The WebSocket server listens on `ws://localhost:8080/chat`.

## Run Frontend

1. Navigate to `frontend-react`
2. Run `npm install`
3. Run `npm run dev`

Open the browser on the Vite dev URL and start chatting.

## Run with Docker

1. Install Docker Desktop
2. From the repo root, run:
   ```bash
   docker compose up --build
   ```
3. The backend is available on `http://localhost:8080`
4. The frontend is available on `http://localhost:5173`

## Branch workflow

- Branch: `feature/chat-app`
- Default branch after merge: `main`
