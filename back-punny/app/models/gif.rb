class Gif < ApplicationRecord
  has_many :puns
  has_many :users, through: :puns
  has_many :likes
  has_many :users, through: :likes
end
