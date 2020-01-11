FROM python:latest

ENV PYTHONUNBUFFERED 1
RUN mkdir /code
WORKDIR /code

ADD ./code/requirements.txt /code/

RUN apt-get update
RUN apt-get install -y mariadb-client
RUN pip install -r requirements.txt

WORKDIR /code/sample
CMD ["gunicorn", "-b", "0.0.0.0:8000", "sample.wsgi"]