# BlogSpot Project

Welcome to my phase three Ruby project. In this project, React is used to build the frontend of the application. Sinatra (DSL) is used for the backend and Actice Records to perform CRUD actions.

For this application, I will be using two different directory.
- React frontend, `blog-client`
- Sinatra backend, `blog-server`

### Getting Started
`cd` into the `blog-client` directory and run:
```console
$ npm install
$ npm start
```
Visit [http://localhost:3000] in the browser.

In a different terminal, `cd` into the `blog-server` directory and run:
```console
$ bundle install
$ bundle exec rake server
```
`bundle install` will install all the dependencies for this application.

`bundle exec rake server` is a command that will run the server.

### Introduction
I've created a blog platfrom called BlogSpot. In this application users are able to post, edit, and delete their daily blogs.

The first thing that appears when visiting [http://localhost:3000] in the browser is a login page and a login form. Users will login using their username and password then be redirected to their homepage, which is the page where all their posts are held.

Users will then see a form on the top of their page, right below the navbar, where they can begin a new post with the post title and date. Once the 'POST IT NOW' button is clicked, the new created post will appear at the bottom of the blog. For any reasons that a user may feel the need to edit a post, an edit button is placed below each post for convenience. When ✏️ is clicked, a form will appear right below that post along with the orginal entry which then can be edited and updated. Click the 'DONE EDITING' button when done and the edits will be finalized and posted, replacing the orginal post. A delete button is placed right beside the edit button in case users decides to delete a post. When 🗑 is clicked, the post will be destroyed and removed from view.

Simply click the Log Out button provided in the Navbar to logout.
