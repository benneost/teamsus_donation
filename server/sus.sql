DROP SCHEMA IF EXISTS teamsus;
create schema teamsus;
use teamsus;

-- create table user
DROP TABLE IF EXISTS `user`;

CREATE TABLE user (
  
  `userid` int(20) not null AUTO_INCREMENT,
  `username` char(20) not null,
  `joindate` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `gender` char(1) not null,
  `occupation` char(20) not null,
  `age` int(2) not null,
  `email` varchar(50),
  `phonenum` int(8),
  `password` varchar(16),
  `points` int(10) DEFAULT 0,

  PRIMARY KEY (`userid`)
 
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

insert into `user` values 
  (1,'gerald','2021-09-20', 'm', 'student', 21, 'gerald@gmail.com', 91234567, 'GVHB325$#', 250),
  (2,'heather','2020-07-12', 'm', 'accountant', 22, 'healther@gmail.com', 90242564, 'sus***', 342),
  (3,'isaac', '2021-01-19','m', 'auditor', 23, 'issace@gmail.com', 88124567, 'mus$#%', 123),
  (4,'jane', '2021-05-20','f', 'fireman', 33, 'jane@gmail.com', 82347654, 'QOE123$$$', 5356),
  (5,'abigail', '2020-07-11', 'f', 'doctor', 25, 'abigail@gmail.com', 91344567, 'ADJ123*^$', 3248),
  (6,'brandon', '2021-05-09', 'm', 'nurse', 49, 'brandon@gmail.com', 87654321, 'ASV123!!$', 59),
  (7,'chloe', '2021-02-12', 'f', 'developer', 28, 'chloe@gmail.com', 98753423, 'AGL1DFSM:)', 35),
  (8,'derek', '2021-03-02', 'm', 'lawyer', 35, 'derek@gmail.com', 93326155, 'FOA123:D', 469),
  (9,'emily', '2020-09-01', 'f', 'banker', 40, 'emily@gmail.com', 92746816, 'p@sswor442d:3', 2400),
  (10,'frank', '2020-12-11', 'm', 'stripper', 55, 'frank@gmail.com', 90927483, 'FVGBHN144._.', 239)
  ;

DROP TABLE IF EXISTS `beneficiary`;

-- create table beneficiary
CREATE TABLE beneficiary (
  
  `beneficiaryid` int(11) NOT NULL AUTO_INCREMENT,
  `bname` varchar(150) NOT NULL,
  `cause` char(225) NOT NULL,
  `amtdonated` int(10) NOT NULL DEFAULT 0,
  `startdate` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `description` varchar(200) NOT NULL,
  `url` varchar(100) NOT NULL,

  PRIMARY KEY (`beneficiaryid`)
  
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- create table merchant
DROP TABLE IF EXISTS `merchant`;

CREATE TABLE merchant (

  `merchantid` int(20) not null AUTO_INCREMENT,
  `mname` varchar(100) not null,
  
  PRIMARY KEY (`merchantid`)

);

insert into `merchant` values
  (1, 'gongcha'),
  (2, 'each a cup'),
  (3, 'starbucks'),
  (4, 'mr coconut'),
  (5, 'boost'),
  (6, 'itea'),
  (7, 'liho'),
  (8, 'koi'),
  (9, 'chi cha')
  ;

-- create table reward
DROP TABLE IF EXISTS `reward`;

CREATE TABLE reward (

  `rewardid` int(20) not null AUTO_INCREMENT,
  `rname` varchar(100) not null,
  `description` varchar(225) not null,
  `pointsRequired` int(20) not null,
  `redemptionCap` int(20) not null,
  `expiryDate` DATE NOT NULL,
  `merchantid` int(20) not null,
  
  PRIMARY KEY (`rewardid`, `merchantid`),
  KEY `rewardFK1` (`merchantid`),
  CONSTRAINT `rewardFK1` FOREIGN KEY (`merchantid`) REFERENCES `merchant` (`merchantid`) ON DELETE CASCADE

);

insert into `reward` values
  (1, 'gongcha', 'popular bubble tea drink', 400, 100, '2020-12-11', 1),
  (2, 'each a cup', 'popular bubble tea drink', 400, 200, '2020-12-11', 2),
  (3, 'starbucks', 'popular bubble tea drink', 400, 100, '2020-12-11', 3),
  (4, 'mr coconut', 'popular bubble tea drink', 400, 300, '2020-12-11', 4),
  (5, 'boost', 'popular bubble tea drink', 400, 150, '2020-12-11', 5),
  (6, 'itea', 'popular bubble tea drink', 400, 200, '2020-12-11', 6),
  (7, 'liho', 'popular bubble tea drink', 400, 200, '2020-12-11', 7),
  (8, 'koi', 'popular bubble tea drink', 400, 400, '2020-12-11', 8),
  (9, 'chi cha', 'popular bubble tea drink', 400, 350, '2020-12-11', 9)
  ;

-- create table redemptions
DROP TABLE IF EXISTS `redemptions`;

CREATE TABLE redemptions (

  `redemptionid` int(20) not null AUTO_INCREMENT,
  `rewardid` int(20) not null,
  `userid` int(20) not null,
  
  PRIMARY KEY (`redemptionid`),
  KEY `redemptionFK1` (`rewardid`),
  KEY `redemptionFK2` (`userid`),
  CONSTRAINT `redemptionFK1` FOREIGN KEY (`rewardid`) REFERENCES `reward` (`rewardid`) ON DELETE CASCADE,
  CONSTRAINT `redemptionFK2` FOREIGN KEY (`userid`) REFERENCES `user` (`userid`) ON DELETE CASCADE

);

-- create table donation
DROP TABLE IF EXISTS `donation`;

CREATE TABLE donation (

  `donationid` int(20) not null AUTO_INCREMENT,
  `amount` float not null,
  `points` int(20) not null,
  `dateTime` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `beneficiaryid` int(20) not null,
  `userid` int(20) not null,
  
  PRIMARY KEY (`donationid`),
  KEY `donationFK1` (`beneficiaryid`),
  KEY `donationFK2` (`userid`),
  CONSTRAINT `donationFK1` FOREIGN KEY (`beneficiaryid`) REFERENCES `beneficiary` (`beneficiaryid`) ON DELETE CASCADE,
  CONSTRAINT `donationFK2` FOREIGN KEY (`userid`) REFERENCES `user` (`userid`) ON DELETE CASCADE

);

-- create table payment
DROP TABLE IF EXISTS `payment`;

CREATE TABLE payment (

  `paymentid` int(20) not null AUTO_INCREMENT,
  `status` varchar(20) not null DEFAULT 'successful',
  `amount` float not null,
  `dateTime` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `beneficiaryid` int(20) not null,
  `userid` int(20) not null,
  `donationid` int(20) not null,
  
  PRIMARY KEY (`paymentid`),
  KEY `paymentFK1` (`beneficiaryid`),
  KEY `paymentFK2` (`userid`),
  KEY `paymentFK3` (`donationid`),
  CONSTRAINT `paymentFK1` FOREIGN KEY (`beneficiaryid`) REFERENCES `beneficiary` (`beneficiaryid`) ON DELETE CASCADE,
  CONSTRAINT `paymentFK2` FOREIGN KEY (`userid`) REFERENCES `user` (`userid`) ON DELETE CASCADE,
  CONSTRAINT `paymentFK3` FOREIGN KEY (`donationid`) REFERENCES `donation` (`donationid`) ON DELETE CASCADE

);