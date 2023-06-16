class Blog < ApplicationRecord
  belongs_to :author, class_name: "User", foreign_key: "user_id"
  has_many :comments, dependent: :destroy
  # has_many :commented_users, through: :comments, source: :user

  validates :title, :content, presence: true
end
