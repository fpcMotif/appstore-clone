import { v } from "convex/values";
import { mutation } from "./_generated/server";

export const seedTodayShelves = mutation({
  args: {},
  returns: v.null(),
  handler: async (ctx) => {
    // Clear existing shelves
    const existing = await ctx.db.query("todayShelves").collect();
    for (const shelf of existing) {
      await ctx.db.delete(shelf._id);
    }

    // Seed data from original constants
    const shelves = [
      {
        position: 0,
        title: "Featured",
        subtitle: "Our favorite new apps and games",
        cardLayout: "2-card" as const,
        cards: [
          {
            id: "card-1",
            badge: "MAJOR UPDATE",
            title: "Get Wicked in Roblox",
            description:
              "Explore the Emerald City and more in a newly expanded adventure.",
            imageUrl:
              "https://is1-ssl.mzstatic.com/image/thumb/Features211/v4/0c/db/e5/0cdbe59a-cda5-c3a9-64eb-cd7ebf3af0e8/0031d5c2-09c3-45ab-b40e-656e2abd3151.png/1050x1400sr.webp",
            accentColor: "rgb(34,77,49)",
            theme: "light" as const,
            link: "#",
            appInfo: {
              iconUrl:
                "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/88/35/d0/8835d063-b966-7c73-e855-aaaf0e98a869/AppIcon-0-0-1x_U007epad-0-1-0-85-220.png/96x96ia-75.webp",
              name: "Roblox",
              subtitle: "Play, Create, and Connect",
              link: "#",
              bgColor: "rgb(24,63,204)",
            },
          },
          {
            id: "card-2",
            badge: "WORLD PREMIERE",
            title: "Be the Last Sonic Standing",
            description: "Race and battle in this new multiplayer bash.",
            imageUrl: "",
            videoPosterUrl:
              "https://is1-ssl.mzstatic.com/image/thumb/Video221/v4/c0/d2/c4/c0d2c48c-fceb-d4cd-83a8-93083b18207a/Jobcc32551f-3aaa-4d07-be12-150483a403db-183336662-PreviewImage_Preview_Image_Intermediate_nonvideo_383454634_2223175193-Time1750866133846.png/1000x562.5sr.webp",
            videoSrc:
              "https://video-ssl.itunes.apple.com/itunes-assets/Video122/v4/6d/f4/19/6df4195f-f682-0193-450b-8575003b1437/mzvf_16489953460875328881.640x360.h264lc.U.p.m4v",
            accentColor: "rgb(61,175,143)",
            theme: "dark" as const,
            link: "#",
            appInfo: {
              iconUrl:
                "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/13/ce/63/13ce6372-e619-2ae9-1c05-0dd471a63244/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/96x96ia-75.webp",
              name: "Sonic Rumble",
              subtitle: "RUMBLE WITH SONIC & FRIENDS",
              link: "#",
              bgColor: "rgb(46,46,46)",
            },
          },
        ],
      },
      {
        position: 1,
        title: "Today's Biggest Events",
        subtitle: "What to stream, play, and enjoy",
        cardLayout: "2-card" as const,
        cards: [
          {
            id: "card-3",
            badge: "NOW TRENDING",
            title: "Stream Wicked: One Wonderful Night",
            description:
              "Don't miss the thrillifying live performances of songs from the new movie.",
            imageUrl:
              "https://is1-ssl.mzstatic.com/image/thumb/Features221/v4/35/b7/cc/35b7ccce-49f6-0da7-76fb-34a141bd7aa6/29dacf64-31b4-4c05-a629-a64068a4e65f.png/1050x1400sr.webp",
            accentColor: "rgb(63,58,34)",
            theme: "dark" as const,
            link: "#",
            appInfo: {
              iconUrl:
                "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/16/3a/01/163a0156-a6a2-ab8c-7107-2756f1da56bf/AppIcon-0-0-1x_U007epad-0-1-0-85-220.png/96x96ia-75.webp",
              name: "Peacock TV: Stream TV & Movies",
              subtitle: "Hit TV shows, movies & sports",
              link: "#",
              bgColor: "rgb(16,16,16)",
            },
          },
          {
            id: "card-4",
            badge: "NEW EVENT",
            title: "Explore the Upside Down in Brawl Stars",
            description: "Stranger Things hits the arena!",
            imageUrl:
              "https://is1-ssl.mzstatic.com/image/thumb/Features211/v4/30/e7/90/30e79045-0781-0b24-30bf-efa89fa00d05/06a1cfde-86b5-479d-8115-3c07f9392ac4.png/1050x1400sr.webp",
            accentColor: "rgb(2,64,170)",
            theme: "light" as const,
            link: "#",
            appInfo: {
              iconUrl:
                "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/b5/8f/6f/b58f6f0e-6965-046d-99cb-7f0a33a638e2/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/96x96ia-75.webp",
              name: "Brawl Stars",
              subtitle: "PvP & 5v5 Battle Royale MOBA",
              link: "#",
              bgColor: "rgb(5,0,0)",
            },
          },
        ],
      },
      {
        position: 2,
        title: "App Store Editors' Favorites",
        subtitle: "We try every app and game we recommend",
        cardLayout: "2-card" as const,
        cards: [
          {
            id: "card-7",
            badge: "",
            title: "GAME<br>OF THE<br>DAY",
            description: "The dice decide your fate in dungeon-crawling duels.",
            imageUrl:
              "https://is1-ssl.mzstatic.com/image/thumb/Features211/v4/c4/a9/b8/c4a9b8ba-5729-1153-5257-da96597784df/d12e546f-232c-418c-bbb5-7e5fdaf2f0c7.png/1050x1400sr.webp",
            accentColor: "rgb(58,69,48)",
            theme: "dark" as const,
            link: "#",
            appInfo: {
              iconUrl:
                "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/e4/da/e0/e4dae033-17ad-0429-1ddb-0071d0317490/Placeholder.mill/96x96bb-75.webp",
              name: "Heroll : Dice Roguelike",
              subtitle: "RPG board game with dice!",
              link: "#",
              bgColor: "rgb(211,71,90)",
            },
          },
          {
            id: "card-8",
            badge: "",
            title: "APP<br>OF THE<br>DAY",
            description:
              "Signature film-camera presets and lenses to elevate your shots.",
            imageUrl:
              "https://is1-ssl.mzstatic.com/image/thumb/Features211/v4/81/b5/97/81b59748-6593-ce0a-3f56-1cd295d3e6fa/0c8e2f77-35dd-40b4-8aeb-1ad91c914f65.png/1050x1400sr.webp",
            accentColor: "rgb(21,20,13)",
            theme: "dark" as const,
            link: "#",
            appInfo: {
              iconUrl:
                "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/ea/81/70/ea81705f-b6f8-194c-200a-00cad654c4de/Placeholder.mill/96x96bb-75.webp",
              name: "Leica LUX - Pro Manual Camera",
              subtitle: "Capture RAW Digital Photos",
              link: "#",
              bgColor: "rgb(255,255,255)",
            },
          },
        ],
      },
      {
        position: 3,
        title: "Hot This Week",
        subtitle: "Play these new launches and updates",
        cardLayout: "2-card" as const,
        cards: [
          {
            id: "card-hot-1",
            badge: "",
            title: "",
            titleImage:
              "https://is1-ssl.mzstatic.com/image/thumb/Features126/v4/34/87/01/3487015f-a836-3cce-5d32-0ae8e3bf567c/50c2608e-b8af-44d4-8247-265293e662d1.png/730x448bb.webp",
            description: "Sonic Rumble, He-Man, and more!",
            imageUrl: "",
            videoPosterUrl:
              "https://is1-ssl.mzstatic.com/image/thumb/Video211/v4/43/2e/c8/432ec839-d8bd-bb76-4953-7ed67eb9862f/Jobd0a06ced-66e1-476f-b6e7-f7c025f228c8-195745642-PreviewImage_Preview_Image_Intermediate_nonvideo_383454634_2223175193-Time1750866133846.png/1000x562.5sr.webp",
            videoSrc:
              "https://video-ssl.itunes.apple.com/itunes-assets/Video112/v4/1b/4a/12/1b4a123f-5859-9374-1355-6805511b8461/mzvf_3110363246872583279.640x360.h264lc.U.p.m4v",
            accentColor: "rgb(72,33,66)",
            theme: "light" as const,
            link: "#",
            lockupList: [
              {
                iconUrl:
                  "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/13/ce/63/13ce6372-e619-2ae9-1c05-0dd471a63244/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/96x96ia-75.webp",
                name: "Sonic Rumble",
                subtitle: "",
                link: "#",
                bgColor: "",
              },
              {
                iconUrl:
                  "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/a2/6d/6e/a26d6ee7-d47b-cf53-7261-01d842b0da27/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/96x96ia-75.webp",
                name: "He-Man",
                subtitle: "",
                link: "#",
                bgColor: "",
              },
              {
                iconUrl:
                  "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/11/f2/71/11f271d9-3320-f50e-9db1-8acb3d2fec51/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/96x96ia-75.webp",
                name: "MapleStory",
                subtitle: "",
                link: "#",
                bgColor: "",
              },
              {
                iconUrl:
                  "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/56/70/af/5670af32-2154-7ff2-981d-dee10daf837b/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/96x96ia-75.webp",
                name: "Secrets of Paradise",
                subtitle: "",
                link: "#",
                bgColor: "",
              },
              {
                iconUrl:
                  "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/98/67/bb/9867bbf7-fc98-01fb-c91d-825d63f63ff7/AppIcon-1x_U007emarketing-0-8-0-85-220-0.png/96x96ia-75.webp",
                name: "Monopoly Match",
                subtitle: "",
                link: "#",
                bgColor: "",
              },
            ],
          },
          {
            id: "card-hot-2",
            badge: "FROM THE EDITORS",
            title: "Your Fall Games Guide",
            description:
              "Bundle up with cozy indies, awesome action romps, and more.",
            imageUrl: "",
            videoPosterUrl:
              "https://is1-ssl.mzstatic.com/image/thumb/Video221/v4/61/f1/f1/61f1f1f9-a55e-d746-5d57-ada6bdde06f8/Job19905433-0ffc-4e8d-958b-8fed7e5cd555-205706953-PreviewImage_Preview_Image_Intermediate_nonvideo_401863266_2377497627-Time1760113419175.png/1000x562.5sr.webp",
            videoSrc:
              "https://video-ssl.itunes.apple.com/itunes-assets/Video122/v4/d4/d9/98/d4d998f4-2c78-3610-72e5-42f883f3c64c/mzvf_5409607629578135894.640x360.h264lc.U.p.m4v",
            accentColor: "rgb(233,131,9)",
            theme: "dark" as const,
            link: "#",
            lockupList: [
              {
                iconUrl:
                  "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/8f/55/df/8f55df4d-c419-312c-3f2d-c6d0e2678112/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/96x96ia-75.webp",
                name: "Chants of Sennaar",
                subtitle: "",
                link: "#",
                bgColor: "",
              },
              {
                iconUrl:
                  "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/67/af/39/67af3986-09ed-fb09-730b-b54632f26aeb/App_Icon_1-0-0-1x_U007emarketing-0-8-0-85-220.png/96x96ia-75.webp",
                name: "TOEM",
                subtitle: "",
                link: "#",
                bgColor: "",
              },
              {
                iconUrl:
                  "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/09/a6/85/09a685ef-7c30-7353-fedc-823b296c2e82/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/96x96ia-75.webp",
                name: "A Little to the Left",
                subtitle: "",
                link: "#",
                bgColor: "",
              },
            ],
          },
        ],
      },
    ];

    // Insert shelves
    for (const shelf of shelves) {
      await ctx.db.insert("todayShelves", shelf);
    }

    return null;
  },
});

