class PostSerializer < ActiveModel::Serializer
  attributes :id, :img, :name, :directions, :ingredients, :user
end
