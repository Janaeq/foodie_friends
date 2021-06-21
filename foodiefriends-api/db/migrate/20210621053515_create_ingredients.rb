class CreateIngredients < ActiveRecord::Migration[6.1]
  def change
    create_table :ingredients do |t|
      t.string :measurement
      t.belongs_to :post
      t.string :ingredient
      
      t.timestamps
    end
  end
end
