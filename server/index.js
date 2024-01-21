import express from 'express'
import cors from 'cors'
const port = 4040

const app = express()

app.use(cors({
    origin: "*"
}));


app.get('/', (req, res) => {
    const text = req.query.text
    res.json({ html: `<p class="text-xl text-white">${text} </p>` })
})



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


