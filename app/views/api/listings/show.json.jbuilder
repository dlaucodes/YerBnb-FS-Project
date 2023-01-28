json.extract! @listing, :id, :title, :price, :location, :description, :lat, :lng, photos:[]
json.ownerId @listing.owner_id
  json.photoUrls @listing.photos.url

json.photoUrls listing.photos.map {|photo| photo.url}
