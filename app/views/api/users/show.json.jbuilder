json.user do
  json.extract! @user, :id, :username, :first_name, :last_name, :created_at, :updated_at
end