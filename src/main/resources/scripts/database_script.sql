create  database IF NOT EXISTS tesis;
use tesis;

create table IF NOT EXISTS comment (id integer not null auto_increment, created_at datetime, description varchar(255), id_issue integer, id_user integer, primary key (id));
create table IF NOT EXISTS daily (id bigint not null auto_increment, avatar varchar(255), created_at datetime, first_name varchar(255) not null, last_name varchar(255) not null, user_name varchar(255) not null, primary key (id));
create table IF NOT EXISTS daily_item (id bigint not null auto_increment, avatar varchar(255), created_at datetime, first_name varchar(255) not null, last_name varchar(255) not null, today varchar(255), user_name varchar(255) not null, yesterday varchar(255), daily_id bigint, primary key (id));
create table IF NOT EXISTS daily_user (id integer not null auto_increment, daily_id integer not null, today varchar(255), user_id integer not null, yesterday varchar(255), primary key (id));
create table IF NOT EXISTS issue (id integer not null auto_increment, assignee varchar(255), avatar varchar(255), backlog bit not null, created datetime not null, description varchar(255), enabled bit not null, estimated integer, label varchar(255), phase varchar(255), planned_end datetime, planned_start datetime, priority varchar(255), remaining integer, reporter varchar(255), resolved datetime, id_sprint integer, state varchar(255), title varchar(255) not null, updated datetime not null, version varchar(255), id_watcher integer, primary key (id));
create table IF NOT EXISTS label (id integer not null auto_increment, created_at datetime not null, description varchar(255), name varchar(255) not null, primary key (id));
create table IF NOT EXISTS member_daily (id integer not null auto_increment, id_daily integer, id_user integer, today varchar(255), yesterday varchar(255), primary key (id));
create table IF NOT EXISTS phase (id integer not null auto_increment, created_at datetime not null, description varchar(255), name varchar(255) not null, primary key (id));
create table IF NOT EXISTS priority (id integer not null auto_increment, created_at datetime not null, description varchar(255), name varchar(255) not null, primary key (id));
create table IF NOT EXISTS rol (id integer not null auto_increment, created_at datetime not null, description varchar(255), name varchar(255) not null, primary key (id));
create table IF NOT EXISTS sprint (id integer not null auto_increment, created_at datetime not null, date_from datetime not null, date_to datetime not null, description varchar(255), enabled bit not null, is_active bit not null, name varchar(255), primary key (id));
create table IF NOT EXISTS state (id integer not null auto_increment, created_at datetime not null, description varchar(255), name varchar(255) not null, primary key (id));
create table IF NOT EXISTS sub_task (id integer not null auto_increment, created datetime, id_assignee integer, id_phase integer, id_reporter integer, id_state integer, id_task integer, resolved datetime, updated datetime, primary key (id));
create table IF NOT EXISTS user (id integer not null auto_increment, avatar varchar(255), created_at datetime not null, dni integer, email varchar(255), enabled bit not null, first_name varchar(255) not null, last_name varchar(255) not null, password varchar(255) not null, id_rol integer not null, updated_at datetime not null, user_name varchar(255) not null, primary key (id));
create table IF NOT EXISTS version (id integer not null auto_increment, created_at datetime not null, description varchar(255), name varchar(255) not null, primary key (id));
-- alter table daily_item add constraint FK39actcvpw6dss0ahktik1691h foreign key (daily_id) references daily (id);

alter table user
	add IS_NETWORK bit not null;