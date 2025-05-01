import Link from "next/link"
import { Calendar, ChevronLeft, Quote, Info } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

// Add this line to specify the Edge Runtime
export const runtime = "edge"

// This would typically be fetched from a database or CMS
const getNewsItem = (id: string) => {
  const newsItems = [
    {
      id: "1",
      title: "New Engineering Lab Opened",
      date: "May 1, 2025",
      content: `
        <p>The Naryn Technical Institute is proud to announce the opening of our new state-of-the-art engineering laboratory. This facility is equipped with the latest technology and equipment to provide our students with hands-on experience in various engineering disciplines.</p>
        
        <p>The lab will support courses in mechanical engineering, electrical engineering, and robotics. It features advanced testing equipment, 3D printers, CNC machines, and a dedicated space for student projects.</p>
        
        <p>"This new laboratory represents our commitment to providing students with practical, hands-on learning experiences," said Dr. Aibek Karimov, Dean of Engineering. "By working with the same tools and technologies used in industry, our students will be better prepared for their future careers."</p>
        
        <p>The lab was made possible through generous donations from alumni and industry partners who recognize the importance of practical education in technical fields.</p>
        
        <p>Students enrolled in engineering programs will begin using the new facility immediately, with special workshops and training sessions scheduled throughout the semester to familiarize them with the equipment.</p>
      `,
    },
    {
      id: "2",
      title: "Industry Partnership Announced",
      date: "April 25, 2025",
      content: `
        <p>We are excited to announce a new partnership with several leading technology companies that will provide valuable internship opportunities for our students. This collaboration will allow our students to gain real-world experience and apply their knowledge in professional settings.</p>
        
        <p>The partnership includes companies such as TechSolutions, Global Engineering, and Innovative Systems, all of which are leaders in their respective fields. These companies will offer internships, mentorship programs, and potential employment opportunities for our graduates.</p>
        
        <p>"This partnership bridges the gap between academic learning and industry practice," said Meerim Asanova, Director of Career Services. "Our students will benefit from exposure to real-world challenges and the opportunity to build professional networks before graduation."</p>
        
        <p>As part of the partnership, industry professionals will also participate in guest lectures, workshops, and curriculum development to ensure our programs remain aligned with industry needs.</p>
        
        <p>The first cohort of interns will begin their placements in the upcoming summer semester. Interested students should contact the Career Services office for more information about the application process.</p>
      `,
    },
    {
      id: "3",
      title: "Annual Technical Symposium",
      date: "April 15, 2025",
      content: `
        <p>Registration is now open for our annual Technical Symposium, which will take place on June 10-12, 2025. The event will feature keynote speeches, workshops, and panel discussions on emerging technologies and industry trends.</p>
        
        <p>This year's theme is "Innovation for Sustainable Development," focusing on how technical solutions can address environmental and social challenges. The symposium will bring together students, faculty, industry professionals, and researchers to share ideas and collaborate on projects.</p>
        
        <p>Keynote speakers include Dr. Elena Kim, a renowned expert in renewable energy systems, and Mr. Nurlan Baktybekov, CEO of a leading sustainable technology company. The event will also feature student project presentations, a job fair, and networking opportunities.</p>
        
        <p>"The Technical Symposium is one of our most anticipated events of the year," said Dr. Talant Asanov, Institute Director. "It provides a platform for our students to showcase their work and learn from experts in their fields."</p>
        
        <p>Early bird registration is available until May 15. Students, faculty, and alumni can register at a discounted rate. For more information and to register, visit the symposium website or contact the event organizing committee.</p>
      `,
    },
  ]

  return newsItems.find((item) => item.id === id) || newsItems[0]
}

export default function NewsItemPage({ params }: { params: { id: string } }) {
  const newsItem = getNewsItem(params.id)

  return (
    <div className="flex flex-col min-h-screen">
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <Button variant="ghost" className="mb-6 flex items-center" asChild>
            <Link href="/news">
              <ChevronLeft className="mr-1 h-4 w-4" />
              Back to News
            </Link>
          </Button>

          <div className="mx-auto max-w-3xl">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">{newsItem.title}</h1>

            <div className="flex items-center gap-2 text-slate-600 mb-6">
              <Calendar className="h-4 w-4" />
              <span>{newsItem.date}</span>
            </div>

            <div className="w-full h-[300px] md:h-[400px] mb-8 bg-slate-100 rounded-lg flex flex-col items-center justify-center p-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border max-w-2xl w-full">
                <h2 className="text-2xl font-bold mb-4">Article Highlights</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Quote className="h-5 w-5 text-slate-700 mt-1" />
                    <p className="text-slate-700 italic">
                      {newsItem.title === "New Engineering Lab Opened"
                        ? "This new laboratory represents our commitment to providing students with practical, hands-on learning experiences."
                        : newsItem.title === "Industry Partnership Announced"
                          ? "This partnership bridges the gap between academic learning and industry practice."
                          : "The Technical Symposium is one of our most anticipated events of the year."}
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Info className="h-5 w-5 text-slate-700 mt-1" />
                    <p className="text-slate-700">
                      {newsItem.title === "New Engineering Lab Opened"
                        ? "The lab features advanced testing equipment, 3D printers, and CNC machines."
                        : newsItem.title === "Industry Partnership Announced"
                          ? "Partner companies include TechSolutions, Global Engineering, and Innovative Systems."
                          : "This year's theme is 'Innovation for Sustainable Development.'"}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <Card>
              <CardContent className="pt-6">
                <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: newsItem.content }} />
              </CardContent>
            </Card>

            <div className="mt-8 flex justify-between">
              <Button variant="outline" asChild>
                <Link href="/news">Back to News</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/">Share</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
