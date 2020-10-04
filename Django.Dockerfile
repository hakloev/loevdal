FROM python:3.8.5

WORKDIR /app

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

COPY Pipfile Pipfile.lock ./
RUN pip install pipenv  && pipenv install --system
COPY src ./

COPY docker-entrypoint.sh /usr/local/bin/

EXPOSE 8080
ENTRYPOINT [ "docker-entrypoint.sh" ]

