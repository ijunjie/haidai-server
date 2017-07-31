#### create database
```bash
  create database haidai
```
#### create tables

##### shop
```bash
create table `shop` (
  `id`  INT(20) not null AUTO_INCREMENT,
  `shopId` varchar(50) default null,
  `shopName` varchar(32) default null,
  `status` tinyint(1) not null default 1,
  `mobile` varchar(20) default null,
  `address` varchar(100) default null,
  `username` varchar(50) default null,
  `password` varchar(32) NOT null,
  `avatar` varchar(320) NOT null,
  `email` varchar(100) default null,
  `creationTime` bigint(20) default null,
  primary key (`id`),
  unique key `shopId` (`shopId`)
) engine=innodb default charset=utf8 collate=utf8_bin;
```

