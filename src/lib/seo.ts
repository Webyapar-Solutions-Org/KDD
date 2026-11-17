import type { Metadata } from "next";

export const siteConfig = {
  name: "KDD Educations",
  url: "https://kddeducations.com",
  title: "KDD Educations | Industry Knowledge for Software Development",
  description:
    "Learn Knowledge Driven Development and industry domain knowledge through structured courses, frameworks, use cases, and practical resources for students and professionals.",
  email: "ceo@kddeducations.com",
};

type SeoOptions = {
  title: string;
  description: string;
  path?: string;
  image?: string;
  type?: "website" | "article";
  noIndex?: boolean;
};

export function createMetadata({
  title,
  description,
  path = "/",
  image = "/figma-assets/course-preview.png",
  type = "website",
  noIndex = false,
}: SeoOptions): Metadata {
  const url = new URL(path, siteConfig.url).toString();

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    robots: noIndex
      ? {
          index: false,
          follow: false,
        }
      : {
          index: true,
          follow: true,
        },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: "en_US",
      type,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export const routes = [
  {
    path: "/",
    title: "KDD Educations",
    description:
      "Build a clear foundation in Life Insurance industry knowledge with a beginner-friendly course covering products, processes, and business concepts.",
    image: "/images/site-updates/life-insurance-course-hero.png",
  },
  {
    path: "/course",
    title: "Life Insurance Course | Industry Knowledge Structure | KDD Educations",
    description:
      "Learn Industry Knowledge Structure through a beginner-friendly, one-hour Life Insurance course covering products, processes, and connected business concepts.",
    image: "/images/site-updates/life-insurance-course-hero.png",
  },
  {
    path: "/why-domain-knowledge",
    title: "Why Domain Knowledge Matters | KDD Educations",
    description:
      "Understand why domain knowledge helps students, IT professionals, freelancers, and business teams build better software and make stronger decisions.",
    image: "/images/site-updates/professional-skills-pillars.png",
  },
  {
    path: "/kdd-framework",
    title: "KDD Framework | Knowledge Driven Development",
    description:
      "Explore the Knowledge Driven Development framework for connecting industry knowledge, requirements, and software development practices.",
    image: "/images/site-updates/kdd-knowledge-to-execution.png",
  },
  {
    path: "/industry-knowledge-structure",
    title: "Industry Knowledge Structure | KDD Educations",
    description:
      "Learn how industry knowledge can be organized into products, processes, participants, regulations, systems, and connected business concepts.",
    image: "/images/site-updates/iks-industry-knowledge-hub.png",
  },
  {
    path: "/use-cases",
    title: "KDD Use Cases | Industry Knowledge Applications",
    description:
      "See practical use cases for applying industry knowledge in software projects, business analysis, product design, and professional learning.",
    image: "/images/site-updates/kdd-knowledge-ecosystem.png",
  },
  {
    path: "/industry-aware-students",
    title: "Industry-Aware Students | KDD Educations",
    description:
      "Help students become industry-aware by combining technical learning with structured business domain knowledge and real-world context.",
    image: "/figma-assets/industry-aware-students.png",
  },
  {
    path: "/learning-resources",
    title: "Learning Resources | KDD Educations",
    description:
      "Explore KDD and Industry Knowledge Structure through courses, videos, books, a downloadable presentation, articles, research papers, and webinars.",
    image: "/learning-resources/resources-overview.png",
  },
  {
    path: "/faq-1",
    title: "FAQs | KDD Educations",
    description:
      "Find answers about Knowledge Driven Development, its framework and methodology, benefits for industry and academia, and its relevance to generative AI.",
    image: "/images/site-updates/kdd-knowledge-to-execution.png",
  },
  {
    path: "/about-us",
    title: "About Us | KDD Educations",
    description:
      "Learn about KDD Educations, our vision, and our work to make industry knowledge structured, accessible, and practical for students and professionals.",
    image: "/figma-assets/course-preview.png",
  },
  {
    path: "/privacy-policy",
    title: "Privacy Policy | KDD Educations",
    description:
      "Read the KDD Educations privacy policy to learn how visitor and contact information is handled.",
    image: "/figma-assets/course-preview.png",
  },
  {
    path: "/terms-of-use",
    title: "Terms of Use | KDD Educations",
    description:
      "Read the terms of use for accessing KDD Educations courses, pages, content, and learning resources.",
    image: "/figma-assets/course-preview.png",
  },
];

export function getRouteSeo(path: string) {
  const route = routes.find((item) => item.path === path);

  if (!route) {
    return {
      title: siteConfig.title,
      description: siteConfig.description,
      path,
      image: "/figma-assets/course-preview.png",
    };
  }

  return route;
}
