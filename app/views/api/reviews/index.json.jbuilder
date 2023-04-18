json.reviews do
    @reviews.each do |review|
        json.set! review.id do
            json.extract! review, :id, :rating, :body, :user_id, :listing_id, :reviewer_pic, :listing_pic
            # json.photoUrls review.photos.map {|photo| photo.url}
                
        end
    end
end