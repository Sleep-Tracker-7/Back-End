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

####    GET:
        
        / 

        Retrieves a list of sleep data.

        /:id 

        Retrieves all sleep data for particular user.

        /:id/mood_score

        Retrieves an average score based on all sleep data entries.

        /:id/hours

        Retrieves total hours spent


####    POST:

        /

        Allows user to add new sleep data.
        _Fields:_
            id (autoincrement),
            user_id (foreign key),
            start (timestamp, auto-generated upon sending),
            end (timestamp),
            hours (float),
            score_wake (float),
            score_day (float),
            score_night (float)

####    PUT:

        /:id

        Allows user to edit existing sleep data.

####    DEL:

        /:id

        Allows user to delete sleep data entry.