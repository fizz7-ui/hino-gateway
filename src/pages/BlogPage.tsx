import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Search } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { RevealText } from "@/components/ui/revealText";

const BlogPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = ["All", "Japan", "Training", "Success Stories", "News"];

  // Placeholder blog posts - user will add content
  const blogPosts = [
    {
      id: 1,
      title: "Blog Post Title 1",
      category: "Japan",
      excerpt: "Blog post excerpt will go here...",
      date: "2024-02-15",
      image: "" // User will add images
    },
    {
      id: 2,
      title: "Blog Post Title 2",
      category: "Training",
      excerpt: "Blog post excerpt will go here...",
      date: "2024-02-14",
      image: ""
    },
    {
      id: 3,
      title: "Blog Post Title 3",
      category: "Success Stories",
      excerpt: "Blog post excerpt will go here...",
      date: "2024-02-13",
      image: ""
    },
    {
      id: 4,
      title: "Blog Post Title 4",
      category: "News",
      excerpt: "Blog post excerpt will go here...",
      date: "2024-02-12",
      image: ""
    },
    {
      id: 5,
      title: "Blog Post Title 5",
      category: "Japan",
      excerpt: "Blog post excerpt will go here...",
      date: "2024-02-11",
      image: ""
    },
    {
      id: 6,
      title: "Blog Post Title 6",
      category: "Training",
      excerpt: "Blog post excerpt will go here...",
      date: "2024-02-10",
      image: ""
    }
  ];

  // Placeholder photo gallery - user will add images
  const galleryPhotos = Array(12).fill(null).map((_, i) => ({
    id: i + 1,
    image: "", // User will add images
    title: `Gallery Photo ${i + 1}`
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
              <RevealText>
                <h1 className="text-4xl md:text-6xl font-bold mb-4">Blog & News</h1>
              </RevealText>
              <RevealText>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Stay updated with our latest stories, insights, and news
                </p>
              </RevealText>
            </div>

            {/* Search and Filter Bar */}
            <div className="max-w-4xl mx-auto mb-12">
              <Reveal>
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="relative flex-1">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
                    <Input
                      type="text"
                      placeholder="Search blog posts..."
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
                        Read More →
                      </Button>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            {filteredPosts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg">No blog posts found matching your criteria.</p>
              </div>
            )}
          </div>
        </section>

        {/* Photo Gallery Section */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <RevealText>
                <h2 className="text-4xl md:text-5xl font-bold mb-4">Photo Gallery</h2>
              </RevealText>
              <RevealText>
                <p className="text-xl text-muted-foreground">
                  Moments captured from our journey
                </p>
              </RevealText>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
              {galleryPhotos.map((photo) => (
                <Reveal key={photo.id}>
                  <div className="bg-muted rounded-xl h-64 overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer">
                    {photo.image ? (
                      <img src={photo.image} alt={photo.title} className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <p className="text-muted-foreground text-sm">Photo {photo.id}</p>
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
