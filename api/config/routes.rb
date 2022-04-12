Rails.application.routes.draw do
  
  namespace :api do
    namespace :v1 do
      namespace :dashboard do
        resources :stores, only: %i[index]
        resources :shoe_models, only: %i[index]
      end
    end
  end
end
