import { AiOutlineHome } from 'react-icons/ai'
import { BiMessageSquareDetail } from 'react-icons/bi'
import { BsBriefcase } from 'react-icons/bs'

const NAV_ITEMS = [
    {
        id: '#header',
        children: <AiOutlineHome />
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
