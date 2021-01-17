package com.Leon.personalHealth;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@MapperScan("com.Leon.personalHealth.dao")
@SpringBootApplication
public class PersonalHealthApplication {

	public static void main(String[] args) {
		SpringApplication.run(PersonalHealthApplication.class, args);
	}

}
