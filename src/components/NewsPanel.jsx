import { useSelector } from "react-redux"
import NewsCard from "./NewsCard"
import { Link } from "react-router-dom";


const NewsPanel = () => {

    const { newsArray } = useSelector((state) => state.newsReducer);
    console.log(newsArray);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {
                newsArray && newsArray.map((news, index) => {
                    return (
                        <Link to={news.objectID} key={index} className="rounded-xl bg-red-800">
                            <NewsCard id={index} author={news.author} date={news.updated_at.substr(0, 10)} title={news.title} link={news.url} />
                        </Link>
                    )
                })
            }
        </div>
    )
}

export default NewsPanel