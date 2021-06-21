class RemoveIngredientsAndDirectionsFromPosts < ActiveRecord::Migration[6.1]
  def change
    remove_column :posts, :ingredients
    remove_column :posts, :directions
  end
end
