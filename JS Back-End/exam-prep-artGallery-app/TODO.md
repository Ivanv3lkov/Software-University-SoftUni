# Tasks

## Initial Setup
1. Initialize project - npm init --yes + index.js file
2. Install initial dependencies  / nodemon, express, expres-handlebars, bcrypt, jsonwebtoken, cookie-parser /
3. Add resources -> all html files in views folder. css + img folders to be moved in public folder that should be created too.
  * views folder should contain layouts folder with main.hbs file
4. Express config
  * body parser
  * static path
5. Configure express handlebars
6. Add router -> create routes.js file
7. Add home controller in new folder controllers
8. Add layout
9. Add home view/template -> views/home/index.hbs
10. Fix static assets and paths

## Database setup
1. Install mongoose
2. Configure mongoose -> create config folder, create db.js file
3. Create User model -> create folder models and User.js file in it.

## Authentication
1. Add auth controller
  * add controller to routes.js
2. Add login and register pages - add auth folder in views
  * modify hrefs in navigation
  * modify names in forms
3. Add post login and register actions
4. Create user with register -> create folder services -> authService.js
5. Hash password
6. Login action
7. Login service method / find user, validate password /
8. Generate gwt token
  * add secret in env.js in config folder
9. logout

## Notifications
1. Add notification element to layout

## Error handling
1. Add error mapper
2. Hash password

## Others
1. Auth middleware - create folder middlewares -> file authMiddlewares.js
2. Use http only cookie
3. Navigation links
4. Route guards
5. Add 404 page
6. User validation
7. global error handling