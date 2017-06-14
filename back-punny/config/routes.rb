Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :puns, only: [:index, :create, :show, :update, :destroy]
      resources :gifs, only: [:index, :create, :show]
      resources :users, only: [:index, :create, :show]
      post '/auth', to: 'auth#create'
      # get '/today', to: 'puns#show_todays'
    end
  end
end
