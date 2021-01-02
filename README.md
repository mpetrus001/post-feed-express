# Post-Feed Backend

The backend for a fullstack post feed built with React, Typescript, and GraphQL. A running example can be seen at [Post-Feed](https://post-feed.petrusprojects.com).

## Description

The project is a feed of posts with a GraphQL API. A user can sign in using a username and password which generates a secure token. With that token/cookie, the home page will show the user's current upvotes and downvotes; votes can be changed by selecting the alternate arrow. A user can edit or delete their own posts by clicking the post title, and selecting edit post. The changes are reflected on the home page. The home page can be "infintely" scrolled by clicking load more on the bottom; this is achieved with cursor-pagination.

The backend is a GraphQL API Node app written in typescript using the Express server platform with the Apollog GraphQL library. User authentication is handled using Express-Session and setting cookies in the user's browser. Posts are persisted to a postgres database using a Repository pattern with TypeORM. Sessions are stored in a redis instance. Some features, including user registration and password reset have been disabled for security reasons.

A frontend using NextJS has been built; see [Post-Feed Frontend](https://github.com/mpetrus001/post-feed-nextjs) for more details.

The project started by completing the [Fullstack React GraphQL TypeScript Tutorial](https://youtu.be/I6ypD7qv3Z8) by Ben Awad. Completion of the tutorial resulted in an API server about 90% ready. Additional features were added to the server and the project was "dockerized" for deployment.

The project includes the follow technologies: TypeScript, NodeJS, PostgreSQL, TypeORM, GraphQL, TypeGraphQL, Redis, React, Next.js, Chakra, URQL, Docker, and Docker-Compose.

## Getting Started

### Developing

1. Create a .env.dev file. Set up environment variables using .env.sample as a guide.
1. Start postgres and redis. Adminer can be used to troubleshoot during development.

```bash
$ docker-compose -f docker-compose.dev.yml up
```

1. Run typescript in watch mode to compile files to the ./dist directory.

```bash
$ yarn watch
```

1. Run the development server. Any changes will auto-reload the server.

```bash
$ yarn dev
```

1. Navigate to http://localhost:4000/api/graphql to reach the GrahpQL playground.

### Deploying

1. Clone the repo and run `yarn install --production` to get the dependencies.
1. Run `tsc` to compile typescript to the ./dist directory.
1. Build the container image with Docker.

```bash
$ docker build -t <prefix>/post-feed-express:<tag> .
```

1. Create a .env.local file. Set up environment variables using .env.sample as a guide.
1. Start up the app.

```bash
$ docker-compose up
```

1. Point the frontend to http://localhost:4000/api/graphql to access the GrahpQL endpoint.

For me personally, I build the image locally, then output it to a .tar file and send the file to a virtual server. Once there, I load the .tar into an image, and start up the app.

```bash
$ docker build -t <prefix>/post-feed-express:<tag> .
$ docker save -o ./<file-name>.tar <prefix>/post-feed-express:<tag>
$ rsync -avzh ./<file-name>.tar <user>@<host>:<target-directory>
$ docker load -i ./<file-name>.tar
```

## License

This project is licensed under the MIT License - see the LICENSE.md file for details

## Acknowledgements

Primarily based on the [Fullstack React GraphQL TypeScript Tutorial](https://youtu.be/I6ypD7qv3Z8) by Ben Awad. An excellent introduction to building a frontend and backend app using NextJS, Apollo Graphql, and TypeORM.
