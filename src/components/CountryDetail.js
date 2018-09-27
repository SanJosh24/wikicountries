import React, { Component } from 'react';
import './App.css';
import FilterableProductTable from './components/FilterableProductTable';

class CountryDetail extends Component {

  render() {
    return (
      <div className="CountryDetail">
        <FilterableProductTable />
      </div>
    );
  }
}

export default CountryDetail;

