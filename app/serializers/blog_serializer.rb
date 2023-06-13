class BlogSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :author, :comments

  def author
    {
      id: object.author.id,
      username: object.author.username,
    }
  end

  def comments
    object.comments.map do |comment|
      {
        id: comment.id,
        user: {
          id: comment.user.id,
          username: comment.user.username
        },
        reply: comment.reply
      }
    end
  end
end
