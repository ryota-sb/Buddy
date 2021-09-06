FROM ruby:2.5

RUN mkdir /app
WORKDIR /app

RUN apt-get update -qq && \
    apt-get install -y build-essential \
    libpq-dev \
    sudo

COPY Gemfile /app/Gemfile
COPY Gemfile.lock /app/Gemfile.lock

RUN bundle install

COPY . /app

COPY entrypoint.sh /usr/bin/
RUN chmod +x /usr/bin/entrypoint.sh
ENTRYPOINT ["entrypoint.sh"]