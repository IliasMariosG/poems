# Poems

Motivation: To learn express

---

## Technologies used

environment: `node`

server: `express`

views template: `ejs`

test: `jest`

headless testing: `jest-puppeteer`

queries: `postgreSQl`

connect database to the server by making use of: `node-postgres` (`pg` library)

---

## Usage

Run the app

`npm start`

Test the app

`npm test`

Test the app with code coverage (Istanbul)

`npm run test-coverage`

---

## API Documentation

|method| endpoint| description  |
|------|---------|--------------|
|`GET` | `/`     | Homepage     |
|`GET` | `/poems`| List of poems|

## TODOs

Add linter

Add nodemon for reloading Express server
