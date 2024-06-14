import { useEffect, useState } from 'react';

const useCurrency = (currency) => {
  const [data, setData] = useState({});
  useEffect(() => {
    const fetchCurrencyData = async () => {
      try {
        const res = await fetch(
          `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`
        );
        const response = await res.json();
        setData(response[currency]);
      } catch (err) {
        console.log(err);
      }
    };

    fetchCurrencyData();
    }, [currency]);
    console.log(data);
    return data

};

export default useCurrency