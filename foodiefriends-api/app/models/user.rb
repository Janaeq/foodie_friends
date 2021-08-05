class User < ApplicationRecord
    has_secure_password
    has_many :posts
    has_many :likes
    has_many :liked_posts, through: :likes, source: :post
    validates :username, presence: true, uniqueness: true
    validates :password, presence: true
end
