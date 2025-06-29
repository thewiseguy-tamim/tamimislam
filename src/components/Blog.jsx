import React, { useState } from 'react';
import { X, ArrowRight, Calendar, User, ExternalLink } from 'lucide-react';

const Blog = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);

  const blogPosts = [
    {
      id: 1,
      title: "The Benefits of Working with a Financial Advisor",
      author: "Sarah Lee",
      date: "Jun 2024",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80",
      shortDescription: "Discover how financial advisors can guide your investment journey and secure your financial future.",
      fullDescription: "Working with a financial advisor can provide valuable insights into investment strategies, retirement planning, and risk management. Their expertise helps individuals make informed decisions about their financial future while navigating complex market conditions.\n\nFinancial advisors offer personalized guidance based on your unique circumstances, goals, and risk tolerance. They can help you create a comprehensive financial plan that addresses short-term needs and long-term objectives, ensuring you stay on track to meet your financial milestones.\n\nWith their deep understanding of market trends and investment vehicles, financial advisors can help you diversify your portfolio and optimize returns while minimizing risks.",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Working with a financial advisor can provide valuable insights into investment strategies, retirement planning, and risk management. Their expertise helps individuals make informed decisions about their financial future while navigating complex market conditions.",
      category: "Financial Planning",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Social Media Integration in Blogging",
      author: "Alex Thompson",
      date: "May 2024",
      image: "https://images.unsplash.com/photo-1611605698335-8b1569810432?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80",
      shortDescription: "Learn how to leverage social media platforms to amplify your blog's reach and engagement.",
      fullDescription: "Social media integration has become essential for modern blogging success. By leveraging platforms like Instagram, Twitter, and LinkedIn, bloggers can expand their reach and engage with audiences across multiple channels.\n\nEffective social media integration involves more than just sharing blog links. It requires creating platform-specific content that complements your blog posts, engaging with your community, and using analytics to understand what resonates with your audience.\n\nThe key is to maintain consistency across all platforms while adapting your content to each platform's unique characteristics and audience expectations.",
      content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Social media integration has become essential for modern blogging success. By leveraging platforms like Instagram, Twitter, and LinkedIn, bloggers can expand their reach and engage with audiences across multiple channels.",
      category: "Digital Marketing",
      readTime: "7 min read"
    },
    {
      id: 3,
      title: "Building a Remote Team: Best Tools for Collaboration",
      author: "Michael Brown",
      date: "May 2022",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80",
      shortDescription: "Explore the essential tools and strategies for building and managing successful remote teams.",
      fullDescription: "Remote work has revolutionized how teams collaborate. Modern tools like Slack, Zoom, and project management platforms enable seamless communication and productivity regardless of geographical boundaries.\n\nBuilding a successful remote team requires more than just the right tools—it demands a shift in management philosophy, clear communication protocols, and a strong emphasis on results rather than hours worked.\n\nThe most successful remote teams combine synchronous and asynchronous work methods, use collaborative tools effectively, and maintain strong team culture through regular virtual interactions and team-building activities.",
      content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore. Remote work has revolutionized how teams collaborate. Modern tools like Slack, Zoom, and project management platforms enable seamless communication and productivity regardless of geographical boundaries.",
      category: "Team Management",
      readTime: "6 min read"
    }
  ];

  const openModal = (blog) => {
    setSelectedBlog(blog);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedBlog(null);
    document.body.style.overflow = 'unset';
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <section id="Blog" className="bg-transparent min-h-screen py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-4 text-white">
          Blog & Resources
        </h2>
        <div className="border-t border-gray-300 my-8 mb-20 w-[30rem] mx-auto" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              onClick={() => openModal(post)}
              className="group cursor-pointer transform transition-all duration-500 hover:scale-105"
            >
              <div className="bg-white/5 backdrop-blur-xl rounded-3xl overflow-hidden shadow-lg border border-white/30 hover:border-white/50 transition-all duration-300 h-full">
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-purple-800 rounded-full flex items-center justify-center text-white text-lg font-bold shadow-lg">
                      {post.author.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="ml-4">
                      <p className="text-white text-lg font-semibold">{post.author}</p>
                      <p className="text-gray-300 text-sm">{post.date}</p>
                    </div>
                  </div>
                  <h3 className="text-white text-2xl font-bold mb-4 line-clamp-2 group-hover:text-purple-300 transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="text-gray-300 text-base mb-6 line-clamp-2">
                    {post.shortDescription}
                  </p>
                  <button className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-6 py-3 rounded-xl transition-all duration-300 flex items-center font-semibold border border-white/30 hover:border-white/50 group/btn">
                    Get More Info
                    <ArrowRight className="ml-2 h-5 w-5 transform group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedBlog && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 backdrop-blur-sm z-50 flex items-center justify-center"
          onClick={handleOverlayClick}
        >
          <div
            className="bg-black shadow-2xl w-full h-full overflow-hidden border border-gray-700"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-6 border-b border-gray-700 bg-gradient-to-r from-[#0f0f0f] to-[#1a1a1a]">
              <div className="flex items-center gap-3">
                <button
                  onClick={closeModal}
                  className="p-2 hover:bg-gray-700 rounded-lg transition-colors duration-200 flex items-center gap-2 text-gray-300 hover:text-white"
                >
                  <ArrowRight className="w-5 h-5 rotate-180" />
                  <span className="font-medium">Back</span>
                </button>
              </div>
              <div className="flex gap-3">
                <button className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-all duration-200 flex items-center gap-2">
                  <ExternalLink className="w-4 h-4" />
                  Share Article
                </button>
              </div>
            </div>
            <div className="overflow-y-auto h-[calc(100%-80px)]">
              <div className="p-12 max-w-6xl mx-auto">
                <div className="mb-10">
                  <img
                    src={selectedBlog.image}
                    alt={selectedBlog.title}
                    className="w-full h-96 object-cover rounded-xl"
                  />
                </div>
                <h2 className="text-5xl font-bold text-white mb-8">
                  {selectedBlog.title}
                </h2>
                <div className="flex flex-wrap gap-8 mb-10 text-base text-gray-400">
                  <div className="flex items-center gap-3">
                    <User className="w-5 h-5" />
                    <span>{selectedBlog.author}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5" />
                    <span>{selectedBlog.date}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                    <span>{selectedBlog.category}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span>{selectedBlog.readTime}</span>
                  </div>
                </div>
                <div className="mb-10">
                  <h3 className="text-3xl font-semibold text-white mb-6">
                    Article Content
                  </h3>
                  <div className="text-gray-300 leading-relaxed space-y-6 text-xl">
                    {selectedBlog.fullDescription.split('\n\n').map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>
                </div>
                <div className="mb-8">
                  <h3 className="text-3xl font-semibold text-white mb-6">
                    Key Takeaways
                  </h3>
                  <div className="bg-gray-900 rounded-xl p-8 border border-gray-700">
                    <p className="text-gray-300 text-lg leading-relaxed">
                      {selectedBlog.content}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Blog;