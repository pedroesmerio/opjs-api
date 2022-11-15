# REAT API For the OPJS project
This project is an API whitch was made to bein used on the OPJS (O Poder do JavaScript) to serve the web and mobile aplication.

### Requirements

## Clone repository on your machine
    git clone https://github.com/pedroesmerio/opjs-api.git

## Install the app
    yarn install
ou

    npm install

Note: You'll gonna need a mongodb running on you machine or a docker container.

If have docker installed on your mahcine and choose to use it. You cold junt run:

    docker ps
to see if there's a container running

    docker run --name mongo -p 27017:20017 -d mongo:latest
to create a container running a mongodb instance.

## Run the project

    yarn dev

or

    npm run dev

