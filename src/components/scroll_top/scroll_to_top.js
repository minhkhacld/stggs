import React from 'react'
import { faArrowAltCircleUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ScrollToTop = () => {

    const onGoToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return (
        <div id="scroll-to-top" onClick={onGoToTop}
            className="hidden fixed bottom-10 right-10 w-[50px] h-[50px] rounded shadow-md flex-col text-black justify-center item-center hover:bg-[color:var(--logo)] hover:text-white">
            <FontAwesomeIcon icon={faArrowAltCircleUp} className="relative w-full h-7" />
        </div>
    )
}

export default ScrollToTop;