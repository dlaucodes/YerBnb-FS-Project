json.listings do 
    @listings.each do |listing|
        json.set! listing.id do
            json.extract! listing, :id, :title, :price, :location, :description, :lat, :lng, :owner_id, :guests
             json.photoUrls listing.photos.map {|photo| photo.url}
                json.ownerId listing.owner_id
        end
    end
end