Rails.application.routes.draw do
  root to: 'home#index'

  scope '(:locale)', locale: /en|ru/ do
    get '/', to: 'home#index', as: 'root_localized'
  end
end
