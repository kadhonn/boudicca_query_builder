FROM docker.io/httpd:2.4
COPY ./dist/ /usr/local/apache2/htdocs/