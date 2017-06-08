class Pun < ApplicationRecord
  belongs_to :user, optional: true
  belongs_to :gif
end
