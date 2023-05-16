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

"Spacious and cozy historical flat apartment. Has its own private entrance with 1000 sqft of space. Exposed wood beams with designer mid-century furniture throughout the apartment and a newly renovated kitchen. Enjoy easy walking distance to the LES, East Village and Tribeca and quiet block with great nightlife around the corner. Recently featured on GQ as one of the best rentals in the city!", owner_id: "6", lng: -73.994379, lat: 40.709808, guests: 5, bedrooms: 2, beds: 3, baths: 2, city: "New York", wifi: true, kitchen: true, pets_allowed: true, state: "New York")

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
We mostly rent for film and photoshoots, personal rentals only available when host leaves town, please send us a message.", owner_id: "6", lng: -73.99133, lat: 40.71327, guests: 8, bedrooms: 4, beds: 8, baths: 3, city: "New York", wifi: true, kitchen: true, pets_allowed: true, state: "New York")

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

*Reviews from February 2021 and earlier are from a former Manhattan apartment. The host has moved nearby to a much larger space. While the apartment is new, the dedication to being great hosts remains paramount*", owner_id: "6", lng: -73.93604, lat: 40.75012, guests: 6, bedrooms: 2, beds: 4, baths: 1, city: "Queens", wifi: true, kitchen: true, pets_allowed: true, state: "New York")

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
No large gatherings , please don't inquire.", owner_id: "6", lng: -73.95144, lat: 40.69503, guests: 8, bedrooms: 3, beds: 7, baths: 2, city: "Brooklyn", wifi: true, kitchen: true, pets_allowed: true, state: "New York")

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

