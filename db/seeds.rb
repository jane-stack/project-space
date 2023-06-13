# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
User.destroy_all
Blog.destroy_all
Comment.destroy_all

# Users
jane = User.create(username: "janeur", password: "Testing12345#")
jimmy = User.create(username: "jvng", password: "Testing12345$")

# Blogs
post_one = Blog.create(title: "First Post", content: "Hello online world. It is nice to code!", user: jane)
post_two = Blog.create(title: "Second Post", content: "This is a big headache. I am so stressed out.", user: jane)
post_three = Blog.create(title: "Third Post", content: "Work is so demanding! Can't wait to get home to my family.", user: jimmy)

# Comments
one = Comment.create(content: "You got this!", user: jimmy, blog: post_two)
two = Comment.create(content: "Miss you babe", user: jane, blog: post_three)
three = Comment.create(content: "Miss you too", user: jimmy, blog: post_three)
four = Comment.create(content: "Hello there!", user: jimmy, blog: post_one)
five = Comment.create(content: "Hello there to you Jimmy!", user: jane, blog: post_one)
six = Comment.create(content: "How is your day?", user: jimmy, blog: post_one)
seven = Comment.create(content: "It's going pretty well. Been coding all day and I am pooped!", user: jane, blog: post_one)