import { v } from "convex/values";
import { query } from "./_generated/server";

export const list = query({
  args: {},
  returns: v.array(
    v.object({
      _id: v.id("todayShelves"),
      _creationTime: v.number(),
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
    })
  ),
  handler: async (ctx) => {
    const shelves = await ctx.db
      .query("todayShelves")
      .withIndex("by_position")
      .order("asc")
      .collect();

    return shelves;
  },
});

