# Template User Auth React and Firebase

A template for implementing firebase authentication in React

## Development

- clone the repo and `cd` in to the folder
- run `npm install`
- copy `.env.example` and rename to `.env`
- add firebase credentials to `.env`
- start the dev server with `npm run dev` command

## General notes regarding firebase

- If you are using the realtime db and it is provisioned in a region different from the default US region you will have to provide the field `databaseURL` to the firebase config. The URL can be copied from the console.
