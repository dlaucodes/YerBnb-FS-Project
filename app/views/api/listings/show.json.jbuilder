json.listing do
  json.extract! @listing, :id, :title, :price, :description, :lat, :lng, :guests, :bedrooms, :beds, :baths, :city, :wifi, :pets_allowed, :kitchen, :state
  # json.ownerId listing.owner_id
    # json.photoUrls @listing.photos.url

  json.photoUrls @listing.photos.map {|photo| photo.url}
end