Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :puns, only: [:index, :create, :show, :update, :destroy]
      resources :gifs, only: [:index, :create, :show]
      resources :users, only: [:index, :create, :show]
      resources :likes, only: [:index, :create, :show, :update]
      post '/auth', to: 'auth#create'
      # get '/puns/today/:date', to: 'puns#show_all'
    end
  end
end
