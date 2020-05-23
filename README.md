# Back-End

## Dependencies:

    bcryptjs, cookie-parser, cors, dotenv, express, helmet, jest, jsonwebtoken, knex, nodemon, sqlite3, supertest.


## Endpoints:

    ##### /auth/register

        Allows new user to sign-up -- ID is autoincremented, requires username (str, unique) and a password (str).

    ##### /auth/login

        Allows existing user to login -- requires an existing username (str) and correct password (str).

    ##### /auth/logout

        Clears existing cookie, and redirects to main log-in page.


