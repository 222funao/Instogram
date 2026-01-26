class UsersController < ApplicationController
  before_action :authenticate_user!

  def search
    if params[:query].present?
     query = params[:query].downcase

@users = User
  .where("LOWER(username) LIKE ?", "%#{query}%")
  .where.not(id: current_user.id)

    else
      @users = []
    end

    respond_to do |format|
      format.turbo_stream
      format.html
    end
  end
end

