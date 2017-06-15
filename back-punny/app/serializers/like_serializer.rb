class LikeSerializer < ActiveModel::Serializer
  attributes :id
  belongs_to :pun
  belongs_to :user
end
