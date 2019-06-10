import marketplace from './static/images/marketplace.svg';
import source from './static/images/coding.svg';

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
    description: 'Find our application at R3 Marketplace',
  },
  {
    img: source,
    title: 'Tools and Support',
    href: 'https://github.com/consensolabs/loan-syndication-client',
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
