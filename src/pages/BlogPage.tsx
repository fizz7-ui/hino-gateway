import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Search } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { RevealText } from "@/components/ui/revealText";
import { useTranslation } from "react-i18next";
import { Center } from "@/components/ui/center";

const BlogPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = ["All", "Japan", "Training", "Success Stories", "News"];

  const { t } = useTranslation();

  // Placeholder blog posts - now using JSON values
  const blogPosts = [
    {
      id: 1,
      title: t("blog.blog1.title"),
      category: "Success Stories",
      excerpt: t("blog.blog1.desc"),
      date: "2024-02-15",
      image: "" // User will add images
    }
  ];

  // Placeholder photo gallery - using JSON
  const galleryPhotos = Array(12).fill(null).map((_, i) => ({
    id: i + 1,
    image: "", // User will add images
    title: `${t("blog.title1")} ${i + 1}`
  }));

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "all" || post.category.toLowerCase() === selectedCategory.toLowerCase();
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-20">
        {/* Header Section */}
        <section className="py-24 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
             <Center>
               <div className="flex-col">
                <RevealText>
                <h2 className="text-4xl md:text-5xl font-bold mb-4">{t("blog.title")}</h2>
              </RevealText>
              <RevealText>
                <p className="text-xl text-muted-foreground">
                  {t("blog.desc")}
                </p>
              </RevealText>
               </div>
              </Center>
            </div>

            {/* Search and Filter Bar */}
            <div className="max-w-4xl mx-auto mb-12">
              <Reveal>
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="relative flex-1">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
                    <Input
                      type="text"
                      placeholder={t("blog.title")}
                      className="pl-12 h-12"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    {categories.map((category) => (
                      <Button
                        key={category}
                        variant={selectedCategory === category.toLowerCase() ? "default" : "outline"}
                        onClick={() => setSelectedCategory(category.toLowerCase())}
                      >
                        {category}
                      </Button>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Blog Posts Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {filteredPosts.map((post) => (
                <Reveal key={post.id}>
                  <div className="bg-card border-2 border-border rounded-xl overflow-hidden hover:border-primary transition-all duration-300 cursor-pointer">
                    <div className="bg-muted h-48 flex items-center justify-center">
                      {post.image ? (
                        <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                      ) : (
                        <p className="text-muted-foreground text-sm">Image placeholder</p>
                      )}
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full font-medium">
                          {post.category}
                        </span>
                        <span className="text-xs text-muted-foreground">{post.date}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                      <p className="text-muted-foreground text-sm mb-4">{post.excerpt}</p>
                      <Button variant="link" className="p-0 h-auto">
                        {t("blog.read")} →
                      </Button>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            {filteredPosts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg">{t("blog.error")}</p>
              </div>
            )}
          </div>
        </section>

        {/* Photo Gallery Section */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Center>
               <div className="flex-col">
                <RevealText>
                <h2 className="text-4xl md:text-5xl font-bold mb-4">{t("blog.title1")}</h2>
              </RevealText>
              <RevealText>
                <p className="text-xl text-muted-foreground">
                  {t("blog.desc1")}
                </p>
              </RevealText>
               </div>
              </Center>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
              {galleryPhotos.map((photo) => (
                <Reveal key={photo.id}>
                  <div className="bg-muted rounded-xl h-64 overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer">
                    {photo.image ? (
                      <img src={photo.image} alt={photo.title} className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <p className="text-muted-foreground text-sm">{photo.title}</p>
                      </div>
                    )}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};


export default BlogPage;
