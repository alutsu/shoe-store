require 'sidekiq/web'

Rails.application.routes.draw do
  mount Sidekiq::Web => '/sidekiq'

  namespace :api, defaults: { format: 'json' } do
    namespace :v1 do
      namespace :dashboard do
        resources :stores, only: %i[index]
        resources :shoe_models, only: %i[index]
      end
    end
  end
end
