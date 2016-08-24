#My Tic Tac Toe Game
Check it out at: https://alex-braun.github.io/tic-tac-toe-project

Please see TicTacToeMain.png and TickTackToePhone.png for project wireframes.

There are two sets of JS files, one for authentication and one for game actions.

Here are my user stories that I believe we would expect for a tic-tac-toe game:

- As a user, I would like to be able to switch between myself and
          another person to play the game.
        - I want to have the game keep track of my scores during each session.
        - I want to have a working game board that tells me the score.
        - As a user, I want to have my user name saved as well as my current
          game history.
        - I want there to be a notification when somebody wins.
        - As the administrator, I want this game to hold my user's scores in
        a database that can be accessed whenever the person is signed in.
        - I want there to be an option for the user's password to be updated if
          the at their request.

- Please see a list and summarization of the files for this game:

--Universal to both authentication and game actions:
        - app.js
          - which simply holds the api URL.
        - index.js
          - final step to javaScript communication.
        - index.html
          - This holds all html markup for the game.
        - index.scss
        - This stores all of my styling for the game.

      -For authentication:

          -  Takes form information for the authentication process and allows
          divs to be selected individually for the tic-tac-toe game board.
        - auth/events.js
          - Holds event handler functions for the authentication process
          and sends that information to getFormFields.js, which turns
          that data into objects.
          - Each new object is sent to api.js, which sends an ajax request
          to the server, and a success or failure notice will also set that as
          the new user, or delete a user, or log an error.
        - auth/api.js
          - creates the JSON string and sends ajax requests.

    -For game actions:

        - gameEvents.js
          - event handlers
          - sends to ajax request->success/failure functions->api
        - gameUi.js
          - this holds the responses from ajax requests.
        - gameApi.js
          - again sent to getFormFields which turns this data into objects.
          The game choices need to be transformed into JSON, so an ajax request
          will be created.
          This process will update the 'cells' array in the JSON object.
        - game.js
          - This file stores all game logic.

    Please see more in the coming days as this project is not in its finished state!
