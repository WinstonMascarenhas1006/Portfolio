'use client'

import Link from 'next/link'
import { MotionDiv } from '@/lib/animation'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { 
  Quote, 
  User, 
  Building, 
  Calendar,
  Award,
  ThumbsUp,
  MessageCircle,
  Heart,
  CheckCircle,
  ArrowRight,
  ExternalLink,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Clock,
  Users,
  TrendingUp,
  Shield,
  ChevronDown,
  ChevronUp
} from 'lucide-react'
import { useState } from 'react'

// Testimonials data with keywords and shortened versions
const testimonialsData = {
  featured: [
    {
      id: 1,
      name: 'Asifue Iqbal',
      role: 'Lead',
      company: 'Brillio',
      photo: '/asifue.jpg',
      punchline: 'From fresher to invaluable team member in record time',
      shortTestimonial: 'Winston joined my team as a fresher and quickly proved himself to be an invaluable team member. His strong willingness to learn, adapt, and contribute effectively made a significant impact on our projects.',
      fullTestimonial: 'I had the pleasure of working with Winston Mascarenhas, who joined my team as a fresher and quickly proved himself to be an invaluable team member. From the very beginning, Winston demonstrated a strong willingness to learn, adapt, and contribute effectively. His dedication, problem-solving skills, and collaborative approach made a significant impact on our projects. Winston\'s ability to grasp complex concepts and apply them efficiently set him apart. He consistently displayed a proactive attitude, took ownership of tasks, and delivered high-quality work. His positive energy and teamwork made him a joy to work with, fostering a productive and supportive environment within the team. I have no doubt that Winston will continue to excel in his future endeavors, and I wholeheartedly recommend him to any organization seeking a talented and dedicated professional. Wishing him all the best for a successful career ahead!',
      project: 'Team Leadership & Development',
      duration: 'Brillio',
      verified: true,
      linkedin: 'https://in.linkedin.com/in/asifueiqbal',
      date: 'February 5, 2025',
      keywords: ['Team Leadership', 'Fast Learner', 'Problem-Solving', 'Highly Recommended']
    },
    {
      id: 2,
      name: 'Charles Bruno',
      role: 'Team Lead - IT Operations',
      company: 'Brillio',
      photo: '/charles.jpg',
      punchline: 'One of the Best Engineers I\'ve ever worked with',
      shortTestimonial: 'Winston consistently delivers high-quality work under pressure with creative solutions. His ability to think outside the box and approach problems from different perspectives has been invaluable.',
      fullTestimonial: 'If you\'re looking for someone who can consistently deliver high-quality work under pressure, look no further than Winston. He has a real talent for thinking outside the box and coming up with creative solutions to problems. His ability to approach things from a different perspective has been invaluable to our team. He easily adjusts to any given situation or business dynamics. But what makes him stand out is his flexibility willingness to help when needed. He was one of the Best Engineer i had. He is a Valuable Asset and is Highly Recommended.',
      project: 'IT Operations Leadership',
      duration: 'Brillio',
      verified: true,
      linkedin: 'https://in.linkedin.com/in/charles-bruno-01722645',
      date: 'February 5, 2025',
      keywords: ['Best Engineer', 'Creative Solutions', 'High-Quality Work', 'Valuable Asset']
    },
    {
      id: 3,
      name: 'Cindrella Anthony',
      role: 'IT Service Manager',
      company: 'Brillio',
      photo: '/cindrella.jpg',
      punchline: 'Deep technical knowledge with a calm, steady approach',
      shortTestimonial: 'Winston brings both deep technical knowledge and a calm, steady approach to everything he does. He was consistently reliable during high-pressure situations and handled critical issues with confidence.',
      fullTestimonial: 'I had the pleasure of working closely with Winston Mscarenhas during his time as a Senior Digital Infrastructure Engineer at Brillio. He\'s someone who brings both deep technical knowledge and a calm, steady approach to everything he does. Winston was consistently reliable, especially during high-pressure situations. He handled critical issues with confidence and clarity, and always made sure tasks were followed through with full ownership. He also collaborated effortlessly with other teams, making complex work feel smooth and efficient. What I appreciated most was his grounded nature and willingness to support others. He was always approachable, ready to help and patient when explaining technical matters. That made working with him not only productive but genuinely enjoyable. Winston is a strong asset to any team and I\'m confident he\'ll continue to do great wherever he goes.',
      project: 'Senior Digital Infrastructure Engineer',
      duration: 'Brillio',
      verified: true,
      linkedin: 'https://in.linkedin.com/in/cindrella-anthony',
      date: 'July 8, 2025',
      keywords: ['Technical Expertise', 'Reliable', 'High-Pressure', 'Team Collaboration']
    },
    {
      id: 4,
      name: 'Harshitha R.',
      role: 'IT Technician',
      company: 'New Relic',
      photo: '/harshitha.jpg',
      punchline: 'Relentless curiosity and drive to learn',
      shortTestimonial: 'Winston distinguished himself with his relentless curiosity and drive to learn. His dedication, work ethic, and consistent overachievement quickly set him apart among his peers.',
      fullTestimonial: 'Winston truly distinguished himself with his relentless curiosity and drive to learn. His dedication, work ethic, and consistent overachievement quickly set him apart among his peers. Beyond his professional strengths, he brought a vibrant energy to every interaction—always fun to be around and someone who naturally uplifted the team spirit. I\'ve had the privilege of watching him grow into an exceptional individual who embraces feedback with a positive attitude and a genuine desire to improve. It\'s been a pleasure working alongside him, and I sincerely hope our paths cross again soon. I have no doubt he\'ll continue to shine in whatever he takes on next.',
      project: 'Team Collaboration',
      duration: 'New Relic',
      verified: true,
      linkedin: 'https://in.linkedin.com/in/harshitha-r-933165193',
      date: 'July 4, 2025',
      keywords: ['Curiosity', 'Drive to Learn', 'Overachiever', 'Team Spirit']
    }
  ],
  recent: [
    {
      id: 5,
      name: 'Konduru Harish',
      role: 'Senior Engineer',
      company: 'Brillio',
      photo: '/harish.jpg',
      punchline: 'Strategic thinking with attention to detail',
      shortTestimonial: 'Winston possesses a rare combination of strategic thinking and attention to detail. He consistently demonstrates strong problem-solving abilities and shows great initiative.',
      fullTestimonial: 'I had the pleasure of working with Winston and was consistently impressed by his professionalism, dedication, and collaborative mindset. Winston possesses a rare combination of strategic thinking and attention to detail, which allows him to approach challenges with both creativity and precision. He is an excellent communicator, always clear and thoughtful in his approach, and consistently demonstrates strong problem-solving abilities. Winston also shows great initiative—he does not wait for direction but proactively seeks ways to add value and improve processes. One of Winston\'s standout qualities is his reliability; he consistently delivers high-quality work within deadlines and maintains a calm, solutions-oriented attitude even under pressure. He is also a team player who fosters a positive work environment and is always willing to support others. Winston would be a valuable asset to any team, and I confidently recommend him to any organization seeking a capable and committed professional.',
      project: 'IT Operations',
      duration: 'Brillio',
      verified: true,
      linkedin: 'https://in.linkedin.com/in/konduru-harish-906aa821b',
      date: 'May 5, 2025',
      keywords: ['Strategic Thinking', 'Attention to Detail', 'Initiative', 'Reliable']
    },
    {
      id: 6,
      name: 'Jenfer Rithika',
      role: 'Infra Transformation Analyst',
      company: 'Accenture',
      photo: '/jenfer.jpg',
      punchline: 'Quick learner with strong problem-solving skills',
      shortTestimonial: 'From day one, Winston impressed me with his dedication and willingness to take on challenges. His ability to grasp complex concepts quickly made him an invaluable team member.',
      fullTestimonial: 'I had the pleasure of working with Winston at Brillio, where he was my junior colleague. From day one, he impressed me with his dedication, enthusiasm, and willingness to take on challenges. His ability to grasp complex concepts quickly and his eagerness to learn made him an invaluable team member. Winston consistently demonstrated strong problem-solving skills and a proactive approach to his work. Whether it was collaborating with the team or taking ownership of tasks, he always delivered with professionalism and efficiency. His positive attitude and strong work ethic made him a great asset to our team. I have no doubt that Winston will continue to excel in his career, and I highly recommend him to any organization looking for a talented and motivated professional.',
      project: 'Infrastructure Transformation',
      duration: 'Brillio',
      verified: true,
      linkedin: 'https://in.linkedin.com/in/jenfer-rithika-600283241',
      date: 'March 14, 2025',
      keywords: ['Quick Learner', 'Problem-Solving', 'Proactive', 'Professional']
    },
    {
      id: 7,
      name: 'Sharmila S.',
      role: 'Software Developer',
      company: 'Brillio',
      photo: '/sharmila.jpg',
      punchline: 'Best Employee Awards for 4 consecutive months',
      shortTestimonial: 'Winston received "Best Employee Awards" for 4 consecutive months in customer success, innovation, and learning. He excels not just in the type of work but also in its delivery.',
      fullTestimonial: 'Winston is a passionate and hardworking person who stays steady towards goals. I was inspired by his dedication to work and his ability to bring an enthusiastic environment to colleagues. He provides quality service as an engineer with fluent accent, timely resolutions, patience in handling critical issues, and meticulous documentation. He received "Best Employee Awards" for 4 consecutive months in customer success, innovation, and learning. He excels not just in the type of work but also in its delivery. He keeps pace with new technologies, adapts to corporate changes, and implements them, making him an exceptional employee. He is a keen listener who acts immediately to ease critical situations for clients and team members. His willingness to never give up is a key skill, irrespective of challenges. These qualities make him a best fit for any organization. He works not just towards personal but also professional goals, viewing his first job as a stepping stone for his career. I highly recommend him as a highly motivated and results-driven professional who consistently demonstrates initiative, dedication, and a strong commitment to excellence in every task undertaken.',
      project: 'Software Development & Customer Success',
      duration: 'Brillio',
      verified: true,
      linkedin: 'https://in.linkedin.com/in/sharmila-s-a8a6081b6',
      date: 'May 27, 2025',
      keywords: ['Best Employee', 'Award Winner', 'Innovation', 'Results-Driven']
    }
  ]
}

