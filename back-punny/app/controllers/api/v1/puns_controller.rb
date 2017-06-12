 class Api::V1::PunsController < ApplicationController
   before_action

  def index
    puns = Pun.all
    render json: puns
  end

  def create
    gif = Gif.create(url: params[:gif][:url])
    pun = Pun.new(pun_params)
    pun.gif_id = gif.id
    user = User.create(first_name: params[:user][:first_name])
    pun.user_id = user.id
    # pun.user = current_account

    pun.save
    render json: pun
  end

  def show
    pun = Pun.find(params[:id])
  end

  def update
    pun = Pun.find(params[:id])
    pun.update(pun_params)
    render json: pun
  end

  def delete
    pun = Pun.find(params[:id])
    pun.destroy
    render json: pun
  end

  private

  def pun_params
    params.require(:pun).permit(:pun, :user_id, :gif_id)
  end
end
