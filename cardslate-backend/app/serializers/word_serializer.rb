class WordSerializer < ActiveModel::Serializer
  attributes :id, :name, :image
  belongs_to :category 
end
