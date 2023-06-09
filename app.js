const express = require('express')
const app = express()

app.post('/hello', function (req, res) {
  res.json({
    name: 'hello',
    message: 'I am message'
  })
})


app.use('/api/seerequest', function (req, res) {
  const method = req.method;
  const url = req.url;
  const headers = req.headers;
  const body = req.body;
  const host = req.get('host');
  const origin = req.get('origin');

  // Log the request information to the console
  console.log(`Request method: ${method}`);
  console.log(`Request host: ${host}`);
  console.log(`Request origin: ${origin}`);
  console.log(`Request URL: ${url}`);
  console.log(`Request headers: ${JSON.stringify(headers, null, 2)}`);
  console.log(`Request body: ${JSON.stringify(body, null, 2)}`);

  res.json({
    host,
    origin,
    method,
    url,
    headers,
    body
  })
})

app.use(express.static('public'))

app.get('/', function (req, res) {
  res.send('Hello World!')
})

const port = process.env.PORT || 3000

app.listen(port, function () {
  console.log(`Example app listening on port ${port}! \n http://localhost:${port}`)
})
