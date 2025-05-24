import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai'
import { BiBook, BiMessageSquareDetail } from 'react-icons/bi'
import { RiServiceLine } from 'react-icons/ri'
import { BsBriefcase } from 'react-icons/bs'

const NAV_ITEMS = [
    {
        id: '#header',
        children: <AiOutlineHome />
    },
    {
        id: '#about',
        children: <AiOutlineUser />
    },
    {
        id: '#experience',
        children: <BiBook />
    },
    {
        id: '#services',
        children: <RiServiceLine />
    },
    {
        id: '#portfolio',
        children: <BsBriefcase />
    },
    {
        id: '#contact',
        children: <BiMessageSquareDetail />
    }
]

export { NAV_ITEMS }
