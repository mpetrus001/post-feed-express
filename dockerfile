# docker build -t mpetrus/post-feed-express:1.0.0 .
#
# docker save -o ~/projects/images/tm-nestjs.tar mpetrus/post-feed-express:1.0.0

FROM node:14-alpine

ENV NODE_ENV=production

WORKDIR /app

COPY ["./node_modules", "./node_modules"]
COPY ["package.json", "./"]
COPY ["./dist", "./dist"]

EXPOSE 4000

CMD ["node", "dist/index.js"]
