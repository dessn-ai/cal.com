# You can use most Debian-based base images
FROM node:18.20.1-slim

# Install curl, git and other necessary dependencies

RUN apt-get update && apt-get install -y curl git sudo vim procps yarn build-essential libcairo2-dev libpango1.0-dev libjpeg-dev libgif-dev librsvg2-dev && apt-get clean && rm -rf /var/lib/apt/lists/*
# Set working directory
WORKDIR /home/user

# Copy the entire current directory first
COPY . /home/user

COPY dessn-deploy/compile_page.sh /compile_page.sh
RUN chmod +x /compile_page.sh

# Set final working directory back to root
WORKDIR /home/user

# Install bun globally
RUN npm install -g bun
RUN yarn
# RUN yarn setup

# Expose port 5173 for the Vite development server
EXPOSE 5173

# Start the Vite development server using the compile script with sudo privileges
RUN echo "user ALL=(ALL) NOPASSWD: ALL" >>/etc/sudoers
CMD ["/compile_page.sh"]
