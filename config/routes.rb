# frozen_string_literal: true

Rails.application.routes.draw do
  resources :genres
  resources :movies

  get "up" => "rails/health#show", as: :rails_health_check
end
