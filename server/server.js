import express from 'express'
import axios from 'axios'
import multer from 'multer'
import cors from 'cors'
import fs from 'fs'
import dotenv from 'dotenv'
dotenv.config();

const app = express()
app.use(cors())

const upload = multer({ dest: "uploads/"})

app.post("/predictions", upload.single("image"), async (req, res) => 
{
    try
    {
        const imageData = fs.readFileSync(req.file.path)

        const response = await axios.post(
            `${process.env.AZURE_ENDPOINT}/customvision/v3.0/Prediction/${process.env.PROJECT_ID}/classify/iterations/${process.env.MODEL_NAME}/image`,
            imageData,
            {
                headers:
                {
                    "Prediction-key": process.env.PREDICTION_KEY,
                    "Content-Type": "application/octet-stream"
                }
            }
        )
        
        fs.unlinkSync(req.file.path)

        res.json(response.data)
    } catch (error)
    {
        res.sendStatus(500).json({ error: error.response?.data || error.message })
    }
})

app.listen(4000, () => console.log("Server running on port 4000"))