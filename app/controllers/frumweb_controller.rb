class FrumwebController < ApplicationController
  def index
    @me = Frumweb.index
  end

  def home
    @me = Frumweb.home
  end

  def hello
    render json: Frumweb.hello_world
  end
end
