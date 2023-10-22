
import { Icon } from "@iconify/react";
import { useMemo, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SETPAGE } from "../state/reducers";
import { getVisiblePageNumbers } from "../service/paginate";




const Pagination = () => {
    const { cPage, tPage } = useSelector((state) => state.newsReducer);
    const dispatch = useDispatch();
    const prevRef = useRef();
    const nextRef = useRef();

    const visiblePageNumbers = useMemo(() => {
        return getVisiblePageNumbers(cPage, tPage);
    }, [cPage, tPage]);


    const prevPage = () => {
        if (cPage > 1) {
            dispatch(SETPAGE(cPage - 1));
        }
        else {
            alert('No prev Page.');
        }

    }

    const nextPage = () => {
        if (cPage != tPage) {
            dispatch(SETPAGE(cPage + 1));
        } else {
            alert('No next Page.');
        }
    }

    const btwPage = (page) => {
        dispatch(SETPAGE(page));
    }

    return (
        <div className="mt-auto">
            <div className="flex gap-4 justify-center text-gray-900">
                <button className="bg-white shadow-lg rounded-lg px-3 py-2" onClick={prevPage} ref={prevRef}><Icon icon="ooui:previous-ltr" /></button>
                {visiblePageNumbers.map((page, index) => (
                    (page != "...") ? <button key={index} className="bg-white shadow-lg px-3 py-2 rounded-lg" onClick={() => { btwPage(page) }}>
                        {page}
                    </button> : <div className="bg-white shadow-lg px-3 py-2 rounded-lg" key={index}>...</div>
                ))}
                <button className="bg-white shadow-lg px-3 py-2 rounded-lg" onClick={nextPage} ref={nextRef} ><Icon icon="ooui:previous-rtl" /></button>

            </div>
        </div>
    )
}

export default Pagination