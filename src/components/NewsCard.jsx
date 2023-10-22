import { Icon } from "@iconify/react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { fadeAnimateVariants } from "../service/animate"


const NewsCard = ({ author, date, title, link, objectID }) => {

    const k = Math.random().toFixed(1);
    console.log(k);
    return (
        <motion.div className="rounded-xl overflow-hidden shadow-lg bg-blue-50 hover:scale-105 transition-all duration-300 border-[1px] border-white bg h-full"
            variants={fadeAnimateVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
                once: true,
            }}
            custom={k}

        >
            <div className="px-3 py-3.5 grid grid-cols-[1fr,100px] text-sm gap-4 h-full">
                <div className="col-span-2 font-medium flex justify-between gap-2">
                    <Link to={objectID} className="rounded-xl flex-1 hover:text-pink-800">
                        <h1 >{title}</h1>
                    </Link>
                    <a href={link} target="_blank" rel="noreferrer" className="text-lg text-teal-800">
                        <Icon icon="line-md:external-link" />
                    </a>
                </div>
                <div className="flex items-center gap-1 text-lime-900">
                    <Icon icon="mdi:account-circle-outline" className="text-xl " />
                    <p>{author}</p>
                </div>
                <div className="flex items-center gap-1 text-orange-800 ">
                    <Icon icon="mdi:calendar-month-outline" className="text-xl " />
                    <p>{date}</p>
                </div>

            </div>
        </motion.div>
    )
}

export default NewsCard