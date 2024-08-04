const sequelize = require('./db');
const Book = require('../models/book');

const seedBooks = async () => {
    try {
        await sequelize.sync({ force: true });

        await Book.bulkCreate([
            {
                title: "The Lord of the Rings",
                author: "J.R.R. Tolkien",
                genre: "Fantasy",
                publicationYear: 1954,
                aisle: "A1",
                section: "F1",
                quantity: 5,
            },
            {
                title: "Harry Potter and the Sorcerer's Stone",
                author: "J.K. Rowling",
                genre: "Fantasy",
                publicationYear: 1997,
                aisle: "A2",
                section: "F2",
                quantity: 10,
            },
            {
                title: "1984",
                author: "George Orwell",
                genre: "Dystopian",
                publicationYear: 1949,
                aisle: "A3",
                section: "D1",
                quantity: 8,
            },
        ]);

        console.log('Books have been added to the database');
    } catch (error) {
        console.error('Error seeding the database:', error);
    } finally {
        process.exit();
    }
};

seedBooks();
