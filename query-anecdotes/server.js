import jsonServer from 'json-server'

const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

const validator = (request, response, next) => {
  console.log()

  const { content, votes } = request.body

  console.log('ERRRR', request.method, votes)

  console.log('validator', request.body, content)

  if (request.method==='POST' && (!content || content.length<5) ) {
    return response.status(400).json({
      error: 'too short anecdote, must have length 5 or more'
    })
  }
  else if (request.method==='PUT' && (!votes) ) {
    return response.status(400).json({
      error: `invalid votes ${votes}`
    })
  }
  else {
    next()
  }
}

server.use(middlewares)
server.use(jsonServer.bodyParser)
server.use(validator)
server.use(router)
const port = 3001
server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`)
})
