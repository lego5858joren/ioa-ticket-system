package com.example.updateioasystem;

public class TicketRequest {
    private String date;
    private String expressPass;

    // Default constructor
    public TicketRequest() {
    }

    // Constructor
    public TicketRequest(String date, String expressPass) {
        this.date = date;
        this.expressPass = expressPass;
    }

    // Getters and Setters
    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getExpressPass() {
        return expressPass;
    }

    public void setExpressPass(String expressPass) {
        this.expressPass = expressPass;
    }
}

