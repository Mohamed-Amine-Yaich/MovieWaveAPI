<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>


# Welcome to Movie Wave Backend App

This project is a React Native Expo app that allows users to search for movies and view movie details. It uses a Context API for managing the global state, including authentication, movie details, and movie search. The app is structured using a clear and simple file-based navigation with Expo Router.

1. Clone the repository
   ```bash
   
   https://github.com/Mohamed-Amine-Yaich/MovieWaveAPI.git
   
   ```
   and
   
   ```bash
   
   cd MovieWaveAPI
   
   ```
   

2. Install dependencies

   ```bash
   
   yarn install
   
    ```
   or
   
   ```bash
   
   npm install
   
   ```
3. Create a .env file based on .env.example file
 
4. Start the app

   
   
   ```bash
   
   start:dev
   
   ```
   
## Features

1. Authentication Module
    Manages user login and signup.

2. Movie Module
    Supports CRUD operations for managing movies.

3. Favorite Movie Module
    Allows authenticated users to manage their favorite movies.

4. JWT Protection
    Protects movie and favorite routes ensuring only authenticated users can access them.


5. Input Validation (DTO)
    Validates input for auth and movie endpoints to ensure data integrity.



