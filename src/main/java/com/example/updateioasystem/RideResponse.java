package com.example.updateioasystem;

public class RideResponse {
    private String status;
    private String message;
    private int waitTime;

    // Constructors
    public RideResponse(String status, String message) {
        this.status = status;
        this.message = message;
    }

    public RideResponse(String status, String message, int waitTime) {
        this.status = status;
        this.message = message;
        this.waitTime = waitTime;
    }

    // Getters and setters
    public String getStatus() {
        return status;
    }

    public String getMessage() {
        return message;
    }

    public int getWaitTime() {
        return waitTime;
    }
}

