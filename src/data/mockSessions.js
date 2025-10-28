export const mockSessions = [
  {
    id: 1,
    title: "How to Ace Your College Exams",
    description: "Learn effective study techniques, time management, and exam strategies from a senior who scored 9.5 GPA.",
    mentor: {
      name: "Sarah Johnson",
      year: "Final Year",
      department: "Computer Science",
      rating: 4.9,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612c93e?w=150&h=150&fit=crop&crop=face"
    },
    type: "online",
    date: "2025-11-05",
    time: "18:00",
    duration: "1.5 hours",
    category: "Academic",
    participants: 15,
    maxParticipants: 25,
    tags: ["study-tips", "time-management", "exams"],
    featured: true
  },
  {
    id: 2,
    title: "Networking 101: Building Professional Connections",
    description: "Master the art of networking, both online and offline. Learn how to build meaningful professional relationships.",
    mentor: {
      name: "Alex Chen",
      year: "Final Year",
      department: "Business Administration",
      rating: 4.8,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    type: "offline",
    date: "2025-11-08",
    time: "15:30",
    duration: "2 hours",
    category: "Career",
    participants: 8,
    maxParticipants: 15,
    location: "Room 304, Main Building",
    tags: ["networking", "career", "professional-development"],
    featured: true
  },
  {
    id: 3,
    title: "Internship Hunt: From Application to Offer",
    description: "Complete guide to landing your dream internship. Resume tips, interview preparation, and negotiation strategies.",
    mentor: {
      name: "Priya Sharma",
      year: "3rd Year",
      department: "Engineering",
      rating: 4.7,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    },
    type: "online",
    date: "2025-11-12",
    time: "19:00",
    duration: "2 hours",
    category: "Career",
    participants: 22,
    maxParticipants: 30,
    tags: ["internship", "resume", "interview"],
    featured: false
  },
  {
    id: 4,
    title: "Managing College Stress and Mental Health",
    description: "Learn practical techniques to manage academic pressure, maintain work-life balance, and prioritize mental wellness.",
    mentor: {
      name: "David Wilson",
      year: "Final Year",
      department: "Psychology",
      rating: 4.9,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    type: "online",
    date: "2025-11-15",
    time: "17:00",
    duration: "1 hour",
    category: "Wellness",
    participants: 18,
    maxParticipants: 20,
    tags: ["mental-health", "stress-management", "wellness"],
    featured: false
  },
  {
    id: 5,
    title: "Tech Skills Workshop: Git & GitHub Mastery",
    description: "Hands-on workshop covering version control, collaborative coding, and open source contributions.",
    mentor: {
      name: "Emily Rodriguez",
      year: "Final Year",
      department: "Computer Science",
      rating: 4.8,
      avatar: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop&crop=face"
    },
    type: "offline",
    date: "2025-11-20",
    time: "14:00",
    duration: "3 hours",
    category: "Technical",
    participants: 12,
    maxParticipants: 20,
    location: "Computer Lab 2",
    tags: ["git", "github", "programming", "workshop"],
    featured: true
  }
];

export const categories = [
  { id: "all", name: "All Sessions", count: 5 },
  { id: "academic", name: "Academic", count: 1 },
  { id: "career", name: "Career", count: 2 },
  { id: "technical", name: "Technical", count: 1 },
  { id: "wellness", name: "Wellness", count: 1 }
];