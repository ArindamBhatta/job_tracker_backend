# Server

To run the node server execute the below commands:

```
cd server
npm i
npm start
```

The server runs on `http://localhost:8111`.

#### The URL syntax:

`http://localhost:8111/api/{api_version}/{service_name}`

### API Version

as of now all the services come under `v1`

### Services (service_name)

- `login-or-signup`
  ```
      // Example http request
      const { data } = await axios.get(
        "http://localhost:8111/api/v1/login-or-signup",
        {
         "email": "arindambhattacharyya.ab@gmail.com"
        }
      );
  ```
