# Token Generator and Validator Web Application

Description

Build a web app that generates and validates tokens with a format of XXXX-XXXX-XXXX-XXXX, using user-defined digits. Users can create single tokens, validate them, and start/stop an infinite token generation loop while tracking statistics and valid tokens.

# Table of Contents

- [Pre Requisites](#pre-requisites)
- [Folder Structure](#folder-structure)
- [Setup Instructions](#setup-instructions)
- [API Documentation](#api-documentation)
- [Screenshot/Demo](#screenshot)

# Pre Requisites:

- Frontend: React.js
- Backend: Node.js
- Containerization: Docker
  
# Folder Structure

![FS](https://github.com/Mirza-Hassan/React_UserTable_Task/assets/17096257/88e2082f-d218-48d7-bac6-c5a538be5612)

# Installation

## Frontend
1. Navigate to the `frontend` directory using your terminal.

2. Run the following command to install the required dependencies:
```
npm install
```

3. Once the installation is complete, start the development server with:
```
npm start
```

## Backend
1. Open your terminal and navigate to the `backend` directory.

2. Build the backend project using the following command:
```
npm install
```

3. After a successful build, launch the backend application with:
```
node app.js
```
# API Documentation

This documentation outlines APIs:

- **Users API**
    - **Fetch User Information:**
        - **URL**: `https://private-e7f67d-users324.apiary-mock.com/users`
        - **Method**: GET
        - **Parameters**: 
            - `id` (integer): The unique identifier for the user.
            - `name` (string): The full name of the user.
            - `email` (string): The email address associated with the user.
            - `birthdate` (string): The date of birth of the user in the format YYYY-MM-DD.
            - `age` (integer): The age of the user.
        - **Response**: User details.            
            ```json
            {
                "id": 1,
                "name": "John Doe",
                "email": "johndoe@example.com",
                "birthdate": "1990-05-15",
                "age": 31
            }



# Screenshot:

# APP FLOW
[screencast-localhost_3000-2023.08.09-08_49_17.webm](https://github.com/Mirza-Hassan/vending_machine/assets/17096257/6f943db9-b07f-4220-b1ec-87aeca634e52)


