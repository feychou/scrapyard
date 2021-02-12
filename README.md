# scrapyard

A simple auth server.

## Setup

This server is expecting a `MONGO_URI` environment variable defined in a `.env` file at root level.
You can check out the schema for `User` and `Order` collections inside the directory `models`.
That will help you populate the db with initial data if needed.

## Install and run :runner:

Unsurprisingly, run 

```sh
npm i
npm start
```
inside the root directory in order to run.

## Example requests

to register a new user: `curl -d '{"username": "zubat", "email": "zubat@pokemon.com", "password": "iamthenight"}' -H "Content-Type: application/json" -X POST http://localhost:5000/auth/register`

to login: `curl -d '{"email": "zubat@pokemon.com", "password": "iamthenight"}' -H "Content-Type: application/json" -X POST http://localhost:5000/auth/login`

to update a user without being the user and be prompted an unauthorised message: `
curl -d '{"email": "zubat@pokemon.com", "username": "zubat", password": "iamtheKNIGHT"}' -H "Content-Type: application/json" -X PUT http://localhost:5000/users/60059b4d8ccc074679667f24`

to update a user, the right way this time: `curl -d '{"email": "zubat@pokemon.com", "password": "iamtheKNIGHT"}' -H "Content-Type: application/json" -H "Authorization: Bearer tokenhere" -X PUT http://localhost:5000/users/60059b4d8ccc074679667f24`

to get your own profile info: `curl -H "Content-Type: application/json" -H "Authorization: Bearer tokenhere" http://localhost:5000/auth/me`
