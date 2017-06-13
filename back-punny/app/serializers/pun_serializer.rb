class PunSerializer < ActiveModel::Serializer
  attributes :id, :pun, :created_at, :updated_at
  belongs_to :gif
  belongs_to :user
end
