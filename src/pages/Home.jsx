import { useEffect } from "react"
import NewsPanel from "../components/NewsPanel"
import SearchBar from "../components/SearchBar"
import { fetchNewsWithQuery, fetchNewsWithTag } from "../service/api"
import { useDispatch, useSelector } from "react-redux"
import { SETLOADING, SETNEWS, TOTALPAGE } from "../state/reducers"
import { BeatLoader } from "react-spinners"
import Pagination from "../components/Pagination"


const Home = () => {
  const dispatch = useDispatch();
  const { searchQuery, loading, cPage } = useSelector((state) => state.newsReducer);

  const getNews = async () => {
    let data = []
    if (searchQuery === "") {
      data = await fetchNewsWithTag(cPage - 1);
    } else {
      data = await fetchNewsWithQuery(searchQuery, cPage - 1);
    }

    dispatch(SETNEWS(data.hits));
    dispatch(TOTALPAGE(data.nbPages));
  }


  useEffect(() => {
    dispatch(SETLOADING(true));
    getNews();
  }, [searchQuery, cPage])

  return (
    <div className="flex flex-col md:p-6 sm:p-5 p-3 pt-4 pb-10 w-full min-h-screen gap-12">
      <SearchBar />
      {
        loading ? <div className=" self-center"><BeatLoader color='orange' size={10} speedMultiplier={1.2} /></div> : <NewsPanel />
      }
      <Pagination />
    </div>
  )
}

export default Home