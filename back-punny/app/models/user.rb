class User < ApplicationRecord
  has_one :account
  has_many :puns
  has_many :gifs, through: :puns
  has_many :likes
  mas_many :gifs, through: :likes
end
