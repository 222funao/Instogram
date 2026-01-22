module ApplicationHelper
  def avatar_for(user)
    if user.avatar.attached?
      image_tag user.avatar, class: "avatar"
    else
      image_tag "default_avatar.png", class: "avatar"
    end
  end
end
