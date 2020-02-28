import marketplace from './static/images/marketplace.svg';
import source from './static/images/coding.svg';
import rocket from './static/images/rocket.png';
import product from './static/images/product.png';
import bank from './static/images/bank.png';
import team from './static/images/team.png';

import koshikImg from './static/images/koshik.jpg';
import manmohanImg from './static/images/manmohan.jpeg';
import jaswanthImg from './static/images/jaswanth.png';
import adityaImg from './static/images/aditya.jpg';

export const assets = 'https://gw.alipayobjects.com/os/s/prod/antv/assets';
const base = 'https://antv.alipay.com/';


export const page1 = [
  {
    img: `${assets}/image/icon/g2-c94ef.svg`,
    href: 'http://demo.consensolabs.com/syndlend',
    title: 'Quick Demo',
    description: 'A sneak and peak into the SyndLend application',
  },
  {
    img: marketplace,
    title: 'R3 Marketplace',
    href: 'https://marketplace.r3.com/dashboard',
    description: 'Find our application at R3 Marketplace (Coming soon)',
  },
  {
    img: source,
    title: 'Tools and Support',
    href: 'https://docs.syndlend.consensolabs.com/resources/resources',
    description: 'Docs, open source tools for the SyndLend to support seamless integration',
  },
];

export const page3 = [
  {
    img: `${assets}/image/home/features-simple-9617c.svg`,
    title: 'Convenient and efficient',
    description: 'Instant and easy deployment to devise an efficient syndicated loan market',
  },
  {
    img: `${assets}/image/home/features-professional-1c6d1.svg`,
    title: 'Transparent and privacy preserved',
    description: 'Each entity receives all the relevant information about the loan, market status without having to trust the single source',
  },
  {
    img: `${assets}/image/home/features-powerful-243e3.svg`,
    title: 'Quicker settlement',
    description: 'Integration of the token system and instant verification through smart contracts speeds up the settlement time',
  },
];

export const page4 = [
  {
      name: 'David E. Rutter',
      profile: 'Chief Executive Officer, R3',
      avatar: 'https://pbs.twimg.com/profile_images/1079171000812666881/mFxwF8Jd_400x400.jpg',
      comment: 'Syndicated lending is exactly the type of market that will derive huge benefits from DLT. Transparency, efficiency and risk are major concerns with current systems and processes. We built Corda specifically to tackle issues such as these, whilst meeting the unique privacy and security requirements of regulated financial institutions.',
  },
  {
    name: 'Richard Gendal Brown',
    profile: 'Chief Technology Officer, R3',
    avatar: 'https://pbs.twimg.com/profile_images/789922075238596610/9YEriL3__400x400.jpg',
    comment: 'With Corda as an asset ledger, bank or other firm can issue assets (cash, equities, even commercial paper or syndicated loans) on to the ledger and have them be directly owned and seamlessly transferred to other members of an appropriate business network in near-real-time and with settlement finality.',
  },
  {
    name: 'Genpact',
    profile: 'Professional services',
    avatar: 'https://banner2.kisspng.com/20181127/jco/kisspng-logo-genpact-brand-portable-network-graphics-produ-genpact-logo-12-vector-logos-5bfceaf5414308.3508120715433018772673.jpg',
    comment: 'With a decentralized market, a distributed ledger system could serve as an asset register' +
    'and ledger for both the primary and secondary markets. ',
  },
];

export const page5 = [
  `${assets}/image/home/aliyun-f111c.png`,
  `${assets}/image/home/alipay-fceea.png`,
  `${assets}/image/home/tmall-cb94f.png`,
  `${assets}/image/home/taobao-ade5b.png`,
  `${assets}/image/home/mybank-da103.png`,
  `${assets}/image/home/jd-23e52.png`,
  `${assets}/image/home/yunos-2edef.png`,
  `${assets}/image/home/cainiao-40fc8.png`,
];

export const footer = [
    { text: 'Twitter', src: 'https://twitter.com/consensolabs' },
    { text: 'GitHub', src: 'https://github.com/consensolabs' },
    { text: 'Contact', src: 'mailto:admin@consensolabs.com' },
];

