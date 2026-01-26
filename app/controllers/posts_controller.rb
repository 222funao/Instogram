class PostsController < ApplicationController
  before_action :authenticate_user!

 def index
   @conversations = current_user.conversations if user_signed_in?
  if params[:query].present?
    q = params[:query].downcase

    @posts = Post
      .joins(:user)
      .where(
        "LOWER(users.username) LIKE :q OR LOWER(posts.caption) LIKE :q",
        q: "%#{q}%"
      )
      .distinct
      .order(created_at: :desc)
  else
    @posts = Post.order(created_at: :desc)
  end
end


  def new
    @post = Post.new
  end

  def create
    @post = current_user.posts.build(post_params)
    if @post.save
      redirect_to posts_path
    else
      render :new
    end
  end

  private

  def post_params
  params.require(:post).permit(:caption, media: [])
end

end
