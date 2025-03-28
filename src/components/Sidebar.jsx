
// import { Link } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { LuCalendarCheck2 } from "react-icons/lu";
import { IoIosAddCircleOutline } from "react-icons/io";
import { HiOutlineCog6Tooth } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { useState } from "react";
import avatar from '../assets/images/avatar.jpg'


const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };
  return (
    <div> {/* Sidebar */}

      <div className="bg-[#eff2f7] fixed ">
        <div className="flex gap-3 py-5 pb-14 ">
          <button onClick={toggleCollapse}>
            <GiHamburgerMenu className="text-4xl ml-2" />
          </button>
        </div>

        <div className={`h-screen ${isCollapsed ? 'w-16' : 'w-52'} border rounded-e-3xl bg-[#603ed0b2] transition-all duration-300`}>
          <div>
           <span className="pt-[-10]"> <img src={avatar}  className={`m-2 rounded-full h-32 w-32 border-2  ${isCollapsed && 'hidden'}`}/></span>
          </div>

          <div>
            {/* User Info (Hidden when collapsed) */}
            <div className="h-14 w-full p-2 mx-2 mt-14 pb-2 ">
              <div className="flex flex-col gap-[3rem]">
                <Link to="chats">
                  <span className="flex text-xl gap-3 text-white font-bold hover:text-black">
                    <IoHomeOutline className="text-2xl" />
                    {!isCollapsed && 'Home'}
                  </span>
                </Link>
                <span className="flex text-xl gap-3 text-white font-bold hover:text-black">
                  <LuCalendarCheck2 className="text-2xl" />
                  {!isCollapsed && 'Calendar'}
                </span>
                <Link to="add">
                  <span className="flex text-xl gap-3 text-white font-bold hover:text-black">
                    <IoIosAddCircleOutline className="text-2xl" />
                    {!isCollapsed && 'Add'}
                  </span>
                </Link>
                <Link to="settings">
                  <span className="flex text-xl gap-3 text-white font-bold hover:text-black">
                    <HiOutlineCog6Tooth className="text-2xl" />
                    {!isCollapsed && 'Settings'}
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>


  );
}

export default Sidebar;