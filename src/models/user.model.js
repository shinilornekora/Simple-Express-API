/**
 * Моделька для эмуляции юзеров.
 * Реализован просто геттер.
 */

const users = [
    { 
        id: '1',
        name: 'TEST_USER-1', 
        email: 'test-something@batona.net', 
        password: 'password123' 
    },
    { 
        id: '2', 
        name: 'TEST_USER-2', 
        email: 'test-anything@krovatka.ru', 
        password: 'password456' 
    }
];
  
const getAllUsers = () => users;

const getUserById = (id) => users.find((post) => post.id === id);
    
module.exports = {
    getAllUsers,
    getUserById,
};