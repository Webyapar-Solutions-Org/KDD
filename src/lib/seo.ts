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
    image: "/figma-assets/course-preview.png",
  },
  {
    path: "/why-domain-knowledge",
    title: "Why Domain Knowledge Matters | KDD Educations",
    description:
      "Understand why domain knowledge helps students, IT professionals, freelancers, and business teams build better software and make stronger decisions.",
    image: "/figma-assets/domain-hero.png",
  },
  {
    path: "/kdd-framework",
    title: "KDD Framework | Knowledge Driven Development",
    description:
      "Explore the Knowledge Driven Development framework for connecting industry knowledge, requirements, and software development practices.",
    image: "/figma-assets/kdd-framework-hero.png",
  },
  {
    path: "/industry-knowledge-structure",
    title: "Industry Knowledge Structure | KDD Educations",
    description:
      "Learn how industry knowledge can be organized into products, processes, participants, regulations, systems, and connected business concepts.",
    image: "/figma-assets/industry-knowledge-structure.png",
  },
  {
    path: "/use-cases",
    title: "KDD Use Cases | Industry Knowledge Applications",
    description:
      "See practical use cases for applying industry knowledge in software projects, business analysis, product design, and professional learning.",
    image: "/figma-assets/use-cases-hero.png",
  },
  {
    path: "/industry-aware-students",
    title: "Industry-Aware Students | KDD Educations",
    description:
      "Help students become industry-aware by combining technical learning with structured business domain knowledge and real-world context.",
    image: "/figma-assets/industry-aware-students.png",
  },
  {
    path: "/contact-us",
    title: "Contact KDD Educations",
    description:
      "Contact KDD Educations for course questions, learning resources, domain knowledge programs, and Knowledge Driven Development inquiries.",
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
