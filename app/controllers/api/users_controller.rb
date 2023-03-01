class Api::UsersController < ApplicationController
  wrap_parameters include: User.attribute_names + ['password'] + ['firstName'] + ['lastName']
  def create
    @user = User.new(user_params)
    @user.photos.attach(params[:user][photos:[]])
    if @user.save
      login(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :first_name, :last_name, photos:[])
  end
end