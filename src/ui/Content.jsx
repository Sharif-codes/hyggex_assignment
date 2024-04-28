import idea from "../assets/idea.png"
import sound from "../assets/sound.png"
import refresh from "../assets/refresh.png"
import full from "../assets/full.png"
import { MdFullscreen } from "react-icons/md";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import './styles.css'
const Content = () => {
    return (
        <div>
            <p className="font-monster md:text-3xl text-sm flex justify-start bg-gradient-to-b from-[#06286E] to-[#164EC0] text-transparent bg-clip-text font-[700]">Relations and Functions ( Mathematics )</p>
            <div className="md:w-3/5 mx-auto font-inter font-semibold text-[#696671] lg:mt-10 mt-5">
                <div className="flex justify-evenly md:text-lg text-xs">
                    <button className="text-[#06286E] border-b border-[#06286E] ">Study</button>
                    <button>Quiz</button>
                    <button>Test</button>
                    <button>Game</button>
                    <button>Others</button>
                </div>
                <div className="bg-gradient-to-bl from-[#051A91] via-[#061C93] to-[#2284F1] md:h-96 h-52 mt-7 rounded-3xl ">
                    <div className="flex justify-between">
                        <button><img className="md:ml-10 ml-5 md:mt-10 mt-5" src={idea} alt="" /></button>
                        <button><img className="md:mr-10 mr-5 md:mt-10 mt-5" src={sound} alt="" /></button>
                    </div>
                    <div className="flex font-lato justify-center items-center h-full md:text-4xl text-lg text-white pb-20">9 + 6 + 7x - 2x - 3</div>
                </div>
                <div className="grid grid-cols-3 md:mt-7 mt-3 md:mx-10 mx-5 items-center">
                    <button><img className="md:w-6 w-4 md:h-6 h-4" src={refresh} alt="" /></button>
                    <div>
                        <div className="flex justify-between items-center">
                            <button className="md:text-2xl p-2 rounded-full text-white bg-gradient-to-b from-[#06286E] to-[#164EC0]"><FaChevronLeft /></button>
                            <p className="text-black text-xs md:text-lg mx-1 md:mx-2 lg:mx-0">01/10</p>
                            <button className="md:text-2xl p-2 rounded-full text-white bg-gradient-to-b from-[#06286E] to-[#164EC0]"><FaChevronRight /></button>
                        </div>
                    </div>
                    <button className="flex justify-end"><img className="md:w-6 w-4 md:h-6 h-4" src={full} alt="" /></button>

                </div>
            </div>
        </div>

    );
};

export default Content;