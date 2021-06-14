class PostSerializer < ActiveModel::Serializer
  belongs_to :user
  attributes :id, :img, :name, :directions, :ingredients
end
