# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

#demo
demo_user = User.create!(username: "Demo", password: "password", first_name: "Demo", last_name: "User")

demo_photo = File.open("app/assets/images/proftop.webp")
demo_user.photo.attach(io: demo_photo, filename: 'proftop.webp')

#fb
facebook_user = User.create!(username: "FacebookDemo", password: "password", first_name: "Mark", last_name: "Burg")

fb_photo = File.open("app/assets/images/fb.png")
facebook_user.photo.attach(io: fb_photo, filename: 'fb.png')

#google
google_user = User.create!(username: "GoogleDemo", password: "password", first_name: "Larry", last_name: "Paige")
google_photo = File.open("app/assets/images/lp.webp")
google_user.photo.attach(io: google_photo, filename: 'lp.webp')

#apple
apple_user = User.create!(username: "AppleDemo", password: "password", first_name: "Timothy", last_name: "Book")

apple_photo = File.open("app/assets/images/tc.jpeg")
apple_user.photo.attach(io: apple_photo, filename: 'tc.jpeg')

#git
git_user = User.create!(username: "GitDemo", password: "password", first_name: "Dommy", last_name: "Tohmke")

git_photo = File.open("app/assets/images/td.png")
git_user.photo.attach(io: git_photo, filename: 'td.png')

#admin
admin_user = User.create(username: "admin", password: "yeradmin", first_name: "David", last_name: "Yer")

admin_photo = File.open("app/assets/images/proftop.webp")
admin_user.photo.attach(io: admin_photo, filename: 'proftop.webp')




# demo_listing = Listing.create!(price: "200", title: "demotitle", description: "demodesc", location: "demoloc", owner_id: "1", lng: 500, lat: 600)
# # #put seeded photo in here too 

# demo_photo0 = File.open("app/assets/images/download.jpg")
# demo_listing.photos.attach(io: demo_photo0, filename: 'mountkiscomain.webp')

# demo_photo1 = File.open("app/assets/images/download.jpg")
# demo_listing.photos.attach(io: demo_photo1, filename: 'mountkisco1.webp')

#1- City Cabin
demo_listing1 = Listing.create!(price: "320", title: "Cabin in the City (GQ featured Best NYC Yerbnbs)", description: 

"Spacious and cozy historical flat apartment. Has its own private entrance with 1000 sqft of space. Exposed wood beams with designer mid-century furniture throughout the apartment and a newly renovated kitchen. Enjoy easy walking distance to the LES, East Village and Tribeca and quiet block with great nightlife around the corner. Recently featured on GQ as one of the best rentals in the city!", location: "New York, United States", owner_id: "6", lng: -73.994379, lat: 40.709808)

demo_photomain = File.open("app/assets/images/CityCabin/citycabin0.webp")
demo_listing1.photos.attach(io: demo_photomain, filename: 'citycabin0.webp')
demo_photo1 = File.open("app/assets/images/CityCabin/citycabin1.webp")
demo_listing1.photos.attach(io: demo_photo1, filename: 'citycabin1.webp')
demo_photo2 = File.open("app/assets/images/CityCabin/citycabin2.webp")
demo_listing1.photos.attach(io: demo_photo2, filename: 'citycabin2.webp')
demo_photo3 = File.open("app/assets/images/CityCabin/citycabin3.webp")
demo_listing1.photos.attach(io: demo_photo3, filename: 'citycabin3.webp')
demo_photo4 = File.open("app/assets/images/CityCabin/citycabin4.webp")
demo_listing1.photos.attach(io: demo_photo4, filename: 'citycabin4.webp')

