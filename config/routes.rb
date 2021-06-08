Rails.application.routes.draw do
  get 'pages/my_todo_items'
  root 'pages#home'
end
