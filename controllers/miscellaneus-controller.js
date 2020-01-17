module.exports = function (app) {

    app.get("/about-us", function (req, res) {

        res.render("about-us")
    });

    app.get("/blog", function (req, res) {

        res.render("blog")
    });


    app.get("/contact-us", function (req, res) {

        res.render("contactus")

    });
}