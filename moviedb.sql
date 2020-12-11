create schema moviedb;

create table if not exists movies (
	id varchar(10) primary key,
	title varchar(500) not null,
	year integer not null,
	director varchar(500) not null
);

create table if not exists posters (
	id SERIAL primary key,
	posterUrl varchar(500) not null
);

create table if not exists posters_in_movies (
	poster_id INTEGER references posters(id),
	movie_id varchar(10) references movies(id)
);

create table if not exists stars (
	id varchar(500) primary key,
	name varchar(500) not null,
	birthYear integer
);

create table if not exists stars_in_movies (
	star_id varchar(500) references stars(id),
	movie_id varchar(500) references movies(id)
);

create table if not exists genres (
	id SERIAL primary key,
	name varchar(500) not null
);

create table if not exists genres_in_movies(
	genreId integer references genres(id),
	movieId varchar(500) references movies(id)
);

create table if not exists creditcards (
	id varchar(500) primary key,
	firstName varchar(500) not null,
	lastName varchar(500) not null,
	expiration date not null
);

create table if not exists customers(
	id SERIAL primary key,
	firstName varchar(500) not null,
	lastName varchar(500) not null,
	ccId varchar(200) references creditcards(id),
	email varchar(500) not null,
	address varchar(500) not null,
	password varchar(5000) not null
);

create table if not exists sales(
	id SERIAL primary key, 
	customerId INTEGER references customers(id),
	movieId varchar(500) references movies(id),
	saleDate date not null
);

create table if not exists ratings (  
	movieId varchar(500) references movies(id) primary key,
	ratings float4 not null, 
	numVotes integer not null
);

create table if not exists watchlist( 
	id SERIAL primary key, 
	title varchar(500) not null, 
	customerId INTEGER references customers(id)
);

create table if not exists movies_in_watchlist(
	listId INTEGER references watchlist(id),
	movieId varchar(500) references movies(id)
);

create table if not exists collection (
	id SERIAL primary key, 
	title varchar(500) not null
);

create table if not exists movies_in_collection (
	collectionId INTEGER references collection(id),
	movieId varchar(500) references movies(id),
	rank integer
);

insert into moviedb.watchlist(title,customerid) values ('dfasdasdasd', '490001');
