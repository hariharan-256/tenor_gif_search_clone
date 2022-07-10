import { useState } from "react";
import Features from "./organisms/Features";
import Header from "./organisms/Header";
import Trending from "./organisms/Trending";

function App() {
  const [searchdata, setSearchdata]: any = useState({});
  const [searchtrend, setSearchtrend]: any = useState();
  const [trend, setTrend]: any = useState({});

  const getData = (data: any, value: any) => {
    setSearchdata({ data, value });
  }

  const getTrendRelate = (data: any) => {
    setSearchtrend(data)
  }
  const getTrend = (val: any, data: any) => {
    // console.log(data, 'val');
    setTrend({ val, data });
  }
  return (
    <>
      <Header getSearch={getData} trendvalue={trend} />
      <Trending GetTrend={getTrend} trendRelate={getTrendRelate} search={searchdata} relateTrend={searchtrend} />
      <Features search={searchdata ? searchdata : trend} relateTrend={searchtrend} />
    </>
  );
}

export default App;
