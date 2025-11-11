
import React from 'react';
import type { ShelfData, NavItem, CategoryItem } from './types';

export const navItems: NavItem[] = [
    { name: 'Today', icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 107.046 120" fill="currentColor"><path d="M34.77 32.741h39.37c1.72 0 3.005-1.337 3.005-3.058 0-1.658-1.285-2.943-3.005-2.943H34.77c-1.783 0-3.109 1.285-3.109 2.943 0 1.721 1.326 3.058 3.109 3.058zm0 14.16h23.071c1.731 0 3.057-1.337 3.057-3.047 0-1.669-1.326-2.943-3.057-2.943H34.77c-1.783 0-3.109 1.274-3.109 2.943 0 1.71 1.326 3.047 3.109 3.047zm.769 48.307h36.02c4.299 0 6.521-2.212 6.521-6.511V61.581c0-4.299-2.222-6.51-6.521-6.51h-36.02c-4.144 0-6.573 2.211-6.573 6.51v27.116c0 4.299 2.429 6.511 6.573 6.511zm-23.078 1.796c0 10.232 5.034 15.318 15.111 15.318h51.851c10.087 0 15.163-5.086 15.163-15.318v-74.03c0-10.18-5.076-15.317-15.163-15.317H27.572c-10.077 0-15.111 5.137-15.111 15.317zm7.853-.124V23.099c0-4.876 2.61-7.589 7.693-7.589H79.04c5.031 0 7.651 2.713 7.651 7.589V96.88c0 4.876-2.62 7.589-7.651 7.589H28.007c-5.083 0-7.693-2.713-7.693-7.589z"></path></svg>, link: '#', isActive: true },
    { name: 'Games', icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20.904 20.654" fill="currentColor"><path d="M8.118 20.508c1.026-.225 2.842-.86 3.74-1.553 1.3-1.006 1.924-2.11 1.827-3.896l-.03-.899c.83-.566 1.631-1.26 2.403-2.05 2.715-2.784 4.482-7.208 4.482-11.065C20.54.459 20.071 0 19.485 0c-3.847 0-8.271 1.768-11.054 4.473-.82.81-1.504 1.591-2.06 2.412l-.89-.03c-1.718-.078-2.86.46-3.896 1.817-.693.918-1.338 2.715-1.562 3.75-.147.713.449 1.035.976.898 1.152-.224 2.393-.722 3.399-.644v.634c-.02.45.039.733.38 1.085l1.368 1.357c.36.351.634.42 1.084.4l.625-.02c.107 1.036-.372 2.247-.635 3.4-.186.663.283 1.113.898.976ZM13.89 8.71a2.065 2.065 0 0 1-2.07-2.07c0-1.153.917-2.08 2.07-2.08a2.076 2.076 0 1 1 0 4.15ZM2.59 19.1l1.651-.048c.537-.01.967-.176 1.319-.528.44-.44.556-1.064.478-1.494-.058-.351-.41-.449-.566-.166-.069.098-.127.196-.244.303-.245.254-.43.313-.743.332l-.966.059a.265.265 0 0 1-.274-.264l.059-.977c.02-.322.088-.508.332-.732a1.53 1.53 0 0 1 .312-.244c.274-.127.176-.527-.166-.576a1.78 1.78 0 0 0-1.494.488c-.361.371-.527.781-.537 1.309l-.049 1.65c-.02.547.352.908.889.889Z"></path></svg>, link: '#' },
    { name: 'Apps', icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24.805 23.486" fill="currentColor"><g><path d="m2.48 15.137 6.036 2.754c1.445.664 2.578.976 3.7.976 1.134 0 2.266-.312 3.712-.976l6.035-2.754c.044-.02.087-.04.127-.063.458.395.625.835.625 1.293 0 .674-.352 1.299-1.475 1.807l-6.025 2.754c-1.26.576-2.158.82-2.998.82-.83 0-1.729-.244-2.988-.82l-6.026-2.754C2.08 17.666 1.73 17.04 1.73 16.367c0-.459.163-.9.622-1.294Z"></path><path d="m2.48 10.479 6.036 2.763c1.445.654 2.578.977 3.7.977 1.134 0 2.266-.322 3.712-.977l6.035-2.764c.036-.016.07-.032.103-.05.476.397.649.844.649 1.31 0 .674-.352 1.3-1.475 1.817l-6.025 2.744c-1.26.576-2.158.82-2.998.82-.83 0-1.729-.244-2.988-.82l-6.026-2.744c-1.123-.518-1.474-1.143-1.474-1.817 0-.466.168-.914.646-1.311Z"></path><path d="M12.217 12.49c.84 0 1.738-.244 2.998-.82l6.025-2.754c1.123-.508 1.475-1.133 1.475-1.807 0-.683-.361-1.308-1.475-1.816l-6.045-2.744c-1.23-.557-2.129-.82-2.978-.82-.84 0-1.739.263-2.979.82L3.203 5.293C2.08 5.801 1.73 6.426 1.73 7.109c0 .674.351 1.3 1.474 1.807L9.23 11.67c1.26.576 2.158.82 2.988.82Z"></path></g></svg>, link: '#' },
    { name: 'Arcade', icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23.623 21.396" fill="currentColor"><path d="M11.63 21.396a7.621 7.621 0 0 0 3.282-.712l6.777-3.047c1.055-.479 1.573-.87 1.573-1.7v-.742c0-.322-.342-.39-.528-.302l-7.275 3.3a9.272 9.272 0 0 1-3.818.82c-1.309 0-2.373-.175-3.819-.84l-7.285-3.3c-.185-.088-.537 0-.537.322v.742c0 .83.518 1.221 1.582 1.7l6.768 3.047c.918.41 1.923.712 3.28.712Zm.01-3.72a7.972 7.972 0 0 0 3.301-.703l6.895-3.135c.596-.273 1.426-.732 1.426-1.416 0-.684-.84-1.143-1.446-1.416L14.941 7.87a7.873 7.873 0 0 0-2.45-.654v5.43c0 .283-.333.546-.85.546-.508 0-.84-.263-.84-.546v-5.43c-.899.097-1.7.322-2.451.654l-7.305 3.34c-.703.312-1.016.752-1.016 1.21 0 .46.313.9.996 1.212l7.325 3.34a7.832 7.832 0 0 0 3.29.703Zm-7.09-4.287c-.859 0-1.552-.42-1.552-.957 0-.528.693-.948 1.553-.948s1.543.42 1.543.948c0 .537-.684.957-1.543.957Zm7.09-6.973a3.193 3.193 0 0 1-3.193-3.184C8.447 1.475 9.883.06 11.641.06a3.168 3.168 0 0 1 3.174 3.173 3.176 3.176 0 0 1-3.174 3.184Z"></path></svg>, link: '#' },
];

export const categories: CategoryItem[] = [
    { name: 'Photo & Video', iconUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Features221/v4/dc/5c/56/dc5c5645-7397-d0f8-b36f-ad91054fdb93/c31e44f2-1f97-4f5a-8629-16eaa60cbd5f.png/40x40bb.webp', link: '#' },
    { name: 'Health & Fitness', iconUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Features211/v4/20/ca/47/20ca479c-d4ef-49b7-84aa-6afb1018cb08/7998d3a4-33e3-4abd-9f8b-4d50b60a6a7b.png/40x40bb.webp', link: '#' },
    { name: 'Productivity', iconUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Features211/v4/8f/12/b1/8f12b11b-6d84-be31-448b-9a1a8e70823d/49f6ac0a-e911-4ec3-babc-69d92f5749a0.png/40x40bb.webp', link: '#' },
    { name: 'Entertainment', iconUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Features211/v4/6f/ab/1a/6fab1a47-81a1-2602-113f-e858e458d3dc/df14443a-6b5d-4e5a-8301-01aed86e3024.png/40x40bb.webp', link: '#' },
    { name: 'Action', iconUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Features211/v4/e4/ea/0a/e4ea0a97-9d12-cd3f-c0d2-9e7e34222e6e/aec56635-f46c-4f90-bbae-7f4abf2fc8ec.png/40x40bb.webp', link: '#' },
    { name: 'Adventure', iconUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Features211/v4/56/4d/c3/564dc32e-ba9f-2447-4f06-b2a35bc180d3/15bbc0c7-668b-4a40-b331-8465451c5198.png/40x40bb.webp', link: '#' },
    { name: 'Puzzle', iconUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Features211/v4/4a/b4/95/4ab4951e-bcd2-df10-7c0c-b439c2a026af/31bf5127-cb13-4bcf-b995-5360bd8a9bc0.png/40x40bb.webp', link: '#' },
    { name: 'Indie', iconUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Features211/v4/7c/75/34/7c7534e2-4d79-2c32-f06b-3225f7ee7517/2efd3a78-2b87-4808-a1d0-e018fd628a4e.png/40x40bb.webp', link: '#' },
];


export const shelfData: ShelfData[] = [
    {
        id: '1714987549',
        title: 'Featured',
        subtitle: 'Our favorite new apps and games',
        cardLayout: '2-card',
        cards: [
            {
                id: 'card-1',
                badge: 'MAJOR UPDATE',
                title: 'Get Wicked in Roblox',
                description: 'Explore the Emerald City and more in a newly expanded adventure.',
                imageUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Features211/v4/0c/db/e5/0cdbe59a-cda5-c3a9-64eb-cd7ebf3af0e8/0031d5c2-09c3-45ab-b40e-656e2abd3151.png/1050x1400sr.webp',
                accentColor: 'rgb(34,77,49)',
                theme: 'light',
                link: '#',
                appInfo: {
                    iconUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/88/35/d0/8835d063-b966-7c73-e855-aaaf0e98a869/AppIcon-0-0-1x_U007epad-0-1-0-85-220.png/96x96ia-75.webp',
                    name: 'Roblox',
                    subtitle: 'Play, Create, and Connect',
                    link: '#',
                    bgColor: 'rgb(24,63,204)'
                }
            },
            {
                id: 'card-2',
                badge: 'WORLD PREMIERE',
                title: 'Be the Last Sonic Standing',
                description: 'Race and battle in this new multiplayer bash.',
                imageUrl: '',
                videoPosterUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Video221/v4/c0/d2/c4/c0d2c48c-fceb-d4cd-83a8-93083b18207a/Jobcc32551f-3aaa-4d07-be12-150483a403db-183336662-PreviewImage_preview_image_nonvideo_sdr-Time1736403211566.png/1000x562.5sr.webp',
                videoSrc: 'https://video-ssl.itunes.apple.com/itunes-assets/Video122/v4/6d/f4/19/6df4195f-f682-0193-450b-8575003b1437/mzvf_16489953460875328881.640x360.h264lc.U.p.m4v',
                accentColor: 'rgb(61,175,143)',
                theme: 'dark',
                link: '#',
                appInfo: {
                    iconUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/13/ce/63/13ce6372-e619-2ae9-1c05-0dd471a63244/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/96x96ia-75.webp',
                    name: 'Sonic Rumble',
                    subtitle: 'RUMBLE WITH SONIC & FRIENDS',
                    link: '#',
                    bgColor: 'rgb(46,46,46)'
                }
            }
        ]
    },
    {
        id: '1788478197',
        title: 'Today’s Biggest Events',
        subtitle: 'What to stream, play, and enjoy',
        cardLayout: '2-card',
        cards: [
            {
                id: 'card-3',
                badge: 'NOW TRENDING',
                title: 'Stream Wicked: One Wonderful Night',
                description: 'Don’t miss the thrillifying live performances of songs from the new movie.',
                imageUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Features221/v4/35/b7/cc/35b7ccce-49f6-0da7-76fb-34a141bd7aa6/29dacf64-31b4-4c05-a629-a64068a4e65f.png/1050x1400sr.webp',
                accentColor: 'rgb(63,58,34)',
                theme: 'dark',
                link: '#',
                appInfo: {
                    iconUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/16/3a/01/163a0156-a6a2-ab8c-7107-2756f1da56bf/AppIcon-0-0-1x_U007epad-0-1-0-85-220.png/96x96ia-75.webp',
                    name: 'Peacock TV: Stream TV & Movies',
                    subtitle: 'Hit TV shows, movies & sports',
                    link: '#',
                    bgColor: 'rgb(16,16,16)'
                }
            },
            {
                id: 'card-4',
                badge: 'NEW EVENT',
                title: 'Explore the Upside Down in Brawl Stars',
                description: 'Stranger Things hits the arena!',
                imageUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Features211/v4/30/e7/90/30e79045-0781-0b24-30bf-efa89fa00d05/06a1cfde-86b5-479d-8115-3c07f9392ac4.png/1050x1400sr.webp',
                accentColor: 'rgb(2,64,170)',
                theme: 'light',
                link: '#',
                appInfo: {
                    iconUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/b5/8f/6f/b58f6f0e-6965-046d-99cb-7f0a33a638e2/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/96x96ia-75.webp',
                    name: 'Brawl Stars',
                    subtitle: 'PvP & 5v5 Battle Royale MOBA',
                    link: '#',
                    bgColor: 'rgb(5,0,0)'
                }
            }
        ]
    },
    {
        id: '1698573220',
        title: 'App Store Editors’ Favorites',
        subtitle: 'We try every app and game we recommend',
        cardLayout: '2-card',
        cards: [
            {
                id: 'card-7',
                badge: '',
                title: 'GAME<br>OF THE<br>DAY',
                description: 'The dice decide your fate in dungeon-crawling duels.',
                imageUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Features211/v4/c4/a9/b8/c4a9b8ba-5729-1153-5257-da96597784df/d12e546f-232c-418c-bbb5-7e5fdaf2f0c7.png/1050x1400sr.webp',
                accentColor: 'rgb(58,69,48)',
                theme: 'dark',
                link: '#',
                appInfo: {
                    iconUrl: 'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/e4/da/e0/e4dae033-17ad-0429-1ddb-0071d0317490/Placeholder.mill/96x96bb-75.webp',
                    name: 'Heroll : Dice Roguelike',
                    subtitle: 'RPG board game with dice!',
                    link: '#',
                    bgColor: 'rgb(211,71,90)'
                }
            },
            {
                id: 'card-8',
                badge: '',
                title: 'APP<br>OF THE<br>DAY',
                description: 'Signature film-camera presets and lenses to elevate your shots.',
                imageUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Features211/v4/81/b5/97/81b59748-6593-ce0a-3f56-1cd295d3e6fa/0c8e2f77-35dd-40b4-8aeb-1ad91c914f65.png/1050x1400sr.webp',
                accentColor: 'rgb(21,20,13)',
                theme: 'dark',
                link: '#',
                appInfo: {
                    iconUrl: 'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/ea/81/70/ea81705f-b6f8-194c-200a-00cad654c4de/Placeholder.mill/96x96bb-75.webp',
                    name: 'Leica LUX - Pro Manual Camera',
                    subtitle: 'Capture RAW Digital Photos',
                    link: '#',
                    bgColor: 'rgb(255,255,255)'
                }
            }
        ]
    },
    {
        id: '1698371075',
        title: 'Hot This Week',
        subtitle: 'Play these new launches and updates',
        cardLayout: '2-card',
        cards: [
            {
                id: 'card-hot-1',
                badge: '',
                title: '',
                titleImage: 'https://is1-ssl.mzstatic.com/image/thumb/Features126/v4/34/87/01/3487015f-a836-3cce-5d32-0ae8e3bf567c/50c2608e-b8af-44d4-8247-265293e662d1.png/730x448bb.webp',
                description: 'Sonic Rumble, He-Man, and more!',
                imageUrl: '',
                videoPosterUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Video211/v4/43/2e/c8/432ec839-d8bd-bb76-4953-7ed67eb9862f/Jobd0a06ced-66e1-476f-b6e7-f7c025f228c8-195745642-PreviewImage_Preview_Image_Intermediate_nonvideo_383454634_2223175193-Time1750866133846.png/1000x562.5sr.webp',
                videoSrc: 'https://video-ssl.itunes.apple.com/itunes-assets/Video112/v4/1b/4a/12/1b4a123f-5859-9374-1355-6805511b8461/mzvf_3110363246872583279.640x360.h264lc.U.p.m4v',
                accentColor: 'rgb(72,33,66)',
                theme: 'light',
                link: '#',
                lockupList: [
                    { iconUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/13/ce/63/13ce6372-e619-2ae9-1c05-0dd471a63244/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/96x96ia-75.webp', name: 'Sonic Rumble', subtitle: '', link: '#', bgColor: ''},
                    { iconUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/a2/6d/6e/a26d6ee7-d47b-cf53-7261-01d842b0da27/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/96x96ia-75.webp', name: 'He-Man', subtitle: '', link: '#', bgColor: '' },
                    { iconUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/11/f2/71/11f271d9-3320-f50e-9db1-8acb3d2fec51/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/96x96ia-75.webp', name: 'MapleStory', subtitle: '', link: '#', bgColor: '' },
                    { iconUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/56/70/af/5670af32-2154-7ff2-981d-dee10daf837b/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/96x96ia-75.webp', name: 'Secrets of Paradise', subtitle: '', link: '#', bgColor: '' },
                    { iconUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/98/67/bb/9867bbf7-fc98-01fb-c91d-825d63f63ff7/AppIcon-1x_U007emarketing-0-8-0-85-220-0.png/96x96ia-75.webp', name: 'Monopoly Match', subtitle: '', link: '#', bgColor: '' },
                ]
            },
            {
                id: 'card-hot-2',
                badge: 'FROM THE EDITORS',
                title: 'Your Fall Games Guide',
                description: 'Bundle up with cozy indies, awesome action romps, and more.',
                imageUrl: '',
                videoPosterUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Video221/v4/61/f1/f1/61f1f1f9-a55e-d746-5d57-ada6bdde06f8/Job19905433-0ffc-4e8d-958b-8fed7e5cd555-205706953-PreviewImage_Preview_Image_Intermediate_nonvideo_401863266_2377497627-Time1760113419175.png/1000x562.5sr.webp',
                videoSrc: 'https://video-ssl.itunes.apple.com/itunes-assets/Video122/v4/d4/d9/98/d4d998f4-2c78-3610-72e5-42f883f3c64c/mzvf_5409607629578135894.640x360.h264lc.U.p.m4v',
                accentColor: 'rgb(233,131,9)',
                theme: 'dark',
                link: '#',
                lockupList: [
                    { iconUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/8f/55/df/8f55df4d-c419-312c-3f2d-c6d0e2678112/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/96x96ia-75.webp', name: 'Chants of Sennaar', subtitle: '', link: '#', bgColor: ''},
                    { iconUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/67/af/39/67af3986-09ed-fb09-730b-b54632f26aeb/App_Icon_1-0-0-1x_U007emarketing-0-8-0-85-220.png/96x96ia-75.webp', name: 'TOEM', subtitle: '', link: '#', bgColor: '' },
                    { iconUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/09/a6/85/09a685ef-7c30-7353-fedc-823b296c2e82/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/96x96ia-75.webp', name: 'A Little to the Left', subtitle: '', link: '#', bgColor: '' },
                ]
            }
        ]
    }
];
