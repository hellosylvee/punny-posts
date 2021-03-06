class Api::V1::AuthController < ApplicationController
  def create
    account = Account.find_by(username: params[:username])
    if account.present? && account.authenticate(params[:password])
      token = JWT.encode({account_id: account.id}, ENV['JWT_SECRET'], ENV['JWT_ALGORITHM'])
      render json: {
        username: account.username,
        user_id: account.user_id,
        token: token
      }
    else
      render json: {error: 'No account or password found.'}
    end
  end
end

# When user makes a POST request to /api/v1/auth, look at username and password.
# Find the account, and authenticate them
# If all is good, give them a special token that stores info about them.
