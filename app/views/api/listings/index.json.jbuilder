json.listings do 
    @listings.each do |listing|
        json.set! listing.id do
            json.extract! listing, :id, :title, :price, :location, :description, :lat, :lng
             json.photoUrls listing.photos.map {|photo| photo.url}
        end
    end
end