 class Api::V1::PunsController < ApplicationController
   before_action

  def index
    puns = Pun.all
    render json: puns
  end

  def create
    pun = Pun.create(pun_params)
    render json: pun
  end

  def show
    @pun = Pun.find(params[:id])
  end

  def update

  end

  def delete

  end

  private

  def pun_params
    params.require(:pun).permit(:pun, :user_id, :gif_id)
  end
end
