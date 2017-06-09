class ApplicationController < ActionController::API
  private

  def authorize_account
    if token.present?
      if !current_ account.present?
        render json: {error: 'Token invalid'}
      end
    else
      render json: {error: 'No Authorization Present'} and return
    end
  end

  def current_account
    decoded = decode(token)
    current_account = Account.find_by(id: decoded.first['account_id'])
  end

  def decode(token)
    decoded = JWT.decode(token, ENV['JWT_SECRET'], true, {algorithm: ENV['JWT_ALGORITHM']})
  end

  def token
    token = request.headers['Authorization']
  end
end
