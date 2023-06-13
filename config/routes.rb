Rails.application.routes.draw do
  resources :users, only: [:index]
  resources :blogs do
    resources :comments, only: [:create, :destroy]
  end

  # User
  post '/signup', to: 'users#create'
  get '/me', to: 'users#show'

  # Sessions
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

end
