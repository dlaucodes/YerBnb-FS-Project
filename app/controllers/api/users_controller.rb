class Api::UsersController < ApplicationController
  wrap_parameters include: User.attribute_names + ['password'] + ['firstName'] + ['lastName']
  def create
    @user = User.new(user_params)
    @user.photo.attach(params[:user][:photo])
    if @user.save
      login(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def index
    @users = User.all
    render :index
  end

  def update
    @user = User.find(current_user.id)
    if @user.update(user_params)
      @user.save
      render :show
    else
      render json: { errors: @user.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def show
    @user = User.find_by(id: params[:id])
    render "api/users/show"
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :first_name, :last_name, :photo)
  end
end