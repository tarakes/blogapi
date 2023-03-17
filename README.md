
# BlogAPI

## Introduction

BlogAPI is a RESTful API that allows users to create blog posts. Users can sign up for an account and log in to create their blog posts.

## Endpoints

### User Endpoints

#### POST /user/signup

Create a new user account.

**Request Format**

```json
{
  "name": "John Doe",
  "email": "john.doe@example.com",
  "password": "password123"
}
```
**Response Format**
 #### http code 201
```json
{
  "token":"hbGcikpXVCJ.xjdjsj...",
  "message":"user created"
}
```
#### POST /user/login
login to account

**Request Format**

```json
{

  "email": "john.doe@example.com",
  "password": "password123"
}
```
**Response Format**

```json
{
  "token":"hbGcikpXVCJ.xjdjsj...",
  "message":"logged in successfully"
}
```
### Blog Endpoints

#### POST /blog/create

Create a blog post

**Request Format**


```json
{
  "title":"my first blog",
  "content":"this is the blog post"
}
```
**Header**
```
    "Authorization": "Bearer hbGcikpXVCJ.xjdjsj..."
```
### Note: 
#### No need to pass author field,
#### author field will  be ref objectID of user decrypted from token 


**Response** 
 #### http code 201
```json
{
    "message":"post created"
}
```

#### GET /blog/

Get all blog post

**Response Format**
```json
{
    "blogs": [
        {
            "_id": "641445b8af8d09e5b8b8178d",
            "title": "my first blog",
            "content": "this is the blog post",
            "author": {
                "_id": "6414414c3df24754a30cacb8",
                "name": "John Doe"
            },
            "created": "2023-03-17T10:49:28.096Z",
            "__v": 0
        }
    ]
}
```
## Error Handling
BlogAPI returns error responses with appropriate HTTP status codes for invalid requests or server errors.As examples below

**error Response**
 #### http code 401
```json
{
    "error":"unauthorize"
}
```
 #### http code 400
```json
{
    "error":"title not provided",
    "field":'title'
}
```
 #### http code 409
```json
{
    "error":"duplicate user"
}
```

## Deployment

I deployed the  api on vercel

```bash
 https://blogapi-gold.vercel.app
```

