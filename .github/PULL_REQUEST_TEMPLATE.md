## Summary

This pull request adds the complete real-time chat app with:

- React + Vite frontend
- Java Spring Boot WebSocket backend
- Docker support for local development
- Health endpoint and WebSocket server configuration

## What changed

- Added `frontend-react` UI client
- Added `backend-java` WebSocket backend
- Included `.github/PULL_REQUEST_TEMPLATE.md`
- Added `docker-compose.yml` for easy startup

## Notes

Start backend with `mvn spring-boot:run` or `docker compose up --build`.
Start frontend with `npm install && npm run dev`.
