# 2. React: Stocks Data

Create a stocks data component, as shown below.

The component must have the following functionalities:

- The input should initially be empty. The user can type a date in this input box, for which the stock data has to be searched. The date format has to be `d-mmmm-yyyy` (e.g., 5-January-2000).

- Clicking on the 'Search' button should make an API GET call to URL. 'https://jsonmock.hackerrank.com/api/stocks?date={input}' using the JavaScript Fetch API, specifically the fetch function. Here, {input} is the date entered into the text box. For example, for date 5-January-2000, the API hit has to be https://jsonmock.hackerrank.com/api/stocks?date=5-January-2000. The date passed to the URL must not have any leading zeroes in the day.

- The response will contain a `data` field that contains stock data in the below format:

  ```
  "data": [
    {
      "date": "5-January-2000",
      "open": 5265.09,
      "high": 5464.35,
      "low": 5184.48,
      "close": 5357
    }
  ]
  ```

  - `data` field is an array containing single object. This single object contains the desired data. Retrieve the open, close, high, and low values from this, and render in the format explained blow.

- Display the data inside `<ul data-testid="stock-data"></ul>`. This list will have the following list elements(in order as mentioned below):

  - <li>Open: {open}</li>, where {open} is the open value received from data above
  - <li>Close: {close}</li>, where {close} is the close value received from data above
  - <li>High: {high}</li>, where {high} is the high value received from data above
  - <li>Low: {low}</li>, where {low} is the low value received from data above

- The element `<ul data-testid="stock-data"></ul>` is rendered only when data is fetched and the result is shown. Initially, it is not rendered since no API has been hit yet.

- **If there is no stock data returned by the API**, the user should render `<div data-restid="no-result">No Results Found</div>` instead of the <ul> element. This element should be visible only when the data field is an empty array. This div should not be rendered initially since no API has been hit yet.

- Please note that the input field accepts the date as text. Input will be tested only with valid dates, so writting input validation is not required.

The following data-testid attributes are required in the component for the tests to pass:

- Title should have the data-testid attribute 'app-title'.
- Input should have the data-testid attribute 'app-input'.
- Search button should have the data-testid attribute 'submit-button'.
- <ul> should have the data-testid attribute 'stock-data'.
- The 'No Results Found' div should have the data-testid attribute 'no-result'.

Please note that components have above `data-testid` attributes for test cases and certain classes and ids for rendering purposes. It is advised not to change them.

### **Software Instructions**

The questions(s) requires **Node 8 LTS or above**.

- https://nodejs.org/en/downloads/

### **Git Instructions**

Use the following commaands to work with this project

Run

```
npm start
```

Test

```
npm test
```

Install

```
npm install
```
