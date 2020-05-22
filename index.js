const server = require('./api/server')

const PORT = process.env.PORT || 7777
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})