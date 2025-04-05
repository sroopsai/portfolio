import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Simple API route to get contact information
  app.get("/api/contact", (req, res) => {
    res.json({
      email: "roopsai@outlook.in",
      github: "github.com/roopsai",
      linkedin: "linkedin.com/in/roopsaisurampudi"
    });
  });

  // API route to handle contact form submissions
  app.post("/api/contact", (req, res) => {
    const { name, email, subject, message } = req.body;
    
    // Basic validation
    if (!name || !email || !message) {
      return res.status(400).json({ message: "Please fill in all required fields" });
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: "Please enter a valid email address" });
    }

    // In a real app, you'd likely store this in a database and/or send an email
    // For now, we'll just return a success message
    return res.status(200).json({ 
      message: "Message received successfully",
      data: { name, email, subject, message }
    });
  });

  const httpServer = createServer(app);

  return httpServer;
}
