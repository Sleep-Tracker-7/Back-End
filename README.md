# Back-End

## Dependencies:

    bcryptjs, cookie-parser, cors, dotenv, express, helmet, jest, jsonwebtoken, knex, nodemon, sqlite3, supertest.


## Endpoints:

    */auth/register*

    _Allows new user to sign-up -- ID is autoincremented, requires username (str, unique) and a password (str)._ 

    */auth/login*

    _Allows existing user to login -- requires an existing username (str) and correct password (str)._

    */auth/logout*

    _Clears existing cookie, and redirects to main log-in page._


