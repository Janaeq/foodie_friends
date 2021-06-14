class Post < ApplicationRecord
    belongs_to :user
    validates :img, :name, :directions, :ingredients, presence: true
end
