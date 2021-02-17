class CategorySerializer < ActiveModel::Serializer
  attributes :id, :name 
  has_many :words 
  has_many :games 
end
