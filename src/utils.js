const paginate = (data) => {
  const itemsPerPage = 10;
  //100/10 in case if we are dividing by 9 then we are return pages as 12 (even though it is 11.1111)
  const pages = Math.ceil(data.length / itemsPerPage);

  //creating an array with example 10 pages or by the resulted pages (and I am iterating over the resulted items of pages not the data items which is 100)
  const newFollowers = Array.from({ length: pages }, (_, index) => {
    const start = index * itemsPerPage; // 0* 10, 1*10 to till 10*10
    return data.slice(start, start + itemsPerPage); // (0, 10), (10, 20 ), (20, 30) till (90, 100)
  });

  return newFollowers;
};

export default paginate;
