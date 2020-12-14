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

create table if not exists wishlist( 
	id SERIAL primary key, 
	movieId varchar(500) references movies(id),
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

truncate moviedb.watchlist;

insert into moviedb.watchlist(title,customerid) values ('dfasdasdasd', '490001');

select * from movies; 
select watchlist.id, movies.id from moviedb.watchlist join moviedb.movies on movie.title = 'Tenet';

select movies.id,movies.title,movies.year,movies.director from moviedb.movies join moviedb.wishlist on movies.id = wishlist.movieid and wishlist.customerid = '490001';


delete from moviedb.wishlist where wishlist.movieid = 'tt0421974' and wishlist.customerid ='490001';

insert into moviedb.wishlist(movieid,customerid) values ('tt0421974','490001');
insert into moviedb.wishlist(movieid,customerid) values ('tt0378947','490001');
insert into moviedb.wishlist(movieid,customerid) values ('tt0278823','490001');
insert into moviedb.wishlist(movieid,customerid) values ('tt0313792','490001');
insert into moviedb.wishlist(movieid,customerid) values ('tt0344854','490001');
insert into moviedb.wishlist(movieid,customerid) values ('tt0496319','490001');
insert into moviedb.wishlist(movieid,customerid) values ('tt0352248','490001');
insert into moviedb.wishlist(movieid,customerid) values ('tt0181689','490001');
insert into moviedb.wishlist(movieid,customerid) values ('tt0264464','490001');
insert into moviedb.wishlist(movieid,customerid) values ('tt0346491','490001');
insert into moviedb.wishlist(movieid,customerid) values ('tt0338512','490001');
insert into moviedb.wishlist(movieid,customerid) values ('tt0481797','490001');
insert into moviedb.wishlist(movieid,customerid) values ('tt0399146','490001');
insert into moviedb.wishlist(movieid,customerid) values ('tt0266489','490001');
insert into moviedb.wishlist(movieid,customerid) values ('tt0496634','490001');

insert into moviedb.wishlist(movieid,customerid) values ('tt0278823','490002');
insert into moviedb.wishlist(movieid,customerid) values ('tt0416320','490002');
insert into moviedb.wishlist(movieid,customerid) values ('tt0133152','490002');
insert into moviedb.wishlist(movieid,customerid) values ('tt0486192','490002');
insert into moviedb.wishlist(movieid,customerid) values ('tt0379217','490002');
insert into moviedb.wishlist(movieid,customerid) values ('tt0275719','490002');
insert into moviedb.wishlist(movieid,customerid) values ('tt0248667','490002');
insert into moviedb.wishlist(movieid,customerid) values ('tt0289848','490002');
insert into moviedb.wishlist(movieid,customerid) values ('tt0166158','490002');
insert into moviedb.wishlist(movieid,customerid) values ('tt0412511','490002');
insert into moviedb.wishlist(movieid,customerid) values ('tt0354595','490002');
insert into moviedb.wishlist(movieid,customerid) values ('tt0370986','490002');
insert into moviedb.wishlist(movieid,customerid) values ('tt0313792','490002');
insert into moviedb.wishlist(movieid,customerid) values ('tt0220827','490002');


insert into moviedb.wishlist(movieid,customerid) values ('tt0310910','490003');
insert into moviedb.wishlist(movieid,customerid) values ('tt0256276','490003');
insert into moviedb.wishlist(movieid,customerid) values ('tt0255477','490003');
insert into moviedb.wishlist(movieid,customerid) values ('tt0269347','490003');
insert into moviedb.wishlist(movieid,customerid) values ('tt0284034','490003');
insert into moviedb.wishlist(movieid,customerid) values ('tt0399201','490003');
insert into moviedb.wishlist(movieid,customerid) values ('tt0475944','490003');
insert into moviedb.wishlist(movieid,customerid) values ('tt0390022','490003');
insert into moviedb.wishlist(movieid,customerid) values ('tt0284034','490003');
insert into moviedb.wishlist(movieid,customerid) values ('tt0444628','490003');
insert into moviedb.wishlist(movieid,customerid) values ('tt0255477','490003');
insert into moviedb.wishlist(movieid,customerid) values ('tt0332285','490003');
insert into moviedb.wishlist(movieid,customerid) values ('tt0284034','490003');
insert into moviedb.wishlist(movieid,customerid) values ('tt0399201','490003');
insert into moviedb.wishlist(movieid,customerid) values ('tt0414055','490003');
insert into moviedb.wishlist(movieid,customerid) values ('tt0390022','490003');


insert into moviedb.wishlist(movieid,customerid) values ('tt0407038','490004');
insert into moviedb.wishlist(movieid,customerid) values ('tt0374862','490004');
insert into moviedb.wishlist(movieid,customerid) values ('tt0335351','490004');
insert into moviedb.wishlist(movieid,customerid) values ('tt0415205','490004');
insert into moviedb.wishlist(movieid,customerid) values ('tt0415838','490004');
insert into moviedb.wishlist(movieid,customerid) values ('tt0275236','490004');
insert into moviedb.wishlist(movieid,customerid) values ('tt0292356','490004');
insert into moviedb.wishlist(movieid,customerid) values ('tt0482497','490004');
insert into moviedb.wishlist(movieid,customerid) values ('tt0497991','490004');
insert into moviedb.wishlist(movieid,customerid) values ('tt0140806','490004');
insert into moviedb.wishlist(movieid,customerid) values ('tt0388136','490004');
insert into moviedb.wishlist(movieid,customerid) values ('tt0359518','490004');
insert into moviedb.wishlist(movieid,customerid) values ('tt0315459','490004');
insert into moviedb.wishlist(movieid,customerid) values ('tt0439762','490004');
insert into moviedb.wishlist(movieid,customerid) values ('tt0454084','490004');
insert into moviedb.wishlist(movieid,customerid) values ('tt0247638','490004');


