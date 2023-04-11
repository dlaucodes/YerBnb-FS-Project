json.review do
    json.extract! @review, :id, :rating, :body, :listing_id, :user_id
end