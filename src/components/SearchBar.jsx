import { Icon } from "@iconify/react";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { SETQUERY } from "../state/reducers";


const SearchBar = () => {
    const dispatch = useDispatch();
    const inputRef = useRef();


    const handleClick = () => {
        const input = inputRef.current.value;
        dispatch(SETQUERY(input));
    }

    return (
        <div className="shadow-lg bg-white border-[1px]  border-white rounded-2xl px-5 py-2 ">
            <div className="flex sm:gap-5 items-center ">
                <a href="/" className="w-12">
                    <img src="logo.png" alt="" className="w-full" />
                </a>
                <div className="bg-white px-3 py-1.5 justify-between rounded-full items-center gap-4 text-zinc-500  w-full flex    ">
                    <input type="text" className="w-full outline-none" placeholder="Search News" ref={inputRef} />
                    <button onClick={handleClick} className="hover:text-2xl text-xl transition-all duration-300"><Icon icon="heroicons:magnifying-glass-20-solid" /></button>
                </div>
            </div>
        </div>
    )
}

export default SearchBar