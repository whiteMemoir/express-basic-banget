const express = require('express')
const app = express()
const port = 3004

app.get("/", (req, res) => {
    res.send({
        status: "success",
        message: "Ini laman utama"
    })
})

app.get("/about", (req, res) => {
    res.send({
        status: "success",
        message: "Ini laman About"
    })
})

app.get("/profile", (req, res) => {
    res.send({
        status: "success",
        message: "Ini laman Profil Sayaa"
    })
})

app.get("/contact", (req, res) => {
    res.send({
        status: "success",
        message: "Ini laman Kontak Saya yang sudah berteman"
    })
})

app.use((req, res) => {
	res.status(404);
	res.send({
		status: "failed",
		message: `Resource ${req.originalUrl} not found!`,
	});
});

app.listen(port, () => console.log('Listening at port http://localhost:3004'))