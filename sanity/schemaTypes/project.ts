import { BiPackage } from "react-icons/bi";
import { defineField, defineType } from "sanity";

export default defineType({
  name: "project",
  title: "Project",
  description: "Project Schema - Modelo das 3 Colunas",
  type: "document",
  icon: BiPackage,
  fields: [
    defineField({
      name: "name",
      title: "Nome do Projeto",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name" },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "category",
      title: "Categoria",
      type: "string",
      options: {
        list: [
          { title: "Automação", value: "automacao" },
          { title: "Business Intelligence", value: "bi" },
          { title: "Gestão de Processos", value: "gestao" },
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "featured",
      title: "Projeto em Destaque?",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "coverImage",
      title: "Imagem de Capa",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "gap",
      title: "Gap / Problema",
      type: "text",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "solution",
      title: "Solução",
      type: "text",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "impact",
      title: "Impacto",
      type: "text",
      validation: (rule) => rule.required(),
    }),

{
  name: "technologies",
  title: "Tecnologias",
  type: "array",
  of: [{ type: "string" }],
},


    defineField({
      name: "projectUrl",
      title: "Link",
      type: "url",
    }),
    defineField({
      name: "completionDate",
      title: "Data",
      type: "date",
    }),
  ],
});
