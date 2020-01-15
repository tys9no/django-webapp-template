FROM python:latest

ENV PYTHONUNBUFFERED 1
RUN mkdir /code
WORKDIR /code

ADD ./code/requirements.txt /code/

RUN apt-get update
RUN apt-get install -y mariadb-client
RUN pip install -r requirements.txt

WORKDIR /code/sample

COPY docker-entrypoint.sh /usr/bin/
RUN chmod 777 /usr/bin/docker-entrypoint.sh
ENTRYPOINT ["docker-entrypoint.sh"]

