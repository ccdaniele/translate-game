# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Category.destroy_all
Word.destroy_all

category_1 = Category.create(name: "Animals")
category_2 = Category.create(name: "Emotions")
category_3 = Category.create(name: "Foods")
category_4 = Category.create(name: "Objects")
category_5 = Category.create(name: "Sports")

animals = ["dog", "cat", "mouse", "bear", "tiger", "pig", "frog", "monkey", "bunny", 
    "horse", "butterfly", "bee", "chicken", "cow", "eagle", "penguin", "snail", 
    "snake", "octopus", "whale"]

animal_image = [ "🐶", "🐈", "🐭", "🐻", "🐯", "🐷", "🐸", "🐒", "🐰", "🐎", "🦋", "🐝", "🐓", "🐮", "🦅", "🐧", "🐌", "🐍", "🐙", "🐳" ]

emotions = ["happy", "sad", "laugh", "mad", "confused", "love", "nervous", "sick", "scared", "hungry", "drunk", "tired", "shocked", "angry", "embarrassed", "joy", "excited", "quiet", "curious", "silly" ]

emotions_image = [ "😄", "☹️", "😂", "😡", "🤷‍♂️", "🥰", "😬", "🤒", "😨", "🤤", "🥴" "🥱", "😱", "🤬", "🤦‍♂️", "🥳", "🤩", "🤫", "😯", "🤪"]

foods = ['apple', 'orange', 'banana', 'strawberry', 'corn', 'cheese', 'avocado', 'bacon', 'burger', 'egg', 'pizza', 'salad', 'cake', 'ice cream', 'popcorn', 'cookie', 'carrot', 'watermelon', 'cherry', 'bread']

foods_emoji = ['🍎', '🍊', '🍌', '🍓', '🌽', '🧀', '🥑', '🥓', '🍔', '🥚', '🍕', '🥗', '🍰', ' 🍦', '🍿', '🍪', '🥕', '🍉', '🍒', '🥖' ]

objects = ['headphones', 'umbrella', 'game controller', 'telephone', 'clock', 'television', 'money', 'computer', 'axe', 'hammer', 'pencil', 'key', 'knife', 'present', 'calendar', 'telescope', 'pen', 'scissors', 'car', 'taxi' ]

objects_emoji = ['🎧', '☂️', '🎮', '☎️', '⏰', '📺', '💵', '💻', '🪓', '🔨', '✏️', '🔑', '🔪', '🎁', '🗓', '🔭', '✒️', '✂️', '🚗' , '🚕'] 

sports = ['soccer', 'basketball', 'volleyball', 'baseball', 'tennis', 'american football', 'boxing', 'skiing', 'wrestling', 'swimming', 'cycling', 'weight lifting', 'horse back riding', 'lacross', 'badminton', 'kayaking', 'karate', 'skateboard', 'surfing', 'ballet' ]

sports_emoji = [ '⚽️', '🏀', '🏐', '⚾️', '🎾', '🏈', '🥊', '⛷', '🤼‍♂️', '🏊‍♀️', '🚵‍♂️', '🏋️‍♀️', '🏇', '🥍', '🏸', '🚣‍♂️', '🥋', '🛹', '🏄‍♂️', '🩰' ]



i=0
while i < 20 do 
    Word.create(name:animals[i], image: animal_image[i], category_id: 1)
    Word.create(name:emotions[i], image: emotions_image[i], category_id: 2)
    Word.create(name:foods[i], image: foods_emoji[i], category_id: 3)
    Word.create(name:objects[i], image: objects_emoji[i], category_id: 4)
    Word.create(name:sports[i], image: sports_emoji[i], category_id: 5)
    i +=1
end






