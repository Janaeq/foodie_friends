# for future implementation

class Post < ApplicationRecord
    belongs_to :user
    has_many :ingredients
    has_many :directions
    validates :img, :name, :directions, :ingredients, presence: true
end
