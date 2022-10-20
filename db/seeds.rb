# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
demo_user = User.create(username: "Demo", password: "password", first_name: "Demo", last_name: "User")

# demo_listing = Listing.create!(price: "200", title: "demotitle", description: "demodesc", location: "demoloc", owner_id: "1", lng: 500, lat: 600)
# # #put seeded photo in here too 

# demo_photo0 = File.open("app/assets/images/download.jpg")
# demo_listing.photos.attach(io: demo_photo0, filename: 'mountkiscomain.webp')

# demo_photo1 = File.open("app/assets/images/download.jpg")
# demo_listing.photos.attach(io: demo_photo1, filename: 'mountkisco1.webp')

#1- mission house
demo_listing1 = Listing.create!(price: "200", title: "The Mission House Sanctuary", description: "Welcome to mission house!!

Pets accepted on a case by case basis , please contact us before booking ( no cats owner has allergies )
The space
Newly built, 4 bedrooms 4 bathrooms, all bedrooms have outdoor sitting areas. Theres also a brand new Hot Tub next to the pond.

3 nights minimum
Holidays 4-6 nights minimum
May - September 6 nights minimum", location: "Hopewell Junction, New York", owner_id: "1", lng: 500, lat: 600)

demo_photomain = File.open("app/assets/images/piotrmain.webp")
demo_listing1.photos.attach(io: demo_photomain, filename: 'piotrmain.webp')
demo_photo1 = File.open("app/assets/images/piotr1.webp")
demo_listing1.photos.attach(io: demo_photo1, filename: 'piotr1.webp')
demo_photo2 = File.open("app/assets/images/piotr2.webp")
demo_listing1.photos.attach(io: demo_photo2, filename: 'piotr2.webp')
demo_photo3 = File.open("app/assets/images/piotr3.webp")
demo_listing1.photos.attach(io: demo_photo3, filename: 'piotr3.webp')
demo_photo4 = File.open("app/assets/images/piotr4.webp")
demo_listing1.photos.attach(io: demo_photo4, filename: 'piotr4.webp')

#2- 
demo_listing1 = Listing.create!(price: "858", title: "NEW Poconos Treetop Lakehouse: Lakefront/Spa/Sauna", description: "PERFECT for large dinners! Accessible, dog-friendly, waterfront A-line with breathtaking views only 50 ft from lake. Stepless entry/shower, elevator. Newly renovated & stylishly furnished w/ 4 bedrooms + 3 full bathrooms, hot tub, sauna, gourmet kitchen, 12 person dining table, coffee bar, fireplace, game room w/ billiards/foosball/arcade, 3 outdoor decks, Big Green Egg grill, fire pit, fire table, hammock chairs, multiple types of boats, fishing poles, work desk, high speed WiFi, 5 Smart TV’s.
The space
Enjoy nature with picturesque treetop and lake views while staying in the comfort of a newly renovated A-line home with all new furniture. This house is for you if you want a relaxing 4-season Poconos gathering that has something for everyone of all ages and abilities! 50 feet from edge of lake which is a rare find. Sun drenched with floor to ceiling windows entire main floor facing lake. Open floor plan with sliding glass doors throughout main floor to full length deck. All guests can enjoy meals together on our 12 person custom farm house dining table with adjoining kitchen island. Many outdoor activities included such as canoeing, kayaking, paddle boating, paddle boarding, & fishing. Come relax in our spa and 7 person hot tub or converse in our hammock swing area. Make smores together around our firepit steps from the lake. Fun game room with activities for all ages like a billiards, foosball, and a Pacman arcade table as well as board games, and laser tag. Elevator, Baby Bjorn travel crib & bouncer, highchairs, playpen, changing pad, play tent, Lego table available." location: "Hopewell Junction, New York", owner_id: "1", lng: 800, lat: 604)

demo_photomain = File.open("app/assets/images/piotrmain.webp")
demo_listing1.photos.attach(io: demo_photomain, filename: 'piotrmain.webp')
demo_photo1 = File.open("app/assets/images/piotr1.webp")
demo_listing1.photos.attach(io: demo_photo1, filename: 'piotr1.webp')
demo_photo2 = File.open("app/assets/images/piotr2.webp")
demo_listing1.photos.attach(io: demo_photo2, filename: 'piotr2.webp')
demo_photo3 = File.open("app/assets/images/piotr3.webp")
demo_listing1.photos.attach(io: demo_photo3, filename: 'piotr3.webp')
demo_photo4 = File.open("app/assets/images/piotr4.webp")
demo_listing1.photos.attach(io: demo_photo4, filename: 'piotr4.webp')

#3
demo_listing1 = Listing.create!(price: "200", title: "The Mission House Sanctuary", description: location: "Hopewell Junction, New York", owner_id: "1", lng: 500, lat: 600)

demo_photomain = File.open("app/assets/images/piotrmain.webp")
demo_listing1.photos.attach(io: demo_photomain, filename: 'piotrmain.webp')
demo_photo1 = File.open("app/assets/images/piotr1.webp")
demo_listing1.photos.attach(io: demo_photo1, filename: 'piotr1.webp')
demo_photo2 = File.open("app/assets/images/piotr2.webp")
demo_listing1.photos.attach(io: demo_photo2, filename: 'piotr2.webp')
demo_photo3 = File.open("app/assets/images/piotr3.webp")
demo_listing1.photos.attach(io: demo_photo3, filename: 'piotr3.webp')
demo_photo4 = File.open("app/assets/images/piotr4.webp")
demo_listing1.photos.attach(io: demo_photo4, filename: 'piotr4.webp')

#4
demo_listing1 = Listing.create!(price: "200", title: "The Mission House Sanctuary", description: location: "Hopewell Junction, New York", owner_id: "1", lng: 500, lat: 600)

demo_photomain = File.open("app/assets/images/piotrmain.webp")
demo_listing1.photos.attach(io: demo_photomain, filename: 'piotrmain.webp')
demo_photo1 = File.open("app/assets/images/piotr1.webp")
demo_listing1.photos.attach(io: demo_photo1, filename: 'piotr1.webp')
demo_photo2 = File.open("app/assets/images/piotr2.webp")
demo_listing1.photos.attach(io: demo_photo2, filename: 'piotr2.webp')
demo_photo3 = File.open("app/assets/images/piotr3.webp")
demo_listing1.photos.attach(io: demo_photo3, filename: 'piotr3.webp')
demo_photo4 = File.open("app/assets/images/piotr4.webp")
demo_listing1.photos.attach(io: demo_photo4, filename: 'piotr4.webp')

#5
demo_listing1 = Listing.create!(price: "200", title: "The Mission House Sanctuary", description: location: "Hopewell Junction, New York", owner_id: "1", lng: 500, lat: 600)

demo_photomain = File.open("app/assets/images/piotrmain.webp")
demo_listing1.photos.attach(io: demo_photomain, filename: 'piotrmain.webp')
demo_photo1 = File.open("app/assets/images/piotr1.webp")
demo_listing1.photos.attach(io: demo_photo1, filename: 'piotr1.webp')
demo_photo2 = File.open("app/assets/images/piotr2.webp")
demo_listing1.photos.attach(io: demo_photo2, filename: 'piotr2.webp')
demo_photo3 = File.open("app/assets/images/piotr3.webp")
demo_listing1.photos.attach(io: demo_photo3, filename: 'piotr3.webp')
demo_photo4 = File.open("app/assets/images/piotr4.webp")
demo_listing1.photos.attach(io: demo_photo4, filename: 'piotr4.webp')

#6
demo_listing1 = Listing.create!(price: "200", title: "The Mission House Sanctuary", description: location: "Hopewell Junction, New York", owner_id: "1", lng: 500, lat: 600)

demo_photomain = File.open("app/assets/images/piotrmain.webp")
demo_listing1.photos.attach(io: demo_photomain, filename: 'piotrmain.webp')
demo_photo1 = File.open("app/assets/images/piotr1.webp")
demo_listing1.photos.attach(io: demo_photo1, filename: 'piotr1.webp')
demo_photo2 = File.open("app/assets/images/piotr2.webp")
demo_listing1.photos.attach(io: demo_photo2, filename: 'piotr2.webp')
demo_photo3 = File.open("app/assets/images/piotr3.webp")
demo_listing1.photos.attach(io: demo_photo3, filename: 'piotr3.webp')
demo_photo4 = File.open("app/assets/images/piotr4.webp")
demo_listing1.photos.attach(io: demo_photo4, filename: 'piotr4.webp')

#7
demo_listing1 = Listing.create!(price: "200", title: "The Mission House Sanctuary", description: location: "Hopewell Junction, New York", owner_id: "1", lng: 500, lat: 600)

demo_photomain = File.open("app/assets/images/piotrmain.webp")
demo_listing1.photos.attach(io: demo_photomain, filename: 'piotrmain.webp')
demo_photo1 = File.open("app/assets/images/piotr1.webp")
demo_listing1.photos.attach(io: demo_photo1, filename: 'piotr1.webp')
demo_photo2 = File.open("app/assets/images/piotr2.webp")
demo_listing1.photos.attach(io: demo_photo2, filename: 'piotr2.webp')
demo_photo3 = File.open("app/assets/images/piotr3.webp")
demo_listing1.photos.attach(io: demo_photo3, filename: 'piotr3.webp')
demo_photo4 = File.open("app/assets/images/piotr4.webp")
demo_listing1.photos.attach(io: demo_photo4, filename: 'piotr4.webp')

#8
demo_listing1 = Listing.create!(price: "200", title: "The Mission House Sanctuary", description: location: "Hopewell Junction, New York", owner_id: "1", lng: 500, lat: 600)

demo_photomain = File.open("app/assets/images/piotrmain.webp")
demo_listing1.photos.attach(io: demo_photomain, filename: 'piotrmain.webp')
demo_photo1 = File.open("app/assets/images/piotr1.webp")
demo_listing1.photos.attach(io: demo_photo1, filename: 'piotr1.webp')
demo_photo2 = File.open("app/assets/images/piotr2.webp")
demo_listing1.photos.attach(io: demo_photo2, filename: 'piotr2.webp')
demo_photo3 = File.open("app/assets/images/piotr3.webp")
demo_listing1.photos.attach(io: demo_photo3, filename: 'piotr3.webp')
demo_photo4 = File.open("app/assets/images/piotr4.webp")
demo_listing1.photos.attach(io: demo_photo4, filename: 'piotr4.webp')










  #for multiple pictures just change it to multiple pictures
puts ('done')

