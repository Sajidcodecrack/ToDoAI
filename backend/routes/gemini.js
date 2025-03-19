const express = require("express");
const router = express.Router();
const { GoogleGenerativeAI } = require("@google/generative-ai");
require("dotenv").config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

router.post("/", async (req, res) => {
  const { message } = req.body;
  if (!message) {
    return res.status(400).json({ error: "Message is required" });
  }

  try {
    const prompt = `${message} - Provide concise, task-focused advice for a notebook-style to-do list.`; // Minimal fixed prompt
    const result = await model.generateContent(prompt);
    const aiResponse = await result.response.text();
    res.json({ response: aiResponse });
  } catch (error) {
    console.error("Gemini API Error:", error);
    res.status(500).json({ error: "Failed to get AI response" });
  }
});

module.exports = router;