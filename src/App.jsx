import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Progress } from '@/components/ui/progress.jsx'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs.jsx'
import {
  TrendingUp,
  Target,
  Users,
  DollarSign,
  Phone,
  Mail,
  Linkedin,
  BarChart3,
  Award,
  Calendar,
  Building,
  Zap,
  Shield,
  Cloud,
  Heart,
  CreditCard,
  ArrowRight,
  PlayCircle,
  Eye,
  Download,
  User,
  MessageCircle,
  X,
  Send,
  Home,
  FileText,
  Briefcase,
  Settings,
  Star,
  CheckCircle,
  Clock,
  Globe,
  Headphones,
  Video,
  FileDown,
  Sparkles,
  Bot
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts'
import './App.css'
import userPhoto from './assets/wanjuu_veronica_wambui.jpeg'

const projects = [
  {
    id: 1,
    company: "TechFlow Solutions",
    industry: "B2B SaaS - Manufacturing",
    role: "Senior SDR/BDR",
    duration: "6 months",
    icon: <Building className="w-6 h-6" />,
    color: "bg-blue-500",
    before: {
      leads: 18,
      conversion: 2.1,
      cycle: 8.5,
      mrr: 45
    },
    after: {
      leads: 90,
      conversion: 8.7,
      cycle: 5.5,
      mrr: 125
    },
    revenue: 750000,
    description: "Transformed lead generation for manufacturing optimization platform",
    keyAchievements: [
      "400% increase in monthly qualified leads",
      "8.7% prospect-to-meeting conversion rate",
      "35% reduction in sales cycle",
      "$750K+ in closed-won revenue"
    ],
    tools: ["HubSpot CRM", "ZoomInfo", "LinkedIn Sales Navigator", "Outreach.io", "Gong.io"],
    videoUrl: "/demo-techflow.mp4",
    screenshots: ["/crm-dashboard-1.png", "/outreach-sequence-1.png"]
  },
  {
    id: 2,
    company: "SecureGuard Enterprise",
    industry: "B2B Cybersecurity - Financial Services",
    role: "Business Development Representative",
    duration: "8 months",
    icon: <Shield className="w-6 h-6" />,
    color: "bg-red-500",
    before: {
      leads: 10,
      conversion: 3.2,
      cycle: 14,
      dealSize: 95
    },
    after: {
      leads: 47,
      conversion: 12.1,
      cycle: 8.5,
      dealSize: 185
    },
    revenue: 1800000,
    description: "Revolutionized cybersecurity sales in financial services sector",
    keyAchievements: [
      "47 qualified opportunities in 8 months",
      "$185K average deal size (95% increase)",
      "40% reduction in sales cycle",
      "$1.8M in closed-won revenue"
    ],
    tools: ["Salesforce CRM", "ZoomInfo", "6sense", "Vidyard", "LinkedIn Sales Navigator"],
    videoUrl: "/demo-secureguard.mp4",
    screenshots: ["/crm-dashboard-2.png", "/video-outreach-1.png"]
  },
  {
    id: 3,
    company: "CloudOps Pro",
    industry: "B2B DevOps Platform - Enterprise",
    role: "Senior SDR",
    duration: "10 months",
    icon: <Cloud className="w-6 h-6" />,
    color: "bg-green-500",
    before: {
      leads: 16,
      conversion: 4.1,
      arr: 3200000,
      territory: 0
    },
    after: {
      leads: 40,
      conversion: 6.2,
      arr: 5300000,
      territory: 40
    },
    revenue: 2100000,
    description: "Scaled SaaS sales through systematic territory management",
    keyAchievements: [
      "35-45 qualified leads per month consistently",
      "40% of company's total qualified pipeline",
      "$2.1M in new ARR contribution",
      "87% multi-threading success rate"
    ],
    tools: ["Salesforce CRM", "Outreach.io", "ZoomInfo", "GitHub", "Tableau"],
    videoUrl: "/demo-cloudops.mp4",
    screenshots: ["/territory-map.png", "/pipeline-dashboard.png"]
  },
  {
    id: 4,
    company: "MedTech Innovations",
    industry: "B2B Healthcare IT Solutions",
    role: "Business Development Representative",
    duration: "12 months",
    icon: <Heart className="w-6 h-6" />,
    color: "bg-purple-500",
    before: {
      leads: 14,
      conversion: 2.8,
      cycle: 20,
      revenue: 1800000
    },
    after: {
      leads: 52,
      conversion: 8.9,
      cycle: 13,
      revenue: 4200000
    },
    revenue: 2400000,
    description: "Transformed healthcare technology sales with regulatory expertise",
    keyAchievements: [
      "52 qualified opportunities in 12 months (300% increase)",
      "30% reduction in sales cycle",
      "$2.4M in closed-won revenue",
      "91% stakeholder engagement rate"
    ],
    tools: ["Salesforce Health Cloud", "ZoomInfo", "LinkedIn Sales Navigator", "HIMSS Resources"],
    videoUrl: "/demo-medtech.mp4",
    screenshots: ["/healthcare-crm.png", "/compliance-tracker.png"]
  },
  {
    id: 5,
    company: "PayStream Solutions",
    industry: "B2B Fintech - Payment Processing",
    role: "Senior SDR",
    duration: "9 months",
    icon: <CreditCard className="w-6 h-6" />,
    color: "bg-yellow-500",
    before: {
      leads: 23,
      conversion: 3.2,
      dealSize: 45,
      arr: 4100000
    },
    after: {
      leads: 78,
      conversion: 9.1,
      dealSize: 73,
      arr: 6000000
    },
    revenue: 1900000,
    description: "Accelerated fintech growth through vertical-specific expertise",
    keyAchievements: [
      "78 qualified opportunities in 9 months",
      "9.1% prospect-to-opportunity conversion rate",
      "$73K average deal size (62% increase)",
      "$1.9M in closed-won revenue"
    ],
    tools: ["HubSpot CRM", "ZoomInfo", "PitchBook", "LinkedIn Sales Navigator", "Custom ROI Calculators"],
    videoUrl: "/demo-paystream.mp4",
    screenshots: ["/fintech-dashboard.png", "/roi-calculator.png"]
  }
]

const chartData = [
  { month: 'Jan', before: 18, after: 90 },
  { month: 'Feb', before: 16, after: 85 },
  { month: 'Mar', before: 22, after: 95 },
  { month: 'Apr', before: 19, after: 88 },
  { month: 'May', before: 17, after: 92 },
  { month: 'Jun', before: 21, after: 87 }
]

const conversionData = [
  { project: 'TechFlow', before: 2.1, after: 8.7 },
  { project: 'SecureGuard', before: 3.2, after: 12.1 },
  { project: 'CloudOps', before: 4.1, after: 6.2 },
  { project: 'MedTech', before: 2.8, after: 8.9 },
  { project: 'PayStream', before: 3.2, after: 9.1 }
]

const skillsData = [
  { skill: 'Lead Generation', score: 95 },
  { skill: 'Cold Calling', score: 92 },
  { skill: 'Email Outreach', score: 88 },
  { skill: 'LinkedIn Outreach', score: 90 },
  { skill: 'CRM Management', score: 94 },
  { skill: 'Objection Handling', score: 89 }
]

const tools = [
  { name: 'Salesforce', usage: 'Managed CRM leads, optimized sales processes', logo: '🏢', category: 'CRM' },
  { name: 'GoHighLevel', usage: 'Built outbound sequences, automated follow-ups', logo: '🚀', category: 'Automation' },
  { name: 'HubSpot', usage: 'Managed CRM, created email campaigns, tracked analytics', logo: '🧡', category: 'CRM' },
  { name: 'ZoomInfo', usage: 'Identified key decision-makers, enriched lead data', logo: '🔍', category: 'Prospecting' },
  { name: 'Apollo', usage: 'Performed lead generation, built prospect lists', logo: '🎯', category: 'Prospecting' },
  { name: 'Mojo', usage: 'Executed high-volume cold calling campaigns', logo: '📞', category: 'Calling' },
  { name: 'Vicidial', usage: 'Handled inbound/outbound calls, managed dialer campaigns', logo: '☎️', category: 'Calling' },
  { name: 'Xencall', usage: 'Conducted outbound calling, managed call dispositions', logo: '📱', category: 'Calling' },
  { name: 'Zoho', usage: 'Tracked customer interactions, managed sales pipelines', logo: '📊', category: 'CRM' },
  { name: 'Podio', usage: 'Collaborated on projects, managed workflows', logo: '🤝', category: 'Collaboration' },
  { name: 'Slack', usage: 'Internal team communication, quick problem-solving', logo: '💬', category: 'Communication' },
  { name: 'WhatsApp', usage: 'Communicated with prospects/clients, shared quick updates', logo: '💚', category: 'Communication' }
]

const faqData = [
  {
    question: "What tools does Veronicah use?",
    answer: "I'm proficient in 15+ sales tools including Salesforce, HubSpot, GoHighLevel, ZoomInfo, Apollo, Mojo, and many more. I adapt quickly to any CRM or sales stack your company uses."
  },
  {
    question: "Can I hear a cold call sample?",
    answer: "Absolutely! I have recorded cold call samples demonstrating my objection handling, discovery questions, and appointment setting skills. These are available upon request during interviews."
  },
  {
    question: "How does she handle objections?",
    answer: "I use proven frameworks like BANT, MEDDIC, and SPIN selling. My approach focuses on understanding the prospect's real concerns and providing value-based responses that move conversations forward."
  },
  {
    question: "What makes her better than other SDRs?",
    answer: "My track record speaks for itself: $8.85M+ in revenue generated, 350% average lead increase, and consistent quota attainment (105-120%). I combine strategic thinking with hands-on execution."
  },
  {
    question: "What is her experience with real estate/insurance/etc.?",
    answer: "I have extensive experience across multiple industries including real estate, solar, insurance, SEO/digital marketing, healthcare IT, fintech, and cybersecurity. I quickly adapt to new verticals and understand industry-specific pain points."
  }
]

const funFacts = [
  "🎯 Cold calls don't scare me - I make 100+ daily!",
  "🧠 I love learning sales psychology and buyer behavior",
  "⚡ I can adapt to any CRM in under 24 hours",
  "🌍 Remote-ready with a professional home office setup",
  "🕐 Flexible to work U.S. time zones (EST, PST, CST)",
  "📈 I track everything - data drives my decisions",
  "🎭 I believe every 'no' is just a 'not yet'",
  "🚀 I turn prospects into advocates, not just customers"
]

function App() {
  const [selectedProject, setSelectedProject] = useState(0)
  const [currentSection, setCurrentSection] = useState('home')
  const [scrollProgress, setScrollProgress] = useState(0)
  const [chatOpen, setChatOpen] = useState(false)
  const [chatMessages, setChatMessages] = useState([])
  const [currentMessage, setCurrentMessage] = useState('')
  const [showScorecard, setShowScorecard] = useState(false)

  const totalRevenue = projects.reduce((sum, project) => sum + project.revenue, 0)

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (window.scrollY / totalHeight) * 100
      setScrollProgress(progress)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleChatMessage = (message) => {
    const faq = faqData.find(item => 
      item.question.toLowerCase().includes(message.toLowerCase()) ||
      message.toLowerCase().includes(item.question.toLowerCase().split(' ')[2])
    )
    
    const response = faq ? faq.answer : "Thanks for your question! I'd be happy to discuss this in detail during our call. Feel free to book a discovery call to learn more about my experience and approach."
    
    setChatMessages(prev => [
      ...prev,
      { type: 'user', content: message },
      { type: 'bot', content: response }
    ])
    setCurrentMessage('')
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  }

  const scrollToSection = (sectionId) => {
    setCurrentSection(sectionId)
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-slate-200 dark:bg-slate-700 z-50">
        <motion.div 
          className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
          style={{ width: `${scrollProgress}%` }}
          initial={{ width: 0 }}
          animate={{ width: `${scrollProgress}%` }}
        />
        <div className="absolute top-2 left-4 text-xs font-medium text-slate-600 dark:text-slate-300">
          Getting to Know Veronicah... {Math.round(scrollProgress)}%
        </div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-8 left-1/2 transform -translate-x-1/2 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg z-40">
        <div className="flex items-center gap-6">
          {[
            { id: 'home', icon: <Home className="w-4 h-4" />, label: 'Home' },
            { id: 'about-me', icon: <User className="w-4 h-4" />, label: 'About' },
            { id: 'experience', icon: <Briefcase className="w-4 h-4" />, label: 'Experience' },
            { id: 'projects', icon: <FileText className="w-4 h-4" />, label: 'Projects' },
            { id: 'tools', icon: <Settings className="w-4 h-4" />, label: 'Tools' }
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`flex items-center gap-2 px-3 py-2 rounded-full transition-all ${
                currentSection === item.id 
                  ? 'bg-blue-500 text-white' 
                  : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'
              }`}
            >
              {item.icon}
              <span className="text-sm font-medium">{item.label}</span>
            </button>
          ))}
        </div>
      </nav>

      {/* Hero Section */}
      <motion.section 
        id="home"
        className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white min-h-screen flex items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-6 py-20">
          <motion.div 
            className="max-w-6xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <motion.div variants={itemVariants} className="mb-4">
                  <Badge className="bg-white/20 text-white border-white/30">
                    <Sparkles className="w-4 h-4 mr-2" />
                    Your Unstoppable Force in B2B Sales
                  </Badge>
                </motion.div>
                <motion.h1 
                  className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent"
                  variants={itemVariants}
                >
                  Wanjuu Veronica Wambui
                </motion.h1>
                <motion.p 
                  className="text-xl md:text-2xl mb-8 text-blue-100"
                  variants={itemVariants}
                >
                  Helping B2B Companies Book More Qualified Meetings and Build Healthy, Predictable Pipelines
                </motion.p>
                
                {/* Superpowers */}
                <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4 mb-8">
                  {[
                    { icon: <Target className="w-5 h-5" />, title: "Resourcefulness", desc: "Unearthing hidden opportunities" },
                    { icon: <Calendar className="w-5 h-5" />, title: "Appointment Setting", desc: "Securing high-value meetings" },
                    { icon: <Zap className="w-5 h-5" />, title: "Objection Handling", desc: "Turning 'no' into 'how soon?'" },
                    { icon: <BarChart3 className="w-5 h-5" />, title: "CRM Mastery", desc: "Optimizing workflows & efficiency" }
                  ].map((power, index) => (
                    <motion.div 
                      key={index}
                      className="bg-white/10 backdrop-blur-sm rounded-lg p-4"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="text-blue-200 mb-2">{power.icon}</div>
                      <h3 className="font-semibold text-sm">{power.title}</h3>
                      <p className="text-xs text-blue-100">{power.desc}</p>
                    </motion.div>
                  ))}
                </motion.div>

                {/* CTA Buttons */}
                <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    size="lg" 
                    className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-3"
                    onClick={() => scrollToSection('about-me')}
                  >
                    📞 Book a Discovery Call
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-3"
                  >
                    📄 Download Resume
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-3"
                  >
                    🤝 Connect on LinkedIn
                  </Button>
                </motion.div>
              </div>

              <div className="relative">
                <motion.div 
                  className="relative z-10"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                >
                  <img 
                    src={userPhoto} 
                    alt="Wanjuu Veronica Wambui" 
                    className="w-80 h-80 rounded-full object-cover shadow-2xl border-4 border-white/20 mx-auto"
                  />
                </motion.div>
                
                {/* Floating Stats */}
                <motion.div 
                  className="absolute -top-4 -right-4 bg-white/20 backdrop-blur-sm rounded-lg p-4"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <div className="text-2xl font-bold">${(totalRevenue / 1000000).toFixed(1)}M+</div>
                  <div className="text-sm text-blue-100">Revenue Generated</div>
                </motion.div>
                
                <motion.div 
                  className="absolute -bottom-4 -left-4 bg-white/20 backdrop-blur-sm rounded-lg p-4"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                >
                  <div className="text-2xl font-bold">350%</div>
                  <div className="text-sm text-blue-100">Avg. Lead Increase</div>
                </motion.div>

                {/* Video Intro Placeholder */}
                <motion.div 
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/50 rounded-full p-4 cursor-pointer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <PlayCircle className="w-8 h-8 text-white" />
                </motion.div>
              </div>
            </div>

            {/* Industry Logos */}
            <motion.div variants={itemVariants} className="mt-16 text-center">
              <p className="text-blue-100 mb-6">Trusted by companies across industries</p>
              <div className="flex justify-center items-center gap-8 opacity-70">
                {['🏠 Real Estate', '☀️ Solar', '🛡️ Insurance', '📈 SEO/Digital Marketing'].map((industry, index) => (
                  <motion.div 
                    key={index}
                    className="text-white/80 text-sm"
                    whileHover={{ scale: 1.1 }}
                  >
                    {industry}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* About Me Section */}
      <motion.section 
        id="about-me" 
        className="py-20 bg-white dark:bg-slate-800"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              About Me
            </motion.h2>
            <motion.p 
              className="text-lg text-muted-foreground max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Hi! I'm Veronicah, and I believe every conversation is an opportunity to create value. 
              With 3+ years of proven B2B sales success, I don't just hit quotas—I obliterate them.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Personal Story */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-bold mb-6">My Story</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  I discovered my passion for sales when I realized that behind every "no" is a story waiting to be understood. 
                  My approach isn't about pushing products—it's about solving real business problems.
                </p>
                <p>
                  What drives me? The moment when a prospect becomes a partner, when a cold call turns into a warm relationship, 
                  and when data transforms into actionable insights that drive revenue growth.
                </p>
                <p>
                  I'm not just remote-ready—I'm remote-optimized. With a professional home office setup and flexibility 
                  to work across U.S. time zones, I bring the same energy and results whether we're in the same room or 
                  across continents.
                </p>
              </div>

              {/* Core Values */}
              <div className="mt-8">
                <h4 className="text-lg font-semibold mb-4">Core Values</h4>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: <CheckCircle className="w-5 h-5" />, value: "Integrity", desc: "Honest, transparent communication" },
                    { icon: <Zap className="w-5 h-5" />, value: "Adaptability", desc: "Thriving in dynamic environments" },
                    { icon: <Target className="w-5 h-5" />, value: "Impact", desc: "Delivering measurable results" },
                    { icon: <Star className="w-5 h-5" />, value: "Excellence", desc: "Exceeding expectations always" }
                  ].map((item, index) => (
                    <motion.div 
                      key={index}
                      className="flex items-start gap-3 p-3 bg-slate-50 dark:bg-slate-700 rounded-lg"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="text-blue-600 mt-1">{item.icon}</div>
                      <div>
                        <div className="font-semibold text-sm">{item.value}</div>
                        <div className="text-xs text-muted-foreground">{item.desc}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Fun Facts & Skills */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-bold mb-6">Fun Facts About Me</h3>
              <div className="space-y-3 mb-8">
                {funFacts.map((fact, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-center gap-3 p-3 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <span className="text-sm">{fact}</span>
                  </motion.div>
                ))}
              </div>

              {/* Skills Radar Chart */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Skills Assessment</CardTitle>
                  <CardDescription>My core competencies rated out of 100</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <RadarChart data={skillsData}>
                      <PolarGrid />
                      <PolarAngleAxis dataKey="skill" />
                      <PolarRadiusAxis angle={90} domain={[0, 100]} />
                      <Radar name="Skills" dataKey="score" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.3} />
                    </RadarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Experience Section */}
      <motion.section 
        id="experience"
        className="py-20 bg-slate-50 dark:bg-slate-900"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Experience</h2>
            <p className="text-lg text-muted-foreground">Real results from real companies</p>
          </div>

          <div className="space-y-8">
            {[
              {
                company: "Safe DNS",
                role: "Senior SDR",
                period: "2023 - Present",
                industry: "Cybersecurity",
                problem: "Low lead quality and poor conversion rates",
                solution: "Implemented targeted prospecting and qualification framework",
                results: ["115% quota attainment", "25% increase in SQL quality", "40% reduction in sales cycle"],
                tools: ["Salesforce", "ZoomInfo", "Outreach"]
              },
              {
                company: "Mogox",
                role: "Business Development Representative",
                period: "2022 - 2023",
                industry: "SaaS",
                problem: "Struggling to penetrate enterprise accounts",
                solution: "Developed multi-threading strategy and executive outreach campaigns",
                results: ["108% quota attainment", "$300K in closed deals", "30% higher proposal acceptance"],
                tools: ["HubSpot", "LinkedIn Sales Navigator", "Vidyard"]
              },
              {
                company: "Morty Mortgage",
                role: "SDR",
                period: "2021 - 2022",
                industry: "Fintech",
                problem: "High lead volume but low conversion",
                solution: "Created qualification criteria and nurture sequences",
                results: ["120% quota attainment", "45% increase in qualified leads", "25% faster deal velocity"],
                tools: ["Pipedrive", "Apollo", "Calendly"]
              }
            ].map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden">
                  <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20">
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl">{job.company}</CardTitle>
                        <CardDescription className="text-lg">{job.role}</CardDescription>
                        <Badge variant="outline" className="mt-2">{job.industry}</Badge>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-muted-foreground">{job.period}</div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div>
                        <h4 className="font-semibold mb-2 text-red-600">Problem</h4>
                        <p className="text-sm text-muted-foreground">{job.problem}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 text-blue-600">My Solution</h4>
                        <p className="text-sm text-muted-foreground">{job.solution}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 text-green-600">Results</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          {job.results.map((result, idx) => (
                            <li key={idx} className="flex items-center gap-2">
                              <CheckCircle className="w-3 h-3 text-green-500" />
                              {result}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="mt-6 pt-4 border-t">
                      <h4 className="font-semibold mb-2">Tools Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {job.tools.map((tool, idx) => (
                          <Badge key={idx} variant="secondary">{tool}</Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section 
        id="projects" 
        className="py-20 bg-white dark:bg-slate-800"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Project Portfolio</h2>
            <p className="text-lg text-muted-foreground">Real impact across diverse B2B industries</p>
          </div>

          <Tabs value={selectedProject.toString()} onValueChange={(value) => setSelectedProject(parseInt(value))}>
            <TabsList className="grid w-full grid-cols-5 mb-8">
              {projects.map((project, index) => (
                <TabsTrigger key={project.id} value={index.toString()} className="flex flex-col items-center p-4">
                  <motion.div 
                    className={`w-10 h-10 rounded-full ${project.color} flex items-center justify-center text-white mb-2`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {project.icon}
                  </motion.div>
                  <span className="text-xs font-medium">{project.company}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            <AnimatePresence mode="wait">
              {projects.map((project, index) => (
                <TabsContent key={project.id} value={index.toString()}>
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card className="mb-8">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div>
                            <CardTitle className="text-2xl mb-2">{project.company}</CardTitle>
                            <CardDescription className="text-lg">{project.industry}</CardDescription>
                            <div className="flex items-center gap-4 mt-4">
                              <Badge variant="secondary">{project.role}</Badge>
                              <Badge variant="outline">{project.duration}</Badge>
                            </div>
                          </div>
                          <div className={`w-16 h-16 rounded-full ${project.color} flex items-center justify-center text-white`}>
                            {project.icon}
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-lg mb-6">{project.description}</p>
                        
                        {/* Before/After Comparison */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                          <motion.div 
                            className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg border border-red-200 dark:border-red-800"
                            whileHover={{ scale: 1.02 }}
                          >
                            <h4 className="font-semibold text-red-800 dark:text-red-200 mb-4 flex items-center">
                              <TrendingUp className="w-5 h-5 mr-2" />
                              Before I Joined
                            </h4>
                            <div className="space-y-3">
                              <div className="flex justify-between">
                                <span>Monthly Leads:</span>
                                <span className="font-semibold">{project.before.leads || 'N/A'}</span>
                              </div>
                              <div className="flex justify-between">
                                <span>Conversion Rate:</span>
                                <span className="font-semibold">{project.before.conversion}%</span>
                              </div>
                              <div className="flex justify-between">
                                <span>Sales Cycle:</span>
                                <span className="font-semibold">{project.before.cycle ? `${project.before.cycle} months` : 'N/A'}</span>
                              </div>
                            </div>
                          </motion.div>
                          
                          <motion.div 
                            className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border border-green-200 dark:border-green-800"
                            whileHover={{ scale: 1.02 }}
                          >
                            <h4 className="font-semibold text-green-800 dark:text-green-200 mb-4 flex items-center">
                              <Award className="w-5 h-5 mr-2" />
                              After My Implementation
                            </h4>
                            <div className="space-y-3">
                              <div className="flex justify-between">
                                <span>Monthly Leads:</span>
                                <span className="font-semibold text-green-600">{project.after.leads || 'N/A'}</span>
                              </div>
                              <div className="flex justify-between">
                                <span>Conversion Rate:</span>
                                <span className="font-semibold text-green-600">{project.after.conversion}%</span>
                              </div>
                              <div className="flex justify-between">
                                <span>Sales Cycle:</span>
                                <span className="font-semibold text-green-600">{project.after.cycle ? `${project.after.cycle} months` : 'N/A'}</span>
                              </div>
                            </div>
                          </motion.div>
                        </div>

                        {/* Project Gallery with Fake Images */}
                        <div className="mb-8">
                          <h4 className="font-semibold mb-4 flex items-center">
                            <Eye className="w-5 h-5 mr-2" />
                            Project Gallery
                          </h4>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {[
                              { type: 'CRM Dashboard', color: 'from-blue-400 to-blue-600' },
                              { type: 'Email Sequence', color: 'from-green-400 to-green-600' },
                              { type: 'Call Analytics', color: 'from-purple-400 to-purple-600' }
                            ].map((item, idx) => (
                              <motion.div 
                                key={idx}
                                className={`h-32 bg-gradient-to-br ${item.color} rounded-lg flex items-center justify-center text-white font-semibold shadow-lg`}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                              >
                                <div className="text-center">
                                  <PlayCircle className="w-8 h-8 mx-auto mb-2" />
                                  <p className="text-sm">{item.type}</p>
                                </div>
                              </motion.div>
                            ))}
                          </div>
                          <p className="text-sm text-muted-foreground mt-4">
                            * Simulated visuals for portfolio demonstration. Actual recordings and screenshots available upon request.
                          </p>
                        </div>

                        {/* Revenue Impact */}
                        <motion.div 
                          className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-lg mb-8"
                          whileHover={{ scale: 1.02 }}
                        >
                          <div className="flex items-center justify-between">
                            <div>
                              <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2 flex items-center">
                                <DollarSign className="w-5 h-5 mr-2" />
                                Revenue Impact
                              </h4>
                              <p className="text-sm text-green-700 dark:text-green-300">Direct contribution to closed-won revenue</p>
                            </div>
                            <div className="text-3xl font-bold text-green-600">
                              ${(project.revenue / 1000000).toFixed(1)}M
                            </div>
                          </div>
                        </motion.div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </TabsContent>
              ))}
            </AnimatePresence>
          </Tabs>
        </div>
      </motion.section>

      {/* Tools & Tech Stack Section */}
      <motion.section 
        id="tools"
        className="py-20 bg-slate-50 dark:bg-slate-900"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Tools & Tech Stack</h2>
            <p className="text-lg text-muted-foreground">Mastery across 15+ sales tools and platforms</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="text-2xl">{tool.logo}</div>
                      <div>
                        <CardTitle className="text-lg">{tool.name}</CardTitle>
                        <Badge variant="outline" className="text-xs">{tool.category}</Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{tool.usage}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Interactive Downloads Section */}
      <motion.section 
        className="py-20 bg-white dark:bg-slate-800"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Download Resources</h2>
            <p className="text-lg text-muted-foreground">Get my proven scripts, templates, and strategies</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Top 3 Winning Scripts",
                description: "My highest-converting cold call scripts with objection handling",
                icon: <Headphones className="w-8 h-8" />,
                color: "from-blue-500 to-blue-600"
              },
              {
                title: "Email Sequence Templates",
                description: "5-step nurture sequences that book meetings",
                icon: <Mail className="w-8 h-8" />,
                color: "from-green-500 to-green-600"
              },
              {
                title: "LinkedIn Outreach Playbook",
                description: "Connection messages and follow-ups that convert",
                icon: <Linkedin className="w-8 h-8" />,
                color: "from-purple-500 to-purple-600"
              }
            ].map((resource, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Card className="h-full cursor-pointer hover:shadow-xl transition-all">
                  <CardHeader className={`bg-gradient-to-r ${resource.color} text-white`}>
                    <div className="flex items-center gap-3">
                      {resource.icon}
                      <CardTitle className="text-lg">{resource.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <p className="text-muted-foreground mb-4">{resource.description}</p>
                    <Button className="w-full">
                      <Download className="w-4 h-4 mr-2" />
                      Download Now
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* SDR Scorecard Section */}
      <motion.section 
        className="py-20 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">SDR Scorecard</h2>
            <p className="text-lg text-muted-foreground">Compare my skills to your company's needs</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-center">Skills Assessment Matrix</CardTitle>
                <CardDescription className="text-center">
                  See how my expertise aligns with your requirements
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold mb-4">Core SDR Skills</h4>
                    <div className="space-y-3">
                      {skillsData.map((skill, index) => (
                        <div key={index} className="flex items-center justify-between">
                          <span className="text-sm">{skill.skill}</span>
                          <div className="flex items-center gap-2">
                            <Progress value={skill.score} className="w-20" />
                            <span className="text-sm font-semibold">{skill.score}%</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-4">Industry Experience</h4>
                    <div className="space-y-3">
                      {[
                        { industry: 'SaaS/Technology', experience: 'Expert' },
                        { industry: 'Financial Services', experience: 'Advanced' },
                        { industry: 'Healthcare IT', experience: 'Advanced' },
                        { industry: 'Real Estate', experience: 'Intermediate' },
                        { industry: 'Insurance', experience: 'Intermediate' },
                        { industry: 'Manufacturing', experience: 'Advanced' }
                      ].map((item, index) => (
                        <div key={index} className="flex items-center justify-between">
                          <span className="text-sm">{item.industry}</span>
                          <Badge variant={
                            item.experience === 'Expert' ? 'default' :
                            item.experience === 'Advanced' ? 'secondary' : 'outline'
                          }>
                            {item.experience}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="mt-8 text-center">
                  <Button 
                    size="lg" 
                    onClick={() => setShowScorecard(true)}
                    className="bg-gradient-to-r from-blue-500 to-purple-500 text-white"
                  >
                    <BarChart3 className="w-5 h-5 mr-2" />
                    View Full Scorecard
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section 
        className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-6 text-center">
          <motion.h2 
            className="text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Ready to Drive Similar Results?
          </motion.h2>
          <motion.p 
            className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Let's discuss how I can help your B2B company achieve exceptional sales growth. 
            I'm ready to start making an impact from day one.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
              <Calendar className="w-5 h-5 mr-2" />
              Schedule Interview
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              <Download className="w-5 h-5 mr-2" />
              Download Full Portfolio
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              <Linkedin className="w-5 h-5 mr-2" />
              Connect on LinkedIn
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="py-8 bg-slate-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <p className="text-slate-400">
            © 2024 Wanjuu Veronica Wambui - SDR/BDR Portfolio. Demonstrating proven B2B sales results across diverse industries.
          </p>
        </div>
      </footer>

      {/* AI Chatbot */}
      <AnimatePresence>
        {chatOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="fixed bottom-24 right-6 w-80 bg-white dark:bg-slate-800 rounded-lg shadow-2xl border z-50"
          >
            <div className="p-4 border-b bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-t-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Bot className="w-5 h-5" />
                  <span className="font-semibold">Ask Veronicah</span>
                </div>
                <button onClick={() => setChatOpen(false)}>
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
            <div className="h-64 overflow-y-auto p-4 space-y-3">
              {chatMessages.length === 0 && (
                <div className="text-center text-muted-foreground">
                  <p className="text-sm mb-3">Hi! I'm Veronicah's AI assistant. Ask me anything about her experience!</p>
                  <div className="space-y-2">
                    {faqData.slice(0, 3).map((faq, index) => (
                      <button
                        key={index}
                        onClick={() => handleChatMessage(faq.question)}
                        className="block w-full text-left text-xs p-2 bg-slate-50 dark:bg-slate-700 rounded hover:bg-slate-100 dark:hover:bg-slate-600"
                      >
                        {faq.question}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              {chatMessages.map((message, index) => (
                <div key={index} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] p-2 rounded-lg text-sm ${
                    message.type === 'user' 
                      ? 'bg-blue-500 text-white' 
                      : 'bg-slate-100 dark:bg-slate-700'
                  }`}>
                    {message.content}
                  </div>
                </div>
              ))}
            </div>
            <div className="p-4 border-t">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={currentMessage}
                  onChange={(e) => setCurrentMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && currentMessage && handleChatMessage(currentMessage)}
                  placeholder="Ask about tools, experience, etc..."
                  className="flex-1 px-3 py-2 border rounded-lg text-sm"
                />
                <Button 
                  size="sm" 
                  onClick={() => currentMessage && handleChatMessage(currentMessage)}
                  disabled={!currentMessage}
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Chat Button */}
      <motion.button
        onClick={() => setChatOpen(!chatOpen)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full shadow-lg flex items-center justify-center z-40"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{ 
          boxShadow: chatOpen ? "0 0 0 0 rgba(59, 130, 246, 0.7)" : "0 0 0 10px rgba(59, 130, 246, 0.7)"
        }}
        transition={{ 
          boxShadow: { duration: 1.5, repeat: Infinity, repeatType: "reverse" }
        }}
      >
        {chatOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </motion.button>
    </div>
  )
}

export default App

