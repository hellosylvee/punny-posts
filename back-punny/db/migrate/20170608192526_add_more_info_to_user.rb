class AddMoreInfoToUser < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :blurb, :string
    add_column :users, :profile_image, :binary
  end
end
