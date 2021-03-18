FROM node:14.15.5-alpine

WORKDIR /usr/src/app

# Install dependencies early so that if some files in our app
# change, Docker won't have to download the dependencies again,
# and instead will start from the next step ("COPY . .").
COPY ./package.json .
COPY ./yarn.lock .
COPY ./packages/app/package.json ./packages/app/
COPY ./packages/common/package.json ./packages/common/
COPY ./packages/server/package.json ./packages/server/
RUN yarn

# Copy all files of our app (except files specified in the .gitignore)
COPY . .

# Build app
RUN yarn build

# Port
EXPOSE 3000

# Serve
CMD [ "yarn", "serve" ]
