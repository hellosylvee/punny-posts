class PunSerializer < ActiveModel::Serializer
  attributes :id, :pun
  belongs_to :user
  belongs_to :gif
end
