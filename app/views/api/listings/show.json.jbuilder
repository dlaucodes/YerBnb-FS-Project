json.extract! @listing, :id, :title, :price, :location, :description, :lat, :lng
json.ownerId @listing.owner_id
  json.photoUrls @listing.photos.url

json.photourls listing.photos.map {|photo| photo.url}