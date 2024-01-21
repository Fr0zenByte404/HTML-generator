import express from 'express'
import cors from 'cors'
const port = 4040

const app = express()

app.use(cors({
    origin: "*"
}));


app.get('/', (request, response) => {
    response.json({ html: `<div><p>Hello from server</p></div>` })
})



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


