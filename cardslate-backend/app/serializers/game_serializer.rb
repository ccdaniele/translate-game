class GameSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :category_id, :language
  belongs_to :category
  belongs_to :user
  
end
