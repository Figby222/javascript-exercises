const getTheTitles = function(books) {
    const titlesList = books.reduce((titles, book) => {
        titles.push(book.title);
        return titles;
    }, [])
    return titlesList;
};

// Do not edit below this line
module.exports = getTheTitles;
