import './App.css';
import Charts from './Components/Chart';
import React, { useState, useEffect } from "react";

function App() {
  const [stockData, setStockData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [intervalId, setIntervalId] = useState(null);
  const [symbol, setSymbol] = useState("AAPL");

  const fetchStockData = async () => {
    const apiKey = "STQNQ8PMJLWIX5FA";
    const url = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=1min&apikey=${apiKey}`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data["Time Series (1min)"]) {
        const formattedData = Object.keys(data["Time Series (1min)"]).map((time) => ({
          x: new Date(time).getTime(),
          y: [
            parseFloat(data["Time Series (1min)"][time]["1. open"]),
            parseFloat(data["Time Series (1min)"][time]["2. high"]),
            parseFloat(data["Time Series (1min)"][time]["3. low"]),
            parseFloat(data["Time Series (1min)"][time]["4. close"]),
          ],
        }));

        setStockData(formattedData);
        setIsLoading(false);
      } else {
        console.error("Error fetching stock data:", data);
      }
    } catch (error) {
      console.error("Error fetching stock data:", error);
    }
  };

  useEffect(() => {
    fetchStockData();
    const id = setInterval(fetchStockData, 60000);
    setIntervalId(id);

    return () => clearInterval(id);
  }, [symbol]);

  return (
    <div className='font-circular'>

      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <Charts stockData={stockData} />
      )}
    </div>
  );
}

export default App;
