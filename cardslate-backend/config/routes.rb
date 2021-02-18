Rails.application.routes.draw do
  resources :words
  resources :images
  resources :categories
  resources :games
  resources :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
