# Bitcoin Wallet Checker

## Summary:
This is a full stack web application providing basic functionality for checking the full balance, credit balance, or debit balance of Bitcoin Wallets.

The backend is coded in Express TypeScript, and the front end is coded is React TypeScript. This application utilizes a MongoDB database and programmatically interacts with the database via the Mongoose Object Document Mapper (ODM).

## Project Structure:
Folders are organized largely in an MVC structure.

All "Model" and "Controller" TypeScript code can be found in the "src" directory. Subdirectories and files witin "src" contain the database models, Express routes, and Express application. JavaScript-compiled server-side code is within the "dist" directory

All client-side or "View" code can be found in the "client" directory.

## Environment Variables:
The server-side code expects two environment variables to be accessible:
`process.env.mongoURI` and `process.env.PORT`

The code will default to running port 5000 statically without the `PORT` environment variable. However, the `mongoURI` variable must be provided to connect to the MongoDB database.

## Available Scripts:
All scripts must be run from the project root directory.

### `npm run dev`
This script runs the full app -- i.e., the client React App and server app at the same time -- utilizing concurrently.

### `npm run test`
This script runs the server-side test suite.

This is a series of tests on the project's backend -- i.e, its Express server and MongoDB database -- code utilizing mocha, chai, and supertest.

### `npm run build`
This script compiles all the server-side TypeScript code into executable JavaScript and should be run prior to the "npm run start" script.

### `npm run start`
This script runs only the project backend with the node command.

Of note, it runs the compiled, JavaScript version of the server-side code. Consequently, the "npm run build" script should be run before this script to ensure all updates in the TypeScript code have been compiled into executable JavaScript

### `npm run server`
This script runs only the project backend with nodemon.

Unlike "npm run start", you can update server-side code and then see the updates reflected in how the server operates without having to stop and then re-start the server.

### `npm run client`
This script runs only the client-side React View/User interface.
