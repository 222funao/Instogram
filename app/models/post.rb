class Post < ApplicationRecord
  belongs_to :user
   has_many_attached :media
  has_many :likes, dependent: :destroy
def liked_by?(user)
  likes.exists?(user: user)
end
has_many :comments, dependent: :destroy
end
