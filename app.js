import express from 'express'
import cors from 'cors'
import root from './routes/index.js'
import placesRoutes from './routes/places.js'
import employeesRoutes from './routes/employees.js'
import costumesRoutes from './routes/costumes.js'
import requisitesRoutes from './routes/requisites.js'
import fileUpload from 'express-fileupload'

const app = express()
const port = process.env.PORT || 3000
const domain = process.env.DOMAIN
const allowedOrigins = [`http://${domain}:${port}`, 'http://localhost:5173']

app.use(
  cors({
    origin: allowedOrigins
  }),
  express.json()
)

app.use(fileUpload({safeFileNames: true}))
app.use('/places', placesRoutes)
app.use('/employees', employeesRoutes)
app.use('/costumes', costumesRoutes)
app.use('/requisites', requisitesRoutes)
app.use('/', root)
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(400).send('bad request')
})

app.listen(port, () => {
  console.log(`server is working! http://${domain}:${port}`)
})

export default app
