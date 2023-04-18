json.review do
    json.extract! @review, :id, :rating, :body, :listing_id, :user_id, :photo
        # json.photoUrls @review.photos.url
        # json.photoUrls @review.photos.map {|photo| photo.url}
end