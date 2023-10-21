import { Icon } from "@iconify/react"


const Comment = ({ author, text }) => {
    return (
        <div className="grid grid-cols-[24px,1fr] items-start gap-y-1  w-full gap-x-2 italic place-content-start text-teal-800">
            <Icon icon="mdi:account-circle-outline" className="text-2xl  " />
            <p >{author}</p>
            <p className="w-full col-start-2 line-clamp-3 text-sm text-stone-700">
                {text}
            </p>
        </div>
    )
}

export default Comment