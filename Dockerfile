#build
FROM node:alpine
RUN apk update && \
    apk add \
        git python2 build-base
RUN mkdir /meshviewer
WORKDIR /meshviewer
RUN git clone https://github.com/ffrgb/meshviewer.git ./
RUN npm i node-gyp gulp gulp-cli --global && \
    yarn install
ADD config.js config.js
RUN gulp

#run
FROM nginx:alpine
COPY --from=0 /meshviewer/build /usr/share/nginx/html