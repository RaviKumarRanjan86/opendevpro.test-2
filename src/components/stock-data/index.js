import React, { Component } from "react";
import "./index.css";

export default class StockData extends Component {
  state = {};

  handleInputChange = (event) => {
    this.state.date = event.target.value;
  };

  handleButtonClick = async () => {
    const request = await fetch(
      `https://jsonmock.hackerrank.com/api/stocks?date=${this.state.date}`
    );
    const response = await request.json();
    this.setState({ data: response.data });
  };

  render() {
    const { data } = this.state;

    const isRequested = data;
    const hasData = data && !!data.length;

    return (
      <div className="layout-column align-items-center mt-50">
        <section className="layout-row align-items-center justify-content-center">
          <input
            type="text"
            className="large"
            placeholder="5-January-2000"
            id="app-input"
            data-testid="app-input"
            value={this.state.date}
            onChange={this.handleInputChange}
          />
          <button
            className=""
            id="submit-button"
            data-testid="submit-button"
            onClick={this.handleButtonClick}
          >
            Search
          </button>
        </section>
        {isRequested && hasData && (
          <ul
            className="mt-50 slide-up-fade-in styled"
            id="stockData"
            data-testid="stock-data"
          >
            <li className="py-10">Open: {data[0].open}</li>
            <li className="py-10">Close: {data[0].close} </li>
            <li className="py-10">High: {data[0].high}</li>
            <li className="py-10">Low: {data[0].low}</li>
          </ul>
        )}
        {isRequested && !hasData && (
          <div
            className="mt-50 slide-up-fade-in"
            id="no-result"
            data-testid="no-result"
          >
            No Results Found
          </div>
        )}
      </div>
    );
  }
}
