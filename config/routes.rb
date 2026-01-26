Rails.application.routes.draw do
  devise_for :users

  root "posts#index"

  resources :posts do
    resource :like, only: [:create, :destroy]
    resources :comments, only: [:create, :destroy]
  end
  resources :users, only: [] do
  resource :follow, only: [:create, :destroy]
end
get "users/search", to: "users#search"

resources :conversations, only: [:index, :show, :create] do
  resources :messages, only: :create
end

end
