class CreateDirections < ActiveRecord::Migration[6.1]
  def change
    create_table :directions do |t|
      t.text :direction
      t.belongs_to :post
      
      t.timestamps
    end
  end
end
