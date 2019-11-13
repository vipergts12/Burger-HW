* Folder: `07-ORM-To-Sequelize/Unsolved`
​
* INSTRUCTIONS:
​
  1) Create a new local MYSQL database called 'todolist', but don't create any tables.
  2) Notice how there are no config or models folders?
  
   
  3) In terminal, run `npm i`
   
  4) In terminal, run `npm i --save-dev sequelize-cli`
   
  5) In terminal, run `npm i -g npx`  (You'll only have to do this once, ever, on this machine).
    More on npx: https://github.com/npm/npx  https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b
   
  6) In terminal, type in the following commands (hit enter after each): 
     1) `npx sequelize init:models`
     2) `npx sequelize init:config`
​
​
  7)  Step 6 should have created a config and a models folder for us. Navigate to the config folder, open `config.json`, and modify as per instructor's instructions to use .env file.
​
  8)  Navigate to the models folder and create a new file called `todo.js`. Along with instructor, create a Todo model with columns for "text" (DataTypes.STRING), and "complete" (DataTypes.BOOLEAN).
​
  9)  Navigate to the server.js file and require all of our models by requiring the models folder. Save this to a variable and name it "db".
​
  10) Sync the models by running db.sequelize.sync() after we start the express server.
​
  11) In your terminal, run `npm run watch`. Check MYSQL Workbench to see if a Todos table was created.  If so, you were successful. If not, check your terminal for any errors.
   
  12)  Now let's complete the `routes/api-routes.js` file to make the app work.
  13)  If you have all routes done, (GET, PUT, POST, DELETE), add validation to your todo model so that:
    1) text must be min 1 char long, max 140
    2) text cannot be null
    3) complete defaults to false if not passed
​
  14) Modify your api routes to send an error msg back to client if validation fails
  
  15) Modify client js and HTML to display validation msg error to user.
Collapse




