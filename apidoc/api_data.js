define({ "api": [
  {
    "group": "Meeting",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/meetings/userMeetings/:userId",
    "title": "Get all meetings of the user (current year only).",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of the user.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n   \"error\": false,\n   \"message\": \"Meetings Found\",\n   \"status\": 200,\n   \"data\": [\n           {\n       \"color\": {\n           \"primary\": string,\n           \"secondary\": string\n               },\n       \"meetingId\": string,\n       \"adminId\": string,\n       \"adminFullName\": string,\n       \"adminUserName\": string,\n       \"userId\": string,\n       \"userFullName\": string,\n       \"userEmail\": string,\n       \"start\": Date,\n       \"end\": Date,\n       \"place\": string,\n       \"title\": string\n           }\n       ]\n   }",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error occured while getting the meetings\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/meetings.js",
    "groupTitle": "Meeting",
    "name": "GetApiV1MeetingsUsermeetingsUserid"
  },
  {
    "group": "User",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/meetings/allUsers",
    "title": "Get all users using this app.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"Users Found\",\n    \"status\": 200,\n    \"data\": {\n        \"userId\":string,\n        \"email\": string\n        \"firstName\": string,\n        \"lastName\": string,\n        \"userName\" : string,\n        \"countryCode\" : string,\n        \"mobileNumber\" : Number,\n    }\n}",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error occured while getting users\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/meetings.js",
    "groupTitle": "User",
    "name": "GetApiV1MeetingsAllusers"
  },
  {
    "group": "User",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/users/userDetails/:userId",
    "title": "Get User Details.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of the user</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"User Found\",\n    \"status\": 200,\n    \"data\": {\n        \"lastName\": string,\n        \"admin\": Boolean,\n        \"createdOn\": Date,\n        \"verified\": Boolean,\n        \"userId\": string,\n        \"firstName\": string,\n        \"userName\": string,\n        \"email\": string,\n        \"countryCode\": string,\n        \"mobileNumber\": Number\n    }\n}",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n    \"error\": true,\n    \"message\": \"No User Found\",\n    \"status\": 500,\n    \"data\": null\n   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/user.js",
    "groupTitle": "User",
    "name": "GetApiV1UsersUserdetailsUserid"
  },
  {
    "group": "User",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/forgot",
    "title": "User Forgot Password.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"Reset Token Successful\",\n    \"status\": 200,\n    \"data\": {\n        \"userId\":string,\n        \"email\":string,\n        \"firstName\": string,\n        \"lastName\": string,\n        \"password\": string,\n        \"verified\" : Boolean,\n        \"createdOn\":Date,\n        \"resetPasswordExpires\":Date,\n        \"resetPasswordToken\" : string,\n        \"countryCode\" : string,\n        \"mobileNumber\" : Number\n    }\n}",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n        \"error\": true,\n        \"message\": \"Reset Token Failed\",\n        \"status\": 500,\n        \"data\": null\n       }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/user.js",
    "groupTitle": "User",
    "name": "PostApiV1UsersForgot"
  },
  {
    "group": "User",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/reset",
    "title": "User Reset Password.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>password of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "resetPasswordToken",
            "description": "<p>resetPasswordToken of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"Password successfully updated\",\n    \"status\": 200,\n    \"data\": {\n        \"n\": 1,\n        \"nModified\": 1,\n        \"ok\": 1\n    }\n}",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n        \"error\": true,\n        \"message\": \"Password update Failed\",\n        \"status\": 500,\n        \"data\": null\n       }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/user.js",
    "groupTitle": "User",
    "name": "PostApiV1UsersReset"
  },
  {
    "group": "User",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/verifyUser",
    "title": "User Verification.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "verifyToken",
            "description": "<p>verifyToken of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"Your account is successfully verified\",\n    \"status\": 200,\n    \"data\": {\n        \"n\": 1,\n        \"nModified\": 1,\n        \"ok\": 1\n        }\n    }\n}",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n     \"error\": true,\n     \"message\": \"Failed to verify the user\",\n     \"status\": 500,\n     \"data\": null\n    }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/user.js",
    "groupTitle": "User",
    "name": "PostApiV1UsersVerifyuser"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/logout/:userId",
    "title": "Logout currently logged-in user.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of the user. (body Params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"Logged Out Successfully\",\n    \"status\": 200,\n    \"data\": {\n        \"n\": 0,\n        \"ok\": 1\n    }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/user.js",
    "groupTitle": "users",
    "name": "PostApiV1UsersLogoutUserid"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/signin",
    "title": "api for user signin.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>E-mail ID of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>Password of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"signin Successful\",\n    \"status\": 200,\n    \"data\": {\n        \"authToken\":string,\n        \"userDetails\":{\n        \"userId\":string,\n        \"firstName\": string,\n        \"lastName\": string,                \n        \"email\":string,\n        \"mobileNumber\": string,\n        \"createdOn\":Date\n        }\n    }\n}",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Failed to signin\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/user.js",
    "groupTitle": "users",
    "name": "PostApiV1UsersSignin"
  },
  {
    "version": "1.0.0",
    "group": "users",
    "type": "post",
    "url": "/api/v1/users/signup",
    "title": "New User SignUp.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "firstName",
            "description": "<p>firstName of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "lastName",
            "description": "<p>lastName of the user. (body params)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "mobileNumber",
            "description": "<p>mobileNumber of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>password of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"User Created\",\n    \"status\": 200,\n    \"data\": {               \n        \"userId\":string,\n        \"firstName\": string,\n        \"lastName\": string,                \n        \"email\":string,\n        \"mobileNumber\": string,\n        \"password\": string,\n        \"createdOn\":Date\n    }\n}",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Failed to create user\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/user.js",
    "groupTitle": "users",
    "name": "PostApiV1UsersSignup"
  }
] });