#5- highfloor luxury
demo_listing5 = Listing.create!(price: "248", title: "High floor Luxury Apartment with balcony", description: "A spectacular 1BD apt in a luxury building in the center of Fort Greene (10 min from Manhattan). Spacious, clean and modern decorated. Big balcony with the amazing view of Manhattan bridge and Hudson river - perfect place to have your morning coffee :)

Located walking distance from everything you need - Whole Foods, Traders Joe, bars, restaurants, Fort Greene park, Barclay Center and easy access to almost all trains (2,3,4,5,A,B,C,F,J,R,Q)
", owner_id: "6", lng: -73.97996, lat: 40.68839, guests: 5, bedrooms: 3, beds: 4, baths: 1, city: "Brooklyn", wifi: true, kitchen: true, pets_allowed: true, state: "New York")

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

#6- Architectural Digest
demo_listing6 = Listing.create!(price: "1200", title: "Architectural Digest Featured Home with PARK VIEWS", description: "3 bedroom/3 bath. Built in 1883, this private residence has been with unobstructed views of the Flatiron Building, Madison Square Park and The Clocktower.

Featured in Architectural Digest, Interior Design and The New York Times, this apartment truly is one of a kind!
The space
The unit was professionally designed and it has been remodeled from top to bottom and rebuilt with only Italian materials. The walls that separate the bedrooms from the main space are made with a glass paneling that can transition appearance from solid to transparent; this allows one to control the amount of light entering the rooms. These incredibly designed bedrooms are inspired by earth, air, and fire, and are all equipped with built-in wardrobes and unmatched views. The spacious master bedroom is the most exceptional of all with a large closet that measures 14 ft long and is double the depth of what you would typically find. Storage like this is impossible to come by in the city! The en suite wet bath has a spa-like feel, outfitted with a steam room, Italian marble and wood teak floors.

French oak flooring runs throughout the residence, as well as a built-in spanning 90 ft in length. This built-in houses the chef's kitchen that includes Gaggenau appliances and a large wine fridge. Equipped with an out-venting, restaurant quality exhaust, you can cook up an array of meals and still have space to entertain. Another aspect of the kitchen is the versatile 10 ft island that can extend to add an additional 5 ft! Just off the kitchen is a large dining room with amazing windows and a dining table that can seat 12 people. The open concept and 14 ft ceilings make the residence feel massive.

Other notable features are an in-unit washer/dryer, surround sound audio system, double pane windows, automated shades, and the list goes on. You can also control A/C, lighting, air filtration and more at the touch of a button.", owner_id: "6", lng: -73.98900, lat: 40.74195, guests: 8, bedrooms: 3, beds: 5, baths: 3, city: "New York", wifi: true, kitchen: true, pets_allowed: true, state: "New York")

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

#7- Private Garden UES-2
demo_listing7 = Listing.create!(price: "210", title: "LUXURY APT w PRIVATE GARDEN NYC UES", description: 

"This spacious, 600sq. ft. 1 bedroom apt has a large living room and a separate full kitchen and a large bedroom with a queen size bed. Enjoy your own private entrance and direct access to an additional 350 sq ft private statue garden with plenty of room for outdoor entertaining. The apartment is on the ground level of a historically landmarked townhouse, nestled in the center of a row of brownstones, located on a beautiful tree-lined block of Manhattan's upper east side.", owner_id: "2", lng: -73.95482, lat: 40.77935, guests: 3, bedrooms: 1, beds: 1, baths: 1, city: "New York", wifi: true, kitchen: true, pets_allowed: true, state: "New York")

demo_photomain = File.open("app/assets/images/UES/ues0.webp")
demo_listing7.photos.attach(io: demo_photomain, filename: 'ues0.webp')
demo_photo1 = File.open("app/assets/images/UES/ues01.webp")
demo_listing7.photos.attach(io: demo_photo1, filename: 'ues01.webp')
demo_photo2 = File.open("app/assets/images/UES/ues02.webp")
demo_listing7.photos.attach(io: demo_photo2, filename: 'ues02.webp')
demo_photo3 = File.open("app/assets/images/UES/ues03.webp")
demo_listing7.photos.attach(io: demo_photo3, filename: 'ues03.webp')
demo_photo4 = File.open("app/assets/images/UES/ues04.webp")
demo_listing7.photos.attach(io: demo_photo4, filename: 'ues04.webp')

#8-weehawken-2
demo_listing8 = Listing.create!(price: "426", title: "Interior Designer's Abode - Minutes to Manhatttan", description: 

'Views Galore! I welcome everyone to our NYC getaway, or better known as the "house with the blue door." As soon as you step through the Morrocan inspired door, you are overwhelmed with the spectacular views of the one and only Manhattan Skyline. The sunroom the perfect place to snuggle up with a book and some tea, although I warn you, the views may be distracting. State of the art kitchen, with breathtaking white marble floors. Enjoy the wood burning fireplace, as you dine with friends/family.', owner_id: "2", lng: -74.01664, lat: 40.77249, guests: 7, bedrooms: 3, beds: 3, baths: 2, city: "Weehawken", wifi: true, kitchen: true, pets_allowed: true, state: "New Jersey")

demo_photomain = File.open("app/assets/images/Weehawken/wh0.webp")
demo_listing8.photos.attach(io: demo_photomain, filename: 'wh0.webp')
demo_photo1 = File.open("app/assets/images/Weehawken/wh1.webp")
demo_listing8.photos.attach(io: demo_photo1, filename: 'wh1.webp')
demo_photo2 = File.open("app/assets/images/Weehawken/wh2.webp")
demo_listing8.photos.attach(io: demo_photo2, filename: 'wh2.webp')
demo_photo3 = File.open("app/assets/images/Weehawken/wh3.webp")
demo_listing8.photos.attach(io: demo_photo3, filename: 'wh3.webp')
demo_photo4 = File.open("app/assets/images/Weehawken/wh4.webp")
demo_listing8.photos.attach(io: demo_photo4, filename: 'wh4.webp')

#9- art-3
demo_listing9 = Listing.create!(price: "118", title: "Artist 1BR with exposed brick, 30 mins to NYC", description: 

"Enjoy yourself in this industrial feel, exposed brick apartment. The apartment features an open-concept interior and stylish furnishings

Features:
-50 inch TV with Netflix
-renovated kitchen with quartz countertop, dishwasher, pots & pans
-queen size bed
-modern bathroom
-fast internet
-late check in
-access to NYC 24/7 via PATH train in ~30 mins
", owner_id: "3", lng: -74.03965, lat: 40.71520, guests: 3, bedrooms: 1, beds: 1, baths: 1, city: "Jersey City", wifi: true, kitchen: true, pets_allowed: false, state: "New Jersey")

demo_photomain = File.open("app/assets/images/Art1/a0.webp")
demo_listing9.photos.attach(io: demo_photomain, filename: 'a0.webp')
demo_photo1 = File.open("app/assets/images/Art1/a1.webp")
demo_listing9.photos.attach(io: demo_photo1, filename: 'a1.webp')
demo_photo2 = File.open("app/assets/images/Art1/a2.webp")
demo_listing9.photos.attach(io: demo_photo2, filename: 'a2.webp')
demo_photo3 = File.open("app/assets/images/Art1/a3.webp")
demo_listing9.photos.attach(io: demo_photo3, filename: 'a3.webp')
demo_photo4 = File.open("app/assets/images/Art1/a4.webp")
demo_listing9.photos.attach(io: demo_photo4, filename: 'a4.webp')

#10- bk apt -3
demo_listing_10 = Listing.create!(price: "181", title: "Stylish Arty Apt in Brooklyn", description: 

"*** IMPORTANT *** This property is associated to The Invisible Dog Art Center, a vibrant Arts Non for Profit Organization located just next door I have created 14 years ago. When you book my place, you also participate actively to the development and support of emerging artists: 100% of the rental fees goes to the artists.

We took an extra care of cleaning due to the pandemic. Ask for details.
No extra guests are allowed during your stay", owner_id: "3", lng: -73.994379, lat: 40.709808, guests: 2, bedrooms: 1, beds: 1, baths: 1, city: "Brooklyn", wifi: true, kitchen: true, pets_allowed: true, state: "New York")

demo_photomain = File.open("app/assets/images/BkApt/bka0.webp")
demo_listing_10.photos.attach(io: demo_photomain, filename: 'bka0.webp')
demo_photo1 = File.open("app/assets/images/BkApt/bka1.webp")
demo_listing_10.photos.attach(io: demo_photo1, filename: 'bka1.webp')
demo_photo2 = File.open("app/assets/images/BkApt/bka2.webp")
demo_listing_10.photos.attach(io: demo_photo2, filename: 'bka2.webp')
demo_photo3 = File.open("app/assets/images/BkApt/bka3.webp")
demo_listing_10.photos.attach(io: demo_photo3, filename: 'bka3.webp')
demo_photo4 = File.open("app/assets/images/BkApt/bka4.webp")
demo_listing_10.photos.attach(io: demo_photo4, filename: 'bka4.webp')

#11-Garage Studio-4
demo_listing_11 = Listing.create!(price: "435", title: "Garage Studio - Unique Designer Loft", description: 

"Ever dream to live like an artist? Old Garage Studio might be the only such and true to life experience you could have. This is our fully equipped home. Our labor of love. Available only when we travel. We host art pieces from around the world. Some, even furniture, are available for sale. Please do ask. Cozy and immensely spacious. A home away from home. Inspiring to work and create. Ideal for a family, friends long weekend and/or longer stays. Continue to read our full story, we like stories.", owner_id: "4", lng: -73.95993, lat: 40.70670, guests: 6, bedrooms: 3, beds: 3, baths: 1, city: "Brooklyn", wifi: true, kitchen: true, pets_allowed: true, state: "New York")

demo_photomain = File.open("app/assets/images/Gstudio/gs0.webp")
demo_listing_11.photos.attach(io: demo_photomain, filename: 'gs0.webp')
demo_photo1 = File.open("app/assets/images/Gstudio/gs1.webp")
demo_listing_11.photos.attach(io: demo_photo1, filename: 'gs1.webp')
demo_photo2 = File.open("app/assets/images/Gstudio/gs2.webp")
demo_listing_11.photos.attach(io: demo_photo2, filename: 'gs2.webp')
demo_photo3 = File.open("app/assets/images/Gstudio/gs3.webp")
demo_listing_11.photos.attach(io: demo_photo3, filename: 'gs3.webp')
demo_photo4 = File.open("app/assets/images/Gstudio/gs4.webp")
demo_listing_11.photos.attach(io: demo_photo4, filename: 'gs4.webp')

#12- Sonder-4
demo_listing_12 = Listing.create!(price: "700", title: "Sonder Battery Park | Studio Apartment", description: 

"From the moment you see the waterfront from the roof, you’ll know you made the right choice. Your space includes a kitchenette and dining nook. There’s also a (seasonal) rooftop pool, fitness center, golf simulator, and co-working space. You’ll be right across from The Battery — a waterfront oasis with 195,000 square feet of perennial gardens. The New York Stock Exchange, Wall Street, and One World Trade Center are also a quick walk away.
", owner_id: "4", lng: -74.01720, lat: 40.70709, guests: 2, bedrooms: 1, beds: 1, baths: 1, city: "New York", wifi: true, kitchen: true, pets_allowed: true, state: "New York")

demo_photomain = File.open("app/assets/images/Sonder/s0.webp")
demo_listing_12.photos.attach(io: demo_photomain, filename: 's0.webp')
demo_photo1 = File.open("app/assets/images/Sonder/s1.webp")
demo_listing_12.photos.attach(io: demo_photo1, filename: 's1.webp')
demo_photo2 = File.open("app/assets/images/Sonder/s2.webp")
demo_listing_12.photos.attach(io: demo_photo2, filename: 's2.webp')
demo_photo3 = File.open("app/assets/images/Sonder/s3.webp")
demo_listing_12.photos.attach(io: demo_photo3, filename: 's3.webp')
demo_photo4 = File.open("app/assets/images/Sonder/s4.webp")
demo_listing_12.photos.attach(io: demo_photo4, filename: 's4.webp')

#13-5-Legal Airbnb Lovely Rare Garden Home w/ Loft#10303
demo_listing_13 = Listing.create!(price: "444", title: "Legal Airbnb Lovely Rare Garden Home w/ Loft#10303", description: 

"Welcome to your unique and amazing Harlem home! An incredibly designed duplex apartment in trendy South Harlem with great eco-friendly functionality and bespoke architectural elements throughout including a large private garden & chef's kitchen featuring Wolf range & subzero fridge! Perfect family layout with kid's bunk room, crib and loft queen bed above the living area, plus an electric piano, Sonos sound system, giant TV, Miele washer/dryer for easy cleanup.

P.S. This is a legal Airbnb.", owner_id: "5", lng: -73.99957, lat: 40.73071, guests: 7, bedrooms: 3, beds: 4, baths: 3, city: "New York", wifi: true, kitchen: true, pets_allowed: true, state: "New York")

demo_photomain = File.open("app/assets/images/BkLoft/l0.webp")
demo_listing_13.photos.attach(io: demo_photomain, filename: 'l0.webp')
demo_photo1 = File.open("app/assets/images/BkLoft/l1.webp")
demo_listing_13.photos.attach(io: demo_photo1, filename: 'l1.webp')
demo_photo2 = File.open("app/assets/images/BkLoft/l2.webp")
demo_listing_13.photos.attach(io: demo_photo2, filename: 'l2.webp')
demo_photo3 = File.open("app/assets/images/BkLoft/l3.webp")
demo_listing_13.photos.attach(io: demo_photo3, filename: 'l3.webp')
demo_photo4 = File.open("app/assets/images/BkLoft/l4.webp")
demo_listing_13.photos.attach(io: demo_photo4, filename: 'l4.webp')

#14-Townhouse- 5
demo_listing_14 = Listing.create!(price: "633", title: "Award-winning Townhouse in Williamsburg", description: 

"The Corner Townhouse is a spacious and modern oasis in the center of Williamsburg. Its beautiful award-winning design has been featured in Metropolis and Wallpaper* magazines. The refreshing design is coupled with luxury amenities and a private rooftop garden with views of the East River.

Located in the heart of hip Williamsburg, the house is a sanctuary in the middle of what's happening.
", owner_id: "5", lng: -73.96253, lat: 40.71783, guests: 6, bedrooms: 3, beds: 3, baths: 3.5, city: "Williamsburg", wifi: true, kitchen: true, pets_allowed: true, state: "New York")

demo_photomain = File.open("app/assets/images/Townhouse/th0.webp")
demo_listing_14.photos.attach(io: demo_photomain, filename: 'th0.webp')
demo_photo1 = File.open("app/assets/images/Townhouse/th1.webp")
demo_listing_14.photos.attach(io: demo_photo1, filename: 'th1.webp')
demo_photo2 = File.open("app/assets/images/Townhouse/th2.webp")
demo_listing_14.photos.attach(io: demo_photo2, filename: 'th2.webp')
demo_photo3 = File.open("app/assets/images/Townhouse/th3.webp")
demo_listing_14.photos.attach(io: demo_photo3, filename: 'th3.webp')
demo_photo4 = File.open("app/assets/images/Townhouse/th4.webp")
demo_listing_14.photos.attach(io: demo_photo4, filename: 'th4.webp')




demo_review1 = Review.create!(rating: "4", user_id: "4", listing_id: "1", body: "Definitely a wonderful stay and well worth the featured Best NYC Yerbnbs!", reviewer_pic: "https://yerbnb-dev.s3.amazonaws.com/tc.jpeg", listing_pic: "https://yerbnb-dev.s3.amazonaws.com/citycabin0.webp", reviewer_name: "Tim")


demo_review2 = Review.create!(rating: "5", user_id: "2", listing_id: "1", body: "The flat was well equipped and clean!  Would recommend to anyone who wanted to stay close to the heart of NYC.", reviewer_pic:"https://yerbnb-dev.s3.amazonaws.com/fb.png", listing_pic: "https://yerbnb-dev.s3.amazonaws.com/citycabin0.webp", reviewer_name:"Mark")

demo_review3 = Review.create!(rating: "5", user_id:"3", listing_id:"1", body: "Amazing YerBnB, I stayed with some friends over the weekend and it was super convenient!", reviewer_pic:"https://yerbnb-dev.s3.amazonaws.com/lp.webp", listing_pic: "https://yerbnb-dev.s3.amazonaws.com/citycabin0.webp", reviewer_name:"Larry")

demo_review4 = Review.create!(rating: "5", user_id:"4", listing_id:"2", body:"Well worth the price! The place was absolutely gorgeous and massive!", reviewer_pic:"https://yerbnb-dev.s3.amazonaws.com/tc.jpeg", listing_pic:"https://yerbnb-dev.s3.amazonaws.com/loft0.webp", reviewer_name:"Tim")

demo_review5 = Review.create!(rating: "5", user_id:"5", listing_id:"2", body:"The pictures do not do this place justice, It was well lit and convenient!", reviewer_pic:"https://yerbnb-dev.s3.amazonaws.com/td.png", listing_pic:"https://yerbnb-dev.s3.amazonaws.com/loft0.webp", reviewer_name:"Tommy")

demo_review6 = Review.create!(rating: "5", user_id:"4", listing_id:"3", body:"Where do I begin?  Everything looked and felt amazing, well furnished and even had an accessible roof patio!", reviewer_pic:"https://yerbnb-dev.s3.amazonaws.com/tc.jpeg", listing_pic:"https://yerbnb-dev.s3.amazonaws.com/queens0.webp", reviewer_name:"Tim")

demo_review7 = Review.create!(rating: "4", user_id:" 3", listing_id:"3", body:"Great views and the art in the apartment definitely tied the place together.", reviewer_pic:"https://yerbnb-dev.s3.amazonaws.com/lp.webp", listing_pic:"https://yerbnb-dev.s3.amazonaws.com/queens0.webp", reviewer_name:"Larry")

demo_review8 = Review.create!(rating: "5", user_id:"2", listing_id:"4", body:"Was looking for a place in Brooklyn and stumbled across this listing.  The decoration is well put together and above all, it was clean and cozy.", reviewer_pic:"https://yerbnb-dev.s3.amazonaws.com/fb.png", listing_pic:"https://yerbnb-dev.s3.amazonaws.com/bklyn0.webp", reviewer_name:"Mark")

demo_review9 = Review.create!(rating: "5", user_id:"3", listing_id:"4", body:"Bohemian styling was definitely a great choice for this apartment located in Brooklyn.  The garden was also a great place to relax and hang out.  Will be coming back!", reviewer_pic: "https://yerbnb-dev.s3.amazonaws.com/lp.webp", listing_pic:"https://yerbnb-dev.s3.amazonaws.com/bklyn0.webp", reviewer_name: "Larry")

demo_review10 = Review.create!(rating: "4", user_id:"2", listing_id:"5", body:"Was visiting town for the weekend and found this amazing apartment with great views.  The only reason for a missing star was due to the elevator not working at the time of rental.", reviewer_pic:"https://yerbnb-dev.s3.amazonaws.com/fb.png", listing_pic:"https://yerbnb-dev.s3.amazonaws.com/hr0.webp", reviewer_name:"Mark")

demo_review11 = Review.create!(rating: "5", user_id:"3", listing_id:"5", body:"Apartment had great views, clean, host was super communicative.", reviewer_pic:"https://yerbnb-dev.s3.amazonaws.com/lp.webp", listing_pic:"https://yerbnb-dev.s3.amazonaws.com/hr0.webp", reviewer_name:"Larry")

demo_review12 = Review.create!(rating: "5", user_id:"5", listing_id:"6", body:"This place was amazing.  The park view, the convenience of being footsteps away from everything was well worth the price.", reviewer_pic:"https://yerbnb-dev.s3.amazonaws.com/td.png", listing_pic:"https://yerbnb-dev.s3.amazonaws.com/pv0.webp", reviewer_name:"Tommy")

demo_review13  = Review.create!(rating: "5", user_id:"4", listing_id:"6", body:"Beautiful home, beautiful view, would come back again.", reviewer_pic:"https://yerbnb-dev.s3.amazonaws.com/tc.jpeg", listing_pic:"https://yerbnb-dev.s3.amazonaws.com/pv0.webp", reviewer_name:"Tim")








  #for multiple pictures just change it to multiple pictures
puts ('done')

