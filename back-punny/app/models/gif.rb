class Gif < ApplicationRecord
  has_many :puns
  has_many :users, through: :puns
end
