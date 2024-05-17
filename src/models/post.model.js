/**
 * Моделька для эмуляции постов.
 * Стандартный CRUD.
 */

const posts = [
    { 
        id: 1, 
        title: 'What if all this a lie?', 
        content: 'Maybe I should expand my message, but I won\'t do it haha', 
        author: 'Shiniasse'
    },
    { 
        id: 2, 
        title: 'That cake is certainly a lie', 
        content: 'Welp if you were playing portal in your youth you will get it', 
        author: 'Shiniasse'
    }
];
  
const getAllPosts = () => posts;

const getPostById = (id) => posts.find((post) => post.id === parseInt(id));

module.exports = {
    getAllPosts,
    getPostById,
};