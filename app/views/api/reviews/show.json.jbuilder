json.review do
    json.extract! @review, :id, :rating, :body, :listing_id, :user_id, :reviewer_pic, :listing_pic, :reviewer_name
        # json.photoUrls @review.photos.url
        # json.photoUrls @review.photos.map {|photo| photo.url}
end