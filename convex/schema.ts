import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
    documents: defineTable({
      title: v.string(),
        userId: v.string(),
        isArchived: v.boolean(),
        parenDocumentId: v.optional(v.string()),
        content: v.optional(v.string()),
        coverImage: v.optional(v.string()),
        icon: v.optional(v.string()),
        isPublic: v.boolean(),
    })
      .index('by_user', ['userId'])
      .index("by_user_parent", ['userId', 'parenDocumentId'])
})