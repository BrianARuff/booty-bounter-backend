### Setup Database

1. `create database booty_bounter_users;`
2. `create table test (username char(5), age integer);`
3. `connection string: postgres://postgres:1366@localhost:5432/booty_bounter`
4. ```
   create table if not exists users
         (id serial primary key,
           username varchar(32),
           password varchar(32),
           dob varchar(100),
           ow_real_id varchar(32),
           reviewer boolean default false,
           timestamp date default current_date
         );
   ```

### Add constraints to column

1. `alter table users add unique (username);`
2. `alter table users add unique (ow_real_id);`
3. `alter table users alter column username set not null;`
