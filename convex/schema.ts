import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  todayShelves: defineTable({
    position: v.number(),
    title: v.string(),
    subtitle: v.string(),
    cardLayout: v.union(v.literal("2-card"), v.literal("4-card")),
    cards: v.array(
      v.object({
        id: v.string(),
        badge: v.string(),
        title: v.string(),
        description: v.string(),
        imageUrl: v.string(),
        videoPosterUrl: v.optional(v.string()),
        videoSrc: v.optional(v.string()),
        accentColor: v.string(),
        theme: v.union(v.literal("light"), v.literal("dark")),
        link: v.string(),
        titleImage: v.optional(v.string()),
        appInfo: v.optional(
          v.object({
            iconUrl: v.string(),
            name: v.string(),
            subtitle: v.string(),
            link: v.string(),
            bgColor: v.string(),
          })
        ),
        lockupList: v.optional(
          v.array(
            v.object({
              iconUrl: v.string(),
              name: v.string(),
              subtitle: v.string(),
              link: v.string(),
              bgColor: v.string(),
            })
          )
        ),
      })
    ),
  }).index("by_position", ["position"]),
});

