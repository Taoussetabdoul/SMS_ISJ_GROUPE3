# Manage Changement


## Changement of v0.0.1 (branch childeric)
### Backend
- npm install cors mongoose simpl-schema
- npm install --dev @types/body-parser @types/cors @types/express @types/mongoose @types/node ts-node typescript
- In package.json, I added a script `dev`
- I added `nodemon.json` `tsconfig.json` to run typescript and server
- `./src` contain files app
    - `./src/constants` all apps constant
    - `./src/middlewares` all customs apps middlewares
    - `./src/models` all models of bd
    - `./src/schemas` all schemas of simpl-schema
    - `./src/services` all services to our routes
    - `./src/app.ts` contain App class to manage project
    - `./src/router.ts` contain Router class which similar at controller and include all routes app
    - `./src/server.ts` contain our server

- run `npm run dev` to verify new config