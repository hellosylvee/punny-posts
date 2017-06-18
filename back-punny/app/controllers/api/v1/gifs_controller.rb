class Api::V1::GifsController < ApplicationController
  def index
    gifs = Gif.all
    render json: gifs
  end

  def create
    gif = Gif.create(gif_params)
    render json: gif
  end

  def show
    gif = Gif.find(params[:id])
    render json: gif
  end

  private

  def gif_params
    params.require(:gif).permit(:url, :img_url)
  end
end
