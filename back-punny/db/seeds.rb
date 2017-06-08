# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

5.times do |n|
  user = User.create(
    :first_name => Faker::Name.first_name,
    :last_name => Faker::Name.last_name,
    :username => Faker::Team.creature + Faker::Number.number(2).to_s,
    :blurb => Faker::Name.title,
    :password_digest => Faker::Team.creature
  )
end

s = User.create(first_name: 'sylvee', last_name: 'lee', username: 'hisyl', blurb: 'flatiron student', password_digest: 'monkey')

Gif.create(:url => 'http://gph.is/2ryYBFI')
Gif.create(:url => 'http://gph.is/2r3lLR8')
Gif.create(:url => 'http://gph.is/2siWBCM')
Gif.create(:url => 'http://gph.is/2r6jYPX')
Gif.create(:url => 'http://gph.is/2oPGFnh')
