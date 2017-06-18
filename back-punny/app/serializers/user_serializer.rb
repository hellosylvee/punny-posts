class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :blurb
  # has_many :puns
  # has_many :likes
end
