Rails.application.routes.draw do
  devise_for :users
  authenticated :user do
    root "pages#my_todo_items", as: :authenticated_root
  end

  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :todo_items, only: [:index, :show, :create, :update, :destroy]
    end
  end

  root 'pages#home' # this will nagivate to homepage to avoid navigating to default rails page
end
