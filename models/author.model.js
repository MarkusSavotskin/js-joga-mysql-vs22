const con = require('../utils/db')

const Author = (author) => {
    this.author_name = author.author_name
    this.author_id = author.author_id
}

Author.getName = (author_id, result) => {
    let articleQuery = `SELECT * FROM article, author WHERE author.author_id='${author_id}' AND article.author_id=author.author_id;`
    let authorQuery = `SELECT author_name FROM author WHERE author.author_id=\'${author_id}';`
    let author
    let articles = []

    con.query(articleQuery, (err, res) => {
        if (err) {
            console.log('error: ', err)
            result(err, null)
            return
        }
        articles = res
        console.log('articles: ', articles)

        con.query(authorQuery, (err, res) => {
            if (err) {
                console.log('error: ', err)
                result(err, null)
                return
            }
            author = res
            console.log('author: ', author)
            result(null, author, articles)
        })
    })
}

module.exports = Author