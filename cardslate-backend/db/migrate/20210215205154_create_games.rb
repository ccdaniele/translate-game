class CreateGames < ActiveRecord::Migration[6.1]
  def change
    create_table :games do |t|
      t.integer :user_id
      t.integer :category_id
      t.string :language

      t.timestamps
    end
  end
end
