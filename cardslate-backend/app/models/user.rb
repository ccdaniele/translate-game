class User < ApplicationRecord
    has_many :games
    has_many :categories, through: :games 
end
