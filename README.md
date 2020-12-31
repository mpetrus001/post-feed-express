# Post-Feed Backend

The backend for a fullstack post feed built with React, Typescript, and GraphQL. See the frontend for the project at [Post-Feed Frontend](https://github.com/mpetrus001/post-feed-nextjs).

## Description

Following along with Ben Awad on a fullstack project course that teaches you how to build a backend and frontend from scratch then deploy it.

Includes the follow technologies:

- TypeScript
- NodeJS
- PostgreSQL
- MikroORM/TypeORM
- GraphQL
- TypeGraphQL
- Redis
- React
- Next.js
- Chakra
- URQL/Apollo

A link to the 14 hour video is here [Fullstack React GraphQL TypeScript Tutorial](https://youtu.be/I6ypD7qv3Z8).

## Getting Started

### Developing

1. Start the database

```bash
$ docker-compose -f docker-compose.dev.yml up
```

1. Run typescript in watch mode to compile files to dist/

```bash
$ yarn watch
```

1. Run the server with auto-reload on file save

```bash
$ yarn dev
```

1. Navigate to http://localhost:4000/api/graphql to reach the GrahpQL playground

### Deploying

1. Make sure to run tsc to compile the typescript to the dist/ folder
1. Build the container image with Docker

```bash
$ docker build -t <prefix>/post-feed-express:<tag> .
```

1. Make sure the environment variables are correct in .env
1. Start up the app

```bash
$ docker-compose up
```

1. Point the frontend to http://localhost:4000/api/graphql to access GrahpQL

For me personally, I build the image locally, then output it to a .tar file and send the file to a virtual server. Once there, I load the .tar into an image, and start up the app.

```bash
$ docker build -t <prefix>/post-feed-express:<tag> .
$ docker save -o ./<file-name>.tar <prefix>/post-feed-express:<tag>
$ rsync -avzh ./<file-name>.tar <user>@<host>:<target-directory>
$ docker load -i ./<file-name>.tar
```

## License

This project is licensed under the MIT License - see the LICENSE.md file for details
