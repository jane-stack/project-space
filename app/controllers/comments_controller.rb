class CommentsController < ApplicationController
    before_action :find_blog
    before_action :authorize, only: [:create]
    before_action only: [:destroy] do
        authorize_user_resource(@blog.user_id)
    end

    # POST /blogs/:id/comments
    def create
        @comment = @blog.comments.create(comment_params)
        @comment.user = current_user
        if @comment.save
            render json: @comment, status: 201
        else
            render json: { errors: @comment.errors.full_messages }, status: :unprocessable_entity
        end
    end

    # DESTROY /blogs/:id/comments/:id
    def destroy
        @comment = @blog.comments.find(params[:id])
        @comment.destroy
        render json: @comment
    end


    private

    def comment_params
        params.require(:comment).permit(:reply)
    end

    def find_blog
        @blog = Blog.find(params[:blog_id])
    end
end
