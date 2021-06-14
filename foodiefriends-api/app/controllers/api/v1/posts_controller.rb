class Api::V1::PostsController < ApplicationController
    skip_before_action :authorized, only: [:index]

    def index
        posts = Post.all
        render json: posts
    end

    def create
        post = Post.create(post_params)
        if post
            render json: post
        else
            render json: {error: post.errors.full_messages.to_sentence}
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
end
