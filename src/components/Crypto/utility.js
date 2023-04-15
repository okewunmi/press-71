const paginate = (data) => {
  const itemsPerPage = 20;
  const numberOfPages = Math.ceil(data.length / itemsPerPage);

  const newNews = Array.from({ length: numberOfPages }, (_, index) => {
    const start = index * itemsPerPage;
    return data.slice(start, start + itemsPerPage);
  });

  return newNews;
};
export default paginate;
