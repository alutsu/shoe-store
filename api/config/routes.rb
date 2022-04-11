Rails.application.routes.draw do
  get '/api/stores/dashboard', to: 'stores#index'
end
