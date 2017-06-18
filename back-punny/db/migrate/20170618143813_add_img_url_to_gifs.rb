class AddImgUrlToGifs < ActiveRecord::Migration[5.1]
  def change
    add_column :gifs, :img_url, :string
  end
end
