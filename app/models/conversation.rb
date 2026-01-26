# app/models/conversation.rb
class Conversation < ApplicationRecord
  belongs_to :user1, class_name: "User"
  belongs_to :user2, class_name: "User"

  has_many :messages, dependent: :destroy

 def self.between(user_a, user_b)
    where(
      "(user1_id = ? AND user2_id = ?) OR (user1_id = ? AND user2_id = ?)",
      user_a.id, user_b.id,
      user_b.id, user_a.id
    ).first
  end

  def other_user(current_user)
    current_user == user1 ? user2 : user1
  end
end

