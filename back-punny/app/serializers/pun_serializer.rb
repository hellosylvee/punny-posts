class PunSerializer < ActiveModel::Serializer
  attributes :id, :pun, :created_at, :updated_at, :likes
  belongs_to :gif
  belongs_to :user

  def likes
    object.likes.count
  end
end
