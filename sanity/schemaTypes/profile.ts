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
      description: "Digite o nome do projeto",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      description: "Gere um slug a partir do nome do projeto",
      options: { source: "name" },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "category",
      title: "Categoria",
      type: "string",
      description: "Selecione a categoria principal do projeto",
      options: {
        list: [
          { title: "Automação", value: "automacao" },
          { title: "Business Intelligence", value: "bi" },
          { title: "Gestão de Processos", value: "gestao" },
          { title: "Integração de Sistemas", value: "integracao" },
          { title: "Análise de Dados", value: "dados" },
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "featured",
      title: "Projeto em Destaque?",
      type: "boolean",
      description: "Marque para destacar este projeto na página inicial",
      initialValue: false,
    }),
    defineField({
      name: "coverImage",
      title: "Imagem de Capa",
      type: "image",
      description: "Upload de imagem do projeto (opcional)",
      options: { hotspot: true },
    }),
    defineField({
      name: "gap",
      title: "1️⃣ Gap / Problema de Negócio",
      type: "text",
      description: "Descreva o problema, ineficiência ou custo que existia antes da solução",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "solution",
      title: "2️⃣ Solução Tecnológica / Metodológica",
      type: "text",
      description: "Descreva a ferramenta, tecnologia ou metodologia aplicada",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "impact",
      title: "3️⃣ Impacto e Valor Gerado",
      type: "text",
      description: "Descreva o resultado quantificável ou benefício estratégico alcançado",
      validation: (rule) => rule.required(),
    }),
    {
      name: "technologies",
      title: "Tecnologias Utilizadas",
      type: "array",
      description: "Liste as tecnologias/ferramentas usadas",
      of: [{ type: "string" }],
    },
    defineField({
      name: "projectUrl",
      title: "Link do Projeto",
      type: "url",
      description: "URL do repositório GitHub, demo ou documentação (opcional)",
    }),
    defineField({
      name: "completionDate",
      title: "Data de Conclusão",
      type: "date",
      description: "Quando o projeto foi concluído?",
    }),
  ],
  preview: {
    select: {
      title: "name",
      category: "category",
      media: "coverImage",
    },
  },
});
