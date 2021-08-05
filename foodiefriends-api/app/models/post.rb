class Post < ApplicationRecord
    belongs_to :user
    has_many :ingredients
    has_many :directions
    has_many :likes
    validates :img, :name, presence: true
end
