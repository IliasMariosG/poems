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

`npm start` or `npx nodemon`

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
|`GET` | `/poems/new`| Add a new poem|
|`POST`|`/poems/new`| See added poems |

## TODOs

- [ ] Add linter

- [x] Add nodemon for reloading Express server

## To Consider

- [ ] `db/migrations` dirctory -> drop table

- [ ] Testing
  - [ ] create and empty the db after the execution of each test (proper setup and teardown)
  - [ ] Properly create test and development environment
  - [ ] lines 17-18 of `poem.js` are stil uncovered
  - [ ] is the following jest warning related to the first issue of the testing paragraph?
  - [ ] "A worker process has failed to exit gracefully and has been force exited. This is likely caused by tests leaking due to improper teardown. Try running with --detectOpenHandles to find leaks"
  - [ ] fake library (i.e. faker)

- [ ] Handle 404 not found error types. Why is the depenceny `errorhandler` not doing that? Investigation needed

- [ ] Parse submitted poems in a correct manner. E.g.
  - [ ] user wishes to add a poem with two paragraphs (newline in between). Is this currently tested and/or working?
  - [ ] user copies a poem from the web and pastes it into the textarea of the `.ejs` file. does my app receive it correctly? If not, think of possible workarounds (string manipulation)

- [ ] Create a `models` directory and move in there what's currently inside the `public/javascripts`

- [ ] Add buttons for ease of navigation

- [ ] Add styling for the app to look alluring

- [ ] Possible user stories
  - [ ] user wants to see their poems only (`User` class ?...session, cookies?)
  - [ ] user wants see poems by categories
