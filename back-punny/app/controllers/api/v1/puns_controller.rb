class Api::V1::PunsController < ApplicationController
  def index
    puns = Pun.all
    render json: puns
  end

  def new
    pun = Pun.new
  end
end
