class GifSerializer < ActiveModel::Serializer
  attributes :id, :url
  has_many :puns
end
