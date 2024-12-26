-- 외래 키 제약 조건 비활성화
SET FOREIGN_KEY_CHECKS = 0;

CREATE TABLE users (
    id bigint NOT NULL,
    name varchar(20) NULL,
    nickname varchar(20) NULL,
    address text NULL,
    gender enum('남성', '여성') NULL,
    birth_date date NULL,
    phone_num bigint NULL,
    email varchar(50) NULL,
    created_at datetime(6) NULL,
    updated_at datetime(6) NULL,
    deleted_at datetime(6) NULL,
    status varchar(15) NULL,
    PRIMARY KEY (id)
);

CREATE TABLE missions (
    id bigint NOT NULL,
    price bigint NULL,
    point bigint NULL,
    created_at datetime(6) NULL,
    updated_at datetime(6) NULL,
    deleted_at datetime(6) NULL,
    status varchar(15) NULL,
    PRIMARY KEY (id)
);

CREATE TABLE my_mission (
    id bigint NOT NULL,
    user_id bigint NOT NULL,
    mission_id bigint NOT NULL,
    restaurant_name varchar(20) NULL,
    mission_amount bigint NULL,
    created_at datetime(6) NULL,
    updated_at datetime(6) NULL,
    deleted_at datetime(6) NULL,
    status varchar(15) NULL,
    PRIMARY KEY (id, user_id, mission_id),
    FOREIGN KEY (user_id) REFERENCES users (id),
    FOREIGN KEY (mission_id) REFERENCES missions (id)
);

CREATE TABLE restaurants (
    id bigint NOT NULL,
    mission_id bigint NOT NULL,
    category varchar(20) NULL,
    name varchar(20) NULL,
    address varchar(20) NULL,
    region varchar(20) NULL,
    created_at datetime(6) NULL,
    updated_at datetime(6) NULL,
    deleted_at datetime(6) NULL,
    status varchar(15) NULL,
    PRIMARY KEY (id, mission_id),
    FOREIGN KEY (mission_id) REFERENCES missions (id)
);

CREATE TABLE reviews (
    id bigint NOT NULL,
    user_id bigint NOT NULL,
    restaurant_id bigint NOT NULL,
    mission_id bigint NOT NULL,
    rating decimal(2,1) NULL,
    title varchar(20) NULL,
    content text NULL,
    created_at datetime(6) NULL,
    updated_at datetime(6) NULL,
    deleted_at datetime(6) NULL,
    status varchar(15) NULL,
    PRIMARY KEY (id, user_id, restaurant_id, mission_id),
    FOREIGN KEY (user_id) REFERENCES users (id),
    FOREIGN KEY (restaurant_id) REFERENCES restaurants (id),
    FOREIGN KEY (mission_id) REFERENCES missions (id)
);

CREATE TABLE restaurant_menus (
    id bigint NOT NULL,
    restaurant_id bigint NOT NULL,
    mission_id bigint NOT NULL,
    name varchar(20) NULL,
    price bigint NULL,
    created_at datetime(6) NULL,
    updated_at datetime(6) NULL,
    deleted_at datetime(6) NULL,
    status varchar(15) NULL,
    PRIMARY KEY (id, restaurant_id, mission_id),
    FOREIGN KEY (restaurant_id) REFERENCES restaurants (id),
    FOREIGN KEY (mission_id) REFERENCES missions (id)
);

CREATE TABLE inquiries (
    id bigint NOT NULL,
    user_id bigint NOT NULL,
    type varchar(15) NULL,
    title varchar(20) NULL,
    content text NULL,
    created_at datetime(6) NULL,
    updated_at datetime(6) NULL,
    deleted_at datetime(6) NULL,
    status varchar(15) NULL,
    PRIMARY KEY (id, user_id),
    FOREIGN KEY (user_id) REFERENCES users (id)
);

CREATE TABLE review_photos (
    id bigint NOT NULL,
    review_id bigint NOT NULL,
    user_id bigint NOT NULL,
    restaurant_id bigint NOT NULL,
    mission_id bigint NOT NULL,
    photo_url varchar(100) NULL,
    created_at datetime(6) NULL,
    updated_at datetime(6) NULL,
    deleted_at datetime(6) NULL,
    status varchar(15) NULL,
    PRIMARY KEY (id, review_id, user_id, restaurant_id, mission_id),
    FOREIGN KEY (review_id) REFERENCES reviews (id),
    FOREIGN KEY (user_id) REFERENCES users (id),
    FOREIGN KEY (restaurant_id) REFERENCES restaurants (id),
    FOREIGN KEY (mission_id) REFERENCES missions (id)
);

CREATE TABLE preference_food (
    id bigint NOT NULL,
    user_id bigint NOT NULL,
    category varchar(20) NULL,
    created_at datetime(6) NULL,
    updated_at datetime(6) NULL,
    deleted_at datetime(6) NULL,
    status varchar(15) NULL,
    PRIMARY KEY (id, user_id),
    FOREIGN KEY (user_id) REFERENCES users (id)
);

CREATE TABLE inquiry_photos (
    id bigint NOT NULL,
    inquiry_id bigint NOT NULL,
    user_id bigint NOT NULL,
    photo_url text NULL,
    created_at datetime(6) NULL,
    updated_at datetime(6) NULL,
    deleted_at datetime(6) NULL,
    status varchar(15) NULL,
    PRIMARY KEY (id, inquiry_id, user_id),
    FOREIGN KEY (inquiry_id) REFERENCES inquiries (id),
    FOREIGN KEY (user_id) REFERENCES users (id)
);

CREATE TABLE points (
    id bigint NOT NULL,
    user_id bigint NOT NULL,
    amount bigint NULL,
    created_at datetime(6) NULL,
    updated_at datetime(6) NULL,
    deleted_at datetime(6) NULL,
    status varchar(15) NULL,
    PRIMARY KEY (id, user_id),
    FOREIGN KEY (user_id) REFERENCES users (id)
);

-- 외래 키 제약 조건 다시 활성화
SET FOREIGN_KEY_CHECKS = 1;
