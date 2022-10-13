## Overview

There are two data sets available for use. The first is a file called users.json which contains a list of users and some metadata about them. The second is a file called comments.json which is a list of comments. Each comment can optionally have a parent comment making it a reply to the parent. All comments have valid user ids.

## Requirements

Design and implement a comment section similiar to reddit.com.

All NPM packages are available for your use along with choosing whichever framework of your preference.

- [x] Ability to view a list of users
  - [x] view their email
  - [x] view their username
  - [x] view their avatar profile picture
- [x] Be able to view comments and replies
- [x] Ability to expand or collapse comments

## File Response Structures

### Users

path = /assets/users.json

Response:

```ts
type UserId = string; // uuid
interface User {
  id: UserId; // uuid
  name: string; // username
  email: string; // email
  avatar: string; // url of an avatar image
}

type UserJsonDto = User[];
```

### Comments

path = /assets/comments.json

Response:

```ts
type CommentId = string; // uuid
interface Comment {
  id: CommentId; // comment uuid
  parentId: CommentId | null; // uuid of the parent comment if it exists
  userId: UserId; // uuid of the user
  message: string; // short sentance
}

type CommentJsonResponse = Comment[];
```
