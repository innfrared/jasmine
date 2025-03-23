# Use official Node image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy all source code
COPY . .

# Build TypeScript (if you're using it)
RUN npm run build

# Expose the port your app runs on
EXPOSE 5001

RUN echo "Listing /app contents:" && ls -la && echo "Listing /app/dist:" && ls -la dist

# Start the app
CMD ["node", "dist/index.js"]
