# MovieClub

MovieClub is a full-stack application representing a web discussion forum where users can:
- Make a post
- Delete a post
- Update a post
- View all posts
- Write a comment on a post
- Delete a comment on a post
- View all comments on a post 

The application consists of three main parts: 
1. Database (Postgres)
2. Backend server (Spring)
3. Fronend development server (React)

## Prerequisites

### `docker and docker-compose`
### `nodejs`

## How to start the database

In the root folder, run

### `docker-compose up`

## How to start the backend server

Open the root folder and run

### `./gradlew bootRun`

## How to start the frontend development server

The frontend application is in the directory frontend. From there, run

### `npm install`

to install all the dependencies needed for the project.

Then start the frontend application by running

### `npm start`

Which runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

# How to navigate inside MovieClub

## Authentication

When you have successfully started the application, you will see the Login page.
You will need to fill in the registration form when you are entering the forum for the first time. After logging out, next time, simply, re-enter your login details (your data will be stored, unless you quit the server). 

## Homepage

Once you have created your account, the application will redirect you to the home page. 
The home page consists of a navigation bar and an information about MovieClub itself. 
Use navigation or press "Read posts" button to see the Posts page. 

## Posts Page

On this page you can create a post and then either delete it or edit it (the edit function is available after pressing "Read more" button which redirects you to the Editor Page). These functionalities are available only for the author of the post. Users can comment on a post, however only users themselves can delete their comments. 

