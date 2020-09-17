Readme
Steps to Run the App: -

1. Clone the repository

2. There are two folders one with name “find-my-events” and other with
“jsonserver”

3. . After cloning navigate to “jsonserver” and run command
### `npm install`
### `npm update`
### `npm run json:server`

4. If everything goes fine our server will run on “localhost:3000”

5. Now we have to navigate in “find-my-events” folder, open terminal and run command
### `npm install`
### `npm update`
### `npm run start` 

**(Since our server is running on 3000, so it will ask to run our app on another port) click yes Most probably development server will start on “localhost:3001”**

# App has all these features:-
1. App is responsive
2. There is only one source of truth for state management using Reducer
3. App have the functionalities for users to create, edit, delete, view and search the events.

# Following tools has been used:-
1. React
2. Redux
3. Redux Thunk for async flow
4. JSON server created using json-server npm package
5. React Router
6. Bootstrap