# README

Step 1: Create a New Rails Application
* rails new todo-application -d=postgresql --webpacker=react
* cd todo-application
* rails db:create
* rails g controller pages home my_todo_items
* yarn add bootstrap jquery popper.js

Step 2: Install and Configure Devise
* add gem 'devise'
* bundle install
* rails generate devise:install
* Open config/environments/development.rb and add config.action_mailer.default_url_options = { host: 'localhost', port: 3000 }
* rails generate devise User
* rails db:migrate
* create shared files (see code)

Style Login Page (Optional)
* rails generate devise:views
* Edit app/views/devise/sessions/new.html.erb

Step 3: Create Todo Item Model
* rails g model TodoItem title user:references complete:boolean
* rails db:migrate

Set 4: Create the API
* rails g controller api/v1/todo_items

Step 5: Setup working React + Redux
* npm install --save redux babel-polyfill reselect react-redux redux-thunk axios redux-form lodash
* npm install --save-dev redux-devtools-extension
* npm install --save react-router-dom
* yarn add react-router-dom bootstrap jquery popper.js
* npm install @types/popper.js
* yarn add @popperjs/core
* yarn install
