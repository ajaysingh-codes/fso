const _ = require('lodash')

const dummy = (blogs) => {
    return 1;
}

const totalLikes = (blogs) => {
    return blogs.reduce((sum, blog) => sum + blog.likes, 0)
}

const favoriteBlog = (blogs) => {
    if (blogs.length === 0) return null;

    const favorite = blogs.reduce((best, blog) => 
      blog.likes > best.likes ? blog : best
    )
    
    return {
        title: favorite.title, 
        author: favorite.author,
        likes: favorite.likes
    }
}

const mostBlogs = (blogs) => {
    if (blogs.length === 0) return null

    const counts = _.countBy(blogs, 'author')
    const authors = _.map(counts, (count, author) => ({ author, blogs: count }))
    return _.maxBy(authors, 'blogs')
}

module.exports = {
    dummy,
    totalLikes,
    favoriteBlog,
    mostBlogs
}