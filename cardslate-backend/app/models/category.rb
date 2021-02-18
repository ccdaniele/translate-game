class Category < ApplicationRecord
    has_many :games
    has_many :words
    has_many :images
end
