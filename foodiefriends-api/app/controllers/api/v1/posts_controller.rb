class Api::V1::PostsController < ApplicationController
    skip_before_action :authorized, only: [:index, :show]

    def index
        posts = Post.all
        render json: posts
    end

    def create
        post = current_user.posts.build(post_params)
        if post.save
            render json: { post: PostSerializer.new(post) }, status: :created
        else
            render json: { error: "Failed to create post. Please try again." }, status: :not_acceptable
        end
    end

    def show
        post = Post.find_by(id: params[:id])
        if post
            render json: post
        else
            render json: { message: 'post does not exist' }
        end
    end

    def destroy
        post = Post.find_by(id: params[:id])
        byebug
        post.delete
        render json: { message: 'Successfully Deleted' }
    end

    private

    def post_params
        params.require(:post).permit(:img, :name, :directions, :ingredients)
    end
end
