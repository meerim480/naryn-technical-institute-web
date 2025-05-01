import Link from "next/link"
import { ArrowRight, BookOpen, GraduationCap, Users, CheckCircle, Beaker, Handshake, CalendarDays } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-slate-100 px-3 py-1 text-sm text-slate-600">
                Excellence in Technical Education
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
                Naryn Technical Institute
              </h1>
              <p className="max-w-[600px] text-slate-700 md:text-xl">
                Empowering the next generation of technical professionals through innovative education, practical
                training, and industry partnerships.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild>
                  <Link href="/admissions">
                    Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/about">Learn More</Link>
                </Button>
              </div>
            </div>
            <div className="flex flex-col space-y-4 bg-white p-6 rounded-lg shadow-sm border">
              <div className="bg-slate-100 p-4 rounded-lg">
                <h3 className="font-medium text-lg mb-2">Key Facts</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Established in 2005</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Over 1,200 students enrolled</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>12 technical programs</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>92% graduate employment rate</span>
                  </li>
                </ul>
              </div>
              <div className="bg-slate-50 p-4 rounded-lg">
                <h3 className="font-medium text-lg mb-2">Upcoming Events</h3>
                <p className="text-sm text-slate-700 mb-2">Technical Symposium: June 10-12, 2025</p>
                <p className="text-sm text-slate-700">Fall Semester Application Deadline: May 1, 2025</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Mission</h2>
              <p className="max-w-[900px] text-slate-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                At Naryn Technical Institute, we are dedicated to providing high-quality technical education that
                prepares students for successful careers in engineering, technology, and applied sciences. Our
                commitment to excellence, innovation, and practical learning sets us apart as a leading technical
                education institution.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Academic Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-slate-100 p-2">
                    <BookOpen className="h-6 w-6 text-slate-700" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-slate-700">
                      Rigorous curriculum designed in collaboration with industry experts to ensure relevance and
                      quality.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Practical Training</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-slate-100 p-2">
                    <GraduationCap className="h-6 w-6 text-slate-700" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-slate-700">
                      Hands-on learning experiences through state-of-the-art laboratories and industry internships.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Community Engagement</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-slate-100 p-2">
                    <Users className="h-6 w-6 text-slate-700" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-slate-700">
                      Strong partnerships with local and international organizations to address community needs.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured News Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Latest News</h2>
              <p className="max-w-[600px] text-slate-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Stay updated with the latest events and announcements from Naryn Technical Institute.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "New Engineering Lab Opened",
                date: "May 1, 2025",
                description:
                  "State-of-the-art engineering laboratory opened to enhance practical learning experiences.",
                icon: <Beaker className="h-8 w-8 text-white" />,
                color: "bg-blue-600",
              },
              {
                title: "Industry Partnership Announced",
                date: "April 25, 2025",
                description:
                  "New partnership with leading tech companies to provide internship opportunities for students.",
                icon: <Handshake className="h-8 w-8 text-white" />,
                color: "bg-green-600",
              },
              {
                title: "Annual Technical Symposium",
                date: "April 15, 2025",
                description:
                  "Registration now open for our annual technical symposium featuring guest speakers from industry.",
                icon: <CalendarDays className="h-8 w-8 text-white" />,
                color: "bg-amber-600",
              },
            ].map((news, index) => (
              <Card key={index} className="overflow-hidden">
                <div className={`w-full h-48 ${news.color} flex items-center justify-center`}>{news.icon}</div>
                <CardHeader>
                  <CardTitle>{news.title}</CardTitle>
                  <CardDescription>{news.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-700">{news.description}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="link" asChild className="px-0">
                    <Link href="/news">Read More</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          <div className="flex justify-center">
            <Button variant="outline" asChild>
              <Link href="/news">View All News</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Programs</h2>
              <p className="max-w-[600px] text-slate-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Discover our diverse range of technical programs designed to prepare you for success.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2">
            {[
              {
                title: "Electrical Engineering",
                description: "Learn about power systems, electronics, and electrical design principles.",
              },
              {
                title: "Mechanical Engineering",
                description: "Study mechanics, thermodynamics, and manufacturing processes.",
              },
              {
                title: "Computer Science",
                description: "Explore programming, algorithms, and software development methodologies.",
              },
              {
                title: "Civil Engineering",
                description: "Focus on structural design, construction management, and environmental engineering.",
              },
            ].map((program, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{program.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-700">{program.description}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm">
                    Learn More
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          <div className="flex justify-center">
            <Button asChild>
              <Link href="/admissions">Apply Now</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
