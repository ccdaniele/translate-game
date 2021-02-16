class UserSerializer
  include JSONAPI::Serializer
  attributes :name, :point
end
