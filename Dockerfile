# Works: Copies the project into a container, builds and runs. Accessible.
FROM node:alpine

WORKDIR /app

# Ignores files in .dockerignore
COPY . ./
RUN yarn

EXPOSE 3000

ENV HOST=0.0.0.0
ENV PORT=3000

RUN yarn generate

CMD [ "yarn", "start" ]

# docker build -t bdc .
# To test: docker run -dp 3000:3000 bdc

# Info: K8s env vars override the docker image env vars.--

# Make a container that serves /dist
# Run it on k8s
#FROM node:14
#WORKDIR /app
#COPY dist ./
#EXPOSE 3000
#CMD yarn start


#
#FROM node:14
#WORKDIR /app
#
##EXPOSE 3000
#CMD [ "yarn", "dev" ]
# docker run -dp 3000:3000 -w /app -v "$(pwd):/app" node:14 sh -c "yarn install && yarn dev"
# this ^ doesn't allow access to the localhost site; but looks fine.

#docker run -p 3000:3000 `
#>>     -w /app -v "$(pwd):/app" `
#>>     node:14-alpine `
#>>     sh -c "yarn install && yarn dev"

#
#FROM node:14
#
#WORKDIR /app
## -v "$(pwd):/app"
#
#EXPOSE 3000
#
#ENV HOST=0.0.0.0
#ENV PORT=3000
#
#CMD [ "yarn", "dev" ]

# docker run -dp 3000:3000 -w /app -v "$(pwd):/app" node:14 sh -c "yarn dev"
# docker run -dp 3000:3000 -w /app -v "$(pwd):/app" --env HOST=0.0.0.0 --env PORT=3000 node:14 sh -c "yarn install && yarn dev"
# Error: You are executing windows node modules inside a linux machine.
# Fix: You must install the modules inside the machine (don't copy) and THEN run dev.


## Works: Copies, installs, and runs in dev mode. Accessible.
#FROM node:14
#
#WORKDIR /usr/src/app
#
#COPY . ./
#RUN yarn
#
#EXPOSE 3000
#
#ENV HOST=0.0.0.0
#ENV PORT=3000
#
#CMD [ "yarn", "dev" ]


