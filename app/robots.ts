// File: portfolio-website/app/robots.ts

import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
        },
        sitemap: "https://abdelaziz-portfolio.vercel.app/sitemap.xml",
    };
}