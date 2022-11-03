import fetch from "node-fetch"


export default async function handler (req, res) {
    console.log(req.body)
    await fetch(`${process.env.MONGODB_ENDPOINT}/action/insertOne`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Request-Headers": "*",
            "api-key": process.env.MONGODB_KEY,
        },
        body: JSON.stringify({
            database: "db",
            dataSource: "Cluster0",
            collection: "contactForm",
            document: req.body,
        }),
    }).then(res => res.json()).then(data => {
        console.log("SUCCESS")
        res.status(201).json(data)
    }).catch(err => {
        res.status(500).json({
            detail: "Internal server error",
            message: err.message,
        })
    })
}
