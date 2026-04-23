package com.techmnhub.booksession;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication(scanBasePackages = "com.techmnhub")
@EnableJpaRepositories(basePackages = "com.techmnhub.repository")
@EntityScan(basePackages = "com.techmnhub.entity")   // ✅ ADD THIS
public class BooksessionApplication {

    public static void main(String[] args) {
        SpringApplication.run(BooksessionApplication.class, args);
    }
}