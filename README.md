# PerScholas - Capstone

The purpose of this project is to display my understanding of the MERN Stack. This project is a full-stack web application.

## Table of Contents

- [Objectives](#objectives)
- [Dependencies](#Dependencies)
- [Usage](#usage)

## Objectives

- Create a full-stack web application using MongoDB, Express, React, and Node (MERN).
- The content, context, and objective of your application is entirely up to you.

## Dependencies

### Frontend

- First install either create-react-app or vite:

    npx create-react-app <app-name>

    npm create vite@latest <app-name>

- Install React Router and React-Router-Dom

    npm install react-router

    npm install react-router-dom

- Create a start script inside of your package.json so you can start the server easily

    "start": "npm run dev"

### Backend

- First init:

    npm init

- Install Nodemon:

    npm i nodemon --save-dev

- Install Express:

    npm i express

## Usage

### API's Used

- [PokeAPI] (https://pokeapi.co/) Unofficial Pokemon API

### Functionality

#### Logging In
- First, users are required to head over to the login page, so that they\n
    can log in to access the features of this web application.

#### Choose Your Pokemon
- After logging in, users are required to choose their pokemon. If the\n
    user does not like their current selection, they may opt to either\n
    change their pokemon or remove their current pokemon from party.\n
    Once a user is satisfied with their selection, they may head over\n
    to battle.

#### Battle
- (Feature not yet implemented) The intended goal of this section\n
    is to allow users to do a mock pokemon battle against an npc.\n
    Menu/styling complete, but functionality for attacks still\n
    need to be implemented.