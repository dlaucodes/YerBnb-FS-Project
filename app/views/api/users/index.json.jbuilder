json.users do
  @users.each do |user| 
      json.set! user.id do 
      json.extract! user, :id, :first_name, :last_name, :created_at, :updated_at 

      if user.photo.attached?
        json.photo_url user.photo.url
      end
    end
  end
end