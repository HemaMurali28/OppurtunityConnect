const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, "..", "frontend")));

const opportunities = [
    {
        id: 1,
        title: "AI / ML Internship",
        organization: "TechNova",
        category: "Internship",
        skills: ["python", "ai", "machine learning"],
        branch: "Computer Science",
        year: "3rd Year",
        location: "Remote",
        deadline: "18 Oct 2026",
        description: "Work on practical AI and machine learning projects."
    },
    {
        id: 2,
        title: "Web Development Internship",
        organization: "CodeWorks",
        category: "Internship",
        skills: ["html", "css", "javascript"],
        branch: "Computer Science",
        year: "3rd Year",
        location: "Bangalore",
        deadline: "22 Oct 2026",
        description: "Build modern websites and web applications."
    },
    {
        id: 3,
        title: "National Innovation Challenge",
        organization: "Innovation Hub",
        category: "Competition",
        skills: ["python", "innovation", "web development"],
        branch: "Any",
        year: "Any",
        location: "India",
        deadline: "25 Oct 2026",
        description: "Present innovative solutions to real-world problems."
    },
    {
        id: 4,
        title: "Merit Scholarship",
        organization: "Student Foundation",
        category: "Scholarship",
        skills: ["academic"],
        branch: "Any",
        year: "Any",
        location: "India",
        deadline: "5 Nov 2026",
        description: "Financial support for eligible college students."
    },
    {
        id: 5,
        title: "AWS Cloud Certification",
        organization: "Cloud Academy",
        category: "Certification",
        skills: ["aws", "cloud"],
        branch: "Computer Science",
        year: "Any",
        location: "Online",
        deadline: "12 Nov 2026",
        description: "Learn cloud fundamentals and earn a certification."
    }
];

app.get("/api/opportunities", (req, res) => {
    res.json(opportunities);
});

app.get("/api/health", (req, res) => {
    res.json({
        message: "OpportunityConnect backend is running"
    });
});

app.listen(PORT, () => {
    console.log(`OpportunityConnect running at http://localhost:${PORT}`);
});