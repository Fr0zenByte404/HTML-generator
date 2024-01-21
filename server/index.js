import express from 'express'
import cors from 'cors'
const port = 4040

const app = express()

app.use(cors({
    origin: "*"
}));


app.get('/', (req, res) => {
    const text = req.query.text
    res.json({ html: `<div className="bg-white"><p>Hello, ${text} from server </p></div>`, text })
})



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


