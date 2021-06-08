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