const stats = [
  { label: 'Happy Clients', value: '50+', icon: Heart },
  { label: 'Projects Completed', value: '75+', icon: CheckCircle },
  { label: 'Years Experience', value: '5+', icon: Clock }
]

export default function TestimonialsPage() {
  const [expandedCards, setExpandedCards] = useState<Set<number>>(new Set())

  // Function to toggle card expansion state
  const toggleCard = (id: number) => {
    const newExpanded = new Set(expandedCards)
    if (newExpanded.has(id)) {
      newExpanded.delete(id)
    } else {
      newExpanded.add(id)
    }
    setExpandedCards(newExpanded)
  }

  const TestimonialCard = ({ testimonial, index }: { testimonial: any; index: number }) => {
    const isExpanded = expandedCards.has(testimonial.id)
    
    return (
      <MotionDiv
        key={testimonial.id}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
      >
        {/* Testimonial Card with expandable functionality */}
        <Card className={`relative bg-white/10 backdrop-blur-sm border border-white/10 shadow-lg hover:shadow-xl transition-all duration-300 group flex flex-col ${isExpanded ? 'max-h-[800px] overflow-y-auto' : 'min-h-[500px] max-h-[600px]'}`}>
          {/* Quote Symbol on Border */}
          <div className="absolute -top-3 -left-3 w-12 h-12 bg-gradient-to-br from-[#FF8C42] to-[#FF5E78] rounded-full flex items-center justify-center shadow-lg">
            <Quote className="w-6 h-6 text-white font-bold" />
          </div>
          
          <CardHeader className="pb-4 pt-6 flex-1">
            {/* Verified Badge */}
            <div className="flex justify-end mb-4">
              {testimonial.verified && (
                <Badge variant="outline" className="text-green-400 border-green-400">
                  <CheckCircle className="w-3 h-3 mr-1" />
                  Verified
                </Badge>
              )}
            </div>

            {/* Punchline */}
            <CardTitle className="text-lg font-bold text-white mb-3 leading-tight">
              &quot;{testimonial.punchline}&quot;
            </CardTitle>

            {/* Testimonial Text */}
            <div className="mb-4 flex-1">
              {isExpanded ? (
                <p className="text-[#E0E0E0] text-sm leading-relaxed">
                  {testimonial.fullTestimonial}
                </p>
              ) : (
                <p className="text-[#E0E0E0] text-sm leading-relaxed line-clamp-4">
                  {testimonial.shortTestimonial}
                </p>
              )}
            </div>

            {/* Keywords Badges */}
            <div className="flex flex-wrap gap-2 mb-4">
              {testimonial.keywords.slice(0, 3).map((keyword: string, idx: number) => (
                <Badge 
                  key={idx} 
                  variant="secondary" 
                  className="text-xs bg-white/10 text-[#A5E9FF] border-white/20 hover:bg-white/20 transition-colors"
                >
                  {keyword}
                </Badge>
              ))}
            </div>

            {/* Author Info */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden border-2 border-white/20">
                  {testimonial.photo ? (
                    <img 
                      src={testimonial.photo} 
                      alt={testimonial.name}
                      className="w-full h-full object-cover object-center"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-white/20 to-white/10 rounded-full flex items-center justify-center">
                      <User className="w-6 h-6 text-white" />
                    </div>
                  )}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-sm font-semibold text-white truncate">{testimonial.name}</div>
                  <div className="text-xs text-[#A5E9FF] truncate">{testimonial.role} at {testimonial.company}</div>
                  <div className="text-xs text-[#E0E0E0]">{testimonial.date}</div>
                </div>
              </div>
            </div>
          </CardHeader>

          <CardContent className="pt-0 mt-auto">
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                className="flex-1 text-white border-white/20 hover:bg-white/10 text-xs"
                onClick={() => toggleCard(testimonial.id)}
              >
                {isExpanded ? (
                  <>
                    <ChevronUp className="w-3 h-3 mr-1" />
                    Show Less
                  </>
                ) : (
                  <>
                    <ChevronDown className="w-3 h-3 mr-1" />
                    Read More
                  </>
                )}
              </Button>
              {testimonial.linkedin && (
                <Button
                  variant="outline"
                  size="sm"
                  className="text-white border-white/20 hover:bg-white/10 text-xs"
                  asChild
                >
                  <a href={testimonial.linkedin} target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-3 h-3" />
                  </a>
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </MotionDiv>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1E293B] via-[#0F172A] to-[#1E1B4B]">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1E293B] via-[#0F172A] to-[#1E1B4B] text-white">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative container mx-auto px-4 py-24">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <MotionDiv
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6"
            >
              <Quote className="w-10 h-10" />
            </MotionDiv>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-display">
              Client <span className="bg-gradient-to-r from-[#FF8C42] to-[#FF5E78] bg-clip-text text-transparent">Testimonials</span>
            </h1>
            <p className="text-xl md:text-2xl text-[#E0E0E0] mb-8 font-body text-center">
              Real feedback from clients who have experienced the quality and dedication I bring to every project
            </p>
          </MotionDiv>
        </div>
        
        {/* Animated background elements */}
        <MotionDiv
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-10 w-32 h-32 bg-soft-peach/10 rounded-full blur-xl"
        />
        <MotionDiv
          animate={{ 
            y: [0, 20, 0],
            rotate: [0, -5, 0]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-20 right-10 w-40 h-40 bg-powder-blue/10 rounded-full blur-xl"
        />
      </section>

      {/* Featured Testimonials */}
      <section className="py-20">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4 font-display">
                Featured Testimonials
              </h2>
              <p className="text-xl text-[#E0E0E0] max-w-3xl mx-auto text-center">
                Highlighted feedback from key clients and successful projects
              </p>
            </MotionDiv>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
              {testimonialsData.featured.map((testimonial, index) => (
                <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Recent Testimonials */}
      <section className="py-20 bg-white/5 backdrop-blur-sm">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4 font-display">
                Recent Feedback
              </h2>
              <p className="text-xl text-[#E0E0E0] max-w-3xl mx-auto text-center">
                Latest testimonials from recent projects and collaborations
              </p>
            </MotionDiv>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
              {testimonialsData.recent.map((testimonial, index) => (
                <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#1E1B4B] via-[#0F172A] to-[#1E293B] text-white">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">
                Ready to Join My Success Stories?
              </h2>
              <p className="text-xl text-[#E0E0E0] mb-8 max-w-2xl mx-auto">
                Let's work together to create your next success story. I'm ready to bring the same 
                dedication and expertise to your project.
              </p>
              <div className="flex justify-center">
                <Link href="/contact">
                  <Button size="lg" variant="secondary" className="bg-gradient-to-r from-[#FF8C42] to-[#FF5E78] text-white hover:from-[#FF8C42]/90 hover:to-[#FF5E78]/90">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Start a Project
                  </Button>
                </Link>
              </div>
            </MotionDiv>
          </div>
        </div>
      </section>
    </div>
  )
}
