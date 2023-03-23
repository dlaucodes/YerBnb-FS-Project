# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
demo_user = User.create!(username: "Demo", password: "password", first_name: "Demo", last_name: "User")

# demo_photomain = File.open("app/assets/images/piotrmain.webp")
# demo_user.photo.attach(io: demo_photomain, filename: 'piotrmain.webp')

facebook_user = User.create!(username: "FacebookDemo", password: "password", first_name: "Mark", last_name: "Burg")

google_user = User.create!(username: "GoogleDemo", password: "password", first_name: "Larry", last_name: "Paige")

apple_user = User.create!(username: "AppleDemo", password: "password", first_name: "Timothy", last_name: "Book")

git_user = User.create!(username: "GitDemo", password: "password", first_name: "Dommy", last_name: "Tohmke")

admin_user = User.create(username: "admin", password: "yeradmin", first_name: "David", last_name: "Yer")

admin_photo = File.open("app/assets/images/prof.jpg")
admin_user.photo.attach(io: admin_photo, filename: 'prof.jpg')




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
May - September 6 nights minimum", location: "Hopewell Junction, New York", owner_id: "6", lng: 500, lat: 600)

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
demo_listing2 = Listing.create!(price: "858", title: "NEW Poconos Treetop Lakehouse: Lakefront/Spa/Sauna", description: "PERFECT for large dinners! Accessible, dog-friendly, waterfront A-line with breathtaking views only 50 ft from lake. Stepless entry/shower, elevator. Newly renovated & stylishly furnished w/ 4 bedrooms + 3 full bathrooms, hot tub, sauna, gourmet kitchen, 12 person dining table, coffee bar, fireplace, game room w/ billiards/foosball/arcade, 3 outdoor decks, Big Green Egg grill, fire pit, fire table, hammock chairs, multiple types of boats, fishing poles, work desk, high speed WiFi, 5 Smart TV’s.
The space
Enjoy nature with picturesque treetop and lake views while staying in the comfort of a newly renovated A-line home with all new furniture. This house is for you if you want a relaxing 4-season Poconos gathering that has something for everyone of all ages and abilities! 50 feet from edge of lake which is a rare find. Sun drenched with floor to ceiling windows entire main floor facing lake. Open floor plan with sliding glass doors throughout main floor to full length deck. All guests can enjoy meals together on our 12 person custom farm house dining table with adjoining kitchen island. Many outdoor activities included such as canoeing, kayaking, paddle boating, paddle boarding, & fishing. Come relax in our spa and 7 person hot tub or converse in our hammock swing area. Make smores together around our firepit steps from the lake. Fun game room with activities for all ages like a billiards, foosball, and a Pacman arcade table as well as board games, and laser tag. Elevator, Baby Bjorn travel crib & bouncer, highchairs, playpen, changing pad, play tent, Lego table available.", location: "Hopewell Junction, New York", owner_id: "6", lng: 800, lat: 604)

demo_photomain = File.open("app/assets/images/Poconos/Poconosmain.webp")
demo_listing2.photos.attach(io: demo_photomain, filename: 'Poconosmain.webp')
demo_photo1 = File.open("app/assets/images/Poconos/Poconos1.webp")
demo_listing2.photos.attach(io: demo_photo1, filename: 'Poconos1.webp')
demo_photo2 = File.open("app/assets/images/Poconos/Poconos2.webp")
demo_listing2.photos.attach(io: demo_photo2, filename: 'Poconos2.webp')
demo_photo3 = File.open("app/assets/images/Poconos/Poconos3.webp")
demo_listing2.photos.attach(io: demo_photo3, filename: 'Poconos3.webp')
demo_photo4 = File.open("app/assets/images/Poconos/Poconos4.webp")
demo_listing2.photos.attach(io: demo_photo4, filename: 'Poconos4.webp')

#3
demo_listing3 = Listing.create!(price: "279", title: "Modern firetower chalet with majestic views", description: "If you want to wake up to amazing views, beautiful countryside, and 70 acres of private countryside, come to the Firetower Chalet. Guests love this chalet for the breathtaking views, miles of hiking trails, comfortable master bedroom, and fully stocked kitchen. The Chalet is 3 minutes from the exciting town of Bloomsburg, and only 10-15 minutes from the #1 family amusement park in the country, Knoebels. This Chalet has amazing views to help you make amazing memories.
The space
The Firetower Chalet takes inspiration from fire watch towers found in western forests. You’ll have the whole house to yourself. On the first floor there is a full living area featuring seating, a smart-TV, a fully stocked kitchen fit-for-a-chef, and a bathroom. The Kitchen features a refrigerator, electric stove, oven, microwave, sink, french press, Keurig, toaster, and waffle-maker. In the bathroom, you'll be treated to a spacious shower, sink and toilet. Upstairs, the whole floor is dedicated to the master bedroom, with a queen bed featuring a comfy, tuft and needle adaptive foam mattress. The real star of the room however, is the amazing views of the Pennsylvania mountains and countryside visible from the windows all around the room. Under the bed are storage drawers for clothing and other items. The drawers also come stocked with extra linens in case they are needed. The high ceilings of the room give extra room for an upstairs loft, where there is an area perfect for children or another group. The loft is carpeted and has a mattress. Outside, there is a wraparound balcony with 360 degree views of the countryside. It's the perfect spot to hang out with family and friends, and the views will take your breath away. Finally, the Firetower Chalet also has a cable suspended bridge that leads to a
Treehouse style platform. The Firetower also has a downstairs patio, with an outdoor propane warmer, a fire-pit, and a hammock. Of course, the Firetower Chalet is set on 70 acres of Pennsylvania countryside, which you are free to explore. There are plenty of trails, animals, and activities.", location: "Bloomsburg, Pennsylvania", owner_id: "6", lng: 50, lat: 800)

demo_photomain = File.open("app/assets/images/Chalet/chaletmain.webp")
demo_listing3.photos.attach(io: demo_photomain, filename: 'chaletmain.webp')
demo_photo1 = File.open("app/assets/images/Chalet/chalet1.webp")
demo_listing3.photos.attach(io: demo_photo1, filename: 'chalet1.webp')
demo_photo2 = File.open("app/assets/images/Chalet/chalet2.webp")
demo_listing3.photos.attach(io: demo_photo2, filename: 'chalet2.webp')
demo_photo3 = File.open("app/assets/images/Chalet/chalet3.webp")
demo_listing3.photos.attach(io: demo_photo3, filename: 'chalet3.webp')
demo_photo4 = File.open("app/assets/images/Chalet/chalet4.webp")
demo_listing3.photos.attach(io: demo_photo4, filename: 'chalet4.webp')

#4
demo_listing4 = Listing.create!(price: "159", title: "A Frame Stay", description: "Reconnect with nature at this unforgettable escape. Located in the Hudson Valley, The Step is a little piece of paradise built on 78 acre's of operating farm land just stone through from the River. It is an off the grid 'glamping' experience equipped with the luxury of a queen size memory foam mattress for a good nights sleep. The Step is a secluded get away where you can explore our farm land, show off your scrabble skills, gaze at the stars, and be woken up by the sun through your windows.
The space
The Step 📸 featured on A&E living smaller, Forbes Magazine, timeout, and Airbnb!

The Step is a 168 square foot, quaint and cozy, A-Frame located on a farm. Our unique glamping cabin holds a queen size memory foam bed and a little nook for you to sit at and eat, play a plethora of games or read a book! We have an outside sitting area or ‘kitchen’ with a picnic table, grill, some chairs, firewood, and a fire pit in the middle. The cabins electricity is run off of a small quieter gas generator. (Fear not we’ll show you how to use it, it’s easy) Our “bathroom” or outhouse is located separate from the Step. (About 20’ away from the cabin) The outhouse does not have running water- there is **NO SHOWER** and no plumbing at The
Step. We have a small sink in the outhouse for hand washing and other water necessities :) The cabin is equipped with an AC unit for those hot summer days. The town of Montgomery is a 3 minute drive from The Step where you can grab some great local food and drinks. Montgomery is usually described as hallmark like and we agree! We have so much to do around us we would LOVE to host you and show you our favorite little getaway we built! Come relax and reconnect with nature. Get your Glamp on!", location: "Mongomery, New York", owner_id: "6", lng: 300, lat: 500)

demo_photomain = File.open("app/assets/images/Cabin/cabinmain.webp")
demo_listing4.photos.attach(io: demo_photomain, filename: 'cabinmain.webp')
demo_photo1 = File.open("app/assets/images/Cabin/cabin1.webp")
demo_listing4.photos.attach(io: demo_photo1, filename: 'cabin1.webp')
demo_photo2 = File.open("app/assets/images/Cabin/cabin2.webp")
demo_listing4.photos.attach(io: demo_photo2, filename: 'cabin2.webp')
demo_photo3 = File.open("app/assets/images/Cabin/cabin3.webp")
demo_listing4.photos.attach(io: demo_photo3, filename: 'cabin3.webp')
demo_photo4 = File.open("app/assets/images/Cabin/cabin4.webp")
demo_listing4.photos.attach(io: demo_photo4, filename: 'cabin4.webp')

#5
demo_listing5 = Listing.create!(price: "353", title: "Paris Penthouse", description: "12 th floor
no one in front of your extraordianry terrace but a unique view all over Paris from your loft widely open to full sky
Eiffel Tower at 100 m First row ! A place to play , to celebrate", location: "Paris, France", owner_id: "6", lng: 380, lat: 780)

demo_photomain = File.open("app/assets/images/Paris/parismain.webp")
demo_listing5.photos.attach(io: demo_photomain, filename: 'parismain.webp')
demo_photo1 = File.open("app/assets/images/Paris/paris1.webp")
demo_listing5.photos.attach(io: demo_photo1, filename: 'paris1.webp')
demo_photo2 = File.open("app/assets/images/Paris/paris2.webp")
demo_listing5.photos.attach(io: demo_photo2, filename: 'paris2.webp')
demo_photo3 = File.open("app/assets/images/Paris/paris3.webp")
demo_listing5.photos.attach(io: demo_photo3, filename: 'paris3.webp')
demo_photo4 = File.open("app/assets/images/Paris/paris4.webp")
demo_listing5.photos.attach(io: demo_photo4, filename: 'paris4.webp')

#6
demo_listing6 = Listing.create!(price: "291", title: "Le MICA Chalet", description: "The MICA, top-of-the-range micro-accommodation located in the heart of the recreational-forestry area the Maelström. Live the immersive experience of a boreal nature just 25 minutes from Old Quebec. Treat yourself to a panoramic view of the Laurentian Park as well as breathtaking sunsets at the highest peak of Lac-Beauport. Discover the unique topography of the mountain by exploring some 20km of trails accessible in all seasons.

With its minimalist design, clean lines and maximum fenestration, this tiny house blends into its environment, giving way to the spectacle of nature. Taking its name from the mineral with blond hues and silver reflections that makes up the characteristic rocky outcrops of Mont Tourbillon, the MICA clings to the mountain and blends perfectly into its environment.", location: "Quebec, Canada", owner_id: "6", lng: 400, lat: 200)

demo_photomain = File.open("app/assets/images/Lemica/lemicamain.webp")
demo_listing6.photos.attach(io: demo_photomain, filename: 'lemicamain.webp')
demo_photo1 = File.open("app/assets/images/Lemica/lemica1.webp")
demo_listing6.photos.attach(io: demo_photo1, filename: 'lemica1.webp')
demo_photo2 = File.open("app/assets/images/Lemica/lemica2.webp")
demo_listing6.photos.attach(io: demo_photo2, filename: 'lemica2.webp')
demo_photo3 = File.open("app/assets/images/Lemica/lemica3.webp")
demo_listing6.photos.attach(io: demo_photo3, filename: 'lemica3.webp')
demo_photo4 = File.open("app/assets/images/Lemica/lemica4.webp")
demo_listing6.photos.attach(io: demo_photo4, filename: 'lemica4.webp')

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

