### Authentication Database

##### _I am using database to validate authentication of an user's account._

1. Create Authentication Table

- ```create table user_auth (
    id bigint unique primary key,
    user_id bigint unique,
    isAuth boolean default false
  );
  ```
