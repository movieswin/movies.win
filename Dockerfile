FROM ruby:3.2.2

RUN apt-get update -qq \
&& apt-get install -y nodejs default-mysql-client

ADD . /opt/movies.win
WORKDIR /opt/movies.win
RUN bundle install

EXPOSE 3000

CMD ["bash"]
