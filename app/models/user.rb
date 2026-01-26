class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  has_many :posts
  has_many :likes, dependent: :destroy
  has_many :liked_posts, through: :likes, source: :post

 def like(post)
  likes.find_or_create_by(post: post)
end

def unlike(post)
  likes.where(post: post).destroy_all
end

def liked?(post)
  likes.exists?(post: post)
end

  has_many :comments
  has_one_attached :avatar
  validates :username, presence: true, uniqueness: true

  has_many :active_follows,
  class_name: "Follow",
  foreign_key: :follower_id,
  dependent: :destroy

  has_many :passive_follows,
  class_name: "Follow",
  foreign_key: :following_id,
  dependent: :destroy

  has_many :following, through: :active_follows, source: :following
  has_many :followers, through: :passive_follows, source: :follower

  def following?(user)
    following.include?(user)
  end

  def friends_with?(user)
    following?(user) && user.following?(self)
  end

  has_many :sent_messages, class_name: "Message"

has_many :conversations_as_user1,
  class_name: "Conversation",
  foreign_key: :user1_id

has_many :conversations_as_user2,
  class_name: "Conversation",
  foreign_key: :user2_id

def conversations
  Conversation.where("user1_id = ? OR user2_id = ?", id, id)
end
def friends
  following & followers
end

end
