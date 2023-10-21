import { useEffect } from "react"
import NewsPanel from "../components/NewsPanel"
import SearchBar from "../components/SearchBar"
import { fetchNewsWithQuery, fetchNewsWithTag } from "../service/api"
import { useDispatch, useSelector } from "react-redux"
import { SETLOADING, SETNEWS } from "../state/reducers"


const Home = () => {
  const dispatch = useDispatch();
  const { searchQuery, loading } = useSelector((state) => state.newsReducer);

  const getNews = async () => {
    let data = []
    if (searchQuery === "") {
      data = await fetchNewsWithTag();
    } else {
      data = await fetchNewsWithQuery(searchQuery);
    }
    dispatch(SETNEWS(data.hits));
  }


  useEffect(() => {
    dispatch(SETLOADING(true));
    getNews();
  }, [searchQuery])

  return (
    <div className="flex flex-col md:p-6 sm:p-5 p-2 w-full min-h-screen gap-8">
      <SearchBar />
      {
        loading ? 'loading ...' : <NewsPanel />
      }
    </div>
  )
}

export default Home