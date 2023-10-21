import { Icon } from "@iconify/react"


const NewsCard = ({ id, author, date, title, link }) => {
    return (
        <div className="rounded-xl overflow-hidden shadow-lg bg-blue-50 hover:scale-105 transition-all duration-300 border-[1px]border-white bg" key={id}>
            <div className="px-3 py-3.5 grid grid-cols-[1fr,100px] text-sm gap-4 h-full">
                <div className="col-span-2 font-medium flex justify-between">
                    <h1 className="flex-1">{title}</h1>
                    <a href={link} target="_blank" rel="noreferrer">
                        <Icon icon="line-md:external-link" />
                    </a>
                </div>

                <div className="flex items-center gap-1 ">
                    <Icon icon="mdi:account-circle-outline" className="text-xl text-gray-600" />
                    <p>{author}</p>
                </div>
                <div className="flex items-center gap-1 ">
                    <Icon icon="mdi:calendar-month-outline" className="text-xl text-gray-600" />
                    <p>{date}</p>
                </div>

            </div>
        </div>
    )
}

export default NewsCard