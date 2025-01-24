Project Setup and Run Instructions

This project requires Node.js (version 18.x), Angular (version 15.x), and json-server to run. Follow the instructions below to set up the environment and run the application.

1. Install Node.js (version 18.x)

To install Node.js, go to the official Node.js website (https://nodejs.org/en/download/) and download the latest stable version (version 18.x). After installing Node.js, you can verify the version using the following command:

node -v

Make sure the version is 18.x.x.

2. Install Angular CLI (version 15.x)

Once Node.js is installed, you can install the Angular CLI globally by running:

npm install -g @angular/cli@15

To verify the installation, check the version of Angular CLI:

ng version

Ensure it shows Angular CLI version 15.x.x.

3. Clone the repository

If you haven't already cloned the repository, run the following:

git clone <repository-url>
cd <repository-folder>

4. Install Dependencies

After cloning the project, install the project dependencies using the following command:

npm install

This will install all required dependencies from the package.json file.

5. Run the JSON Server

In the project directory, you need to run json-server to simulate a backend API. Use the following command to start the json-server:

npx json-server --watch db.json --port 3000

This will start the mock API on port 3000, and the server will watch for any changes in db.json.

6. Start the Angular Application

Now, you can start the Angular application by running:

ng serve

By default, the Angular application will run on http://localhost:4200.

Summary of Commands

1. Install Node.js (version 18.x)
2. Install Angular CLI (version 15.x)
3. Clone the repository
4. Run npm install to install dependencies
5. Run the JSON server: npx json-server --watch db.json --port 3000
6. Run the Angular application: ng serve

Access the Application

- Open your browser and go to http://localhost:4200 to view the Angular application.
- The mock API will be accessible at http://localhost:3000.

---

If you face any issues, please make sure to follow each step carefully and ensure the required versions are installed.
