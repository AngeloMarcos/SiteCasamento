# SiteCasamento

## Prerequisites

- [Node.js](https://nodejs.org/) and npm
- [MySQL](https://www.mysql.com/) database

## Local development

1. Install dependencies from the project root:
   ```bash
   npm install
   ```
2. Configure the backend environment variables. Copy `backend/.env.example` to `backend/.env` and update the values.
3. Start the backend API:
   ```bash
   cd backend
   npm start
   ```
4. In a separate terminal start the React app:
   ```bash
   cd frontend
   npm start
   ```
   The site will be available at `http://localhost:3000`.

## Deploying to Vercel

1. Push your repository to GitHub and create a new project in Vercel.
2. Add the environment variables listed in `backend/.env.example` to the Vercel project.
3. Use the default build command `npm run build` and output directory `build` (as defined in `vercel.json`).
4. Trigger a deployment or use the Vercel CLI with `vercel --prod`.
