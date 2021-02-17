class GameSerializer
  include JSONAPI::Serializer
  attributes :category_id, :language
  
end
