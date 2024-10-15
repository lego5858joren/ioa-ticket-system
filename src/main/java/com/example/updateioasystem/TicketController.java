package com.example.updateioasystem;

import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;
import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;

@CrossOrigin(origins = "http://localhost:3000", allowedHeaders = "*") // Enable CORS for all origins
@RestController
@RequestMapping("/api")
public class TicketController {

    private final RideManager rideManager;

    public TicketController() {
        this.rideManager = new RideManager(); // Initialize RideManager
    }

    @GetMapping("/rides")
    public List<String> getRides() {
        // Return the names of all available rides
        return rideManager.getRides().stream() // Stream<Ride>
                .map(Ride::getName) // Stream<String>
                .collect(Collectors.toList());
    }

    @PostMapping("/buy-ticket")
    public ResponseEntity<String> buyTicket(@RequestBody TicketRequest ticketRequest) {
        LocalDate today = LocalDate.now();
        LocalDate requestedDate;
        try {
            requestedDate = LocalDate.parse(ticketRequest.getDate());
        } catch (Exception e) {
            System.out.println("Error parsing the date from the request: " + ticketRequest.getDate());
            return ResponseEntity.badRequest().body("Invalid date format.");
        }

        System.out.println("Today's date: " + today);
        System.out.println("Requested date: " + requestedDate);

        if (requestedDate.isBefore(today)) {
            System.out.println("Invalid date - The requested date is before today.");
            return ResponseEntity.badRequest().body("Invalid date. Please select today or a future date.");
        }

        System.out.println("Ticket purchase is valid.");
        return ResponseEntity.ok("Ticket purchased successfully!");
    }


    @PostMapping("/test")
    public String testEndpoint() {
        return "Test endpoint working!";
    }
}






