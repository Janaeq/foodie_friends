class Direction < ApplicationRecord
    belongs_to :post
    validates :direction
end