import React from 'react';

const Navigation: React.FC = () => {
    return (
        <nav className="w-full h-16 fixed bottom-0 left-0 right-0 bg-gray-100">
            <nav className="relative mx-auto bg-white w-9/12 max-w-2xl flex justify-around">
                <button className="p-2.5 bg-transparent border-none text-lg text-gray-800 transition-all ease-in-out duration-300 w-1/3 hover:text-blue-500 flex justify-center items-center">
                    <img src="/images/Home.png" alt="홈" className="w-8 h-8" />
                </button>
                <button className="p-2.5 bg-transparent border-none text-lg text-gray-800 transition-all ease-in-out duration-300 w-1/3 hover:text-blue-500 flex justify-center items-center">
                    <img src="/images/Discovery.png" alt="찾기" className="w-8 h-8" />
                </button>
                <button className="p-2.5 bg-transparent border-none text-lg text-gray-800 transition-all ease-in-out duration-300 w-1/3 hover:text-blue-500 flex justify-center items-center">
                    <img src="/images/NavTab.png" alt="마이페이" className="w-8 h-8" />
                </button>
            </nav>
        </nav>
    );
};

export default Navigation;
