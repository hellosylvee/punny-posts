class CreatePuns < ActiveRecord::Migration[5.1]
  def change
    create_table :puns do |t|
      t.text :pun
      t.references :user, foreign_key: true
      t.references :gif, foreign_key: true

      t.timestamps
    end
  end
end
