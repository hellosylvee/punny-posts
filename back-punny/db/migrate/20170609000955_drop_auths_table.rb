class DropAuthsTable < ActiveRecord::Migration[5.1]
  def change
    drop_table :auths
  end
end
