# RESTful Sentence API

A simple restful API that allows the user to perform CRUD operations on a MongoDB.

<br>

## Installation

```
git clone git@github.com:OrangeRed/restful-sentence-api.git

cd restful-sentence-api

docker-compose up
```

<br>

## Endpoints

### Get All Entries from Database

- `GET /all`

Example

```http
GET https://localhost:3000/all
```

Response

```json
{
  "sentences": [
    {
      "_id": "60e38eff1cd4f94708ef1df8",
      "source": "bob",
      "eng": "Howdy",
      "jap": "おはよう",
      "date": "2021-07-05T23:00:15.061Z",
      "__v": 0
    }
  ]
}
```

<br>

### Get Specific Entries from Database

- `GET /search/id/:id`
- `GET /search/src/:source`
- `GET /search/en/:eng`
- `GET /search/jp/:jap`

Example

```http
GET https://localhost:3000/search/src/bob
```

Response

```json
{
  "sentences": [
    {
      "_id": "60e38eff1cd4f94708ef1df8",
      "source": "bob",
      "eng": "Howdy",
      "jap": "おはよう",
      "date": "2021-07-05T23:00:15.061Z",
      "__v": 0
    },
    {
      "_id": "60e606f9f2232819306d24bf",
      "source": "bob",
      "eng": "hello!!!!",
      "jap": "おはようございます",
      "date": "2021-07-07T19:56:41.676Z",
      "__v": 0
    }
  ]
}
```

<br>

### Upload Sentence to Database

- `POST /post`
- **source**: _string_&emsp;<span style="color: lightblue">required</span>
- **eng**: _string_&emsp;<span style="color: lightblue">required</span>
- **jap**: _string_&emsp;<span style="color: lightblue">required</span>

Example

```http
POST https://localhost:3000/post
Content-Type: application/json

{
  "source": "bob",
  "eng": "hello",
  "jap": "おはよう"
}
```

Response

```json
{
  "created": {
    "_id": "60ea5095e8624d16a47a78c5",
    "source": "bob",
    "eng": "hello",
    "jap": "おはよう",
    "date": "2021-07-11T01:59:49.403Z",
    "__v": 0
  }
}
```

<br>

### Update Sentence in Database

- `PATCH /patch`
- **id**: _string_&emsp;<span style="color: lightblue">required</span>
- **eng**: _string_&emsp;<span style="color: PaleGoldenRod">optional</span>
- **jap**: _string_&emsp;<span style="color: PaleGoldenRod">optional</span>

Example

```http
POST https://localhost:3000/patch
Content-Type: application/json

{
  "id": "60ea5095e8624d16a47a78c5",
  "eng": "hello world",
  "jap": "おはよう"
}
```

Response

```
Entry 60ea5095e8624d16a47a78c5 successfully patched
```

<br>

### Delete Sentence in Database

- `DELETE /delete`
- **id**: _string_&emsp;<span style="color: lightblue">required</span>

Example

```http
POST https://localhost:3000/delete
Content-Type: application/json

{
  "id": "60ea5095e8624d16a47a78c5",
}
```

Response

```
Entry 60ea5095e8624d16a47a78c5 deleted
```
