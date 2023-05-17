#Print Your Whole HTTP Request

This repository contains a Node.js service that can receive HTTP requests to the endpoint /api/printrequest and return the whole HTTP request information in the format:

```JSON
{
  "method": "GET",
  "url": "/api/printrequest",
  "headers": {
    "Accept": "*/*",
    "Connection": "close",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.84 Safari/537.36"
  },
  "body": ""
}
```

## Example
Here is an example of an HTTP request to the endpoint /api/printrequest:

Code snippet
```
$ curl -X GET http://localhost:3000/api/printrequest
```

The response will be a JSON object containing the whole HTTP request information:

```JSON
{
  "method": "GET",
  "url": "/api/printrequest",
  "headers": {
    "Accept": "*/*",
    "Connection": "close",
    "User-Agent": "curl/7.79.1"
  },
  "body": ""
}
```