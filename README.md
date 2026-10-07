# backend (NestJS)

```bash
npm install && npm run start:dev          # http://localhost:4000
docker build -t my-backend .
docker run -p 4000:4000 -e CORS_ORIGIN=https://your-frontend.example my-backend
docker compose up --build                 # local run
```

Env (runtime): `PORT` (default 4000), `CORS_ORIGIN` (comma-separated origins; unset = allow all). Health check: `GET /health`.
# deploy-backend
