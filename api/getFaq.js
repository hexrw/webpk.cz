import mongoose from "mongoose"


let conn = null

const uri = process.env.MONGODB_URI

async function handler(req, res) {
    if (conn == null) {
        conn = mongoose.createConnection(uri, {
            serverSelectionTimeoutMS: 5000,
            dbName: "db"
        })

        await conn.asPromise()
        conn.model("Faq", new mongoose.Schema({
            title: String,
            content: String,
        }, { collection: "faq" }))
    }

    const Faq = conn.model("Faq")

    const docs = await Faq.find({})
    
    console.log(docs)
    
    res.status(200).json(docs)
}

export default async function (req, res) {
    try {
        await handler(req, res)
    } catch (error) {
        return res.status(500).json({
            detail: "Internal server error",
            message: error.message,
        })
    }
}
