import { useState } from 'react';
import './App.css';

function App() {
  const [search, setSearch] = useState();
  const [news, setNews] = useState([]);
  function getNews() {
    console.log(search);
    const url = `https://newsapi.org/v2/everything?q=${search}&from=2022-07-06&sortBy=popularity&apiKey=8d9a1d3fae944e4fb74b20bb67a117d2`
    const news = fetch(url)
    news
      .then(function (res) { return res.json() })
      .then(res => {
        setNews(res.articles || [])
      })
      .catch(err => {
        // table.innerHTML = message(err.message)
      })
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-light" style={{ backgroundColor: '#6afff3' }}>
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">News Web App</span>
        </div>
      </nav>
      <main>
        <section className="py-5 text-center container">
          <div className="row py-lg-5">
            <div className="col-lg-6 col-md-8 mx-auto">
              <h1 className="fw-light p-3">Find your latest news</h1>
              <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={e => setSearch(e.target.value)}/>
                <button className="btn btn-outline-success" type="button" onClick={getNews}>Search</button>
              </form>
            </div>
          </div>
        </section>
        <div className="album py-5 bg-light">
          <div className="container">
            <div id="news" className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              {
                news.map((item, index) => 
                  <div className="col" key={index}>
                      <div className="card shadow-sm">
                        <svg className="bd-placeholder-img card-img-top" width="100%" height={225} xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c" /><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
                        <div className="card-body">
                          <h3>{ item.title }</h3>
                          <p className="card-text">{ item.content }</p>
                          <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group">
                              <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                            </div>
                            <small className="text-muted">9 mins</small>
                          </div>
                        </div>
                      </div>
                    </div>
                )
              }
            </div>
          </div>
        </div>
      </main>


    </div>



  );
}

export default App;
