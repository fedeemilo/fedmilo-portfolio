import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";

const NAV_ITEMS = [
    {
        id: "#home",
        children: <AiOutlineHome />
    },
    {
        id: "#about",
        children: <AiOutlineUser />
    },
    {
        id: "#experience",
        children: <BiBook />
    },
    {
        id: "#services",
        children: <RiServiceLine />
    },
    {
        id: "#contact",
        children: <BiMessageSquareDetail />
    }
];

export { NAV_ITEMS };
