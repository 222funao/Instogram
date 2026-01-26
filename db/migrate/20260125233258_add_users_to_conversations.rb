class AddUsersToConversations < ActiveRecord::Migration[8.1]
  def change
    add_reference :conversations, :user1, null: false, foreign_key: { to_table: :users }
    add_reference :conversations, :user2, null: false, foreign_key: { to_table: :users }
  end
end
