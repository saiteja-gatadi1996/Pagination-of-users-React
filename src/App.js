import React, { useState, useEffect } from 'react';
import { useFetch } from './useFetch';
import Follower from './Follower';
function App() {
  const { loading, data } = useFetch();
  const [page, setPage] = useState(0);
  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    if (loading) {
      return;
    }
    setFollowers(data[page]);
  }, [loading, page]);

  const prevPage = () => {
    setPage((oldPage) => {
      let prevPage = oldPage - 1;

      if (prevPage < 0) {
        console.log(data.length);
        prevPage = data.length - 1;
      }
      return prevPage;
    });
  };
  const nextPage = () => {
    setPage((oldPage) => {
      let nextPage = oldPage + 1;
      console.log(data.length);

      if (nextPage > data.length - 1) {
        nextPage = 0;
      }
      return nextPage;
    });
  };
  return (
    <section className='section-title'>
      {<h1>{loading ? 'loading...' : 'pagination'}</h1>}
      <div className='underline'></div>
      <section className='followers'>
        <div className='container'>
          {followers.map((follower) => {
            return <Follower key={follower.id} {...follower} />;
          })}
        </div>
        {!loading && (
          <div className='btn-container'>
            <button onClick={prevPage} className='prev-btn'>
              Prev
            </button>
            {data.map((item, index) => {
              return (
                <button
                  key={index}
                  className={`page-btn ${index === page ? 'active-btn' : null}`}
                  onClick={() => setPage(index)}
                >
                  {index + 1}
                </button>
              );
            })}
            <button onClick={nextPage} className='next-btn'>
              next
            </button>
          </div>
        )}
      </section>
    </section>
  );
}

export default App;
