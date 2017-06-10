class PunSerializer < ActiveModel::Serializer
  attributes :id, :pun
  belongs_to :gif
  belongs_to :user
end
