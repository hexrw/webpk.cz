import mongoose from "mongoose"


export default function handler(req, res) {
    mongoose.createConnection(process.env.MONGODB_URI, {
        maxPoolSize: 10,
    })

    return res.status(200).json({
        body: req.body,
        query: req.query,
        cookies: req.cookies,
    })
}