export const TeamDataSource = {
    wrapper: { className: 'home-page-wrapper content8-wrapper' },
    page: { className: 'home-page content8' },
    OverPack: { playScale: 0.3 },
    titleWrapper: {
        className: 'title-wrapper',
        children: [
            {
                name: 'image',
                children:
                    'https://gw.alipayobjects.com/zos/rmsportal/PiqyziYmvbgAudYfhuBr.svg',
                className: 'title-image',
            },
            { name: 'title', children: 'Our Team', className: 'title-h1' },
        ],
    },
    block: {
        className: 'content-wrapper',
        children: [
            {
                name: 'block0',
                md: 6,
                xs: 24,
                className: 'content8-block-wrapper',
                children: {
                    className: 'content8-block',
                    img: {
                        className: 'content8-img',
                        children:
                        koshikImg
                    },
                    title: { className: 'content8-title', children: 'Koshik Raj' },
                    content: {
                        className: 'content8-content',
                        children: 'Co-Founder',
                    },
                },
            },
            {
                name: 'block1',
                md: 6,
                xs: 24,
                className: 'content8-block-wrapper',
                children: {
                    className: 'content8-block',
                    img: {
                        className: 'content8-img',
                        children: manmohanImg
                    },
                    title: { className: 'content8-title', children: 'Manmohan Saxena' },
                    content: {
                        className: 'content8-content',
                        children: 'Co-Founder',
                    },
                },
            },
            {
                name: 'block2',
                md: 6,
                xs: 24,
                className: 'content8-block-wrapper',
                children: {
                    className: 'content8-block',
                    img: {
                        className: 'content8-img',
                        children:
                            'https://adventhelp.com/wp-content/uploads/2018/06/bio-portrait-placeholder.jpg',
                    },
                    title: { className: 'content8-title', children: 'Dr. R Singhi' },
                    content: {
                        className: 'content8-content',
                        children: 'Mentor and Project\n' +
                        'Sponsor',
                    },
                },
            },
            {
                name: 'block2',
                md: 6,
                xs: 24,
                className: 'content8-block-wrapper',
                children: {
                    className: 'content8-block',
                    img: {
                        className: 'content8-img',
                        children: jaswanthImg
                    },
                    title: { className: 'content8-title', children: 'Jaswanth Reddy' },
                    content: {
                        className: 'content8-content',
                        children: 'Developer'
                    },
                },
            },
            {
                name: 'block2',
                md: 6,
                xs: 24,
                className: 'content8-block-wrapper',
                children: {
                    className: 'content8-block',
                    img: {
                        className: 'content8-img',
                        children: adityaImg
                    },
                    title: { className: 'content8-title', children: 'Aditya Srivastava' },
                    content: {
                        className: 'content8-content',
                        children: 'Blockchain Developer Intern'
                    },
                },
            },

        ],
    },
};


  export const RoadmapDataSource = {
    wrapper: { className: 'home-page-wrapper content9-wrapper' },
    page: { className: 'home-page content9' },
    titleWrapper: {
        className: 'title-wrapper',
        children: [
            {
                name: 'image',
                children:
                    'https://gw.alipayobjects.com/zos/rmsportal/PiqyziYmvbgAudYfhuBr.svg',
                className: 'title-image',
            },
            { name: 'title', children: 'Roadmap', className: 'title-h1' },
        ],
    },
    block: {
        className: 'timeline',
        children: [
            {
                name: 'block0',
                className: 'block-wrapper',
                playScale: 0.3,
                children: {
                    imgWrapper: { className: 'image-wrapper' },
                    textWrapper: { className: 'text-wrapper' },
                    img: {
                        className: 'block-img',
                        children: rocket
                    },
                    icon: {
                        className: 'block-icon',
                        children:
                            'https://gw.alipayobjects.com/zos/rmsportal/qJnGrvjXPxdKETlVSrbe.svg',
                    },
                    name: { className: 'block-name', children: 'Q2 2019' },
                    post: { className: 'block-post', children: 'Draft white paper and phase 1 implementation' },
                    time: { className: 'block-time', children: 'Q2 2019' },
                    title: { className: 'block-title', children: 'Draft white paper and phase 1 implementation' },
                    content: { className: 'block-content', children: 'Published first version of the white paper. Deployed phase 1 ' +
                        'implementation with basic features for primary, secondary market with loan disbursement' },
                },
            },
            {
                name: 'block1',
                className: 'block-wrapper',
                playScale: 0.3,
                children: {
                    imgWrapper: { className: 'image-wrapper' },
                    textWrapper: { className: 'text-wrapper' },
                    img: {
                        className: 'block-img',
                        children: product
                    },
                    icon: {
                        className: 'block-icon',
                        children:
                            'https://gw.alipayobjects.com/zos/rmsportal/qJnGrvjXPxdKETlVSrbe.svg',
                    },
                    name: { className: 'block-name', children: 'Q3 2019' },
                    post: { className: 'block-post', children: 'Phase 2 implementation with legally compliant system' },
                    time: { className: 'block-time', children: 'Q3 2019' },
                    title: { className: 'block-title', children: 'Phase 2 implementation with legally compliant system' },
                    content: { className: 'block-content', children: 'Publish elaborated technical white paper with legal compliance and complete ' +
                        'implementation of phase 2 with production ready deployment strategy' },
                },
            },
            {
                name: 'block2',
                className: 'block-wrapper',
                playScale: 0.3,
                children: {
                    imgWrapper: { className: 'image-wrapper' },
                    textWrapper: { className: 'text-wrapper' },
                    img: {
                        className: 'block-img',
                        children: bank
                    },
                    icon: {
                        className: 'block-icon',
                        children:
                            'https://gw.alipayobjects.com/zos/rmsportal/qJnGrvjXPxdKETlVSrbe.svg',
                    },
                    name: { className: 'block-name', children: 'Q4 2019' },
                    post: { className: 'block-post', children: 'Reaching out to the financial institutions' },
                    time: { className: 'block-time', children: 'Q4 2019' },
                    title: { className: 'block-title', children: 'Reaching out to the financial institutions' },
                    content: { className: 'block-content', children: 'Create a network of syndicated loan market by enrolling ' +
                        'the financial institutions. Develop tools to integrate with the institutions\' existing applications' },
                },
            },
            {
                name: 'block3',
                className: 'block-wrapper',
                playScale: 0.3,
                children: {
                    imgWrapper: { className: 'image-wrapper' },
                    textWrapper: { className: 'text-wrapper' },
                    img: {
                        className: 'block-img',
                        children: team
                    },
                    icon: {
                        className: 'block-icon',
                        children:
                            'https://gw.alipayobjects.com/zos/rmsportal/qJnGrvjXPxdKETlVSrbe.svg',
                    },
                    name: { className: 'block-name', children: 'Q1 2020' },
                    post: { className: 'block-post', children: 'Refine and expand' },
                    time: { className: 'block-time', children: 'Q1 2020' },
                    title: { className: 'block-title', children: 'Refine and expand' },
                    content: { className: 'block-content', children: 'Build a strong team to work with financial institutions ' +
                        'and expand the syndicated market across several institutions' },
                },
            },
            {
                name: 'block3',
                className: 'block-wrapper',
                playScale: 0.3,
                children: {
                    imgWrapper: { className: 'image-wrapper' },
                    textWrapper: { className: 'text-wrapper' },
                    img: {
                        className: 'block-img',
                        children:
                            'https://gw.alipayobjects.com/zos/rmsportal/SlFgHDtOTLzccvFrQHLg.png',
                    },
                    icon: {
                        className: 'block-icon',
                        children:
                            'https://gw.alipayobjects.com/zos/rmsportal/agOOBdKEIJlQhfeYhHJc.svg',
                    },
                    name: { className: 'block-name', children: '' },
                    post: { className: 'block-post', children: '' },
                    time: { className: 'block-time', children: '' },
                    title: { className: 'block-title', children: '' },
                    content: {
                        className: 'block-content',
                        children:
                            '',
                    },
                },
            },
        ],
    },
};
