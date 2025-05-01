import Link from "next/link"
import { Calendar, ChevronRight, Beaker, Handshake, CalendarDays, GraduationCap, Award, BookOpen } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

export default function NewsPage() {
  // Sample news data - in a real application, this would come from a database or CMS
  const newsItems = [
    {
      id: 1,
      title: "New Engineering Lab Opened",
      date: "May 1, 2025",
      excerpt:
        "State-of-the-art engineering laboratory opened to enhance practical learning experiences for students in mechanical and electrical engineering programs.",
      content:
        "The Naryn Technical Institute is proud to announce the opening of our new state-of-the-art engineering laboratory. This facility is equipped with the latest technology and equipment to provide our students with hands-on experience in various engineering disciplines. The lab will support courses in mechanical engineering, electrical engineering, and robotics.",
    },
    {
      id: 2,
      title: "Industry Partnership Announced",
      date: "April 25, 2025",
      excerpt:
        "New partnership with leading tech companies to provide internship opportunities for students in computer science and information technology programs.",
      content:
        "We are excited to announce a new partnership with several leading technology companies that will provide valuable internship opportunities for our students. This collaboration will allow our students to gain real-world experience and apply their knowledge in professional settings.",
    },
    {
      id: 3,
      title: "Annual Technical Symposium",
      date: "April 15, 2025",
      excerpt:
        "Registration now open for our annual technical symposium featuring guest speakers from industry and academia presenting on cutting-edge technologies.",
      content:
        "Registration is now open for our annual Technical Symposium, which will take place on June 10-12, 2025. The event will feature keynote speeches, workshops, and panel discussions on emerging technologies and industry trends. Students will have the opportunity to present their projects and network with industry professionals.",
    },
    {
      id: 4,
      title: "Student Team Wins National Competition",
      date: "April 5, 2025",
      excerpt:
        "A team of students from the Robotics Club won first place in the National Robotics Competition, showcasing their innovative design and programming skills.",
      content:
        "We are proud to announce that our Robotics Club team has won first place in the National Robotics Competition. The team's innovative robot design and advanced programming impressed the judges and outperformed competitors from universities across the country.",
    },
    {
      id: 5,
      title: "New Scholarship Program Launched",
      date: "March 28, 2025",
      excerpt:
        "Naryn Technical Institute launches a new scholarship program to support talented students from underrepresented backgrounds in technical fields.",
      content:
        "We are pleased to announce the launch of our new scholarship program aimed at supporting talented students from underrepresented backgrounds in technical fields. The program will provide financial assistance, mentoring, and additional resources to help these students succeed in their academic and professional journeys.",
    },
    {
      id: 6,
      title: "Faculty Research Published in International Journal",
      date: "March 15, 2025",
      excerpt:
        "Research conducted by our faculty members on sustainable energy solutions has been published in a prestigious international journal.",
      content:
        "We are proud to announce that research conducted by our faculty members on sustainable energy solutions has been published in the International Journal of Renewable Energy. This recognition highlights the quality and relevance of the research being conducted at our institute.",
    },
  ]

  // Helper functions to generate consistent colors and icons based on item ID
  const getColorForIndex = (id: number) => {
    const colors = ["bg-blue-600", "bg-green-600", "bg-amber-600", "bg-purple-600", "bg-rose-600", "bg-cyan-600"]
    return colors[(id - 1) % colors.length]
  }

  const getIconForIndex = (id: number) => {
    const icons = [
      <Beaker key="1" className="h-8 w-8 text-white" />,
      <Handshake key="2" className="h-8 w-8 text-white" />,
      <CalendarDays key="3" className="h-8 w-8 text-white" />,
      <GraduationCap key="4" className="h-8 w-8 text-white" />,
      <Award key="5" className="h-8 w-8 text-white" />,
      <BookOpen key="6" className="h-8 w-8 text-white" />,
    ]
    return icons[(id - 1) % icons.length]
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 bg-slate-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">News & Announcements</h1>
              <p className="max-w-[700px] text-slate-700 md:text-xl/relaxed">
                Stay updated with the latest events, achievements, and announcements from Naryn Technical Institute.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {newsItems.map((item) => (
              <Card key={item.id} className="overflow-hidden flex flex-col">
                <div className={`h-48 ${getColorForIndex(item.id)} flex items-center justify-center`}>
                  {getIconForIndex(item.id)}
                </div>
                <CardHeader className="flex-1">
                  <CardTitle className="line-clamp-2">{item.title}</CardTitle>
                  <CardDescription className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{item.date}</span>
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-sm text-slate-700 line-clamp-3">{item.excerpt}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="link" className="px-0 flex items-center" asChild>
                    <Link href={`/news/${item.id}`}>
                      Read More <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-12 flex justify-center">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive>
                    1
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>
      </section>
    </div>
  )
}
