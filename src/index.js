import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import './style.css';
import 'bootstrap/dist/css/bootstrap.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <nav>
          <h1>Hello</h1>
        </nav>
      {/* <!-- Grid: https://getbootstrap.com/docs/4.0/layout/grid/#setting-one-column-width --> */}
        <div class="row">
          <div class="col-5">Column 5/12</div>
          <div class="col-7">Column 7/12</div>
        </div>

{/* <!-- List group: https://getbootstrap.com/docs/4.0/components/list-group/#links-and-buttons --> */}
       
        <div class="list-group">
          <a href="" class="list-group-item list-group-item-action active">Cras justo odio (active)</a>
          <a href="" class="list-group-item list-group-item-action">Dapibus ac facilisis in</a>
          <a href="" class="list-group-item list-group-item-action">Morbi leo risus</a>
          <a href="" class="list-group-item list-group-item-action">Porta ac consectetur ac</a>
          <a href="" class="list-group-item list-group-item-action disabled">Vestibulum at eros</a>
        </div>
      </div>
    );
  }
}

ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
  ),
  document.getElementById('root')
);