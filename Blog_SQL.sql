SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';


CREATE SCHEMA IF NOT EXISTS blog DEFAULT CHARACTER SET utf8 ;
USE blog ;

-- drop SCHEMA blog

CREATE TABLE IF NOT EXISTS blog.users (
	id INT NOT NULL AUTO_INCREMENT,
    firstName VARCHAR(45) NULL,
    lastName VARCHAR(45) NULL,
    DOB DATE NULL,
    email VARCHAR(100) NULL,
    password VARCHAR(1024) NULL,
    gender CHAR(1) NULL,
    isAdmin CHAR(1) NULL,
    github TEXT NULL,
    avatar TEXT NULL,
    bio TEXT NULL,
    
    
    CONSTRAINT users_pk PRIMARY KEY (id)
    )
ENGINE = InnoDB;


CREATE TABLE IF NOT EXISTS blog.posts (
	id INT NOT NULL AUTO_INCREMENT,
    userId INT NOT NULL,
    title VARCHAR(45) NULL,
    body TEXT NULL,
    public CHAR(1) NULL,
    publishDate DATE NULL,
    
    CONSTRAINT posts_pk PRIMARY KEY (id),
	INDEX exam_user_fk_idx (userId ASC) VISIBLE,
	CONSTRAINT exam_user_fk FOREIGN KEY (userId) REFERENCES  questet.user (id)
		ON DELETE NO ACTION
		ON UPDATE NO ACTION)
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS blog.reacts (
	userId INT NOT NULL,
    postId INT NOT NULL,
    category CHAR(15) NULL,
    
    INDEX users_give_reacts_fk (userId ASC) VISIBLE,
    INDEX posts_has_reacts_fk (postId ASC) VISIBLE,
    
    
    CONSTRAINT posts_has_reacts_fk FOREIGN KEY (postId) REFERENCES  blog.posts (id)
		ON DELETE NO ACTION
        ON UPDATE NO ACTION,
    CONSTRAINT users_give_reacts_fk FOREIGN KEY (userId) REFERENCES  blog.users (id)
		ON DELETE NO ACTION
        ON UPDATE NO ACTION)
ENGINE = InnoDB;


CREATE TABLE IF NOT EXISTS blog.comments (
	id INT NOT NULL AUTO_INCREMENT,
	userId INT NOT NULL,
    postId INT NOT NULL,
    commentData TEXT NULL,
    
    INDEX users_write_comments_fk (userId ASC) VISIBLE,
    INDEX posts_has_comments_fk (postId ASC) VISIBLE,
    
    CONSTRAINT comments_pk PRIMARY KEY (id),
    CONSTRAINT posts_has_comments_fk FOREIGN KEY (postId) REFERENCES  blog.posts (id)
		ON DELETE NO ACTION
        ON UPDATE NO ACTION,
    CONSTRAINT users_write_comments_fk FOREIGN KEY (userId) REFERENCES  blog.users (id)
		ON DELETE NO ACTION
        ON UPDATE NO ACTION)
ENGINE = InnoDB;




SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
