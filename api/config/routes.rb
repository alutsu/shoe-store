require 'sidekiq/web'

Rails.application.routes.draw do
  mount Sidekiq::Web => '/sidekiq'

  namespace :api, defaults: { format: 'json' } do
    namespace :v1 do
      namespace :dashboard do
        resources :stores, only: %i[index show]
        resources :store_events, only: %i[index]
      end
    end
  end
end
