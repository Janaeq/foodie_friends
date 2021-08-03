class CreateIngredients < ActiveRecord::Migration[6.1]
  def change
    create_table :ingredients do |t|
      t.string :ingredient
      t.belongs_to :post
      t.timestamps
    end
  end
end
