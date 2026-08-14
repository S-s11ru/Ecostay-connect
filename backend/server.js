import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY
});

app.get("/", (req, res) => {
  res.json({
    message: "EcoStay Connect AI Backend is running"
  });
});

app.post("/api/ai/recommend", async (req, res) => {
  try {
    const {
      location,
      budget,
      guests,
      preferences
    } = req.body;

    if (!location || !budget || !guests) {
      return res.status(400).json({
        success: false,
        message: "Location, budget and number of guests are required."
      });
    }

    const prompt = `
You are EcoStay Connect AI Assistant.

Recommend eco-friendly homestay options for a traveler.

Traveler details:
- Destination: ${location}
- Budget per night: ₹${budget}
- Number of guests: ${guests}
- Preferences: ${preferences || "Eco-friendly and comfortable stay"}

Provide 3 suitable recommendations.

For each recommendation include:
1. Homestay name
2. Estimated price
3. Location
4. Eco-friendly features
5. Why it is suitable

Important:
Clearly state that these are AI-generated recommendations
and prices should be treated as estimates.
`;

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: prompt
    });

    res.json({
      success: true,
      input: {
        location,
        budget,
        guests,
        preferences
      },
      recommendation: response.text
    });

  } catch (error) {
    console.error("AI Error:", error);

    res.status(500).json({
      success: false,
      message: "Unable to generate AI recommendations."
    });
  }
});

app.listen(PORT, () => {
  console.log(`EcoStay AI Backend running on port ${PORT}`);
});
