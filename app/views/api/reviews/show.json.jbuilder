json.review do
    json.extract! @review, :id, :rating, :body, :listing_id, :user_id, :reviewer_pic, :listing_pic, :reviewer_name, :created_at, :updated_at
        # json.photoUrls @review.photos.url
        # json.photoUrls @review.photos.map {|photo| photo.url}
end