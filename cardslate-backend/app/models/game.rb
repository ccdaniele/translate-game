class Game < ApplicationRecord
    belongs_to :user
    belongs_to :category 
    has_many :words, through: :categories
end
