const corsMiddleware = (req, res, next) => {
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5174')
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, POST, GET, PUT, DELETE')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
    return res.status(200)
  }
  if (req.method === 'POST') {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5174')
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, POST, GET, PUT, DELETE')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
  }
}


module.exports = { corsMiddleware }
