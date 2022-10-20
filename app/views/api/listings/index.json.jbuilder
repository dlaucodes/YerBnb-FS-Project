@listings.each do |listing|
  json.set! listing.id do
    json.extract! listing, :id, :title, :price, :location, :description, :lat, :lng
    json.ownerId listing.owner_id
    json.photoUrl listing.photo.url
  end
end