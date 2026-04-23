package com.techmnhub.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data
public class SessionBooking {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // Institute Details
    private String instituteName;
    private String department;
    private String city;

    // Contact
    private String contactName;
    private String email;
    private String phone;

    // Session
    private String topic;
    private String type;
    private String date;
    private String time;
    private String duration;

    // Audience
    private int students;
    private String audience;

    // Mode
    private String mode;

    // Requirements
    @Column(length = 1000)
    private String requirements;
}
