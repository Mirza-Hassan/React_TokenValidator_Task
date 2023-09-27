# Token Generator and Validator App

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

![fs](https://github.com/Mirza-Hassan/React_TokenValidator_Task/assets/17096257/96525169-9d3e-4415-aedd-dabffbfd7919)

# Setup Instructions

1. Clone the repository
- Run `git clone https://github.com/Mirza-Hassan/React_TokenValidator_Task.git` 

2. Running the app

- Run `docker-compose up`

### Manual Installation
1. Navigate to the `frontend` directory and install dependencies: `npm install`

2. Start the development server: ` npm start`

3. In the `backend` directory, install dependencies: `npm install`

4. Launch the backend application: `node server.js`

# API Documentation

## Token API

### Generate Token

- **URL:** `http://localhost:8081/generate-token`
- **Method:** GET
- **Parameters:**
  - `availableDigits` (integer): Customizable available digits for token generation.
- **Response:** Generates a token.

### Validate Token

- **URL:** `http://localhost:8081/validate-token`
- **Method:** POST
- **Parameters:**
  - `token` (string): The token to be validated.
- **Response:** Validates the provided token.

# Screenshot:
![ss](https://github.com/Mirza-Hassan/React_TokenValidator_Task/assets/17096257/4ad49db7-e20b-4d09-b889-de03bea5aa90)

# APP FLOW
[demo.webm](https://github.com/Mirza-Hassan/React_TokenValidator_Task/assets/17096257/9d266e41-4209-4871-9e9a-165c1d04fb8c)


