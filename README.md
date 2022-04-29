# VIP Manager

This is an [OnDeck](https://ondeck.com/) assessment project.

## Project set up

- Install [Node.Js](https://nodejs.dev/learn/how-to-install-nodejs) if not intalled.

For Ubuntu:

```bash
 sudo apt update
 sudo apt install nodejs npm
 node -v # confirm that Node.Js install was successful
 npm -v # confirm that npm install was successful
```

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

- To change into the project run `cd ondeck`

- Run `npm install`

- Run `node mailer/email.js`

- Open another terminal and run `npm run build-start` to build and start the application. Run `npm start` on subsequent start of the application.

I understand that the set up could be automated, I intend to that when I am less busy.
