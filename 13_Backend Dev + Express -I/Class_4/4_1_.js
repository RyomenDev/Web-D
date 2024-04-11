// comment
http://localhost:3000/api/v1//posts/create
{
    "title": "Blog-2",
    "body": "this is my second blog"
}

// post
http://localhost:3000/api/v1/comments/create
{
    "post": "66154f8dcba5d0a884836751",
    "user": "user1",
    "body": "good!!!"
}

// like post
http://localhost:3000/api/v1/likes/like
{
    "post": "661550f5cba5d0a884836762",
    "user": "user1"
}
