class RemoveColumnsFromUsers < ActiveRecord::Migration[6.1]
  def change
    remove_column :users, :img
    remove_column :users, :first_name
    remove_column :users, :last_name
    remove_column :users, :bio
  end
end
