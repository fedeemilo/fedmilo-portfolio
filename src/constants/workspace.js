import { ICONS } from './icons'

export const WORKSPACE_MAIN_IMAGES = [
    {
        id: 'desk1',
        alt: 'Main workspace with MacBook and ultrawide monitor',
        image: ICONS.WORKSPACE_DESK1,
        webp: ICONS.WORKSPACE_DESK1_WEBP
    },
    // {
    //     id: 'desk2',
    //     alt: 'Workspace view from the front',
    //     image: ICONS.WORKSPACE_DESK2,
    //     webp: ICONS.WORKSPACE_DESK2_WEBP
    // },
    {
        id: 'desk2',
        alt: 'Workspace view from the side',
        image: ICONS.WORKSPACE_DESK3,
        webp: ICONS.WORKSPACE_DESK3_WEBP
    }
]

export const WORKSPACE_ITEMS = [
    {
        id: 'keyboard',
        title: 'Keychron Q3-Pro Mechanical Keyboard',
        description:
            'This custom mechanical keyboard offers a premium typing experience. I use it daily for coding and creative writing.',
        images: [ICONS.WORKSPACE_KEYBOARD1, ICONS.WORKSPACE_KEYBOARD2],
        webp: [ICONS.WORKSPACE_KEYBOARD1_WEBP, ICONS.WORKSPACE_KEYBOARD2_WEBP]
    },
    {
        id: 'monitor',
        title: 'Samsung Odyssey G9 49” OLED 240hz',
        description:
            'A massive ultrawide display that helps me manage multiple workflows and enjoy immersive gaming sessions.',
        images: [ICONS.WORKSPACE_MONITOR],
        webp: [ICONS.WORKSPACE_MONITOR_WEBP]
    },
    {
        id: 'mouse',
        title: 'Logitech MX Master 3s',
        description:
            'An ergonomic mouse with customizable buttons, perfect for productivity and long work sessions.',
        images: [ICONS.WORKSPACE_MOUSE],
        webp: [ICONS.WORKSPACE_MOUSE_WEBP]
    },
    {
        id: 'pc',
        title: 'My Custom PC Build',
        description: `Corsair H100i Cooling · AMD Ryzen 9 5900X · 32GB Kingston Fury RGB · 1TB Crucial NVMe Gen4 · B550M DS3H AC · Radeon RX 6700 · Lian Li O11 Razer · 4 CoolerMaster RGB`,
        images: [ICONS.WORKSPACE_PC],
        webp: [ICONS.WORKSPACE_PC_WEBP]
    },
    {
        id: 'piano',
        title: 'Korg SP-280 Digital Piano',
        description:
            'Besides coding, I enjoy playing music to stay creative. This full-size digital piano is part of my daily routine.',
        images: [ICONS.WORKSPACE_PIANO],
        webp: [ICONS.WORKSPACE_PIANO_WEBP]
    }
]
