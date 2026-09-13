// File: portfolio-website/app/sitemap.ts

import { MetadataRoute } from "next";
import { projects } from "./_constants/projects";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://abdelaziz-portfolio.vercel.app";

    // Standard website pages
    const routes = ["", "/about", "/projects", "/contact", "/blog"].map(
        (route) => ({
            url: `${baseUrl}${route}`,
            lastModified: new Date(),
            changeFrequency: "monthly" as const,
            priority: route === "" ? 1 : 0.8,
        })
    );

    // Dynamically add all your individual project pages to the sitemap
    const projectRoutes = projects.map((project) => ({
        url: `${baseUrl}/projects/${project.id}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.6,
    }));

    return [...routes, ...projectRoutes];
}