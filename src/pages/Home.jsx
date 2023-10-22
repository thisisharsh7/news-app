import { useEffect } from "react"
import NewsPanel from "../components/NewsPanel"
import SearchBar from "../components/SearchBar"
import { fetchNewsWithQuery, fetchNewsWithTag } from "../service/api"
import { useDispatch, useSelector } from "react-redux"
import { SETLOADING, SETNEWS } from "../state/reducers"
import { BeatLoader } from "react-spinners"


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
    <div className="flex flex-col md:p-6 sm:p-5 p-3 pt-4 pb-20 w-full min-h-screen gap-12">
      <SearchBar />
      {
        loading ? <div className=" self-center"><BeatLoader color='orange' size={10} speedMultiplier={1.2} /></div> : <NewsPanel />
      }
    </div>
  )
}

export default Home