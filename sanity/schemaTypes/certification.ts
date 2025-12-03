import { BiCertification } from "react-icons/bi";
import { defineField, defineType } from "sanity";

export default defineType({
  name: "certification",
  title: "Certification",
  description: "Certificações e Conquistas",
  type: "document",
  icon: BiCertification,
  fields: [
    defineField({
      name: "title",
      title: "Título",
      type: "string",
      description: "Nome da certificação ou conquista",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "organization",
      title: "Organização/Instituição",
      type: "string",
      description: "Quem emitiu?",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "type",
      title: "Tipo",
      type: "string",
      options: {
        list: [
          { title: "Certificação", value: "certificacao" },
          { title: "Conquista/Prêmio", value: "conquista" },
          { title: "Curso", value: "curso" },
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "issueDate",
      title: "Data de Emissão",
      type: "date",
    }),
    defineField({
      name: "credentialUrl",
      title: "Link do Certificado",
      type: "url",
    }),
    defineField({
      name: "logo",
      title: "Logo da Instituição",
      type: "image",
      options: { hotspot: true },
    }),
  ],
});
