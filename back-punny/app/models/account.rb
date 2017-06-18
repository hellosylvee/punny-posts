class Account < ApplicationRecord
  has_many :puns
  has_many :users, through: :puns
  belongs_to :user
  has_secure_password
end
