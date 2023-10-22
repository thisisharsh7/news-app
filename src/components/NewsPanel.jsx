import { useSelector } from "react-redux"
import NewsCard from "./NewsCard"

const NewsPanel = () => {

    const { newsArray } = useSelector((state) => state.newsReducer);
    console.log(newsArray)

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {
                newsArray.length ? newsArray.map((news, index) => {
                    return (
                        <NewsCard key={index} objectID={news.objectID} author={news.author} date={news.updated_at.substr(0, 10)} title={news.title ? news.title : news.story_title} link={news.url} />
                    )
                })
                    :
                    <div className="col-span-full text-center text-orange-900" >
                        No results were found for your search..
                    </div>
            }
        </div>
    )
}

export default NewsPanel