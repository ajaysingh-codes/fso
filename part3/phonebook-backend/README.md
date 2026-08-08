# Phonebook Backend API

Express REST API for the Full Stack Open phonebook — CRUD endpoints,
input validation, and HTTP request logging with a custom morgan token
for POST payloads.

## Tech stack
Node.js · Express · morgan · Render

## Running locally
npm install
npm run dev

## Deployed Version
https://phonebook-backend-b97t.onrender.com/api/persons

## API

| Method | Route            | Description             |
|--------|------------------|-------------------------|
| GET    | `/api/persons`   | List all persons        |
| GET    | `/api/persons/:id` | Get one person        |
| POST   | `/api/persons`   | Add person (validated)  |
| DELETE | `/api/persons/:id` | Remove person         |
| GET    | `/info`          | Entry count + timestamp |

## What I built
- REST endpoints with proper status codes (200, 204, 400, 404)
- POST validation (required fields, unique names)
- Middleware pipeline: JSON parsing + morgan logging
- Custom morgan token to log POST request bodies