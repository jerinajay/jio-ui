FROM node:18.3.0-alpine

COPY . /src

WORKDIR /src

RUN apk update && apk upgrade && apk add --no-cache bash git openssh

RUN npm i

ENV PORT=3500

EXPOSE ${PORT}

ENTRYPOINT ["sh", "start.sh"]

CMD ["sh", "start.sh"]
