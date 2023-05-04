@listings.each do |listing|
  json.set! listing.id do
    json.extract! listing, :id, :title, :price, :location, :description, :lat, :lng, :ownerId, :guests, :bedrooms, :beds, :baths, :city, :wifi, :pets_allowed, :kitchen
    json.ownerId listing.owner_id
    
    json.photoUrls listing.photos.url
    
    json.photoUrls do
      if @listing.photos.attached?
        json.photo_urls listing.photos.map { |photo| photo.url }
        # json.array! @listing.photos do |photo|
        #   json.imgUrl photo.url
        end
      else
        json.array! [{imgUrl: ''}]
      end
    end
  end
end


json.listings({})

