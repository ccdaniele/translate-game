class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :point
  has_many :games 
end
