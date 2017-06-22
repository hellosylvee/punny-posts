require 'date'

 class Api::V1::PunsController < ApplicationController
   before_action

  def index
    if params[:date].present?
      puns = Pun.todays_puns
      date = Date.parse(params[:date])
      puns = Pun.puns_by_day(date)
      render json: puns
    else
      puns = Pun.all
      render json: puns
    end
  end

  def create
    # gif = Gif.create(url: params[:gif][:url], img_url: params[:gif][:img_url])
    # pun = Pun.new(pun_params)
    # pun.gif_id = gif.id
    # user = User.find_by(first_name: params[:user][:first_name])
    # account = Account.find_by(username: params[:account][:username])
    # account.user_id = user.id
    # pun.user_id = user.id

    gif = Gif.create(url: params[:gif][:url], img_url: params[:gif][:img_url])
    pun = Pun.new(pun_params)
    pun.gif_id = gif.id
    user = User.find_by(first_name: params[:user][:first_name])
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

  def destroy
    pun = Pun.find(params[:id])
    pun.destroy
    render json: pun
  end

  private

  def pun_params
    params.require(:pun).permit(:pun, :user_id, :gif_id)
  end
end