#2- Loft
demo_listing2 = Listing.create!(price: "1200", title: "Massive 2000 sq ft loft with stunning 360 views", description: "One of a kind floor through loft with exposed brick and 30 windows, allowing views of the Empire State Building, Brooklyn and Manhattan Bridges and the East River. Features a beautiful common roof deck for even more spectacular views of this in up and coming downtown chic neighborhood.
We mostly rent for film and photoshoots, personal rentals only available when host leaves town, please send us a message.", location: "New York, New York", owner_id: "6", lng: -73.99133, lat: 40.71327)

demo_photomain = File.open("app/assets/images/Loft/loft0.webp")
demo_listing2.photos.attach(io: demo_photomain, filename: 'loft0.webp')
demo_photo1 = File.open("app/assets/images/Loft/loft1.webp")
demo_listing2.photos.attach(io: demo_photo1, filename: 'loft1.webp')
demo_photo2 = File.open("app/assets/images/Loft/loft2.webp")
demo_listing2.photos.attach(io: demo_photo2, filename: 'loft2.webp')
demo_photo3 = File.open("app/assets/images/Loft/loft3.webp")
demo_listing2.photos.attach(io: demo_photo3, filename: 'loft3.webp')
demo_photo4 = File.open("app/assets/images/Loft/loft4.webp")
demo_listing2.photos.attach(io: demo_photo4, filename: 'loft4.webp')

#3 - Architectural Digest Style Oasis
demo_listing3 = Listing.create!(price: "425", title: "Architectural Digest Style Oasis", description: "Hello, welcome to this sunny and spacious LIC gem, centrally located to great restaurants, bars, and shopping. The apartment has been designed with peace, tranquility and comfort in mind.

The R/N/E/M/7 subway trains are only a few blocks away and gets you to Manhattan in 4 minutes.

*Reviews from February 2021 and earlier are from a former Manhattan apartment. The host has moved nearby to a much larger space. While the apartment is new, the dedication to being great hosts remains paramount*", location: "Queens, New York", owner_id: "6", lng: -73.93604, lat: 40.75012)

demo_photomain = File.open("app/assets/images/Queens/queens0.webp")
demo_listing3.photos.attach(io: demo_photomain, filename: 'chaletmain.webp')
demo_photo1 = File.open("app/assets/images/Queens/queens1.webp")
demo_listing3.photos.attach(io: demo_photo1, filename: 'queens1.webp')
demo_photo2 = File.open("app/assets/images/Queens/queens2.webp")
demo_listing3.photos.attach(io: demo_photo2, filename: 'queens2.webp')
demo_photo3 = File.open("app/assets/images/Queens/queens3.webp")
demo_listing3.photos.attach(io: demo_photo3, filename: 'queens3.webp')
demo_photo4 = File.open("app/assets/images/Queens/queens4.webp")
demo_listing3.photos.attach(io: demo_photo4, filename: 'queens4.webp')

#4- Brooklyn
demo_listing4 = Listing.create!(price: "495", title: "A Bohemian style duplex with garden", description: "This apartment is being created and styled out of love.
A lot of research to put together vintage pieces combined with a touch of modern in an ambience that will give you a special feel.
The outdoor area is magical lounge .
Perfect place for an artistic or fashion Photo shoot a video , a documentary , ( day time) and a romantic get away.

No Party allowed.
No large gatherings , please don't inquire.", location: "Brooklyn, New York", owner_id: "6", lng: -73.95144, lat: 40.69503)

demo_photomain = File.open("app/assets/images/Brooklyn/bklyn0.webp")
demo_listing4.photos.attach(io: demo_photomain, filename: 'bklyn0.webp')
demo_photo1 = File.open("app/assets/images/Brooklyn/bklyn1.webp")
demo_listing4.photos.attach(io: demo_photo1, filename: 'bklyn1.webp')
demo_photo2 = File.open("app/assets/images/Brooklyn/bklyn2.webp")
demo_listing4.photos.attach(io: demo_photo2, filename: 'bklyn2.webp')
demo_photo3 = File.open("app/assets/images/Brooklyn/bklyn3.webp")
demo_listing4.photos.attach(io: demo_photo3, filename: 'bklyn3.webp')
demo_photo4 = File.open("app/assets/images/Brooklyn/bklyn4.webp")
demo_listing4.photos.attach(io: demo_photo4, filename: 'bklyn4.webp')

#5
demo_listing5 = Listing.create!(price: "248", title: "High floor Luxury Apartment with balcony", description: "A spectacular 1BD apt in a luxury building in the center of Fort Greene (10 min from Manhattan). Spacious, clean and modern decorated. Big balcony with the amazing view of Manhattan bridge and Hudson river - perfect place to have your morning coffee :)

Located walking distance from everything you need - Whole Foods, Traders Joe, bars, restaurants, Fort Greene park, Barclay Center and easy access to almost all trains (2,3,4,5,A,B,C,F,J,R,Q)
", location: "Brooklyn, New York", owner_id: "6", lng: -73.97996, lat: 40.68839)

demo_photomain = File.open("app/assets/images/HighRise/hr0.webp")
demo_listing5.photos.attach(io: demo_photomain, filename: 'hr0.webp')
demo_photo1 = File.open("app/assets/images/HighRise/hr1.webp")
demo_listing5.photos.attach(io: demo_photo1, filename: 'hr1.webp')
demo_photo2 = File.open("app/assets/images/HighRise/hr2.webp")
demo_listing5.photos.attach(io: demo_photo2, filename: 'hr2.webp')
demo_photo3 = File.open("app/assets/images/HighRise/hr3.webp")
demo_listing5.photos.attach(io: demo_photo3, filename: 'hr3.webp')
demo_photo4 = File.open("app/assets/images/HighRise/hr4.webp")
demo_listing5.photos.attach(io: demo_photo4, filename: 'hr4.webp')

#6
demo_listing6 = Listing.create!(price: "1200", title: "Architectural Digest Featured Home with PARK VIEWS", description: "3 bedroom/3 bath. Built in 1883, this private residence has been with unobstructed views of the Flatiron Building, Madison Square Park and The Clocktower.

Featured in Architectural Digest, Interior Design and The New York Times, this apartment truly is one of a kind!
The space
The unit was professionally designed and it has been remodeled from top to bottom and rebuilt with only Italian materials. The walls that separate the bedrooms from the main space are made with a glass paneling that can transition appearance from solid to transparent; this allows one to control the amount of light entering the rooms. These incredibly designed bedrooms are inspired by earth, air, and fire, and are all equipped with built-in wardrobes and unmatched views. The spacious master bedroom is the most exceptional of all with a large closet that measures 14 ft long and is double the depth of what you would typically find. Storage like this is impossible to come by in the city! The en suite wet bath has a spa-like feel, outfitted with a steam room, Italian marble and wood teak floors.

French oak flooring runs throughout the residence, as well as a built-in spanning 90 ft in length. This built-in houses the chef's kitchen that includes Gaggenau appliances and a large wine fridge. Equipped with an out-venting, restaurant quality exhaust, you can cook up an array of meals and still have space to entertain. Another aspect of the kitchen is the versatile 10 ft island that can extend to add an additional 5 ft! Just off the kitchen is a large dining room with amazing windows and a dining table that can seat 12 people. The open concept and 14 ft ceilings make the residence feel massive.

Other notable features are an in-unit washer/dryer, surround sound audio system, double pane windows, automated shades, and the list goes on. You can also control A/C, lighting, air filtration and more at the touch of a button.", location: "New York, New York", owner_id: "6", lng: -73.98900, lat: 40.74195)

demo_photomain = File.open("app/assets/images/ParkViews/pv0.webp")
demo_listing6.photos.attach(io: demo_photomain, filename: 'pv0.webp')
demo_photo1 = File.open("app/assets/images/ParkViews/pv1.webp")
demo_listing6.photos.attach(io: demo_photo1, filename: 'pv1.webp')
demo_photo2 = File.open("app/assets/images/ParkViews/pv2.webp")
demo_listing6.photos.attach(io: demo_photo2, filename: 'pv2.webp')
demo_photo3 = File.open("app/assets/images/ParkViews/pv3.webp")
demo_listing6.photos.attach(io: demo_photo3, filename: 'pv3.webp')
demo_photo4 = File.open("app/assets/images/ParkViews/pv4.webp")
demo_listing6.photos.attach(io: demo_photo4, filename: 'pv4.webp')

# #7
# demo_listing1 = Listing.create!(price: "200", title: "The Mission House Sanctuary", description: location: "Hopewell Junction, New York", owner_id: "1", lng: 500, lat: 600)

# demo_photomain = File.open("app/assets/images/Poconosmain.webp")
# demo_listing2.photos.attach(io: demo_photomain, filename: 'Poconosmain.webp')
# demo_photo1 = File.open("app/assets/images/piotr1.webp")
# demo_listing2.photos.attach(io: demo_photo1, filename: 'piotr1.webp')
# demo_photo2 = File.open("app/assets/images/piotr2.webp")
# demo_listing2.photos.attach(io: demo_photo2, filename: 'piotr2.webp')
# demo_photo3 = File.open("app/assets/images/piotr3.webp")
# demo_listing2.photos.attach(io: demo_photo3, filename: 'piotr3.webp')
# demo_photo4 = File.open("app/assets/images/piotr4.webp")
# demo_listing2.photos.attach(io: demo_photo4, filename: 'piotr4.webp')

# #8
# demo_listing1 = Listing.create!(price: "200", title: "The Mission House Sanctuary", description: location: "Hopewell Junction, New York", owner_id: "1", lng: 500, lat: 600)

# demo_photomain = File.open("app/assets/images/piotrmain.webp")
# demo_listing1.photos.attach(io: demo_photomain, filename: 'piotrmain.webp')
# demo_photo1 = File.open("app/assets/images/piotr1.webp")
# demo_listing1.photos.attach(io: demo_photo1, filename: 'piotr1.webp')
# demo_photo2 = File.open("app/assets/images/piotr2.webp")
# demo_listing1.photos.attach(io: demo_photo2, filename: 'piotr2.webp')
# demo_photo3 = File.open("app/assets/images/piotr3.webp")
# demo_listing1.photos.attach(io: demo_photo3, filename: 'piotr3.webp')
# demo_photo4 = File.open("app/assets/images/piotr4.webp")
# demo_listing1.photos.attach(io: demo_photo4, filename: 'piotr4.webp')










  #for multiple pictures just change it to multiple pictures
puts ('done')

