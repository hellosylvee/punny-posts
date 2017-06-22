class User < ApplicationRecord
  has_secure_password
  has_many :puns
  has_many :gifs, through: :puns
  has_many :likes
  has_many :gifs, through: :likes
end
