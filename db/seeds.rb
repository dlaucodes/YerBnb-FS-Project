# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
demo_user = User.create(username: "Demo", password: "password", first_name: "Demo", last_name: "User")

demo_listing = Listing.create!(price: "2", title: "demotitle", description: "demodesc", location: "demoloc", owner_id: "1", lng: 500, lat: 600)
# #put seeded photo in here too 

# demo_listing = URI.open("assets/images/download.jpg'")
# demo_listing.photo.attach(io: listing, filename: 'download.jpg')

puts ('done')