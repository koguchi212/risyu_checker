Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :test, only: %i[index]
      resources :users, only: %i[index show]
      resources :classifications, only: %i[index]
      resources :lectures, only: %i[index show]
      resources :universities, only: %i[index] do
        resources :faculties, only: %i[index]
      end
      resources :faculties, only: %i[index] do
        resources :departments, only: %i[index]
      end

      mount_devise_token_auth_for 'User', at: 'auth', controllers: {
        registrations: 'api/v1/auth/registrations'
      }

      namespace :auth do
        resources :sessions, only: %i[index]
      end
    end
  end
end
