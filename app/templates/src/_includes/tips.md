### Tips

* **Posting:** Add new blog posts to `src/_posts/` directory. Use the YYYY-MM-DD-name-of-post.* format. Check existing posts for more info.

* **Styling:** Add any additional styles to the `src/assets/scss/_extras.scss` file. Edit the `src/assets/scss/_settings.scss` file to change Foundation default variables.

* **Javascript:** Extra JS scripts can be  added to `src/assets/js/app.js`. You can also remove unused Foundation scripts from the `gulpfile` (from line 30).

* **Deploy:** Run `gulp build`, clone the repo to your server and point your webserver to the `dist` directory.

* **Tools:** The gulpfile is based on the Foundation 'Zurb Template' and includes Sass, JS and CSS minification, image compression, UnCSS and Jekyll build.