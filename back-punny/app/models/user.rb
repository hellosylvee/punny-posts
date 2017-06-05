class User < ApplicationRecord
  has_many :puns
  has_many :gifs, through: :puns
end
