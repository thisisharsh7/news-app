import { useEffect } from "react"
import NewsPanel from "../components/NewsPanel"
import SearchBar from "../components/SearchBar"
import { fetchNewsWithTag } from "../service/api"
import { useDispatch } from "react-redux"
import { SETNEWS } from "../state/reducers"


const Home = () => {
  const dispatch = useDispatch();

  const getNewsWithTag = async () => {
    const data = await fetchNewsWithTag();
    dispatch(SETNEWS(data.hits));
  }


  useEffect(() => {
    getNewsWithTag();
  }, [])

  return (
    <div className="flex flex-col md:p-6 sm:p-5 p-2 w-full min-h-screen gap-8">
      <SearchBar />
      <NewsPanel />
    </div>
  )
}

export default Home