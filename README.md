# Back-End

## Dependencies:

    bcryptjs, cookie-parser, cors, dotenv, express, helmet, jest, jsonwebtoken, knex, nodemon, sqlite3, supertest.


## Endpoints:


### /auth/

####    POST: /register

        Allows new user to sign-up -- ID is autoincremented, requires username (str, unique) and a password (str).

####    POST: /login

        Allows existing user to login -- requires an existing username (str) and correct password (str).

####    GET: /logout

        Clears existing cookie, and redirects to main log-in page.


### /sleep/

####    GET: / 

        Retrieves a list of sleep data.

####    POST: /

        Allows user to add new sleep data.

####    PUT: /:id

        Allows user to edit existing sleep data.

