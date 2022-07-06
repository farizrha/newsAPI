import './App.css';

function App() {
  return (
    <div>
    {/* Navbar */}
    <nav className="navbar navbar-light" style={{backgroundColor: '#6afff3'}}>
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
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </section>
      <div className="album py-5 bg-light">
        <div className="container">
          <div id="news" className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">  
           
          </div>
        </div>
      </div>
    </main>

    
  </div>

  

  );
}

export default App;
