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
} from '../../index'

const data = [
    {
        image: [wavo1, wavo2, wavo3, wavo4, wavo5],
        name: 'Wavo',
        subname: 'Clone website wavo',
        description:
            'Sử dụng kiến thức đã học như HTML5, CSS3 để clone website giúp ôn lại các kiến thức, áp dụng thêm những công nghệ mới như SCSS giúp viết CSS như một ngôn ngữ lập trình, dễ bảo trì và Javascript để viết các sự kiện cho website',
        github: 'https://github.com/minhquang2904/Wavo',
        demo: 'http://minhquangdev.wavo.surge.sh/',
        skills: [htmlLogo, cssLogo, jsLogo, scssLogo],
    },
    {
        image: [wavo1, wavo2, wavo3, wavo4, wavo5],
        name: 'MQuang Dev',
        subname: 'Create Profile',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae corporisexercitationem exceptur',
        github: 'https://github.com/minhquang2904/Profile',
        demo: '',
        skills: [reactLogo, framerMotion, reactRouter, vite, scssLogo],
    },
]

export default data
