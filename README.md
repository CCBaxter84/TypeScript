# Bitcoin Wallet Checker App

## Summary:
This is a full stack application providing basic functionality for checking the full balance, credit balance, or debit balance of a Bitcoin Wallet

The backend is coded in Express TypeScript, and the front end is coded is React TypeScript

This application utilizes a MongoDB database and programmatically interacts with the database via the Mongoose Object Document Mapper (ODM)

Project Structure:
Folders are organized largely in an MVC structure

All "Model" and "Controller" TypeScript code can be found in the "src" directory

Subdirectories and files witin "src" contain the database models, Express routes, and Express application

JavaScript-compiled server-side code is within the "dist" directory

All client-side or "View" code can be found in the "client" directory

## Available Scripts:
All scripts must be run from the project root directory

### `npm run dev`
Runs the full app -- i.e., the client React App and server app at the same time -- utilizing concurrently

### `npm run test`
Runs the server-side test suite

This is a series of tests on the project's backend -- i.e, its Express server and MongoDB database -- code utilizing mocha, chai, and supertest

### `npm run build`
Compiles all the server-side TypeScript code into executable JavaScript

This script should be run prior to the "npm run start" script

### `npm run start`
Runs only the project backend with the node command

Runs the compiled, JavaScript version of the server-side code

This script should be run after the "npm run build" script to ensure all updates in the TypeScript code have been compiled into executable JavaScript

### `npm run server`
Runs only the project backend with nodemon

Unlike "npm run start", you can update server-side code and then see the updates reflected in how the server operates without having to stop and then re-start the server

### `npm run client`
Runs only the client-side React View/User interface
