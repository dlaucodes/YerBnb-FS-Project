json.user do
  json.extract! @user, :id, :username, :first_name, :last_name, :created_at, :updated_at, :photo 

  if @user.photo.attached?
    json.photo_url @user.photo.url
  end
end

