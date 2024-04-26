import "dotenv/config"
import express from "express"
import cors from "cors"
import { HfInference } from "@huggingface/inference"

// Express
const app = express()
const port = 3030
// Use CORS
app.use(cors())

// Get Hugging Face token
const HF_TOKEN = process.env.HF_TOKEN || ""

const inference = new HfInference(HF_TOKEN)

app.get('/chat', async (req, res) => {
  console.log(req.params)
  res.send("I am a human.")
})