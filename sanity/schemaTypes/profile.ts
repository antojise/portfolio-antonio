import { defineField, defineType } from "sanity";
import { BiUser } from "react-icons/bi";

export default defineType({
  name: "profile",
  title: "Profile",
  type: "document",
  icon: BiUser,
  fields: [
    defineField({
      name: "fullName",
      title: "Full Name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "headline",
      title: "Headline",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "profileImage",
      title: "Profile Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "shortBio",
      title: "Short Bio",
      type: "text",
    }),
    defineField({
      name: "email",
      title: "Email Address",
      type: "string",
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "string",
    }),
    {
      name: "socialLinks",
      title: "Social Links",
      type: "object",
      fields: [
        { name: "github", title: "Github URL", type: "url" },
        { name: "linkedin", title: "Linkedin URL", type: "url" },
        { name: "twitter", title: "Twitter URL", type: "url" },
      ],
    },
  ],
});
