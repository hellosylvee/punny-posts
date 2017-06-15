# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170615151257) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "accounts", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "username"
    t.string "password_digest"
  end

  create_table "gifs", force: :cascade do |t|
    t.string "url"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "likes", force: :cascade do |t|
    t.integer "user_id"
    t.integer "pun_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "puns", force: :cascade do |t|
    t.text "pun"
    t.bigint "user_id"
    t.bigint "gif_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["gif_id"], name: "index_puns_on_gif_id"
    t.index ["user_id"], name: "index_puns_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "first_name"
    t.string "last_name"
    t.string "blurb"
  end

  add_foreign_key "puns", "gifs"
  add_foreign_key "puns", "users"
end
