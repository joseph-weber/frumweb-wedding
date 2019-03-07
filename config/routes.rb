Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'frumweb#home'

  get 'frumweb', to: 'frumweb#home'

  get 'frumweb/index', to: 'frumweb#index'

  get 'frumweb/hello', to: 'frumweb#hello'

end
