class Api::UsersController < ApplicationController

  before_action :assign_user, only: [:show, :update]

  def index
    render json: User.all
  end

  def show
    render json: @user
  end

  def update
    @user.update(user_params)

    if @user.save
      render json: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  def create
    user = User.new(user_params)

    if user.save
      render json: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  private

  def user_params
    params.require(:user).permit(:name, :email, :biography)
  end

  def assign_user
    @user = User.find(params[:id])
  end
end
