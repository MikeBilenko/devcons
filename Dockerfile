# Stage 1: Build the React application
FROM node:14 as build

WORKDIR /app

# Copy package.json and package-lock.json files
COPY package.json ./
COPY package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . ./

# Build the React application
RUN npm run build

CMD ["npm", "start"]