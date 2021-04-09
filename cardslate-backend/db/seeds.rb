# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Category.destroy_all
Word.destroy_all
Image.destroy_all
Game.destroy_all

category_1 = Category.create(name: "Animals")
category_2 = Category.create(name: "Emotions")
category_3 = Category.create(name: "Foods")
category_4 = Category.create(name: "Objects")
category_5 = Category.create(name: "Sports")

animals = ["dog", "cat", "mouse", "bear", "tiger", "pig", "frog", "monkey", "bunny", 
    "horse", "butterfly", "bee", "chicken", "cow", "eagle", "penguin", "snail", 
    "snake", "octopus", "whale"]

# animales = ["perro", "gato", "ratón", "oso", "tigre", "cerdo", "rana", "mono", "conejito", "caballo", "mariposa", "abeja" , "pollo", "vaca", "águila", "pingüino", "caracol", "serpiente", "pulpo", "ballena"]

# animaux = ["chien", "chat", "souris", "ours", "tigre", "cochon", "grenouille", "singe", "lapin", "cheval", "papillon", "abeille" , "poulet", "vache", "aigle", "pingouin", "escargot", "serpent", "poulpe", "baleine"]

animal_image = [ "🐶", "🐈", "🐭", "🐻", "🐯", "🐷", "🐸", "🐒", "🐰", "🐎", "🦋", "🐝", "🐓", "🐮", "🦅", "🐧", "🐌", "🐍", "🐙", "🐳" ]






emotions = ["happy", "sad", "laugh", "mad", "confused", "love", "nervous", "sick", "scared", "hungry", "drunk", "tired", "shocked", "angry", "embarrassed", "joy", "excited", "quiet", "curious", "silly" ]

# emociones = ["feliz", "triste", "risa", "enojado", "confundido", "amor", "nervioso", "enfermo", "asustado", "hambriento", "borracho", "cansado" , "sorprendido", "enojado", "avergonzado", "alegría", "emocionado", "tranquilo", "curioso", "tonto"]

# émotions = ["heureux", "triste", "rire", "fou", "confus", "amour", "nerveux", "malade", "peur", "faim", "ivre", "fatigué" , "choqué", "en colère", "embarrassé", "joie", "excité", "calme", "curieux", "idiot"]

emotions_image = [ "😄", "☹️", "😂", "😡", "🤷‍♂️", "🥰", "😬", "🤒", "😨", "🤤", "🥴" "🥱", "😱", "🤬", "🤦‍♂️", "🥳", "🤩", "🤫", "😯", "🤪"]




foods = ['apple', 'orange', 'banana', 'strawberry', 'corn', 'cheese', 'avocado', 'bacon', 'burger', 'egg', 'pizza', 'salad', 'cake', 'ice cream', 'popcorn', 'cookie', 'carrot', 'watermelon', 'cherry', 'bread']

# alimentos = ['manzana', 'naranja', 'plátano', 'fresa', 'maíz', 'queso', 'aguacate', 'tocino', 'hamburguesa', 'huevo', 'pizza', 'ensalada' , 'pastel', 'helado', 'palomitas de maíz', 'galleta', 'zanahoria', 'sandía', 'cereza', 'pan']

# foods = ['pomme', 'orange', 'banane', 'fraise', 'maïs', 'fromage', 'avocat', 'bacon', 'burger', 'œuf', 'pizza', 'salade' , 'gâteau', 'crème glacée', 'pop-corn', 'cookie', 'carotte', 'pastèque', 'cerise', 'pain']

foods_emoji = ['🍎', '🍊', '🍌', '🍓', '🌽', '🧀', '🥑', '🥓', '🍔', '🥚', '🍕', '🥗', '🍰', ' 🍦', '🍿', '🍪', '🥕', '🍉', '🍒', '🥖' ]




objects = ['headphones', 'umbrella', 'game controller', 'telephone', 'clock', 'television', 'money', 'computer', 'axe', 'hammer', 'pencil', 'key', 'knife', 'present', 'calendar', 'telescope', 'pen', 'scissors', 'car', 'taxi' ]

# objetos = ['auriculares', 'paraguas', 'controlador de juegos', 'teléfono', 'reloj', 'televisión', 'dinero', 'computadora', 'hacha', 'martillo', 'lápiz', 'tecla ',' cuchillo ',' presente ',' calendario ',' telescopio ',' bolígrafo ',' tijeras ',' coche ',' taxi ']

# objets = ['casque', 'parapluie', 'contrôleur de jeu', 'téléphone', 'regarder', 'télévision', 'argent', 'ordinateur', 'hache', 'marteau', 'crayon', 'clé ',' couteau ',' cadeau ',' calendrier ',' télescope ',' stylo ',' ciseaux ',' voiture ',' taxi']

objects_emoji = ['🎧', '☂️', '🎮', '☎️', '⏰', '📺', '💵', '💻', '🪓', '🔨', '✏️', '🔑', '🔪', '🎁', '🗓', '🔭', '✒️', '✂️', '🚗' , '🚕'] 




sports = ['soccer', 'basketball', 'volleyball', 'baseball', 'tennis', 'american football', 'boxing', 'skiing', 'wrestling', 'swimming', 'cycling', 'weight lifting', 'horse back riding', 'lacross', 'badminton', 'kayaking', 'karate', 'skateboard', 'surfing', 'ballet' ]

# deportes = ['fútbol', 'baloncesto', 'voleibol', 'béisbol', 'tenis', 'fútbol americano', 'boxeo', 'esquí', 'lucha libre', 'natación', 'ciclismo', 'levantamiento de pesas', 'paseos a caballo', 'lacross', 'bádminton', 'kayak', 'kárate', 'patineta', 'surf', 'ballet']

# sports = ['football', 'basketball', 'volleyball', 'baseball', 'tennis', 'football américain', 'boxe', 'ski', 'lutte', 'natation', 'cyclisme', 'poids levage ',' équitation ',' lacross ',' badminton ',' kayak ',' karaté ',' skateboard ',' surf ',' ballet']

sports_emoji = [ '⚽️', '🏀', '🏐', '⚾️', '🎾', '🏈', '🥊', '⛷', '🤼‍♂️', '🏊‍♀️', '🚵‍♂️', '🏋️‍♀️', '🏇', '🥍', '🏸', '🚣‍♂️', '🥋', '🛹', '🏄‍♂️', '🩰' ]



i=0
while i < 20 do 
    Word.create(name:animals[i], category_id: 1)
    Word.create(name:emotions[i], category_id: 2)
    Word.create(name:foods[i],  category_id: 3)
    Word.create(name:objects[i],  category_id: 4)
    Word.create(name:sports[i], category_id: 5)
    i +=1
end

i=0
while i < 20 do 
    Image.create(image: animal_image[i], category_id: 1)
    Image.create(image: emotions_image[i], category_id: 2)
    Image.create(image: foods_emoji[i], category_id: 3)
    Image.create(image: objects_emoji[i], category_id: 4)
    Image.create(image: sports_emoji[i], category_id: 5)
    i +=1
end






