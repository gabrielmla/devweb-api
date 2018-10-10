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
    "url": "/chapter/:id",
    "title": "Delete Chapter",
    "name": "DeleteChapter",
    "group": "Chapter",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>Chapters unique ID.</p>"
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
    "filename": "resources/chapter/chapter.router.js",
    "groupTitle": "Chapter"
  },
  {
    "type": "get",
    "url": "/chapter",
    "title": "Get all Chapters of one Author (User)",
    "name": "GetChapters",
    "group": "Chapter",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "user_id",
            "description": "<p>Id of the author.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "chapters",
            "description": "<p>All chapters with the author id registred.</p>"
          }
        ]
      }
    },
    "filename": "resources/chapter/chapter.router.js",
    "groupTitle": "Chapter"
  },
  {
    "type": "put",
    "url": "/fic/addChapter",
    "title": "Add a chapter to a Fic _chapters field.",
    "name": "GetChapters",
    "group": "Chapter",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "fic_id",
            "description": "<p>Id of the fic.</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "chapter_id",
            "description": "<p>Id of the chapter.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "result",
            "description": "<p>The fic.</p>"
          },
          {
            "group": "Success 200",
            "optional": false,
            "field": "String",
            "description": "<p>msg The operation result message.</p>"
          }
        ]
      }
    },
    "filename": "resources/fic/fic.router.js",
    "groupTitle": "Chapter"
  },
  {
    "type": "get",
    "url": "/fic/removeChapter",
    "title": "Remove a chapter from a Fic _chapters field.",
    "name": "GetChapters",
    "group": "Chapter",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "fic_id",
            "description": "<p>Id of the fic.</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "chapter_id",
            "description": "<p>Id of the chapter.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "result",
            "description": "<p>The fic.</p>"
          },
          {
            "group": "Success 200",
            "optional": false,
            "field": "String",
            "description": "<p>msg The operation result message.</p>"
          }
        ]
      }
    },
    "filename": "resources/fic/fic.router.js",
    "groupTitle": "Chapter"
  },
  {
    "type": "get",
    "url": "/chapter",
    "title": "Get all Chapters",
    "name": "GetChapters",
    "group": "Chapter",
    "version": "1.0.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "chapters",
            "description": "<p>All chapters registred.</p>"
          }
        ]
      }
    },
    "filename": "resources/chapter/chapter.router.js",
    "groupTitle": "Chapter"
  },
  {
    "type": "get",
    "url": "/chapter",
    "title": "Get all Chapters",
    "name": "GetChapters",
    "group": "Chapter",
    "version": "1.0.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "chapter.title",
            "description": "<p>Title of the Chapter.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "chapter._author",
            "description": "<p>User id author of the Chapter.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "chapter._fic",
            "description": "<p>Fic id that the Chapter belongs.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "chapter.text",
            "description": "<p>Text of the Chapter.</p>"
          }
        ]
      }
    },
    "filename": "resources/chapter/chapter.router.js",
    "groupTitle": "Chapter"
  },
  {
    "type": "get",
    "url": "/fic/user/:user_id",
    "title": "Get all Fics of one Author (User)",
    "name": "GetChapters",
    "group": "Chapter",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "user_id",
            "description": "<p>Id of the author.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "chapters",
            "description": "<p>All Fics with the author id registred.</p>"
          }
        ]
      }
    },
    "filename": "resources/fic/fic.router.js",
    "groupTitle": "Chapter"
  },
  {
    "type": "post",
    "url": "/chapter",
    "title": "Create a Chapter",
    "name": "PostChapter",
    "group": "Chapter",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "title",
            "description": "<p>Title of the Chapter.</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "_author",
            "description": "<p>User id author of the Chapter.</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "_fic",
            "description": "<p>Fic id that the Chapter belongs.</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "text",
            "description": "<p>Text of the Chapter.</p>"
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
            "field": "result.title",
            "description": "<p>Title of the Chapter.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result._author",
            "description": "<p>User id author of the Chapter.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result._fic",
            "description": "<p>Fic id that the Chapter belongs.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.text",
            "description": "<p>Text of the Chapter.</p>"
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
    "filename": "resources/chapter/chapter.router.js",
    "groupTitle": "Chapter"
  },
  {
    "type": "put",
    "url": "/chapter/:id",
    "title": "Update a Chapter",
    "name": "PutChapter",
    "group": "Chapter",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": true,
            "field": "title",
            "description": "<p>Title of the Chapter.</p>"
          },
          {
            "group": "Parameter",
            "optional": true,
            "field": "_author",
            "description": "<p>User id author of the Chapter.</p>"
          },
          {
            "group": "Parameter",
            "optional": true,
            "field": "_fic",
            "description": "<p>Fic id that the Chapter belongs.</p>"
          },
          {
            "group": "Parameter",
            "optional": true,
            "field": "text",
            "description": "<p>Text of the Chapter.</p>"
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
            "field": "result.title",
            "description": "<p>Title of the Chapter.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result._author",
            "description": "<p>User id author of the Chapter.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result._fic",
            "description": "<p>Fic id that the Chapter belongs.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.text",
            "description": "<p>Text of the Chapter.</p>"
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
    "filename": "resources/chapter/chapter.router.js",
    "groupTitle": "Chapter"
  },
  {
    "type": "delete",
    "url": "/fic/:fic_id",
    "title": "Delete Fic",
    "name": "DeleteFic",
    "group": "Fic",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "id",
            "description": "<p>Fics unique ID.</p>"
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
    "filename": "resources/fic/fic.router.js",
    "groupTitle": "Fic"
  },
  {
    "type": "get",
    "url": "/fic?field=value",
    "title": "Search for Fics",
    "name": "GetFics",
    "group": "Fic",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "query",
            "description": "<p>The search terms with repective search fields. Ex: title=test</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "fics",
            "description": "<p>All fics that match with the query.</p>"
          }
        ]
      }
    },
    "filename": "resources/fic/fic.router.js",
    "groupTitle": "Fic"
  },
  {
    "type": "get",
    "url": "/fic/:fic_id",
    "title": "Get all Fics",
    "name": "GetFics",
    "group": "Fic",
    "version": "1.0.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Title of the Fic.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_author",
            "description": "<p>User _id author of the Fic.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>Category of the Fic.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "genre",
            "description": "<p>Genres of the Fic.</p>"
          }
        ]
      }
    },
    "filename": "resources/fic/fic.router.js",
    "groupTitle": "Fic"
  },
  {
    "type": "get",
    "url": "/fic",
    "title": "Get all Fics",
    "name": "GetFics",
    "group": "Fic",
    "version": "1.0.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "fics",
            "description": "<p>All fics registred.</p>"
          }
        ]
      }
    },
    "filename": "resources/fic/fic.router.js",
    "groupTitle": "Fic"
  },
  {
    "type": "post",
    "url": "/fic",
    "title": "Create a Fic",
    "name": "PostFic",
    "group": "Fic",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "title",
            "description": "<p>Title of the Fic.</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "_author",
            "description": "<p>User _id author of the Fic.</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "category",
            "description": "<p>Category of the Fic.</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "genre",
            "description": "<p>Genres of the Fic.</p>"
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
            "field": "result.title",
            "description": "<p>Title of the Fic.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result._author",
            "description": "<p>User _id author of the Fic.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.category",
            "description": "<p>Category of the Fic.</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "result.genre",
            "description": "<p>Genres of the Fic.</p>"
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
    "filename": "resources/fic/fic.router.js",
    "groupTitle": "Fic"
  },
  {
    "type": "put",
    "url": "/fic/:fic_id",
    "title": "Update a Fic",
    "name": "PutFic",
    "group": "Fic",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": true,
            "field": "title",
            "description": "<p>Title of the Fic.</p>"
          },
          {
            "group": "Parameter",
            "optional": true,
            "field": "_author",
            "description": "<p>User _id author of the Fic.</p>"
          },
          {
            "group": "Parameter",
            "optional": true,
            "field": "category",
            "description": "<p>Category of the Fic.</p>"
          },
          {
            "group": "Parameter",
            "optional": true,
            "field": "genre",
            "description": "<p>Genres of the Fic.</p>"
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
            "field": "result.title",
            "description": "<p>Title of the Fic.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result._author",
            "description": "<p>User _id author of the Fic.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.category",
            "description": "<p>Category of the Fic.</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "result.genre",
            "description": "<p>Genres of the Fic.</p>"
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
    "filename": "resources/fic/fic.router.js",
    "groupTitle": "Fic"
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
