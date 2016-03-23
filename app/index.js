'use strict';
var generators = require('yeoman-generator');
var chalk = require('chalk');
var moment = require('moment');
var yosay = require('yosay');
var mkdirp = require('mkdirp');

var Jeti = generators.Base.extend({
  promptUser: function () {
    var done = this.async();

    this.log(yosay(
      'Welcome to ' + chalk.cyan('Jeti') + ' generator!' +
      chalk.bgBlue('Jekyll, Foundation, SCSS and Gulp!')
    ));

    var prompts = [{
      name: 'siteName',
      message: 'Site Title: '
    }, {
      name: 'description',
      message: 'Site Description: ',
      default: 'A short description of this site'
    }, {
      name: 'siteDomain',
      message: 'Site Domain: ',
      default: 'yourdomain.com'
    }, {
      name: 'email',
      message: 'Your email address ?',
      default: this.user.git.email
    }, {
      name: 'gitAcc',
      message: 'Your Github account ?',
      default: 'jekyll'
    }, {
      name: 'twitter',
      message: 'Your Twitter username ?',
      default: 'jekyllrb'
    }];

    this.prompt(prompts, function (props) {
      this.siteName = props.siteName;
      this.description = props.description;
      this.siteDomain = 'http://' + props.siteDomain;
      this.email = props.email;
      this.gitAcc = props.gitAcc;
      this.twitter = props.twitter;
      this.mainFolder = 'src';

      done();
    }.bind(this));
  },

  scaffoldFolders: function () {
    mkdirp(this.mainFolder, function (err) {
      if (err) console.error(err);
    });
    mkdirp(this.mainFolder + "/_posts", function (err) {
      if (err) console.error(err);
    });
  },

  copyMainFiles: function () {
    this.copy("_gulpfile.babel.js", "gulpfile.babel.js");
    this.copy("_bower.json", "bower.json");

    this.directory(this.mainFolder + "/_includes", this.mainFolder + "/_includes");
    this.directory(this.mainFolder + "/_layouts", this.mainFolder + "/_layouts");
    this.directory(this.mainFolder + "/_assets", this.mainFolder + "/assets");
    this.directory(this.mainFolder + "/_pages", this.mainFolder + "/_pages");
    this.directory(this.mainFolder + "/_scss", this.mainFolder + "/_scss");

    var context = {
      site_name: this.siteName,
      pkg_name: this.siteName.replace(/\s+/g, '-').toLowerCase(),
      author_email: this.email,
      site_description: this.description,
      site_domain: this.siteDomain,
      main_folder: this.mainFolder,
      dist_folder: this.distFolder,
      git_acc: this.gitAcc,
      twitter: this.twitter
    };

    // Generate date/times for demo posts
    var posts = ['post1', 'post2', 'post3'];
    var post_times = {};
    var hour = 0;
    for (var i = 0; i < posts.length; i++) {
      var obj = posts[i];
      post_times[obj] = {
        num_date: moment().utc().subtract(hour, 'hours').format('YYYY-MM-DD'),
        date_time: moment().utc().subtract(hour, 'hours').format('YYYY-MM-DD HH:mm:ss')
      };
      hour += 2
    }

    // create demo posts with correct date times
    this.template(this.mainFolder + "/_posts/welcome-to-jekyll.markdown", this.mainFolder + "/_posts/" +
      post_times['post1'].num_date + "-welcome-to-jekyll.markdown", post_times['post1']);
    this.template(this.mainFolder + "/_posts/and-foundation.markdown", this.mainFolder + "/_posts/" +
      post_times['post2'].num_date + "-and-foundation.markdown", post_times['post2']);
    this.template(this.mainFolder + "/_posts/with-yeoman.markdown", this.mainFolder + "/_posts/" +
      post_times['post3'].num_date + "-with-yeoman.markdown", post_times['post3']);

    this.template(this.mainFolder + "/_config.yml", this.mainFolder + "/_config.yml", context);
    this.template(this.mainFolder + "/_index.html", this.mainFolder + "/index.html", context);
    this.template("_package.json", "package.json", context);
    this.template("_zurb_config.yml", "zurb_config.yml", context);
    this.template("_babelrc", ".babelrc", context);
    this.template("_bowerrc", ".bowerrc", context);
    this.template("_readme.md", "readme.md", context);

    //npm install && bower install
    this.installDependencies();

  }

});

module.exports = Jeti;

//todo: this.mainfolder remove