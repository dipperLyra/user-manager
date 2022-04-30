# VIP Manager

This is an [OnDeck](https://ondeck.com/) assessment project. Even though for me it is a first experience with [Next.Js](https://nextjs.org)

## Project set up

- Install [Node.Js](https://nodejs.dev/learn/how-to-install-nodejs) if not installed.

For [Ubuntu](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-20-04)

- Install MySQL if not installed. Create a database using any database server of your choice. Create a new user and password if you don't want to an existing one. Note that the application was tested on [MySQL](https://dev.mysql.com/doc/mysql-getting-started/en/).

Create a new database in MySQL:

```bash
  mysql -u username -p  # login into a mysql user account
```

```sql
  CREATE DATABASE vip_manager;
```

- Install [Redis](https://docs.redis.com/latest/rs/installing-upgrading/) which will be used for the messaging.

Install redis on Ubuntu:

```bash
  sudo add-apt-repository ppa:redislabs/redis
  sudo apt update
  sudo apt install redis-server
  redis-server -v # confirm that redis install was successful
```

- Clone the repository.

- To change into the project run `cd user-manager`

- Run `npm install`

- Make a new copy of .env.sample and change the name to .env Run `cp .env.sample .env`

- Edit the content of .env to match your system properties. To avoid any incidence that could lead to a Civil War I would not give example with any. Even though my family and I would go with vim 🙅🏾‍♂️

- Run `node mailer/email.js`

- Open another terminal and run `npm run build-start` to build and start the application. Although subsequently to start the application you would only need to run `npm start`. Except you have pulled a new version from the git repository and want to rebuild the project.

I understand that the set up could be automated, I intend to that when I am less busy.

## Technical Details

Thank you for contacting Echelon Consulting firm to assist you with your problem.

This project will attempt to profer a robust solution for OnDeck to manage its network of VIPs.

Some technical tools used:

Programming Language: JavaScript
Framework: Next.Js
Database: MySQL
SQL Framework: Sequelise
Messaging platform: Redis

Why I chose JavaScript

My decision to use JavaScript is primarily because Keith had mentioned during our chat that the bulk of OnDeck's codebase is built on it. Therefore, I reckoned it will be a good decision to build with it.

Why did I choose Next.Js
Why use a framework? A framework would make it possible to build the core of the application very fast while the scaffolding is handled by the framework.
Keith also mentioned that the company's frontend is mainly built on React. Therefore, I needed a framework that is based on React.
Searching a bit with Google, I saw a lot of answers suggesting Next.Js

I poked around and decided to stick with Next.Js especially after seeing that it is also configurable to a great extent.
Besides getting a fullstack framework that sort of just worked felt like luxury.

Why I chose MySQL, Sequelise and Redis.

For database I could have gone with PostgreSQL and be comfortable but I went with MySQL. I think I am more comfortable with MySQL.

I decided to use an ORM like Sequelise to make it easier to swap out database servers without changing application code.
All one would have to do is to pass the right configuration details in the .env file.

Redis was an easy choice for Pub/Sub because I thought I would eventually use the same Redis server for caching as well.
I did not get the time to implement caching yet.

In order for the mailing system to be more robust than what it is currently, I decided to use Messaging (pub/sub) architecture for it.

There is an independent Node.Js application that handles the messaging (email) system.
This email service subscribes (listens) to a Redis Channel that has been configured.

Whenever a new user is entered, the application would publish a message to the configured Redis channel for email.
The message object published includes three key-value pairs: email, name and token.

Consuming the message means that that email service would construct an email with the message object. It would also send an email to the email address in the message object consumed.

### Project architecture

![Alt "project architecture"](other/ondeck-architecture.png "project architecture")

WIP...
