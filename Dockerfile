FROM ubuntu:latest

# Set the working directory in the image
WORKDIR /SERVER

# Copy the files from the host file system to the image file system
COPY . /SERVER/

# Install the necessary packages
RUN apt-get update && \
    apt-get install -y curl && \
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash && \
    source ~/.bashrc && \
    nvm install --lts && \
    nvm alias default 18.18.2 && \
    node -v npm -v && \
    npm install


# Set environment variables
ENV NAME World

# Run a command to start the application
CMD ["npm","run","dev"]
