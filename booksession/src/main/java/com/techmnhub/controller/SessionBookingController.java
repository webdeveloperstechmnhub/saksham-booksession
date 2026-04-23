package com.techmnhub.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.techmnhub.entity.SessionBooking;
import com.techmnhub.service.SessionBookingService;

@RestController
@RequestMapping("/api/sessions")
@CrossOrigin(origins = "*")
public class SessionBookingController {

    @Autowired
    private SessionBookingService service;

    // Save booking
    @PostMapping
    public SessionBooking createBooking(@RequestBody SessionBooking booking) {
        return service.saveBooking(booking);
    }

    // Get all bookings
    @GetMapping
    public List<SessionBooking> getAllBookings() {
        return service.getAllBookings();
    }
}