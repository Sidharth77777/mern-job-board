import dotenv from "dotenv"

dotenv.config({ quiet:true })

// Get enviornmental variables
export const ENV = {
    PORT: process.env.PORT as string,
    FRONTEND_ORIGIN: process.env.FRONTEND_ORIGIN as string,

    MONGODB_URI: process.env.MONGODB_URI as string,
}