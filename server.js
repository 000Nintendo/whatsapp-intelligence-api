const dotenv = require('dotenv')
dotenv.config()

const { mongo, apollo } = require('./app')

const main = async () => {
    await mongo.connect()

    const { app } = require('./app')

    const port = process.env.PORT || 8000
    const webServer = await app.listen(port, () => console.log(`Api Server is listening to port ${port}...`))
    webServer.setTimeout(60000)
}

main()

