import {
    reactRouter,
    framerMotion,
    reactLogo,
    htmlLogo,
    cssLogo,
    jsLogo,
    scssLogo,
    wavo1,
    wavo2,
    wavo3,
    wavo4,
    wavo5,
    vite,
    profile1,
    profile2,
    profile3,
    profile4,
    travel1,
    travel2,
} from '../../index'

const data = [
    {
        image: [travel1, travel2],
        name: 'Travel',
        subname: 'Clone website travel',
        description: 'Code lại giao diện cơ bản của website bằng HTML5 và CSS3.',
        github: 'https://github.com/minhquang2904/travel',
        demo: 'http://travel.minhquangdev.surge.sh/',
        skills: [htmlLogo, cssLogo],
    },
    {
        image: [wavo1, wavo2, wavo3, wavo4, wavo5],
        name: 'Wavo',
        subname: 'Clone website wavo',
        description:
            'Sử dụng kiến thức đã học như HTML5, CSS3 để clone website giúp ôn lại các kiến thức, áp dụng thêm những công nghệ mới như SCSS giúp viết CSS như một ngôn ngữ lập trình, dễ bảo trì và Javascript để viết các sự kiện cho website.',
        github: 'https://github.com/minhquang2904/Wavo',
        demo: 'http://minhquangdev.surge.sh/',
        skills: [htmlLogo, cssLogo, jsLogo, scssLogo],
    },
    {
        image: [profile1, profile2, profile3, profile4],
        name: 'MQuang Dev',
        subname: 'MY PORTFOLIO WEBSITE',
        description:
            'Trang cá nhân của bản thân, thông tin liên hệ và các dự án đã làm. Website được xây dựng chủ yếu dựa trên React và Framer Motion.',
        github: 'https://github.com/minhquang2904/Profile',
        demo: '',
        skills: [reactLogo, framerMotion, reactRouter, vite, scssLogo],
    },
]

export default data
