package com.techmnhub.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.techmnhub.entity.SessionBooking;
import com.techmnhub.repository.SessionBookingRepository;

@Service
public class SessionBookingService {

    @Autowired
    private SessionBookingRepository repo;

    public SessionBooking saveBooking(SessionBooking booking) {
        return repo.save(booking);
    }

    public List<SessionBooking> getAllBookings() {
        return repo.findAll();
    }
}