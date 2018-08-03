FROM node:8.11.3-slim
# a parent image

WORKDIR /app
# set the work directory to app folder

ADD . /app
# copy current directory content into the container at /app

RUN npm install \
    && npm rebuild node-sass
# install any dependency in package.json

EXPOSE 3000
# make port 80 available to outside the container

ENV NAME Client
# define environment var

CMD ["npm", "start"]
# run app.py when container launched

