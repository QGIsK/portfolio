# MEVN Stack template

A Simple template mevn stack template to speed up development

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What you need to get a local instance running

```
MongoDB
```

```
Node ^10.15.3
```

### Installing

A step by step series of examples that tell you how to get a development env running

Start by cloning the repository

```
git clone https://github.com/QGIsK/project-setup-auth
```

Go into your new directory and Install npm packages

```
cd mevn-auth-template && npm i
```

While your packages are installing, Copy the .env-example and change the name to .env

Then open your new .env file and fill in your details

Once you've finished installing yourn packages and have filled in your details, You're ready to start coding

Run server(express)

```
npm run server //localhost:3000
```

Run Client side (vue)

```
npm run client //localhost:8080
```

## Middleware

I've also included middleware for EnsureAuthenticated && checkAuth

## Testing on postman

Login route

```
POST http://localhost:3000/api/auth/login

Body - x-www-form-urlencoded

email example@gmail.com
password 123123
```

Register Route

```
POST http://localhost:3000/api/auth/register

Body - x-www-form-urlencoded

name example
email example@gmail.com
password 123123
password2 123123
```

```
Both of these routes will return a jwt access token and a user object
```

## Built With

- [Nodejs](https://nodejs.org/en/) - Javascript runtime
- [Express](https://expressjs.com/) - The web framework used
- [MongoDB](https://www.mongodb.com/) - Database
- [Vue](https://vuejs.org/) - Front end framework

## Authors

- **Demian qgisk** - [qgisk](https://github.com/qgisk)

See also the list of [contributors](https://github.com/qgisk/mevn-auth-template/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
