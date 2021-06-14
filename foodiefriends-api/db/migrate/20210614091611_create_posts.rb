class CreatePosts < ActiveRecord::Migration[6.1]
  def change
    create_table :posts do |t|
      t.belongs_to :user
      t.string :img
      t.string :name
      t.text :directions
      t.string :ingredients
      
      t.timestamps
    end
  end
end
