define({ "api": [
  {
    "type": "post",
    "url": "/user",
    "title": "Create user session",
    "name": "Login",
    "group": "Auth",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "username",
            "description": "<p>Username name of the User.</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "password",
            "description": "<p>Password of the User.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Login successful.</p>"
          }
        ]
      }
    },
    "filename": "resources/auth/auth.router.js",
    "groupTitle": "Auth"
  },
  {
    "type": "delete",
    "url": "/auth",
    "title": "Delete user session",
    "name": "Logout",
    "group": "Auth",
    "version": "1.0.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Logged out.</p>"
          }
        ]
      }
    },
    "filename": "resources/auth/auth.router.js",
    "groupTitle": "Auth"
  },
  {
    "type": "get",
    "url": "/auth",
    "title": "Get the current logged user (if there is one)",
    "name": "Status",
    "group": "Auth",
    "version": "1.0.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>The logged user.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>True = if there is a user | False = if there is not a user.</p>"
          }
        ]
      }
    },
    "filename": "resources/auth/auth.router.js",
    "groupTitle": "Auth"
  },
  {
    "type": "delete",
    "url": "/user/:id",
    "title": "Delete User",
    "name": "DeleteUser",
    "group": "User",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>Users unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "msg",
            "description": "<p>Response message.</p>"
          }
        ]
      }
    },
    "filename": "resources/user/user.router.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/user/:id",
    "title": "Get User",
    "name": "GetUser",
    "group": "User",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>Users unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "profile_name",
            "description": "<p>Profile name of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Username name of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email of the User.</p>"
          }
        ]
      }
    },
    "filename": "resources/user/user.router.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/user",
    "title": "Get all Users",
    "name": "GetUsers",
    "group": "User",
    "version": "1.0.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "users",
            "description": "<p>All users registred.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.profile_name",
            "description": "<p>Profile name of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.username",
            "description": "<p>Username name of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.email",
            "description": "<p>Email of the User.</p>"
          }
        ]
      }
    },
    "filename": "resources/user/user.router.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/user",
    "title": "Create a User",
    "name": "PostUser",
    "group": "User",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "profile_name",
            "description": "<p>Profile name of the User.</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "username",
            "description": "<p>Username name of the User.</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "email",
            "description": "<p>Email of the User.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "result",
            "description": "<p>The operation result.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.profile_name",
            "description": "<p>Profile name of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.username",
            "description": "<p>Username name of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.email",
            "description": "<p>Email of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Response message.</p>"
          }
        ]
      }
    },
    "filename": "resources/user/user.router.js",
    "groupTitle": "User"
  },
  {
    "type": "put",
    "url": "/user/:id",
    "title": "Update a User",
    "name": "PutUser",
    "group": "User",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": true,
            "field": "profile_name",
            "description": "<p>Optional updated profile_name field to the User.</p>"
          },
          {
            "group": "Parameter",
            "optional": true,
            "field": "username",
            "description": "<p>Optional updated username name to the User.</p>"
          },
          {
            "group": "Parameter",
            "optional": true,
            "field": "email",
            "description": "<p>Optional updated email to the User.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "result",
            "description": "<p>The operation result.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.profile_name",
            "description": "<p>Profile name of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.username",
            "description": "<p>Username name of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.email",
            "description": "<p>Email of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Response message.</p>"
          }
        ]
      }
    },
    "filename": "resources/user/user.router.js",
    "groupTitle": "User"
  }
] });
