# Use an official Node.js runtime as a parent image
FROM node:18-alpine

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of your application's source code
COPY . .

# Expose the port your app will run on. Cloud Run expects 8080 by default.
ENV PORT 8080
EXPOSE $PORT

# Define the command to run your app
CMD ["npm", "start"]
