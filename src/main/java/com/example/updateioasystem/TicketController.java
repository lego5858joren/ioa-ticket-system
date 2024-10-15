package com.example.updateioasystem;

import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@CrossOrigin(origins = "*")

@RestController
@RequestMapping("/api")
public class TicketController {

    private final RideManager rideManager;

    public TicketController() {
        this.rideManager = new RideManager(); // Initialize RideManager for managing rides
    }

    @GetMapping("/rides")
    public List<String> getRides() {
        // Return the names of all available rides
        return rideManager.getRides().stream()
                .map(Ride::getName)
                .collect(Collectors.toList());
    }

    @PostMapping("/buy-ticket")
    public String buyTicket(@RequestBody Ticket ticket) {
        // Process the ticket purchase
        System.out.println("Request received for buying ticket with date: " + ticket.getChosenDate());
        return "Ticket purchased for " + ticket.getChosenDate();
    }

    @PostMapping("/test")
    public String testEndpoint() {
        return "Test endpoint working!";
    }
}



