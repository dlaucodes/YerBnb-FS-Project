json.array! @listings do |listing|
  json.extract! listing, :id, :title, :price, :location, :description, :lat, :lng
  json.photoUrl listing.photo.url
end