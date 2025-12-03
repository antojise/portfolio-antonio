import { defineArrayMember, defineField, defineType } from "sanity";
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
      description: "In one short sentence, what do you do?",
      validation: (Rule) => Rule.required().min(40).max(150),
    }),
    defineField({
      name: "profileImage",
      title: "Profile Image",
      type: "image",
      description: "Upload a profile picture",
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
    defineField({
      name: "fullBio",
      title: "Full Bio",
      type: "array",
      of: [defineArrayMember({ type: "block" })],
    }),
    defineField({
      name: "resumeURL",
      title: "Upload Resume",
      type: "file",
    }),
    defineField({
      name: "socialLinks",
      title: "Social Links",
      type: "object",
      fields: [
        defineField({
          name: "github",
          title: "Github URL",
          type: "url",
        }),
        defineField({
          name: "linkedin",
          title: "Linkedin URL",
          type: "url",
        }),
        defineField({
          name: "twitter",
          title: "Twitter URL",
          type: "url",
        }),
      ],
    }),
    defineField({
      name: "skills",
      title: "Skills",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
    }),
  ],
});
