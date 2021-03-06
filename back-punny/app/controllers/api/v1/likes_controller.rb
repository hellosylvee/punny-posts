class Api::V1::LikesController < ApplicationController

  def index
    likes = Like.all
    render json: likes
  end

  def create
    like = Like.new
    like.user_id = User.find(params[:user][:id]).id
    like.pun_id = Pun.find(params[:pun][:id]).id
    like.save
    render json: like
  end

  private

  def like_params
    params.require(:like).permit(:user_id, :pun_id)
  end
end
