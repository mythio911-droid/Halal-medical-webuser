import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react";

const categories = ["All", "Treatments", "Travel Guide", "Patient Care", "Cost Comparison"];

const blogPosts = [
  {
    id: 1,
    title: "Understanding Heart Surgery Options in India",
    excerpt: "A comprehensive guide to cardiac procedures available at India's top hospitals, including bypass surgery, valve replacement, and more.",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop",
    category: "Treatments",
    date: "Jan 15, 2024",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "Complete Guide to Medical Visa for India",
    excerpt: "Step-by-step process to obtain a medical visa for treatment in India, including required documents and processing times.",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=400&h=250&fit=crop",
    category: "Travel Guide",
    date: "Jan 10, 2024",
    readTime: "4 min read",
  },
  {
    id: 3,
    title: "What to Expect During Your Hospital Stay",
    excerpt: "Preparing for your treatment in India - from admission procedures to post-operative care and discharge planning.",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=400&h=250&fit=crop",
    category: "Patient Care",
    date: "Jan 5, 2024",
    readTime: "6 min read",
  },
  {
    id: 4,
    title: "Cancer Treatment Costs: India vs Middle East",
    excerpt: "A detailed comparison of oncology treatment costs between Indian hospitals and facilities in the UAE, Saudi Arabia, and other Gulf countries.",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=400&h=250&fit=crop",
    category: "Cost Comparison",
    date: "Dec 28, 2023",
    readTime: "7 min read",
  },
  {
    id: 5,
    title: "Top 5 Orthopedic Hospitals in India",
    excerpt: "Exploring the best hospitals for joint replacement, spine surgery, and sports medicine treatments in India.",
    image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=250&fit=crop",
    category: "Treatments",
    date: "Dec 20, 2023",
    readTime: "5 min read",
  },
  {
    id: 6,
    title: "Traveling to India: Essential Tips for Patients",
    excerpt: "Everything you need to know about traveling to India for medical treatment - from packing essentials to cultural considerations.",
    image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=400&h=250&fit=crop",
    category: "Travel Guide",
    date: "Dec 15, 2023",
    readTime: "5 min read",
  },
];

const Blogs = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-12 md:py-16">
          <div className="container">
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Health & Travel Blog
            </h1>
            <p className="text-primary-foreground/90 text-lg max-w-2xl">
              Expert insights on treatments, travel tips, and patient guides to help you
              prepare for your medical journey to India.
            </p>
          </div>
        </section>

        {/* Category Filters */}
        <section className="py-6 border-b border-border bg-card">
          <div className="container">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={category === "All" ? "default" : "outline"}
                  size="sm"
                  className={category === "All" ? "bg-primary" : ""}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="py-12 md:py-16 bg-background">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts.map((post) => (
                <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full flex items-center gap-1">
                        <Tag className="h-3 w-3" />
                        {post.category}
                      </span>
                    </div>
                    <h3 className="font-heading text-lg font-semibold line-clamp-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <p className="text-muted-foreground text-sm line-clamp-2">
                      {post.excerpt}
                    </p>
                  </CardContent>
                  <CardFooter className="justify-between">
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {post.readTime}
                      </span>
                    </div>
                    <Button variant="ghost" size="sm" className="text-primary">
                      Read
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center gap-2 mt-10">
              <Button variant="outline" disabled>
                Previous
              </Button>
              <Button variant="default">1</Button>
              <Button variant="outline">2</Button>
              <Button variant="outline">3</Button>
              <Button variant="outline">
                Next
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blogs;
