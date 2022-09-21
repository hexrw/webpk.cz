import mongoose from "mongoose"


function handler(req, res) {
    const conn = mongoose.createConnection(process.env.MONGODB_URI, {
        maxPoolSize: 10,
    })

    const ContactForm = mongoose.model("ContactForm", {
        "webAHosting": {
            "radio_2": String,
            "radio_3": String,
        },
        "oProjektu": {
            "range_4": String,
            "textarea_5": String,
        },
        "vaseUdaje": {
            "radio_6": String,
            "text_7": String,
            "text_8": String,
            "email_9": String,
            "tel_10": String,
            "checkbox_11": Boolean,
        }
    })

    new ContactForm(req.body).save()

    return res.status(200).json({
        body: req.body,
        query: req.query,
        cookies: req.cookies,
    })
}

export default function (req, res) {
    try {
        handler(req, res)
    } catch (error) {
        return res.status(500).json({
            detail: "Internal server error",
            message: error.message,
        })
    }
}
