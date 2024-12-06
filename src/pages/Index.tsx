import { motion } from "framer-motion";
import { ArrowRight, BarChart2, Clock, TrendingUp } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-bold mb-6"
        >
          Revolutionize Cinema Management
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-white/80 mb-8"
        >
          Insights at Your Fingertips
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button 
            onClick={() => navigate("/signup")} 
            className="primary-button flex items-center justify-center gap-2"
          >
            Get Started <ArrowRight className="w-5 h-5" />
          </button>
          <button 
            onClick={() => document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })}
            className="secondary-button"
          >
            Learn More
          </button>
        </motion.div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-center mb-12">Key Features</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="feature-card"
            >
              <feature.icon className="w-12 h-12 text-gold mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-white/70">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-charcoal-light p-12 rounded-2xl"
        >
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Cinema?</h2>
          <p className="text-xl text-white/80 mb-8">Join hundreds of cinemas already using our platform</p>
          <button 
            onClick={() => navigate("/signup")}
            className="primary-button"
          >
            Start Free Trial
          </button>
        </motion.div>
      </section>
    </div>
  );
};

const features = [
  {
    icon: BarChart2,
    title: "Real-Time Analytics",
    description: "Monitor your cinema's performance with live data and insights",
  },
  {
    icon: TrendingUp,
    title: "Predictive Analysis",
    description: "Make data-driven decisions with AI-powered predictions",
  },
  {
    icon: Clock,
    title: "Automated Scheduling",
    description: "Optimize show times and staff scheduling automatically",
  },
];

export default Index;