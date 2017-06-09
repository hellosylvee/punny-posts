class Account < ApplicationRecord
  has_many :puns
  has_many :users, through: :puns
  has_secure_password
end
