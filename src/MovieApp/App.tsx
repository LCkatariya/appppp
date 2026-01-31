import { FC, useEffect } from "react";

import Header from "./components/atoms/Header";
import MovieCatalogue from "./components/organisms/MovieCatalogue";
import data from "./static/movie-data.json";
import { useDispatch, useSelector } from "react-redux";

const App: FC<{}> = () => {
  const state = useSelector(state => state)
  const dispatch = useDispatch()
  console.log("seleter state", state)
  useEffect(() => {
    function getApiData(url) {
      return async(dis)=>{
        const res = await fetch(url)
        const data = await res.json()
        dis({ type: 'INCRIMENT_BY_VALUE', payload: data })
      }
    }
    dispatch(getApiData("https://jsonplaceholder.typicode.com/users"))
  }, [])
  return (
    <div className="App">
      <Header />
      <MovieCatalogue movieListData={data} />
    </div>
  );
};

export default App;