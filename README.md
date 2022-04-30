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
