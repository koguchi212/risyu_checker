FROM ruby:latest

ARG RUBYGEMS_VERSION=3.4.6

RUN mkdir /api

WORKDIR /api

COPY Gemfile /api/Gemfile

COPY Gemfile.lock /api/Gemfile.lock

RUN bundle install

COPY . /api

RUN apt-get update -qq && apt-get install -y default-mysql-client

CMD ["rails", "server", "-b", "0.0.0.0"]
