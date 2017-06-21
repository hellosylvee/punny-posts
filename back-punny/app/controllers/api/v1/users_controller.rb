 class Api::V1::UsersController < ApplicationController
  #  before_action :authorize_account!

  def index
    # authorize_account!
    users = User.all
    render json: users
  end

  # def create
  #   user = User.create(user_params)
  #   render json: user
  # end

  def create
    user = User.create(user_params)
    account = Account.new(username: params[:account][:username], password: params[:account][:password])
    account.user_id = user.id
    account.save
    render json: user
  end

  private

  def user_params
    params.require(:user).permit(:first_name, :last_name)
  end
end
