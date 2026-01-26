class FollowsController < ApplicationController
  before_action :authenticate_user!

def create
  @user = User.find(params[:user_id])
  current_user.active_follows.create(following: @user)
end

def destroy
  @user = User.find(params[:user_id])
  follow = current_user.active_follows.find_by(following: @user)
  follow&.destroy
end
end

