class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :bio, :img, :first_name, :last_name, :posts
end
