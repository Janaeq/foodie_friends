# for future implementation

class Ingredient < ApplicationRecord
    belongs_to :post
    validates :ingredient, presence: true
end