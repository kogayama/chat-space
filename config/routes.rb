Rails.application.routes.draw do
  devise_for :users do
    get '/users/sign_out' => 'devise/sessions#destroy'
  end
  root "messages#index"
  resources :users, only: [:edit, :update]
end