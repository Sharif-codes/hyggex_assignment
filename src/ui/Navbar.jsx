import logo from '../assets/logo.png'

const Navbar = () => {
    return (
        <div className="drawer">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* Navbar */}
                <div className="w-full navbar">
                    <div className="flex-none lg:hidden">
                        <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>
                    <div className="flex-1"> <img src={logo} alt="sadasd" /></div>
                    <div className="flex-none hidden lg:block">
                        <ul className="menu menu-horizontal">
                            {/* Navbar menu content here */}
                            <li><a>Home</a></li>
                            <li><a>Flashcard</a></li>
                            <li><a>Contact</a></li>
                            <li><a>FAQ</a></li>
                            <li ><a className='bg-gradient-to-b from-[#06286E] to-[#164EC0] px-6 text-white py-2 rounded-3xl'>Login</a></li>
                        </ul>
                    </div>
                </div>
                {/* Page content here */}
            </div>
            <div className="drawer-side ">
                <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full bg-base-200 ">
                    {/* Sidebar content here */}
                    
                    <li><a>Home</a></li>
                            <li><a>Flashcard</a></li>
                            <li><a>Contact</a></li>
                            <li><a>FAQ</a></li>
                            <li ><a className='bg-gradient-to-b from-[#06286E] to-[#164EC0] px-6 text-white py-1 rounded-3xl'>Login</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;