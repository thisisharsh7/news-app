import { Icon } from "@iconify/react"
import Comment from "../components/Comment"
import { Link, useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import { fetchSingleNews } from "../service/api";
import { BeatLoader } from "react-spinners";


const Detail = () => {
    const [getDet, setDet] = useState(null);
    const { Id } = useParams();

    const getNewsDetail = async () => {
        const data = await fetchSingleNews(Id);
        console.log(data);
        setDet({
            'author': data.author,
            'date': data.created_at.substr(0, 10),
            'title': data.title ? data.title : 'No title Available',
            'link': data.url,
            'points': data.points ? data.points : 0,
            'comments': data.children
        });
    }

    useEffect(() => {
        getNewsDetail();
    }, [])

    return (
        <div className=" sm:px-6 px-3 pt-4 pb-20 w-full min-h-screen flex flex-col items-center ">
            <Link to="/" className="border-2 border-black sticky top-4 z-40 bg-gray-200 text-2xl ">
                <Icon icon="pixelarticons:close" className="  text-red-800 hover:animate-spin" />
            </Link>
            {
                getDet
                    ?
                    <div className="flex flex-col gap-8 w-full">
                        <div className="px-3 py-3.5 grid grid-cols-[1fr,110px] text-base gap-4 h-full">
                            <div className="flex items-center gap-1 text-lime-900 ">
                                <Icon icon="mdi:account-circle-outline" className="text-2xl " />
                                <p>{getDet.author}</p>
                            </div>
                            <a href={getDet.link} target="_blank" rel="noreferrer" className="self-end justify-self-end text-2xl text-teal-800">
                                <Icon icon="line-md:external-link" />
                            </a>
                            <div className="col-span-2 flex justify-between">
                                <h1 className="flex-1 text-lg text-center font-bold">{getDet.title}</h1>
                            </div>
                            <div className="flex items-center gap-1 text-yellow-600">
                                <Icon icon="mdi:progress-star-four-points" />
                                <p>{getDet.points}</p>
                            </div>
                            <div className="flex items-center gap-1  text-orange-800">
                                <Icon icon="mdi:calendar-month-outline" className="text-2xl " />
                                <p>{getDet.date}</p>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-xl font-bold mb-5">Comments-</h2>
                            <div className="w-full gap-8 grid sm:grid-cols-2">
                                {

                                    getDet?.comments.length ? getDet.comments.map((comment, index) => {
                                        return (
                                            <Comment key={index} author={comment.author} text={comment.text} />
                                        )
                                    })
                                        :
                                        <div className="text-center italic col-span-full">No comment found..</div>
                                }
                            </div>
                        </div>
                    </div>
                    :
                    <div className=" self-center pt-10"><BeatLoader color='orange' size={10} speedMultiplier={1.2} /></div>
            }

        </div>
    )
}

export default Detail