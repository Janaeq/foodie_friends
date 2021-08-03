class RemoveColumnsFromPosts < ActiveRecord::Migration[6.1]
  def change
    remove_column :posts, :directions
    remove_column :posts, :ingredients
  end
end
