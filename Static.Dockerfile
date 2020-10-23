# Build Vue
FROM node:14.7.0-alpine3.10 as frontend_static_builder
WORKDIR /app
COPY frontend ./frontend
WORKDIR frontend
ENV PATH /app/node_modules/.bin:$PATH
RUN npm install && npm run build


# Collect Django static files
FROM python:3.8.5 as django_static_builder
WORKDIR /app
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1
COPY Pipfile Pipfile.lock ./
RUN pip install pipenv  && pipenv install --system
COPY src ./
# Collect static files for the frontend container to serve
RUN python manage.py collectstatic --no-input


# Serve static files with nginx
FROM nginx:1.19.2-alpine
COPY --from=django_static_builder /app/static/ /var/www/html/static
COPY --from=frontend_static_builder /app/bundle/ /var/www/html/static/vue
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d
RUN chown -R nginx:nginx /var/www/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
