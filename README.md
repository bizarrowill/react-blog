## About

The front-end React app will auto-reload as it's updated via webpack dev server, and the backend Express app will auto-reload independently with nodemon.

## Starting the app locally

Start by installing front and backend dependencies. While in this directory, run the following commands:

```
yarn install
cd client
yarn install
cd ..
``

After both installations complete, run the following command in your terminal:
```

yarn start

```
That's it, your app should be running on <http://localhost:3000>. The Express server should intercept any AJAX requests from the client.
```
