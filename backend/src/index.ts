import express from "express"
import cors from "cors"
import { ENV } from "./config/ENV"
import { connectDB } from "./config/db"
import jobRouter from "./routes/jobRoutes"

const app = express()
const PORT = ENV.PORT || 5000

// CORS Setup
app.use(cors({
    origin: [
        ENV.FRONTEND_ORIGIN,
    ],
    methods: ["GET", "POST"],
}))

// Parsing incoming JSON requests
app.use(express.json())

// All Job related api endpoint
app.use("/api/v1/jobs", jobRouter)

// Initialise server and database connection function
const runServer = async() => {
    try {
        await connectDB()

        app.listen(PORT, () => {
            console.log(`Server is running on PORT ${PORT}`)
        })

    } catch (err:any) {
        console.error(err)
    }
}

// Run express server
runServer()