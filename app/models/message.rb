class Message < ApplicationRecord
  belongs_to :user
  belongs_to :conversation
  validates :content, presence: true
  after_create_commit do
  broadcast_append_to(
    "conversation_#{conversation_id}",
    target: "messages",
    partial: "messages/message",
    locals: { message: self, current_user_id: user_id }
  )
end 
end
