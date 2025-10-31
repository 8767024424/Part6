# Anecdotes — React Query (Exercise)

This is a small Vite + React app demonstrating voting for anecdotes using React Query.
The UI updates automatically after voting (mutation invalidates the query).

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the JSON server (backend):
   ```bash
   npm run server
   ```
   This serves `db.json` at http://localhost:3001

3. Start the frontend dev server:
   ```bash
   npm run dev
   ```

Open http://localhost:5173

## Features
- Fetch anecdotes with React Query
- Create new anecdotes
- Vote an anecdote (triggers React Query mutation, refetches)
- Simple notification UI
