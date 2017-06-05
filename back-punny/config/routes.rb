Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :puns
    end
  end
end
