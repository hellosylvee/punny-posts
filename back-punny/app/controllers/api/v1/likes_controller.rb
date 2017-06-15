class Api::V1::LikesController < ApplicationController
  # before_action :num_of_likes!

  def index
    likes = Like.all
    render json: likes
  end

  def create
    like = Like.new(like_params)
    like.user_id = user.id && like.pun_id = pun.id
    like.save
    render json: like
  end

  private

  def like_params
    params.require(:like).permit(:user_id, :pun_id)
  end
end
