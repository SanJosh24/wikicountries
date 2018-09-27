import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import './style.css';
import 'bootstrap/dist/css/bootstrap.css';
import countries from './countries.json'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      countries: countries
    }
    // console.log(this.state.countries)
  }
  showCountries = () => {

    const countrylist = countries;


    
    return countrylist.map((eachCountries, Index)=>{
      return (
        <li class="nav-item">
          <a href="" className="nav-link list-group-item list-group-item-action" key={Index}>{eachCountries.name.common}</a>
        </li>
      )
    })
  }



  render() {

    return (
      
      <div className="App">
        <nav>
          <h1 href="" className="list-group-item list-group-item-action active">WikiCountries</h1>
          <ul class="nav flex-column navv">
            {this.showCountries()}
          </ul>
        </nav>

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