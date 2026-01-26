module ApplicationHelper
  def user_avatar(user, css_class: "")
    if user&.avatar&.attached?
      image_tag user.avatar, class: css_class
    else
      image_tag "default_avatar.png", class: css_class
    end
  end
end

