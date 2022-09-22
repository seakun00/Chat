FROM php:8.1-fpm

RUN docker-php-ext-install pdo_mysql

RUN curl -sS https://getcomposer.org/installer | php
RUN mv composer.phar /usr/local/bin/composer

RUN curl -fsSL https://deb.nodesource.com/setup_18.x | bash

RUN apt-get update
RUN apt-get install -y git nodejs
