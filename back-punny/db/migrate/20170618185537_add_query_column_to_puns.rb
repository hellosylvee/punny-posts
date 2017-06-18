class AddQueryColumnToPuns < ActiveRecord::Migration[5.1]
  def change
    add_column :puns, :user_query, :string
  end
end
