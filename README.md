# README

Step 1: Create a New Rails Application

rails new todo-application -d=postgresql --webpacker=react
cd todo-application
rails db:create
rails g controller pages home my_todo_items
yarn add bootstrap jquery popper.js
