# News Service

## Description

This service handles news data between front end and users.

### Local environment

Copy `.env.example` to `.env` and set the required variables. You can use any database you would like to run; I personally used PostgreSQL for the application. You can find the required database check-ups under the `db` folder.

### Running the app locally

```bash
# install dependencies
$ npm i

# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

The dev server runs by default in port 3001.

For the OpenAPI description, [open localhost](http://localhost:3001/api) in your browser.
