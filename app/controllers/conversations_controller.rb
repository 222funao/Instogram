class ConversationsController < ApplicationController
  before_action :authenticate_user!

  def index
    @friends = current_user.friends
    @conversations = current_user.conversations
  end

  def show
    @conversation = Conversation.find(params[:id])
    @messages = @conversation.messages.includes(:user)
    @message = Message.new
  end

  def create
  user = User.find(params[:user_id])

  conversation =
    Conversation.between(current_user, user) ||
    Conversation.create!(user1: current_user, user2: user)

  redirect_to conversation_path(conversation)
end
end

