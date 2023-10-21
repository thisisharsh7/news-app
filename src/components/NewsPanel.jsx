import { useSelector } from "react-redux"
import NewsCard from "./NewsCard"


const NewsPanel = () => {

    const { newsArray } = useSelector((state) => state.newsReducer);
    console.log(newsArray);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {
                newsArray && newsArray.map((news, index) => {
                    return (
                        <NewsCard id={index} key={index} author={news.author} date={news.updated_at.substr(0, 10)} title={news.title} link={news.url} />
                    )
                })
            }
        </div>
    )
}

export default NewsPanel