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
          "content": "{\n   \"error\": false,\n   \"message\": \"Meetings Found\",\n   \"status\": 200,\n   \"data\": [\n           {\n       \"color\": {\n           \"primary\": string,\n           \"secondary\": string\n               },\n       \"meetingId\": string,\n       \"adminId\": string,\n       \"adminFullName\": string,\n       \"adminUserName\": string,\n       \"userId\": string,\n       \"userFullName\": string,\n       \"userEmail\": string,\n       \"start\": date,\n       \"end\": date,\n       \"place\": string,\n       \"title\": string\n           }\n       ]\n   }",
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
          "content": " {\n    \"error\": false,\n    \"message\": \"Users Found\",\n    \"status\": 200,\n    \"data\": {\n        \"userId\":string,\n        \"email\": string\n        \"firstName\": string,\n        \"lastName\": string,\n        \"userName\" : string,\n        \"countryCode\" : string,\n        \"mobileNumber\" : number,\n    }\n}",
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
          "content": " {\n    \"error\": false,\n    \"message\": \"User Found\",\n    \"status\": 200,\n    \"data\": {\n        \"userId\": \"C3IQqPS5\",\n        \"lastName\": \"yadav\",\n        \"admin\": true,\n        \"createdOn\": \"2020-01-03T10:03:01.000Z\",\n        \"verified\": true,\n        \"firstName\": \"bhupendra\",\n        \"userName\": \"Bhupen@000-admin\",\n        \"email\": \"bhupendra875319@outlook.com\",\n        \"countryCode\": \"+91\",\n        \"mobileNumber\": \"7032161147\",\n        \"resetPwdLinkExpiry\": \"2020-01-03T10:29:57.834Z\",\n        \"resetPwdToken\": \"ebd4857e-3a58-4dea-af79-43acd51fade9\"\n    }\n}",
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
    "url": "/api/v1/users/forgotPwd",
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
          "content": " {\n    \"error\": false,\n    \"message\": \"Token updated & reset link sent!\",\n    \"status\": 200,\n    \"data\": {\n        \"userId\": \"C3IQqPS5\",\n        \"lastName\": \"yadav\",\n        \"createdOn\": \"2020-01-03T10:03:01.000Z\",\n        \"verified\": true,\n        \"firstName\": \"bhupendra\",\n        \"userName\": \"Bhupen@000-admin\",\n        \"email\": \"bhupendra875319@outlook.com\",\n        \"countryCode\": \"+91\",\n        \"mobileNumber\": \"7032161147\",\n        \"resetPwdLinkExpiry\": \"2020-01-03T10:29:57.834Z\",\n        \"resetPwdToken\": \"ebd4857e-3a58-4dea-af79-43acd51fade9\"\n    }\n}",
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
    "name": "PostApiV1UsersForgotpwd"
  },
  {
    "group": "User",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/resetPwd",
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
    "name": "PostApiV1UsersResetpwd"
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
          "content": " {\n    \"error\": false,\n    \"message\": \"Signin successful\",\n    \"status\": 200,\n    \"data\": {\n        \"authToken\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqd3RpZCI6InVhaGVoNUFSIiwiaWF0IjoxNTc4MDQ2MzA2NjkxLCJleHAiOjE1NzgxMzI3MDYsInN1YiI6ImF1dGhUb2tlbiIsImlzcyI6Im1lZXRpbmdQbGFubmVyIiwiZGF0YSI6eyJ1c2VySWQiOiJDM0lRcVBTNSIsImxhc3ROYW1lIjoieWFkYXYiLCJhZG1pbiI6dHJ1ZSwidmVyaWZpZWQiOnRydWUsImZpcnN0TmFtZSI6ImJodXBlbmRyYSIsInVzZXJOYW1lIjoiQmh1cGVuQDAwMC1hZG1pbiIsImVtYWlsIjoiYmh1cGVuZHJhODc1MzE5QG91dGxvb2suY29tIiwiY291bnRyeUNvZGUiOiIrOTEiLCJtb2JpbGVOdW1iZXIiOiI3MDMyMTYxMTQ3In19.y4Y1Jjuc8TnuxTIpC_o9uQIJDIqUGlhXYcfgtHuMWDM\",\n        \"userDetails\": {\n            \"userId\": \"C3IQqPS5\",\n            \"lastName\": \"yadav\",\n            \"admin\": true,\n            \"verified\": true,\n            \"firstName\": \"bhupendra\",\n            \"userName\": \"Bhupen@000-admin\",\n            \"email\": \"bhupendra875319@outlook.com\",\n            \"countryCode\": \"+91\",\n            \"mobileNumber\": \"7032161147\"\n        }\n    }\n}",
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
          "content": " {\n    \"error\": false,\n    \"message\": \"User created\",\n    \"status\": 200,\n    \"data\": {\n        \"userId\": \"C3IQqPS5\",\n        \"lastName\": \"yadav\",\n        \"admin\": true,\n        \"createdOn\": \"2020-01-03T10:03:01.000Z\",\n        \"verified\": false,\n        \"_id\": \"5e0f1155a850640168de45b0\",\n        \"firstName\": \"bhupendra\",\n        \"userName\": \"Bhupen@000-admin\",\n        \"email\": \"bhupendra875319@outlook.com\",\n        \"countryCode\": \"+91\",\n        \"mobileNumber\": \"7032161147\",\n        \"verifyUserToken\": \"be88b551-8145-4559-8993-1e3f18a2662f\",\n        \"__v\": 0\n    }\n}",
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
