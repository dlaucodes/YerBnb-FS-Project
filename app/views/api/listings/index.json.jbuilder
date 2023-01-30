listings.each do |listing|
  json.set! listing.id do
    json.extract! listing, :id, :title, :price, :location, :description, :lat, :lng, photos:[]
    json.ownerId listing.owner_id
    
    json.photoUrls listing.photos.url
    
    json.photoUrls do
      if @listing.photos.attached?
        json.array! @listing.photos do |photo|
          json.imgUrl photo.url
        end
      else
        json.array! [{imgUrl: ''}]
      end
    end
  end
end

json.listings({})

