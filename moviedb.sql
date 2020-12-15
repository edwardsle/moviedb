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


select movies.id,movies.title,movies.year,movies.director from moviedb.movies 
join moviedb.stars_in_movies 
on stars_in_movies.movie_id = movies.id  
where stars_in_movies.star_id = 'nm0854847';

select movies.id,movies.title,movies.year,movies.director from moviedb.movies 
join moviedb.genres_in_movies 
on genres_in_movies.movieid = movies.id  
where genres_in_movies.genreid = '2';


select stars.id from moviedb.stars where stars.name = 'Fred Astaire';

insert into moviedb.collection (title) values ('Best Movies ');
insert into moviedb.collection (title) values ('Most Popular');
insert into moviedb.collection (title) values ('Most Popular Tv Shows');

select movies.id,movies.title,movies.year,movies.director,movies_in_collection.rank from moviedb.movies 
join moviedb.movies_in_collection
on movies_in_collection.movieid = movies.id  
where movies_in_collection.collectionid = '1';

select movies.id,movies.title,movies.year,movies.director,movies_in_collection.rank
from moviedb.movies 
inner join moviedb.movies_in_collection 
on movies_in_collection.movieid = movies.id 
where movies_in_collection.collectionid = '3'
group by movies.id, movies_in_collection.rank;

select sales.customerid, sales.movieid, sales.saledate 
from moviedb.sales
group by sales.customerid, sales.movieid, sales.saledate ;

insert into moviedb.movies_in_collection (collectionid ,movieid,rank) values (1,'tt0421974',3);
insert into moviedb.movies_in_collection (collectionid ,movieid,rank) values (2,'tt0378947',5);
insert into moviedb.movies_in_collection (collectionid ,movieid,rank) values (3,'tt0378947',6);
insert into moviedb.movies_in_collection (collectionid ,movieid,rank) values (1,'tt0344854',7);
insert into moviedb.movies_in_collection (collectionid ,movieid,rank) values (2,'tt0498380',7);
insert into moviedb.movies_in_collection (collectionid ,movieid,rank) values (3,'tt0455805',4);
insert into moviedb.movies_in_collection (collectionid ,movieid,rank) values (1,'tt0338751',1);
insert into moviedb.movies_in_collection (collectionid ,movieid,rank) values (2,'tt0352248',2);
insert into moviedb.movies_in_collection (collectionid ,movieid,rank) values (3,'tt0399146',5);
insert into moviedb.movies_in_collection (collectionid ,movieid,rank) values (1,'tt0266452',1);
insert into moviedb.movies_in_collection (collectionid ,movieid,rank) values (2,'tt0496634',5);
insert into moviedb.movies_in_collection (collectionid ,movieid,rank) values (3,'tt0164003',1);
insert into moviedb.movies_in_collection (collectionid ,movieid,rank) values (1,'tt0325123',8);
insert into moviedb.movies_in_collection (collectionid ,movieid,rank) values (2,'tt0343996',9);
insert into moviedb.movies_in_collection (collectionid ,movieid,rank) values (3,'tt0355295',10);
insert into moviedb.movies_in_collection (collectionid ,movieid,rank) values (2,'tt0424918',9);
insert into moviedb.movies_in_collection (collectionid ,movieid,rank) values (3,'tt0430357',10);
insert into moviedb.movies_in_collection (collectionid ,movieid,rank) values (1,'tt0413300',8);
insert into moviedb.movies_in_collection (collectionid ,movieid,rank) values (3,'tt0270393',8);
insert into moviedb.movies_in_collection (collectionid ,movieid,rank) values (1,'tt0166158',6);
insert into moviedb.movies_in_collection (collectionid ,movieid,rank) values (2,'tt0354595',6);
insert into moviedb.movies_in_collection (collectionid ,movieid,rank) values (1,'tt0412511',5);
insert into moviedb.movies_in_collection (collectionid ,movieid,rank) values (1,'tt0448157',5);
insert into moviedb.movies_in_collection (collectionid ,movieid,rank) values (2,'tt0390022',1);
insert into moviedb.movies_in_collection (collectionid ,movieid,rank) values (2,'tt0261311',1);
insert into moviedb.movies_in_collection (collectionid ,movieid,rank) values (3,'tt0477348',4);
insert into moviedb.movies_in_collection (collectionid ,movieid,rank) values (3,'tt0406816',2);
insert into moviedb.movies_in_collection (collectionid ,movieid,rank) values (2,'tt0342275',3);
insert into moviedb.movies_in_collection (collectionid ,movieid,rank) values (1,'tt0310910',4);
insert into moviedb.movies_in_collection (collectionid ,movieid,rank) values (3,'tt0475944',5);
insert into moviedb.movies_in_collection (collectionid ,movieid,rank) values (1,'tt0367153',1);
insert into moviedb.movies_in_collection (collectionid ,movieid,rank) values (2,'tt0453562',2);


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


