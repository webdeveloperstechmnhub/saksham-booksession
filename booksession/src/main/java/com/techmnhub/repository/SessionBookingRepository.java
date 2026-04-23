package com.techmnhub.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.techmnhub.entity.SessionBooking;

public interface SessionBookingRepository extends JpaRepository<SessionBooking, Long> {
}