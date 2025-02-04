"use client";

import { blogPosts } from "@/app/_constants/blogs";
import { useLanguage } from "@/app/_contexts/LanguageContext";
import { parseMarkdown } from "@/app/_utils/parseMarkdown";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function BlogPostPage() {
  const { t, language } = useLanguage();
  const { toast } = useToast();
  const params = useParams();
  const slug = params.slug as string;

  // Find the current post
  const post = blogPosts.find((p) => p.slug === slug);
  const recommendedPostsIds = post?.recommendedPosts || [];
  const recommendedPosts = blogPosts.filter((p) =>
    recommendedPostsIds.includes(p.id)
  );

  if (!post) {
    return (
      <div className="max-w-3xl mx-auto py-12 px-6 text-center">
        <h1 className="text-2xl font-bold mb-4">{t("postNotFound")}</h1>
        <Button asChild>
          <Link href="/blog">
            <ArrowLeft className="h-4 w-4 mr-2" />
            {t("backToBlog")}
          </Link>
        </Button>
      </div>
    );
  }

  const sharePost = () => {
    try {
      if (navigator.share) {
        navigator.share({
          title: post.title[language],
          text: post.description[language],
          url: window.location.href,
        });
      } else {
        navigator.clipboard.writeText(window.location.href);
        toast({
          title: t("copiedToClipboard"),
          description: t("copiedToClipboardDescription"),
        });
      }
    } catch (error) {
      console.error("Error sharing post:", error);
    }
  };

  return (
    <div className="max-w-5xl mx-auto py-12 px-6">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr,300px] gap-12">
        {/* Main Content */}
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8"
        >
          {/* Back Button */}
          <Button asChild variant="ghost" size="sm" className="mb-8">
            <Link href="/blog">
              <ArrowLeft className="h-4 w-4 mr-2" />
              {t("backToBlog")}
            </Link>
          </Button>

          {/* Hero Section */}
          <div className="space-y-4">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tight">
                {post.title[language]}
              </h1>
              <p className="text-lg text-muted-foreground">
                {post.description[language]}
              </p>
            </div>

            {/* Meta Info */}
            <div className="flex items-center justify-between py-4 border-y border-border/50">
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1" dir="ltr">
                  <Calendar className="h-4 w-4" />
                  {new Date(post.date).toLocaleDateString()}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {post.readTime[language]}
                </span>
                <Button variant="ghost" size="icon" onClick={sharePost}>
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src={post.image}
              alt={post.title[language]}
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div
            className="prose prose-lg dark:prose-invert max-w-none"
            dangerouslySetInnerHTML={{
              __html: parseMarkdown(post?.content[language] || ""),
            }}
          />
        </motion.article>

        {/* Sidebar */}
        <motion.aside
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-8"
        >
          {/* Category */}
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold mb-4">{t("category")}</h3>
              <div className="inline-block">
                <span
                  className="bg-secondary px-3 py-1 rounded-full text-sm"
                  dir="ltr"
                >
                  {post.category}
                </span>
              </div>
            </CardContent>
          </Card>

          {/* Recommended Posts */}
          {recommendedPosts.length > 0 && (
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">{t("recommendedPosts")}</h3>
                <div className="space-y-4">
                  {recommendedPosts.map((recommendedPost) => (
                    <Link
                      key={recommendedPost.id}
                      href={`/blog/${recommendedPost.slug}`}
                      className="block group"
                    >
                      <div className="relative h-32 rounded-lg overflow-hidden mb-2">
                        <Image
                          src={recommendedPost.image}
                          alt={recommendedPost.title[language]}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      <h4 className="font-medium group-hover:text-primary transition-colors">
                        {recommendedPost.title[language]}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {recommendedPost.readTime[language]}
                      </p>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </motion.aside>
      </div>
    </div>
  );
}
