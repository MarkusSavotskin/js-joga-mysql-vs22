const con = require('../utils/db')

// show all articles index page
const getAllArticles = (req, res) => {
    let query = "SELECT * FROM article";
    let articles = []
    con.query(query, (err, result) => {
        if (err) throw err;
        articles = result
        res.render('index', {
            articles: articles
        })
    })
};
//show article by this slug
const getArticleSlug = (req, res) => {
    let query = `SELECT * FROM article, author WHERE article.slug='${req.params.slug}' AND article.author_id=author.author_id`
    let article
    con.query(query, (err, result) => {
        if (err) throw err;
        article = result
        console.log(article)
        res.render('article', {
            article: article
        })
    })
}

module.exports = {
    getAllArticles,
    getArticleSlug
}