import React from 'react';
import type { ShelfData, NavItem, CategoryItem, CategoryShelf, AppInfo, CategoryShelfItem } from './types';

export const navItems: NavItem[] = [
    { name: 'Today', icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 107.046 120" fill="currentColor"><path d="M34.77 32.741h39.37c1.72 0 3.005-1.337 3.005-3.058 0-1.658-1.285-2.943-3.005-2.943H34.77c-1.783 0-3.109 1.285-3.109 2.943 0 1.721 1.326 3.058 3.109 3.058zm0 14.16h23.071c1.731 0 3.057-1.337 3.057-3.047 0-1.669-1.326-2.943-3.057-2.943H34.77c-1.783 0-3.109 1.274-3.109 2.943 0 1.71 1.326 3.047 3.109 3.047zm.769 48.307h36.02c4.299 0 6.521-2.212 6.521-6.511V61.581c0-4.299-2.222-6.51-6.521-6.51h-36.02c-4.144 0-6.573 2.211-6.573 6.51v27.116c0 4.299 2.429 6.511 6.573 6.511zm-23.078 1.796c0 10.232 5.034 15.318 15.111 15.318h51.851c10.087 0 15.163-5.086 15.163-15.318v-74.03c0-10.18-5.076-15.317-15.163-15.317H27.572c-10.077 0-15.111 5.137-15.111 15.317zm7.853-.124V23.099c0-4.876 2.61-7.589 7.693-7.589H79.04c5.031 0 7.651 2.713 7.651 7.589V96.88c0 4.876-2.62 7.589-7.651 7.589H28.007c-5.083 0-7.693-2.713-7.693-7.589z"></path></svg>, link: '#/' },
    { name: 'Games', icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20.904 20.654" fill="currentColor"><path d="M8.118 20.508c1.026-.225 2.842-.86 3.74-1.553 1.3-1.006 1.924-2.11 1.827-3.896l-.03-.899c.83-.566 1.631-1.26 2.403-2.05 2.715-2.784 4.482-7.208 4.482-11.065C20.54.459 20.071 0 19.485 0c-3.847 0-8.271 1.768-11.054 4.473-.82.81-1.504 1.591-2.06 2.412l-.89-.03c-1.718-.078-2.86.46-3.896 1.817-.693.918-1.338 2.715-1.562 3.75-.147.713.449 1.035.976.898 1.152-.224 2.393-.722 3.399-.644v.634c-.02.45.039.733.38 1.085l1.368 1.357c.36.351.634.42 1.084.4l.625-.02c.107 1.036-.372 2.247-.635 3.4-.186.663.283 1.113.898.976ZM13.89 8.71a2.065 2.065 0 0 1-2.07-2.07c0-1.153.917-2.08 2.07-2.08a2.076 2.076 0 1 1 0 4.15ZM2.59 19.1l1.651-.048c.537-.01.967-.176 1.319-.528.44-.44.556-1.064.478-1.494-.058-.351-.41-.449-.566-.166-.069.098-.127.196-.244.303-.245.254-.43.313-.743.332l-.966.059a.265.265 0 0 1-.274-.264l.059-.977c.02-.322.088-.508.332-.732a1.53 1.53 0 0 1 .312-.244c.274-.127.176-.527-.166-.576a1.78 1.78 0 0 0-1.494.488c-.361.371-.527.781-.537 1.309l-.049 1.65c-.02.547.352.908.889.889Z"></path></svg>, link: '#/games' },
    { name: 'Apps', icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24.805 23.486" fill="currentColor"><g><path d="m2.48 15.137 6.036 2.754c1.445.664 2.578.976 3.7.976 1.134 0 2.266-.312 3.712-.976l6.035-2.754c.044-.02.087-.04.127-.063.458.395.625.835.625 1.293 0 .674-.352 1.299-1.475 1.807l-6.025 2.754c-1.26.576-2.158.82-2.998.82-.83 0-1.729-.244-2.988-.82l-6.026-2.754C2.08 17.666 1.73 17.04 1.73 16.367c0-.459.163-.9.622-1.294Z"></path><path d="m2.48 10.479 6.036 2.763c1.445.654 2.578.977 3.7.977 1.134 0 2.266-.322 3.712-.977l6.035-2.764c.036-.016.07-.032.103-.05.476.397.649.844.649 1.31 0 .674-.352 1.3-1.475 1.817l-6.025 2.744c-1.26.576-2.158.82-2.998.82-.83 0-1.729-.244-2.988-.82l-6.026-2.744c-1.123-.518-1.474-1.143-1.474-1.817 0-.466.168-.914.646-1.311Z"></path><path d="M12.217 12.49c.84 0 1.738-.244 2.998-.82l6.025-2.754c1.123-.508 1.475-1.133 1.475-1.807 0-.683-.361-1.308-1.475-1.816l-6.045-2.744c-1.23-.557-2.129-.82-2.978-.82-.84 0-1.739.263-2.979.82L3.203 5.293C2.08 5.801 1.73 6.426 1.73 7.109c0 .674.351 1.3 1.474 1.807L9.23 11.67c1.26.576 2.158.82 2.988.82Z"></path></g></svg>, link: '#/apps' },
    { name: 'Arcade', icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23.623 21.396" fill="currentColor"><path d="M11.63 21.396a7.621 7.621 0 0 0 3.282-.712l6.777-3.047c1.055-.479 1.573-.87 1.573-1.7v-.742c0-.322-.342-.39-.528-.302l-7.275 3.3a9.272 9.272 0 0 1-3.818.82c-1.309 0-2.373-.175-3.819-.84l-7.285-3.3c-.185-.088-.537 0-.537.322v.742c0 .83.518 1.221 1.582 1.7l6.768 3.047c.918.41 1.923.712 3.28.712Zm.01-3.72a7.972 7.972 0 0 0 3.301-.703l6.895-3.135c.596-.273 1.426-.732 1.426-1.416 0-.684-.84-1.143-1.446-1.416L14.941 7.87a7.873 7.873 0 0 0-2.45-.654v5.43c0 .283-.333.546-.85.546-.508 0-.84-.263-.84-.546v-5.43c-.899.097-1.7.322-2.451.654l-7.305 3.34c-.703.312-1.016.752-1.016 1.21 0 .46.313.9.996 1.212l7.325 3.34a7.832 7.832 0 0 0 3.29.703Zm-7.09-4.287c-.859 0-1.552-.42-1.552-.957 0-.528.693-.948 1.553-.948s1.543.42 1.543.948c0 .537-.684.957-1.543.957Zm7.09-6.973a3.193 3.193 0 0 1-3.193-3.184C8.447 1.475 9.883.06 11.641.06a3.168 3.168 0 0 1 3.174 3.173 3.176 3.176 0 0 1-3.174 3.184Z"></path></svg>, link: '#/arcade' },
];

export const categories: CategoryItem[] = [
    { name: 'Photo & Video', iconUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Features221/v4/dc/5c/56/dc5c5645-7397-d0f8-b36f-ad91054fdb93/c31e44f2-1f97-4f5a-8629-16eaa60cbd5f.png/40x40bb.webp', link: '#/category/photo-video' },
    { name: 'Health & Fitness', iconUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Features211/v4/20/ca/47/20ca479c-d4ef-49b7-84aa-6afb1018cb08/7998d3a4-33e3-4abd-9f8b-4d50b60a6a7b.png/40x40bb.webp', link: '#/category/health-fitness' },
    { name: 'Productivity', iconUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Features211/v4/8f/12/b1/8f12b11b-6d84-be31-448b-9a1a8e70823d/49f6ac0a-e911-4ec3-babc-69d92f5749a0.png/40x40bb.webp', link: '#/category/productivity' },
    { name: 'Entertainment', iconUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Features211/v4/6f/ab/1a/6fab1a47-81a1-2602-113f-e858e458d3dc/df14443a-6b5d-4e5a-8301-01aed86e3024.png/40x40bb.webp', link: '#/category/entertainment' },
    { name: 'Action', iconUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Features211/v4/e4/ea/0a/e4ea0a97-9d12-cd3f-c0d2-9e7e34222e6e/aec56635-f46c-4f90-bbae-7f4abf2fc8ec.png/40x40bb.webp', link: '#/category/action' },
    { name: 'Adventure', iconUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Features211/v4/56/4d/c3/564dc32e-ba9f-2447-4f06-b2a35bc180d3/15bbc0c7-668b-4a40-b331-8465451c5198.png/40x40bb.webp', link: '#/category/adventure' },
    { name: 'Puzzle', iconUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Features211/v4/4a/b4/95/4ab4951e-bcd2-df10-7c0c-b439c2a026af/31bf5127-cb13-4bcf-b995-5360bd8a9bc0.png/40x40bb.webp', link: '#/category/puzzle' },
    { name: 'Indie', iconUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Features211/v4/7c/75/34/7c7534e2-4d79-2c32-f06b-3225f7ee7517/2efd3a78-2b87-4808-a1d0-e018fd628a4e.png/40x40bb.webp', link: '#/category/indie' },
];

export const gamesShelfData: ShelfData[] = [
    {
        id: 'games-featured',
        title: 'Featured Games',
        subtitle: 'The latest and greatest hits',
        cardLayout: '2-card',
        cards: [
            {
                id: 'game-1',
                badge: 'MAJOR UPDATE',
                title: 'Wuthering Waves: Version 2.0',
                description: 'Enter the Dragon\'s Maw—a new region with new challenges awaits.',
                imageUrl: '',
                videoPosterUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Video221/v4/0e/46/78/0e467812-70b1-3e4b-741a-a5c645b0d619/Job271d436e-d710-482f-871d-045e05c31754-206085526-PreviewImage_preview_image_nonvideo_sdr-Time1761595155110.png/1000x562.5sr.webp',
                videoSrc: 'https://video-ssl.itunes.apple.com/itunes-assets/Video112/v4/4c/76/c5/4c76c5f7-6629-d567-a7a5-8e2b0b7410c5/mzvf_10577543235334237889.640x360.h264lc.U.p.m4v',
                accentColor: 'rgb(14,21,39)',
                theme: 'dark',
                link: '#',
                appInfo: {
                    iconUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/28/25/94/2825944a-426c-0e6d-5564-a745915f0135/AppIcon-0-0-1x_U007emarketing-0-7-0-0-0-85-220-0.png/96x96ia-75.webp',
                    name: 'Wuthering Waves',
                    subtitle: 'Action RPG',
                    link: '#',
                    bgColor: 'rgb(24,63,204)'
                }
            },
            {
                id: 'game-2',
                badge: 'NOW AVAILABLE',
                title: 'Zenless Zone Zero',
                description: 'Urban fantasy ARPG from the creators of Genshin Impact.',
                imageUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Features221/v4/f4/33/83/f43383a8-450f-50a0-0081-067a98818274/e33d4ac6-b258-48f5-875f-255d045d259c.png/1050x1400sr.webp',
                accentColor: 'rgb(255,220,1)',
                theme: 'light',
                link: '#',
                appInfo: {
                    iconUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/be/89/3e/be893e3d-1a8c-2673-455b-59d4cde8b1e4/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/96x96ia-75.webp',
                    name: 'Zenless Zone Zero',
                    subtitle: 'Action',
                    link: '#',
                    bgColor: 'rgb(46,46,46)'
                }
            }
        ]
    },
     {
        id: 'games-what-we-play',
        title: 'What We’re Playing',
        subtitle: 'Our current gaming obsessions',
        cardLayout: '4-card',
        cards: [
            { id: 'game-3', badge: 'Editors\' Choice', title: 'Stardew Valley', description: 'The beloved farming RPG.', imageUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Features116/v4/e5/77/82/e5778262-9556-3221-a477-047f0789d6c4/0e8f3a39-9b98-466f-8acd-3e11a3d6ac88.png/838x1118sr.webp', accentColor: 'rgb(105, 59, 34)', theme: 'dark', link: '#', appInfo: { iconUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Purple116/v4/5a/61/89/5a61895a-2e48-522f-370c-f3b396e9a66d/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/96x96ia-75.webp', name: 'Stardew Valley', subtitle: 'Simulation', link: '#', bgColor: '#fff' } },
            { id: 'game-4', badge: 'Live Event', title: 'Genshin Impact', description: 'Explore a vast fantasy world.', imageUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Features126/v4/71/f1/b3/71f1b3e9-a212-901d-7208-2e8f6e804f32/b4ff9b84-4869-4b48-9333-e077a284e9b9.png/838x1118sr.webp', accentColor: 'rgb(57, 66, 82)', theme: 'dark', link: '#', appInfo: { iconUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/4a/12/32/4a12328b-33c8-a764-1823-3b6de0909b0b/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/96x96ia-75.webp', name: 'Genshin Impact', subtitle: 'Adventure', link: '#', bgColor: '#fff' } },
            { id: 'game-5', badge: 'Strategy', title: 'Clash Royale', description: 'Epic real-time card battles.', imageUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Features116/v4/6b/56/6b/6b566bed-18a8-8e3b-185d-8959f24e3c23/a343ba09-24da-4475-a6e5-29656a81e35b.png/838x1118sr.webp', accentColor: 'rgb(18, 107, 160)', theme: 'light', link: '#', appInfo: { iconUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/c3/3b/63/c33b631d-418f-7323-281b-853f6202fe2a/AppIcon-0-0-1x_U007emarketing-0-0-0-10-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/96x96ia-75.webp', name: 'Clash Royale', subtitle: 'Strategy', link: '#', bgColor: '#fff' } },
            { id: 'game-6', badge: 'Multiplayer', title: 'Among Us', description: 'Teamwork and betrayal in space.', imageUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Features116/v4/24/09/b7/2409b7af-3b10-0775-8025-a1d2e1329c4c/d16718da-85e3-4df4-a3f2-89945417387d.png/838x1118sr.webp', accentColor: 'rgb(24, 23, 28)', theme: 'dark', link: '#', appInfo: { iconUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/41/cc/03/41cc0330-c3d5-452f-5154-16a3a401c137/AppIcon-0-0-1x_U007emarketing-0-0-0-10-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/96x96ia-75.webp', name: 'Among Us!', subtitle: 'Party', link: '#', bgColor: '#fff' } },
        ]
    }
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
                videoPosterUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Video221/v4/c0/d2/c4/c0d2c48c-fceb-d4cd-83a8-93083b18207a/Jobcc32551f-3aaa-4d07-be12-150483a403db-183336662-PreviewImage_Preview_Image_Intermediate_nonvideo_383454634_2223175193-Time1750866133846.png/1000x562.5sr.webp',
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

export const arcadePageData: { title: string; shelves: CategoryShelf[] } = {
  title: 'Arcade',
  shelves: [
    {
      id: 'arcade-hero',
      type: 'hero-carousel',
      items: [
        { id: 'hero-1', badge: 'NEW GAME', title: 'Toca Boca Jr Classics', subtitle: 'Perfect for Family-Friendly Fun', imageUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Features211/v4/fd/e3/c4/fde3c494-f655-f164-620b-12c0ebef042b/8241e84b-196d-4530-8626-325810f79a9b.png/1600x900sr.webp', accentColor: 'rgb(131,218,110)', theme: 'dark', link: '#', appInfo: { iconUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/8e/76/12/8e7612fa-a89d-5b95-90c3-647544cf3042/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/96x96ia-75.webp', name: 'Toca Boca Jr Classics', subtitle: 'Includes 9 games!', link: '#', bgColor: '#fff' } },
        { id: 'hero-2', badge: 'NEW GAME', title: 'NBA 2K26 Arcade Edition', subtitle: 'New Game, New Mode, New Rosters', imageUrl: '', videoPosterUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Video211/v4/6e/0c/59/6e0c5911-707a-e32f-3436-b61d54a117de/Job72b5b896-99ee-481f-a053-7a70d763f664-205524056-PreviewImage_Preview_Image_Intermediate_nonvideo_401500593_2374432961-Time1759947453253.png/1600x900sr.webp', videoSrc: 'https://video-ssl.itunes.apple.com/itunes-assets/Video122/v4/a4/ff/24/a4ff244a-b98c-4309-b794-7971daf0d5c6/mzvf_8653205166428383838.640x360.h264lc.U.p.m4v', accentColor: 'rgb(12,6,4)', theme: 'dark', link: '#', appInfo: { iconUrl: 'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/ac/56/42/ac564260-36ce-2d77-b407-ce51c6d757d0/Placeholder.mill/96x96bb-75.webp', name: 'NBA 2K26 Arcade Edition', subtitle: 'Be the GOAT.', link: '#', bgColor: 'rgb(34,29,51)' } },
        { id: 'hero-3', badge: 'MAJOR UPDATE', title: 'Go Farming With Sasquatch', subtitle: 'Go Farming With Sasquatch', imageUrl: '', videoPosterUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Video221/v4/6e/62/a4/6e62a45b-cf51-26e0-2b46-ca9041f8b8b3/Job70fe765b-db10-4fe9-b87b-758b98068f0b-206821025-PreviewImage_Preview_Image_Intermediate_nonvideo_404054139_2394663686-Time1761247862275.png/1600x900sr.webp', videoSrc: 'https://video-ssl.itunes.apple.com/itunes-assets/Video112/v4/90/0d/c2/900dc26d-fe6f-4f2a-a492-31e271e88049/mzvf_16847844111352520603.640x360.h264lc.U.p.m4v', accentColor: 'rgb(154,194,217)', theme: 'dark', link: '#', appInfo: { iconUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/74/92/d3/7492d3c0-bf9f-e254-c085-969d6da9930e/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/96x96ia-75.webp', name: 'Sneaky Sasquatch', subtitle: 'Grow and prosper.', link: '#', bgColor: 'rgb(201,160,72)' } },
      ]
    },
    {
        id: 'top-arcade-games',
        type: 'ordinal-lockup-row',
        title: 'Top Arcade Games',
        seeAllLink: '#',
        items: [
            { id: 'top-1', ordinal: 1, iconUrl: 'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/66/67/c5/6667c59c-b90f-b334-74b6-c55feadeacf7/Placeholder.mill/100x100bb-75.webp', name: 'NFL Retro Bowl \'26', subtitle: 'Retro fans unite for ’26!', link: '#', bgColor: 'rgb(16,53,110)' },
            { id: 'top-2', ordinal: 2, iconUrl: 'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/ac/56/42/ac564260-36ce-2d77-b407-ce51c6d757d0/Placeholder.mill/100x100bb-75.webp', name: 'NBA 2K26 Arcade Edition', subtitle: 'Make History in Every Era', link: '#', bgColor: 'rgb(34,29,51)' },
            { id: 'top-3', ordinal: 3, iconUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/29/7e/c8/297ec81c-5082-cf6b-0d24-fccb0910b7bc/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/100x100ia-75.webp', name: 'Solitaire by MobilityWare+', subtitle: 'Fun Classic Klondike Card Game', link: '#', bgColor: 'rgb(2,102,2)' },
            { id: 'top-4', ordinal: 4, iconUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/fa/fd/0b/fafd0b55-d7b3-8e40-cc56-60dc61378abd/AppIcon-0-1x_U007epad-0-1-85-220-0.png/100x100ia-75.webp', name: 'MySims™', subtitle: 'Create & decorate in MySims™!', link: '#', bgColor: 'rgb(148,215,255)' },
            { id: 'top-5', ordinal: 5, iconUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/74/92/d3/7492d3c0-bf9f-e254-c085-969d6da9930e/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/100x100ia-75.webp', name: 'Sneaky Sasquatch', subtitle: 'Stealthy shenanigans', link: '#', bgColor: 'rgb(201,160,72)' },
            { id: 'top-6', ordinal: 6, iconUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/fe/a0/6c/fea06c6e-8d4b-2ff3-fb22-64e3c4f2da47/iOS_AppIcon-0-0-1x_U007epad-0-1-85-220.png/100x100ia-75.webp', name: 'Balatro+', subtitle: 'When Poker Meets Solitaire', link: '#', bgColor: 'rgb(250,249,252)' },
            { id: 'top-7', ordinal: 7, iconUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/30/8b/b4/308bb4a3-8990-4138-a506-5e1d65d84fe6/AppIcon-1x_U007emarketing-0-8-0-85-220-0.png/100x100ia-75.webp', name: 'Bloons TD 6+', subtitle: 'Mega Popular Tower Defense', link: '#', bgColor: 'rgb(157,73,24)' },
        ]
    },
    {
        id: 'new-games',
        type: 'small-lockup-grid',
        title: 'New Games',
        subtitle: 'Play the latest and greatest',
        seeAllLink: '#',
        items: [
            { id: 'new-1', iconUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/8e/76/12/8e7612fa-a89d-5b95-90c3-647544cf3042/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/64x64ia-75.webp', name: 'Toca Boca Jr Classics', subtitle: 'Play, create & explore!', link: '#', bgColor: '#fff' },
            { id: 'new-2', iconUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/fa/fd/0b/fafd0b55-d7b3-8e40-cc56-60dc61378abd/AppIcon-0-1x_U007epad-0-1-85-220-0.png/64x64ia-75.webp', name: 'MySims™', subtitle: 'Create & decorate in MySims™!', link: '#', bgColor: 'rgb(148,215,255)' },
            { id: 'new-3', iconUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/f4/6e/78/f46e789c-14b0-0ab8-a4a5-03598dd4c581/AppIcon-0-1x_U007epad-0-1-85-220-0.png/64x64ia-75.webp', name: 'MySims™ Kingdom', subtitle: 'Explore the MySims™ Kingdom', link: '#', bgColor: 'rgb(255,147,146)' },
            { id: 'new-4', iconUrl: 'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/21/63/c0/2163c082-4654-ede7-2c57-b0ce3beb44e1/Placeholder.mill/64x64bb-75.webp', name: 'Football Manager 26 Touch', subtitle: 'Step into the dugout', link: '#', bgColor: 'rgb(26,26,38)' },
            { id: 'new-5', iconUrl: 'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/ac/56/42/ac564260-36ce-2d77-b407-ce51c6d757d0/Placeholder.mill/64x64bb-75.webp', name: 'NBA 2K26 Arcade Edition', subtitle: 'Make History in Every Era', link: '#', bgColor: 'rgb(34,29,51)' },
            { id: 'new-6', iconUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/a8/6c/f6/a86cf633-2aae-c185-36e1-af3a8493fe23/AppIcon-1x_U007emarketing-0-8-0-85-220-0.png/64x64ia-75.webp', name: 'Piffle+', subtitle: 'A cat puzzle ball adventure', link: '#', bgColor: 'rgb(147,222,162)' },
            { id: 'new-7', iconUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/2b/84/a1/2b84a12d-1614-8eeb-a290-c1bc29236474/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/64x64ia-75.webp', name: "Thomas & Friends™: Let's Roll+", subtitle: 'Drive trains and build tracks!', link: '#', bgColor: 'rgb(137,0,239)' },
            { id: 'new-8', iconUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/07/87/7e/07877eed-4075-f2ca-7b6d-a64aabe688b5/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/64x64ia-75.webp', name: 'Dominoes: Classic Tile Game+', subtitle: 'Play Fun and Relaxing Dominos!', link: '#', bgColor: 'rgb(255,106,83)' },
            { id: 'new-9', iconUrl: 'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/66/67/c5/6667c59c-b90f-b334-74b6-c55feadeacf7/Placeholder.mill/64x64bb-75.webp', name: "NFL Retro Bowl '26", subtitle: 'Retro fans unite for ’26!', link: '#', bgColor: 'rgb(16,53,110)' },
        ]
    }
  ]
};

export const puzzlePageData: { title: string; shelves: CategoryShelf[] } = {
    title: 'Puzzle',
    shelves: [
        {
            id: 'puzzle-spotlight',
            type: 'spotlight',
            items: [
                { id: 'spot-1', badge: 'LET’S PLAY', title: 'Candy Crush Saga', subtitle: 'Make delicious matches', imageUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Features116/v4/f4/ac/4e/f4ac4ed2-2dd3-d3c9-9429-04352d880c29/cHJfc291cmNlLTUucG5n.png/1600x573sr.webp', accentColor: 'rgb(88,176,233)', theme: 'light', link: '#', appInfo: { iconUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/10/08/0d/10080d61-4ba7-ae45-228e-ae86e3eba0bd/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/64x64ia-75.webp', name: 'Candy Crush Saga', subtitle: 'Puzzle Your Way Through Candy!', link: '#', bgColor: 'rgb(8,138,211)' } },
                { id: 'spot-2', badge: 'LET’S PLAY', title: 'Angry Birds 2', subtitle: 'Fling your flock', imageUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Features126/v4/33/69/2e/33692e13-886d-59ca-d1f8-42b478ffc14e/U0gtQVAtV1ctQW5ncnlfQmlyZHNfMi5wbmc.png/1600x573sr.webp', accentColor: 'rgb(34,50,23)', theme: 'dark', link: '#', appInfo: { iconUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/44/c3/18/44c318ad-82d2-d633-0a01-fbebfa0feb8f/AppIcon-1x_U007emarketing-0-8-0-85-220-0.png/64x64ia-75.webp', name: 'Angry Birds 2', subtitle: 'Best popular fun action game!', link: '#', bgColor: 'rgb(48,154,251)' } },
                { id: 'spot-3', badge: 'LET’S PLAY', title: 'Threes! Freeplay', subtitle: 'Merge big numbers', imageUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Features126/v4/50/8a/90/508a9099-01d5-4394-e73e-88aebc4bf50d/b2ede9d8-9423-485f-8da1-c73fe3a2a2ed.png/1600x573sr.webp', accentColor: 'rgb(219,219,216)', theme: 'light', link: '#', appInfo: { iconUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/81/1c/79/811c7956-8382-fd82-8411-132d060f9e36/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/64x64ia-75.webp', name: 'Threes! Freeplay', subtitle: 'The original number slider', link: '#', bgColor: '#fff' } }
            ]
        },
        {
            id: 'essential-puzzles',
            type: 'small-lockup-grid',
            title: 'Essential Puzzle Games',
            subtitle: 'Selected by App Store editors',
            seeAllLink: '#',
            items: [
                { id: 'ess-1', iconUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/10/08/0d/10080d61-4ba7-ae45-228e-ae86e3eba0bd/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/64x64ia-75.webp', name: 'Candy Crush Saga', subtitle: 'Puzzle Your Way Through Candy!', link: '#', bgColor: 'rgb(8,138,211)' },
                { id: 'ess-2', iconUrl: 'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/7e/19/26/7e192669-a998-ba49-43b0-1954be3642a5/Placeholder.mill/64x64bb-75.webp', name: 'NYT Games: Wordle & Crossword', subtitle: 'Word, Number and Logic Puzzles', link: '#', bgColor: 'rgb(48,48,48)' },
                { id: 'ess-3', iconUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/c1/b4/fe/c1b4feaa-5957-7769-e513-0331e9c48e98/AppIcon-1x_U007emarketing-0-8-0-85-220-0.png/64x64ia-75.webp', name: 'Royal Match', subtitle: 'King Robert’s Match 3 Puzzles', link: '#', bgColor: 'rgb(32,26,74)' },
                { id: 'ess-4', iconUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/87/cb/46/87cb46c4-4c1c-84f5-9a13-b3fde82f831e/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/64x64ia-75.webp', name: 'Match Factory!', subtitle: 'Triple Matching 3D Puzzle Game', link: '#', bgColor: 'rgb(16,143,240)' },
                { id: 'ess-5', iconUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/9b/53/e6/9b53e6c1-c911-47cc-aa25-a8134719623c/AppIcon-0-0-1x_U007emarketing-0-11-0-85-220.png/64x64ia-75.webp', name: 'Homescapes', subtitle: 'Match 3 Puzzle & Home Design', link: '#', bgColor: 'rgb(192,88,202)' },
                { id: 'ess-6', iconUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/5f/91/22/5f912292-401d-034c-9e7c-89620d539cfd/AppIcon-1x_U007emarketing-0-8-0-85-220-0.png/64x64ia-75.webp', name: 'June’s Journey: Hidden Objects', subtitle: 'Find Clues and Solve Mysteries', link: '#', bgColor: 'rgb(215,208,195)' },
            ]
        },
        {
            id: 'top-free-puzzles',
            type: 'ordinal-lockup-row',
            title: 'Top Free Puzzle Games',
            seeAllLink: '#',
            items: [
                { id: 'tf-1', ordinal: 1, iconUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/a6/da/9e/a6da9ebe-98ed-73cb-8cb9-a69845932c7a/AppIcon-0-0-1x_U007emarketing-0-11-0-sRGB-85-220.png/100x100ia-75.webp', name: 'Block Blast!', subtitle: 'Daily Puzzle & Block Match', link: '#', bgColor: 'rgb(19,14,73)' },
                { id: 'tf-2', ordinal: 2, iconUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/cb/f0/83/cbf0835a-1129-c03f-4e7e-a168b578c0cf/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/100x100ia-75.webp', name: 'Jigsolitaire', subtitle: 'Jigsaw puzzles with solitaire', link: '#', bgColor: 'rgb(56,91,52)' },
                { id: 'tf-3', ordinal: 3, iconUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/8f/ab/fc/8fabfcbf-3d4b-2865-48aa-ffd5f61c664d/AppIcon-0-0-1x_U007emarketing-0-11-0-85-220.png/100x100ia-75.webp', name: 'Township', subtitle: 'From Farming Town to Big City', link: '#', bgColor: 'rgb(53,166,70)' },
                { id: 'tf-4', ordinal: 4, iconUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/8c/e6/8e/8ce68e4a-7767-e191-01bd-5a03523845a9/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/100x100ia-75.webp', name: 'Magic Sort!', subtitle: 'Water Sorting Puzzle', link: '#', bgColor: 'rgb(251,140,1)' },
                { id: 'tf-5', ordinal: 5, iconUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/a2/78/98/a2789831-868a-257e-f87b-3b9db906f1b7/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/100x100ia-75.webp', name: 'Gossip Harbor: Merge & Story', subtitle: 'Puzzle', link: '#', bgColor: 'rgb(247,217,167)' },
                { id: 'tf-6', ordinal: 6, iconUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/ed/6f/62/ed6f622d-c58e-e907-56e6-97f587da02df/AppIcon-0-0-1x_U007epad-0-1-85-220.jpeg/100x100ia-75.webp', name: 'Jigblock Puzzle', subtitle: 'Find, move & match jigsaw', link: '#', bgColor: 'rgb(2,15,19)' },
            ]
        },
        {
            id: 'adventure-videos',
            type: 'video-row',
            title: 'Let\'s Go On an Adventure',
            seeAllLink: '#',
            items: [
                { id: 'vid-1', videoPosterUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Video126/v4/65/59/2f/65592f69-d412-a169-1a2c-f3c5f4019ff2/job.mp4.jpg/500x312.5sr.webp', videoSrc: 'https://video-ssl.itunes.apple.com/itunes-assets/Video116/v4/4b/f5/a5/4bf5a59e-f0fe-77b3-8b7c-3f413203f7e6/mzvf_1645063863484643329.640x360.h264lc.U.p.m4v', link: '#', appInfo: { iconUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Purple116/v4/65/cf/fa/65cffac5-14b6-4325-ac86-0ffae1d5d97d/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/64x64ia-75.webp', name: 'Moncage', subtitle: 'Optical Illusions Puzzle Game', link: '#', bgColor: 'rgb(255,142,123)' } },
                { id: 'vid-2', videoPosterUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Video126/v4/b9/02/b0/b902b005-4b53-b09e-7110-381c81ac7123/job.mp4.jpg/500x312.5sr.webp', videoSrc: 'https://video-ssl.itunes.apple.com/itunes-assets/Video116/v4/71/61/52/716152a1-e490-2e4a-1014-a95e7c093a12/mzvf_10928014565715873977.640x360.h264lc.U.p.m4v', link: '#', appInfo: { iconUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Purple116/v4/08/1c/1b/081c1bf0-f1cf-8174-a308-58b0aa404476/AppIcon-1x_U007emarketing-0-7-0-85-220-0.png/64x64ia-75.webp', name: 'Agent A: A puzzle in disguise', subtitle: 'A secret agent escape room', link: '#', bgColor: 'rgb(18,12,26)' } },
                { id: 'vid-3', videoPosterUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Video116/v4/21/f0/2d/21f02d4f-5ed6-1f63-1254-04f86d67b78f/job.mp4.jpg/500x312.5sr.webp', videoSrc: 'https://video-ssl.itunes.apple.com/itunes-assets/Video116/v4/80/f8/33/80f83307-e85c-154a-5735-a1288b835265/mzvf_10522108151978280674.640x360.h264lc.U.p.m4v', link: '#', appInfo: { iconUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Purple124/v4/a8/3b/b3/a83bb3ed-719a-6839-a259-f17a11a9cc07/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/64x64ia-75.webp', name: 'The Witness', subtitle: 'Puzzle', link: '#', bgColor: 'rgb(180,0,8)' } },
            ]
        },
        {
            id: 'editorial-kami',
            type: 'editorial',
            items: [
                { id: 'ed-1', badge: 'WHAT WE’RE PLAYING', title: 'Kami 2', description: 'Find your zen within this puzzler’s relaxing pattern.', accentColor: 'rgb(204,168,39)', link: '#', appInfo: { iconUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/3f/40/16/3f401636-7be8-df11-dcd5-55011c157194/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/800x800ia-75.webp', name: 'Kami 2', subtitle: '', link: '#', bgColor: 'rgb(17,22,35)' } }
            ]
        },
        {
            id: 'browse-categories',
            type: 'category-row',
            title: 'Browse Categories',
            items: [
                { id: 'cat-1', name: 'Roleplaying', imageUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Features211/v4/74/13/c3/7413c3ab-6610-b243-542b-1814600468f8/d4da1f75-7460-4086-8fee-e5bf9f6f875f.png/300x169SCB.ApSCBL01.webp', accentColor: 'rgb(237,200,127)', link: '#' },
                { id: 'cat-2', name: 'Simulation', imageUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Features211/v4/6f/a2/c1/6fa2c15f-fc46-5e0f-b452-8a717621db5d/431f399f-44bc-42c6-8410-3360ae77c1aa.png/300x169SCB.ApSCBL01.webp', accentColor: 'rgb(171,231,196)', link: '#' },
                { id: 'cat-3', name: 'Action', imageUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Features211/v4/44/97/a3/4497a350-524f-e7dd-02d9-ffd4e27de73c/3024dc5a-cfb5-4530-9346-c968cac873bf.png/300x169SCB.ApSCBL01.webp', accentColor: 'rgb(255,191,124)', link: '#' },
                { id: 'cat-4', name: 'Racing', imageUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Features211/v4/69/1a/d3/691ad375-545b-8024-73c9-d3dcad040bce/4c4aabb7-564f-42b4-ae8b-8729c7ef4ff1.png/300x169SCB.ApSCBL01.webp', accentColor: 'rgb(251,153,131)', link: '#' },
                { id: 'cat-5', name: 'Strategy', imageUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Features221/v4/b1/23/c0/b123c04d-bddf-c779-f9e8-9601f6a7c05a/be10aaf5-42a5-4bb2-b45b-5acb300deab1.png/300x169SCB.ApSCBL01.webp', accentColor: 'rgb(159,217,138)', link: '#' },
            ]
        }
    ]
};

export const actionPageData: { title: string; shelves: CategoryShelf[] } = {
    title: 'Action',
    shelves: [
        {
            id: 'action-spotlight',
            type: 'spotlight',
            items: [
                { id: 'act-spot-1', badge: 'RATED 17+', title: 'Mortal Kombat', subtitle: 'Fight for victory', imageUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Features113/v4/5b/d9/4f/5bd94f35-4c6d-ac50-4ec9-05465eca0fe8/5e51e1c7-5b32-4cd7-a057-5cf0f36fb78e.png/1600x573sr.webp', accentColor: 'rgb(31,33,64)', theme: 'dark', link: '#', appInfo: { iconUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/1f/d9/98/1fd9985c-6b83-ba0c-14fb-6f6e70a35e02/AppIcon-1x_U007emarketing-0-8-0-0-85-220-0.png/64x64ia-75.webp', name: 'Mortal Kombat', subtitle: 'Epic Action & Fighting Game', link: '#', bgColor: 'rgb(24,23,21)' } },
                { id: 'act-spot-2', badge: 'RATED 17+', title: 'Call of Duty®: Mobile', subtitle: 'Compete and conquer', imageUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Features114/v4/b1/e1/4e/b1e14e4e-b5ee-e6ac-a77f-87fc8327e981/U0gtQVAtV1ctQ09EX0VHMS5wbmc.png/1600x573sr.webp', accentColor: 'rgb(177,183,179)', theme: 'dark', link: '#', appInfo: { iconUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/2e/95/b0/2e95b0a7-f8db-8ec9-1f59-43700cdd9977/AppIcon-1x_U007emarketing-0-10-0-85-220-0.png/64x64ia-75.webp', name: 'Call of Duty®: Mobile', subtitle: '5v5 Battle Royale FPS', link: '#', bgColor: 'rgb(85,154,166)' } },
                { id: 'act-spot-3', badge: 'LET’S PLAY', title: 'Subway Surfers', subtitle: 'Dash and dodge', imageUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Features115/v4/20/c3/7e/20c37ee6-12f3-d556-5f3f-fe6f48f2f4ba/U0gtQVAtV1ctU3Vid2F5X1N1cmZlcnMtQURBTV9JRD0xNTY3OTQzNjgyLnBuZw.png/1600x573sr.webp', accentColor: 'rgb(181,252,252)', theme: 'light', link: '#', appInfo: { iconUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/fc/4a/81/fc4a8118-03cb-0b72-dbd6-ea4fd9355fd8/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/64x64ia-75.webp', name: 'Subway Surfers', subtitle: 'Join the endless running fun!', link: '#', bgColor: 'rgb(238,240,239)' } }
            ]
        },
        {
            id: 'essential-action',
            type: 'small-lockup-grid',
            title: 'Essential Action Games',
            subtitle: 'Selected by App Store editors',
            seeAllLink: '#',
            items: [
                { id: 'ess-act-1', iconUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/fc/4a/81/fc4a8118-03cb-0b72-dbd6-ea4fd9355fd8/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/64x64ia-75.webp', name: 'Subway Surfers', subtitle: 'Join the endless running fun!', link: '#', bgColor: 'rgb(238,240,239)' },
                { id: 'ess-act-2', iconUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/b5/8f/6f/b58f6f0e-6965-046d-99cb-7f0a33a638e2/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/64x64ia-75.webp', name: 'Brawl Stars', subtitle: 'PvP & 5v5 Battle Royale MOBA', link: '#', bgColor: 'rgb(5,0,0)' },
                { id: 'ess-act-3', iconUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/ce/28/68/ce2868be-1c9c-18f2-7d42-d3b15a1c16f3/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/64x64ia-75.webp', name: 'Archero 2', subtitle: 'Bigger Better Faster!', link: '#', bgColor: 'rgb(0,164,0)' },
                { id: 'ess-act-4', iconUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/2e/95/b0/2e95b0a7-f8db-8ec9-1f59-43700cdd9977/AppIcon-1x_U007emarketing-0-10-0-85-220-0.png/64x64ia-75.webp', name: 'Call of Duty®: Mobile', subtitle: '5v5 Battle Royale FPS', link: '#', bgColor: 'rgb(85,154,166)' },
                { id: 'ess-act-5', iconUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/b0/2f/c8/b02fc864-bbdb-eb2a-6424-edf3ba442d6a/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/64x64ia-75.webp', name: 'TMNT:Shredder’s Revenge Mobile', subtitle: 'Turtle heroes beat \'em up', link: '#', bgColor: 'rgb(179,199,85)' },
                { id: 'ess-act-6', iconUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/3d/b0/bd/3db0bd9d-045d-1ec5-ed31-87c88ece826c/AppIcon-0-0-1x_U007epad-0-85-220.png/64x64ia-75.webp', name: 'Carrion', subtitle: 'HUNT. CONSUME. GROW. EVOLVE.', link: '#', bgColor: 'rgb(118,12,43)' },
            ]
        },
        {
            id: 'top-free-action',
            type: 'ordinal-lockup-row',
            title: 'Top Free Action Games',
            seeAllLink: '#',
            items: [
                { id: 'tf-act-1', ordinal: 1, iconUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/15/12/25/151225ce-6304-8bfb-3dc4-f258e1535aff/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/100x100ia-75.webp', name: 'Clash Royale', subtitle: 'Epic Multiplayer Tower Battle', link: '#', bgColor: 'rgb(254,163,84)' },
                { id: 'tf-act-2', ordinal: 2, iconUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/ea/d7/9a/ead79a1c-26cc-b5ed-3ed6-80cfdebbdcb9/AppIcon-0-0-1x_U007emarketing-0-7-85-220.png/100x100ia-75.webp', name: 'Fortnite', subtitle: 'Battle Royale & Social Games', link: '#', bgColor: 'rgb(0,162,220)' },
                { id: 'tf-act-3', ordinal: 3, iconUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/1a/fb/d6/1afbd666-a86a-06fe-a7cf-f75bf80ca5f2/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/100x100ia-75.webp', name: 'Squad Busters', subtitle: 'Action Strategy Battles Online', link: '#', bgColor: 'rgb(120,0,243)' },
                { id: 'tf-act-4', ordinal: 4, iconUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/88/35/d0/8835d063-b966-7c73-e855-aaaf0e98a869/AppIcon-0-0-1x_U007epad-0-1-0-85-220.png/100x100ia-75.webp', name: 'Roblox', subtitle: 'Play, Create, and Connect', link: '#', bgColor: 'rgb(24,63,204)' },
                { id: 'tf-act-5', ordinal: 5, iconUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/fc/4a/81/fc4a8118-03cb-0b72-dbd6-ea4fd9355fd8/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/100x100ia-75.webp', name: 'Subway Surfers', subtitle: 'Join the endless running fun!', link: '#', bgColor: 'rgb(238,240,239)' },
                { id: 'tf-act-6', ordinal: 6, iconUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/13/ce/63/13ce6372-e619-2ae9-1c05-0dd471a63244/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/100x100ia-75.webp', name: 'Sonic Rumble', subtitle: 'RUMBLE WITH SONIC & FRIENDS', link: '#', bgColor: 'rgb(46,46,46)' },
            ]
        },
        {
            id: 'editorial-rocket-bot',
            type: 'editorial',
            items: [
                { id: 'ed-act-1', badge: 'WHAT WE’RE PLAYING', title: 'Rocket Bot Royale', description: 'Compete in quick matches with gravity-bending tanks.', accentColor: 'rgb(137,178,228)', link: '#', appInfo: { iconUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/5d/4c/25/5d4c2555-26a2-bbe7-e04b-d820a300cb0b/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/800x800ia-75.webp', name: 'Rocket Bot Royale', subtitle: '', link: '#', bgColor: 'rgb(7,62,124)' } }
            ]
        }
    ]
};

export const adventurePageData: { title: string; shelves: CategoryShelf[] } = {
    title: 'Adventure',
    shelves: [
        {
            id: 'adventure-spotlight',
            type: 'spotlight',
            items: [
                { id: 'adv-spot-1', badge: 'LET’S PLAY', title: 'Harry Potter: Hogwarts Mystery', subtitle: 'Discover a magical world', imageUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Features115/v4/c7/06/81/c706810b-526f-994d-9619-0bcdc0b4fb23/U0gtQVAtV1ctSGFycnlfUG90dGVyLUhvZ3dhcnRzX015c3RlcnktQURBTV9JRD0xNTY3NjcyMTg5LnBuZw.png/1600x573sr.webp', accentColor: 'rgb(58,72,97)', theme: 'dark', link: '#', appInfo: { iconUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/79/dc/ee/79dceeb5-ecfc-6ae6-187d-c5627a37db2d/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/64x64ia-75.webp', name: 'Harry Potter: Hogwarts Mystery', subtitle: 'A Wizarding World Adventure!', link: '#', bgColor: 'rgb(15,21,36)' } },
                { id: 'adv-spot-2', badge: 'LET’S PLAY', title: 'Super Mario Run', subtitle: 'Leap and stomp with an icon', imageUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Features126/v4/68/95/12/689512eb-5c38-1f3a-228d-f4d5255713f2/e43f1f31-8493-48bb-928b-5a3727ca822e.png/1600x573sr.webp', accentColor: 'rgb(150,6,12)', theme: 'dark', link: '#', appInfo: { iconUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/96/af/c0/96afc0b1-9521-4199-0a29-83eb7d61c40a/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/64x64ia-75.webp', name: 'Super Mario Run', subtitle: 'Control Mario with just a tap!', link: '#', bgColor: 'rgb(171,0,0)' } },
                { id: 'adv-spot-3', badge: 'LET’S PLAY', title: 'Playdead’s INSIDE', subtitle: 'Haunting and fascinating', imageUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Features122/v4/2d/28/39/2d28390e-0fd0-c881-30c6-5ddfebb53b8d/bdc1c9ac-051b-4923-9095-735b3d207339.png/1600x573sr.webp', accentColor: 'rgb(23,28,32)', theme: 'dark', link: '#', appInfo: { iconUrl: 'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/b8/71/62/b871620f-26c1-5b9e-d165-204ba9c583e4/Placeholder.mill/64x64bb-75.webp', name: 'Playdead\'s INSIDE', subtitle: 'From the Creators of LIMBO', link: '#', bgColor: 'rgb(31,42,45)' } }
            ]
        },
        {
            id: 'essential-adventure',
            type: 'small-lockup-grid',
            title: 'Essential Adventure Games',
            subtitle: 'Selected by App Store editors',
            seeAllLink: '#',
            items: [
                { id: 'ess-adv-1', iconUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/3c/56/ab/3c56abf1-8643-06f6-849b-9dc7d2017842/AppIcon-1x_U007emarketing-0-8-0-85-220-0.png/64x64ia-75.webp', name: 'DREDGE', subtitle: 'A Sinister Fishing Adventure', link: '#', bgColor: 'rgb(21,17,17)' },
                { id: 'ess-adv-2', iconUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/24/78/87/24788750-47d0-03cd-2ca9-9faa944e1bb5/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/64x64ia-75.webp', name: 'The Stanley Parable: UD', subtitle: 'Adventure', link: '#', bgColor: 'rgb(33,39,46)' },
                { id: 'ess-adv-3', iconUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/96/af/c0/96afc0b1-9521-4199-0a29-83eb7d61c40a/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/64x64ia-75.webp', name: 'Super Mario Run', subtitle: 'Control Mario with just a tap!', link: '#', bgColor: 'rgb(171,0,0)' },
                { id: 'ess-adv-4', iconUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/e2/0c/85/e20c853f-ad0f-3782-6ab5-57d8f3e071fa/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/64x64ia-75.webp', name: 'Assassin\'s Creed Mirage', subtitle: 'Narrative-driven adventure', link: '#', bgColor: 'rgb(4,12,20)' },
                { id: 'ess-adv-5', iconUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/58/f7/01/58f70113-7310-82af-dc05-619d6f520f37/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/64x64ia-75.webp', name: 'Alien: Isolation', subtitle: 'Run. Hide. Survive.', link: '#', bgColor: 'rgb(1,1,1)' },
                { id: 'ess-adv-6', iconUrl: 'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/b8/71/62/b871620f-26c1-5b9e-d165-204ba9c583e4/Placeholder.mill/64x64bb-75.webp', name: 'Playdead\'s INSIDE', subtitle: 'From the Creators of LIMBO', link: '#', bgColor: 'rgb(31,42,45)' },
            ]
        },
        {
            id: 'top-free-adventure',
            type: 'ordinal-lockup-row',
            title: 'Top Free Adventure Games',
            seeAllLink: '#',
            items: [
                { id: 'tf-adv-1', ordinal: 1, iconUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/ea/d7/9a/ead79a1c-26cc-b5ed-3ed6-80cfdebbdcb9/AppIcon-0-0-1x_U007emarketing-0-7-85-220.png/100x100ia-75.webp', name: 'Fortnite', subtitle: 'Battle Royale & Social Games', link: '#', bgColor: 'rgb(0,162,220)' },
                { id: 'tf-adv-2', ordinal: 2, iconUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/88/35/d0/8835d063-b966-7c73-e855-aaaf0e98a869/AppIcon-0-0-1x_U007epad-0-1-0-85-220.png/100x100ia-75.webp', name: 'Roblox', subtitle: 'Play, Create, and Connect', link: '#', bgColor: 'rgb(24,63,204)' },
                { id: 'tf-adv-3', ordinal: 3, iconUrl: 'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/d9/86/84/d986842f-f4cf-6baa-1011-f7e19775cc31/Placeholder.mill/100x100bb-75.webp', name: 'Meta Horizon', subtitle: 'Step Into Endless Experiences', link: '#', bgColor: 'rgb(46,46,46)' },
                { id: 'tf-adv-4', ordinal: 4, iconUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/11/f2/71/11f271d9-3320-f50e-9db1-8acb3d2fec51/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/100x100ia-75.webp', name: 'MapleStory : Idle RPG', subtitle: 'MapleStory, Now an Idle RPG', link: '#', bgColor: 'rgb(255,198,77)' },
                { id: 'tf-adv-5', ordinal: 5, iconUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/24/6f/43/246f4370-5f2d-80f5-4e73-96b181b55a89/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/100x100ia-75.webp', name: 'Animals & Coins Adventure Game', subtitle: 'Animal Kingdom Coin Race tales', link: '#', bgColor: 'rgb(115,45,36)' },
                { id: 'tf-adv-6', ordinal: 6, iconUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/bb/92/7a/bb927a8f-065e-93dc-553a-223565f07344/AppIcon-1761077053-1x_U007emarketing-0-8-0-85-220-0.png/100x100ia-75.webp', name: 'Free Fire', subtitle: '10-minutes Survival Shooter!', link: '#', bgColor: 'rgb(22,26,28)' },
            ]
        },
    ]
};

export const entertainmentPageData: { title: string; shelves: CategoryShelf[] } = {
    title: 'Entertainment',
    shelves: [
        {
            id: 'ent-spotlight',
            type: 'spotlight',
            items: [
                { id: 'ent-spot-1', badge: 'NEW APP', title: 'Introducing FOX One', subtitle: 'Everything FOX in one place', imageUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Features211/v4/48/c6/08/48c60819-d87e-63fe-86f2-bd984362bf47/eb1456c9-961f-4886-b2e1-b62aa8b1079a.png/1600x573sr.webp', accentColor: 'rgb(0,0,0)', theme: 'dark', link: '#', appInfo: { iconUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/e1/f9/d8/e1f9d8c5-0b54-fe55-57bd-f6fa5678cca7/AppIcon-0-1x_U007epad-0-1-0-85-220-0.png/64x64ia-75.webp', name: 'FOX One: Live News, Sports, TV', subtitle: 'FOX News, NFL, MLB, & More', link: '#', bgColor: 'rgb(255,255,255)' } },
                { id: 'ent-spot-2', badge: 'WHAT TO WATCH', title: 'Watch Amazon Originals', subtitle: 'Award-winning shows and films', imageUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Features211/v4/01/04/a6/0104a6cc-fc68-1739-6e82-8ae67ff4da22/a6297e90-644f-47e5-9a2c-e6cbe12cbf11.png/1600x573sr.webp', accentColor: 'rgb(53,118,246)', theme: 'dark', link: '#', appInfo: { iconUrl: 'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/8e/5b/27/8e5b275e-3b23-cc84-d427-b9bb23b49b4a/Placeholder.mill/64x64bb-75.webp', name: 'Amazon Prime Video', subtitle: 'Originals, movies, TV, sports', link: '#', bgColor: 'rgb(65,130,252)' } },
                { id: 'ent-spot-3', badge: 'WHAT TO WATCH', title: 'Stream for Free on Tubi', subtitle: 'Watch sports, news, TV, and more', imageUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Features211/v4/75/1b/79/751b793e-ca4f-d71a-8775-b379e3ce4f5b/fc31ecd6-8554-4eb1-a000-2988558645c9.png/1600x573sr.webp', accentColor: 'rgb(122,23,213)', theme: 'dark', link: '#', appInfo: { iconUrl: 'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/b6/37/f5/b637f516-d024-fb9e-4746-5ea4f529d25a/Placeholder.mill/64x64bb-75.webp', name: 'Tubi: Movies & Live TV', subtitle: 'Watch sports, news, TV & more', link: '#', bgColor: 'rgb(59,28,140)' } }
            ]
        },
        {
            id: 'essential-ent-apps',
            type: 'small-lockup-grid',
            title: 'Essential Entertainment Apps',
            subtitle: 'Selected by App Store editors',
            seeAllLink: '#',
            items: [
                { id: 'ent-ess-1', iconUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/23/ed/2c/23ed2c0b-47f7-2245-f61b-6ee019035245/AppIcon-0-0-1x_U007epad-0-1-85-220.png/64x64ia-75.webp', name: 'HBO Max: Stream Movies & TV', subtitle: 'Watch Original Series & Films', link: '#', bgColor: 'rgb(1,2,12)' },
                { id: 'ent-ess-2', iconUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/16/3a/01/163a0156-a6a2-ab8c-7107-2756f1da56bf/AppIcon-0-0-1x_U007epad-0-1-0-85-220.png/64x64ia-75.webp', name: 'Peacock TV: Stream TV & Movies', subtitle: 'Hit TV shows, movies & sports', link: '#', bgColor: 'rgb(16,16,16)' },
                { id: 'ent-ess-3', iconUrl: 'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/8e/5b/27/8e5b275e-3b23-cc84-d427-b9bb23b49b4a/Placeholder.mill/64x64bb-75.webp', name: 'Amazon Prime Video', subtitle: 'Originals, movies, TV, sports', link: '#', bgColor: 'rgb(65,130,252)' },
                { id: 'ent-ess-4', iconUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/49/64/07/496407f1-f697-ac91-dede-6337a5e2b2f0/P_U002bAppIcon-0-0-1x_U007emarketing-0-8-0-0-85-220.png/64x64ia-75.webp', name: 'Paramount+', subtitle: 'Originals, Movies, Sports & TV', link: '#', bgColor: 'rgb(0,80,204)' },
                { id: 'ent-ess-5', iconUrl: 'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/b2/fc/4c/b2fc4cb5-eb71-a22d-4012-682b7a0e88cc/Placeholder.mill/64x64bb-75.webp', name: 'Crunchyroll', subtitle: 'Stream anime shows and movies', link: '#', bgColor: 'rgb(247,115,51)' },
                { id: 'ent-ess-6', iconUrl: 'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/67/4e/53/674e5349-95be-7650-e2dd-0ca1c32da76e/Placeholder.mill/64x64bb-75.webp', name: 'Eventbrite', subtitle: 'Local Events & Things To Do', link: '#', bgColor: 'rgb(249,254,216)' }
            ]
        },
        {
            id: 'top-free-ent',
            type: 'ordinal-lockup-row',
            title: 'Top Free',
            seeAllLink: '#',
            items: [
                { id: 'tf-ent-1', ordinal: 1, iconUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/ae/ea/c2/aeeac2e2-3eb7-bdd5-e7f0-93e94c337a9b/AppIcon_TikTok-0-0-1x_U007epad-0-1-0-0-85-220.png/100x100ia-75.webp', name: 'TikTok - Videos, Shop & LIVE', subtitle: 'Watch, discover and stream!', link: '#', bgColor: 'rgb(0,0,0)' },
                { id: 'tf-ent-2', ordinal: 2, iconUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/cd/7f/0f/cd7f0ff0-7243-976e-cc13-6b019cae0869/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/100x100ia-75.webp', name: 'ReelShort - Stream Drama & TV', subtitle: 'Unlimited Shorts on the Go', link: '#', bgColor: 'rgb(236,56,157)' },
                { id: 'tf-ent-3', ordinal: 3, iconUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/99/31/36/99313688-351d-1335-e9fb-449ca9d37811/AppIconAppstore-0-0-1x_U007epad-0-1-85-220.jpeg/100x100ia-75.webp', name: 'Fubo: Watch Live TV & Sports', subtitle: 'Stream NFL, Live TV & News!', link: '#', bgColor: 'rgb(255,57,2)' },
                { id: 'tf-ent-4', ordinal: 4, iconUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/23/ed/2c/23ed2c0b-47f7-2245-f61b-6ee019035245/AppIcon-0-0-1x_U007epad-0-1-85-220.png/100x100ia-75.webp', name: 'HBO Max: Stream Movies & TV', subtitle: 'Watch Original Series & Films', link: '#', bgColor: 'rgb(1,2,12)' },
                { id: 'tf-ent-5', ordinal: 5, iconUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/67/a8/19/67a819c9-ba5b-a6f1-c5ef-98bf71e09fe4/AppIcon-0-0-1x_U007emarketing-0-1-0-85-220.png/100x100ia-75.webp', name: 'Ticketmaster－Buy, Sell Tickets', subtitle: 'Concerts, Sports & Theater', link: '#', bgColor: 'rgb(0,85,178)' },
                { id: 'tf-ent-6', ordinal: 6, iconUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/80/74/1e/80741ed2-447f-ae29-4598-75b8f8fc63db/AppIcon-0-0-1x_U007emarketing-0-11-0-85-220.png/100x100ia-75.webp', name: 'The Roku App (Official)', subtitle: 'Show Finder & Remote Control', link: '#', bgColor: 'rgb(255,255,255)' },
                { id: 'tf-ent-7', ordinal: 7, iconUrl: 'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/4a/e8/86/4ae88678-3a45-f434-835f-df161f8aae75/Placeholder.mill/100x100bb-75.webp', name: 'Netflix', subtitle: 'Start Watching', link: '#', bgColor: 'rgb(48,48,48)' }
            ]
        },
    ]
};

export const productivityPageData: { title: string; shelves: CategoryShelf[] } = {
    title: 'Productivity',
    shelves: [
        {
            id: 'prod-spotlight',
            type: 'spotlight',
            items: [
                { id: 'prod-spot-1', badge: 'TRY NOW', title: 'Catalog Your Content in Sofa', subtitle: 'An entertainment to-do list', imageUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Features221/v4/bf/bb/a1/bfbba1c8-e07c-cd88-5378-ae01853b831a/05e9a027-43aa-40cc-b2b0-19e0329329a6.png/1600x573sr.webp', accentColor: 'rgb(253,244,239)', theme: 'light', link: '#', appInfo: { iconUrl: 'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/9b/93/16/9b93169e-252a-c8b3-0b0e-bc8ffc547ef0/Placeholder.mill/64x64bb-75.webp', name: 'Sofa: Downtime Organizer', subtitle: 'Lists for movies, books & more', link: '#', bgColor: 'rgb(75,116,207)' } },
                { id: 'prod-spot-2', badge: 'GET PRODUCTIVE', title: 'Study With Focus Traveller', subtitle: 'Reach your goals with friends', imageUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Features126/v4/39/50/60/3950608c-8b18-31c4-10e9-6de8f1e8dd6e/ae46564b-8f96-4ac4-a5df-e880066bdf93.png/1600x573sr.webp', accentColor: 'rgb(70,98,158)', theme: 'dark', link: '#', appInfo: { iconUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/10/9d/9f/109d9fb3-fb68-f004-1a32-c6014a922a33/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/64x64ia-75.webp', name: 'Focus Traveller - Flow Timer', subtitle: 'pomodoro timer & study tracker', link: '#', bgColor: 'rgb(40,166,235)' } },
                { id: 'prod-spot-3', badge: 'GET PRODUCTIVE', title: 'Get It Done With Focus Noodles', subtitle: 'Set a timer to get cookin’', imageUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Features126/v4/42/11/f2/4211f226-989d-14f0-0ed5-d8aab1c58620/f57b548b-e771-4316-963c-1a0d86e28bb4.png/1600x573sr.webp', accentColor: 'rgb(253,253,253)', theme: 'light', link: '#', appInfo: { iconUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/8a/e8/8c/8ae88c1b-ab53-5d03-ed6e-c81014cf38fc/AppIcon-0-0-1x_U007emarketing-0-8-0-0-85-220.png/64x64ia-75.webp', name: 'Focus Noodles-Study timer', subtitle: 'Stay focus with fun', link: '#', bgColor: 'rgb(255,255,255)' } }
            ]
        },
        {
            id: 'essential-prod-apps',
            type: 'small-lockup-grid',
            title: 'Essential Productivity Apps',
            subtitle: 'Selected by App Store editors',
            seeAllLink: '#',
            items: [
                { id: 'prod-ess-1', iconUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/70/84/7c/70847cb4-84f1-49c7-2e57-5f879db9de76/AppIcon-0-0-1x_U007epad-0-1-0-85-220.png/64x64ia-75.webp', name: 'Goodnotes: AI Notes, Docs, PDF', subtitle: 'Note taking & whiteboard app', link: '#', bgColor: 'rgb(255,255,255)' },
                { id: 'prod-ess-2', iconUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/01/10/72/0110724a-bead-7273-0d38-df8d918014c0/AppIcon-0-0-1x_U007epad-0-1-0-0-sRGB-85-220.png/64x64ia-75.webp', name: 'Notability: Smarter AI Notes', subtitle: 'AI Note-Taking and Study Help', link: '#', bgColor: 'rgb(83,151,254)' },
                { id: 'prod-ess-3', iconUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/b6/f2/3a/b6f23a26-139c-31c8-bdc5-6fdce147d16c/ReleaseAppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/64x64ia-75.webp', name: 'Adobe Acrobat Reader: Edit PDF', subtitle: 'Convert, Fill & Sign Documents', link: '#', bgColor: 'rgb(179,10,0)' },
                { id: 'prod-ess-4', iconUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/48/bd/ef/48bdeff8-e96f-a2d0-88fe-2b8f461b3aa1/logo_gmail_2020q4_color-0-1x_U007emarketing-0-0-0-7-0-0-0-0-85-220-0.png/64x64ia-75.webp', name: 'Gmail - Email by Google', subtitle: 'Secure, fast & organized email', link: '#', bgColor: 'rgb(255,255,255)' },
                { id: 'prod-ess-5', iconUrl: 'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/61/27/ca/6127ca98-55d5-3fa2-b093-82d33d2a1715/Placeholder.mill/64x64bb-75.webp', name: 'Notion: Notes, Tasks, AI', subtitle: 'Plan, organize, track projects', link: '#', bgColor: 'rgb(253,253,253)' },
                { id: 'prod-ess-6', iconUrl: 'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/bb/77/1e/bb771eba-46ae-be45-7151-0f98dbefde40/Placeholder.mill/64x64bb-75.webp', name: 'Otter Transcribe Voice Notes', subtitle: 'AI Note Taking, Memo Recorder', link: '#', bgColor: 'rgb(43,43,43)' }
            ]
        },
    ]
};

// --- AGGREGATE ALL APP DATA FOR SEARCH ---

const allDataSources = [
    shelfData,
    gamesShelfData,
    ...puzzlePageData.shelves.map(s => ({ items: s.items })),
    ...actionPageData.shelves.map(s => ({ items: s.items })),
    ...adventurePageData.shelves.map(s => ({ items: s.items })),
    ...entertainmentPageData.shelves.map(s => ({ items: s.items })),
    ...productivityPageData.shelves.map(s => ({ items: s.items })),
    ...arcadePageData.shelves.map(s => ({items: s.items})),
];

const appMap = new Map<string, AppInfo>();

const addAppToMap = (app: AppInfo | undefined) => {
    if (app && app.name && !appMap.has(app.name)) {
        appMap.set(app.name, app);
    }
};

allDataSources.forEach(source => {
    if ('cards' in source && Array.isArray(source.cards)) {
        source.cards.forEach((card: any) => {
            if (card.appInfo) addAppToMap(card.appInfo);
            if (card.lockupList) card.lockupList.forEach(addAppToMap);
        });
    }
    if ('items' in source && Array.isArray(source.items)) {
         source.items.forEach((item: any) => {
            if (item.appInfo) addAppToMap(item.appInfo);
            // Handle small lockup data which is also app info
            if (item.iconUrl) addAppToMap(item);
        });
    }
});

export const allApps: AppInfo[] = Array.from(appMap.values());
