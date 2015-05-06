Peer Node Module Challenge - 01
Module Madness

Welcome to your Node Module Peer challenge!

In this challenge, you will need to spin up a new project (much like we did in lecture). In this, the usual suspects should be there, Express, a .gitignore file, a Procfile, package.json, and node_modules. Additionally, you will need to create an app.js, and three modules.

The first module will export a function that returns a random number after taking in a min and max value as arguments(hint: use the function that we used in previous assignments).

The second module should accept a number and convert it to a USD value (Hint: you will want to Google examples of this. I found a couple reasonable examples of this in a simple 5 minute search).

The third module should require the other two modules. It should have two function exports. The first function export should be the return of the first module being passed into the second module. The other function should be a simple text return that says “Account balance: \n”.

Finally, in the app.js, do the standard stuff. Bring in Express, require what else is needed, set the port, set up a get and listen event. The get event should use the third module, first calling in the function of it that displays the ‘account balance’ text, and then the call the second function which returns a converted random dollar amount.

Deploy to Heroku update the Google form with the link to you deployed site.

Hard Mode

Create a public personal repo and push your code to that repo as well as the Heroku repo.

Pro Mode

Make regular commits everytime you write a stable upgrade to your application (I will be able to see your commit logs to validate)