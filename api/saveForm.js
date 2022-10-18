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
        conn.model("Form", new mongoose.Schema({
            "webAHosting": {
                "webBundle": String,
                "hostingBundle": String
            },
            "oProjektu": {
                "budget": Number,
                "description": String
            },
            "vaseUdaje": {
                "type": String,
                "firstName": String,
                "lastName": String,
                "companyName": String,
                "ico": Number,
                "email": String,
                "phone": String,
                "consent": Boolean,
            }
        }, {
            collection: "contactForm",
            strict: true,
        }))
    }

    const Form = conn.model("Form")

    await new Form(req.body).save({})

    res.status(201)
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
