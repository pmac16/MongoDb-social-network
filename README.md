# MongoDb-social-network

![JavaScript](https://img.shields.io/badge/JavaScript-ES6-green)
![node](https://img.shields.io/badge/node-14-green)
![expressjs](https://img.shields.io/badge/express-4-blue)
![MongoDB](https://img.shields.io/badge/MongoDB-8-blue)
![Mongoose](https://img.shields.io/badge/Mongoose-8-blue)


## User Story

`AS A social media start up <br>
I WANT an API for my social network that uses a NoSQL database <br>
SO THAT my website can handle large amounts of unstructured data`

## Description

When starting this applicaton, the Mongoose models are synced to the MongoDB database.
Through this application, a user is able to create a user, update a user, delete a user, get all users, and get one user. They are also able to create a thought, update a thought, delete a thought, get all thoughts, and get one thought. They are able to create a reaction to a thought and delete a reaction to a thought. Finally, they are also able to add a friend to a user and delete a friend.

## Table of Contents

  * [Installation](#installation)

  * [Database Setup](#database)

  * [Usage](#usage)

  * [Contribution](#contribution)

  * [Questions](#questions)

## Installation

First, install `Node.js 14` and `MongoDB` on your system. You will also need to create an account with MongoDB (you can create a free account.) 

Then clone this repository and navigate to the local folder via command line. Next install the necessary packages with `npm install` at the root of local repository. See respective documentation in the links below.

* [Node](https://nodejs.org/en/)

* [Express](https://docs.npmjs.com/cli/v7/commands/npm-install)

* [MongoDB](https://www.mongodb.com/)

* [MySQL](https://dev.mysql.com/)

* [Sequelize](https://www.npmjs.com/package/sequelize)

## Database Setup

In MySQL, create a database by the name of `mailflyer_db`. Then create a .env file at the root of your local repository and paste in the below text, replacing ***your_username*** and ***your_password*** with your MySQL username and password.

```
DB_NAME='mailflyer_db'
DB_USER='your_username'
DB_PW='your_password'
```

Now seed the database by running the following command:

```
node seeds/index
```

## Usage

Start the server using the following command at the root of your local repository:

```
npm start
```

Once there server is running, you can now access the application by pasting the following address in your web browser.

```
localhost:3001
```

On the landing page you can create your account, and now you are all set to start creating flyers to send to friends and family.

## Contribution 

  All contributions are welcome. Please visit the [issues](https://github.com/haydenkd/MailFlyer/issues) tab  to contribute.

 ## Questions

  If you have additional questions, please email us at priya.macpherson@gmail.com.

  