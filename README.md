# tutorial-app

This repository is the result of a tutorial guiding you through setting up a basic web application using Yarn's workspace, TypeScript, esbuild, Express, and React. It also features containerization with Docker, and Continuous Integrations using GitHub Actions to publish Docker images and deploy to Heroku.

A demo of the application is available here: http://hto-tutorial-app.herokuapp.com/.

**Links to articles:**

1. [Setting up the project (part 1)](https://halftheopposite.dev/post/app-yarn-typescript-esbuild-part-1)
2. [Adding code (part 2)](https://halftheopposite.dev/post/app-yarn-typescript-esbuild-part-2)
3. [Building the app (part 3)](https://halftheopposite.dev/post/app-yarn-typescript-esbuild-part-3)
4. [Going further (advanced)](https://halftheopposite.dev/post/app-yarn-typescript-esbuild-part-going-further)

## Commands

A few commands for this project:

- `yarn build` to build the whole application.
- `yarn serve` to launch an Express server serving the React application.
- `yarn docker` to create a Docker image.
