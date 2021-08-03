class AddMeasurementToIngredients < ActiveRecord::Migration[6.1]
  def change
    add_column :ingredients, :measurement, :string
  end
end
