class MessagesController < ApplicationController
  def create
    @conversation = Conversation.find(params[:conversation_id])
    @message = @conversation.messages.create(
      user: current_user,
      content: params[:message][:content]
    )
  end
end
