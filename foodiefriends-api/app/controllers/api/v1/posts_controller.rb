class Api::V1::PostsController < ApplicationController
    skip_before_action :authorized, only: [:index]

    def index
        posts = Post.all
        render json: posts
    end

    def create
        post = current_user.posts.build(post_params)
        if post.save
            byebug
            render json: { pin: PostSerializer.new(post) }, status: :created
        else
            render json: { error: "Failed to create post." }, status: :not_acceptable
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
        post.delete
        render json: { message: 'Successfully Deleted' }
    end

    private

    def post_params
        params.require(:post).permit(:img, :name, :directions, :ingredients)
    end
end
