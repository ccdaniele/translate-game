class CategorySerializer < ActiveModel::Serializer
  attributes :id, :name
  has_many :words 
  has_many :images
  has_many :games 
end
