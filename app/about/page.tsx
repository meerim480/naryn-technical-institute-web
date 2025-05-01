import Link from "next/link"
import { Building, Mail, MapPin, Phone, CheckCircle, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 bg-slate-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Us</h1>
              <p className="max-w-[600px] text-slate-700 md:text-xl">
                Naryn Technical Institute is a leading institution dedicated to providing high-quality technical
                education and fostering innovation in engineering, technology, and applied sciences.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="flex flex-col space-y-4 bg-white p-6 rounded-lg shadow-sm border">
                <div className="bg-slate-100 p-4 rounded-lg">
                  <h3 className="font-medium text-lg mb-2">Our Values</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>Excellence in education and research</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>Innovation and practical application</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>Integrity and ethical leadership</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>Community engagement and service</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-slate-50 p-4 rounded-lg">
                  <h3 className="font-medium text-lg mb-2">Recognition</h3>
                  <p className="text-sm text-slate-700">
                    Naryn Technical Institute is accredited by the National Accreditation Council and recognized by
                    international educational bodies for its excellence in technical education.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-2 md:gap-12">
            <Card>
              <CardHeader>
                <CardTitle>Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700">
                  To provide high-quality technical education that prepares students for successful careers in
                  engineering, technology, and applied sciences. We are committed to fostering innovation, critical
                  thinking, and practical skills through a combination of rigorous academic programs and hands-on
                  learning experiences.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700">
                  To be a leading technical institute recognized for excellence in education, research, and innovation.
                  We aim to produce graduates who are not only technically proficient but also ethical leaders capable
                  of addressing complex challenges and contributing to the sustainable development of their communities
                  and beyond.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Faculty and Staff */}
      <section className="w-full py-12 md:py-24 bg-slate-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Faculty</h2>
              <p className="max-w-[700px] text-slate-700 md:text-xl/relaxed">
                Meet our dedicated team of experienced educators and researchers.
              </p>
            </div>
          </div>
          <Tabs defaultValue="leadership" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3">
              <TabsTrigger value="leadership">Leadership</TabsTrigger>
              <TabsTrigger value="engineering">Engineering</TabsTrigger>
              <TabsTrigger value="computing">Computing</TabsTrigger>
            </TabsList>
            <TabsContent value="leadership" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    name: "Dr. Talant Asanov",
                    title: "Institute Director",
                    bio: "Ph.D. in Mechanical Engineering with over 20 years of experience in academia and industry.",
                  },
                  {
                    name: "Dr. Aibek Karimov",
                    title: "Dean of Engineering",
                    bio: "Ph.D. in Electrical Engineering, specializing in power systems and renewable energy.",
                  },
                  {
                    name: "Dr. Meerim Asanova",
                    title: "Dean of Computing Sciences",
                    bio: "Ph.D. in Computer Science with expertise in artificial intelligence and data science.",
                  },
                ].map((faculty, index) => (
                  <Card key={index} className="overflow-hidden">
                    <div className="aspect-square bg-slate-100 flex flex-col items-center justify-center p-4">
                      <div className="rounded-full bg-white p-4 mb-4">
                        <User className="h-12 w-12 text-slate-700" />
                      </div>
                      <div className="text-center">
                        <span className="text-sm text-slate-500">Faculty since 2010</span>
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle>{faculty.name}</CardTitle>
                      <CardDescription>{faculty.title}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-slate-700">{faculty.bio}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="engineering" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    name: "Prof. Nurlan Baktybekov",
                    title: "Professor of Mechanical Engineering",
                    bio: "Specializes in thermodynamics and fluid mechanics with industry experience in energy systems.",
                  },
                  {
                    name: "Dr. Ainura Sultanbekova",
                    title: "Associate Professor of Electrical Engineering",
                    bio: "Research focuses on power electronics and smart grid technologies.",
                  },
                  {
                    name: "Dr. Azamat Tursunov",
                    title: "Assistant Professor of Civil Engineering",
                    bio: "Expertise in structural engineering and sustainable construction methods.",
                  },
                ].map((faculty, index) => (
                  <Card key={index} className="overflow-hidden">
                    <div className="aspect-square bg-slate-100 flex flex-col items-center justify-center p-4">
                      <div className="rounded-full bg-white p-4 mb-4">
                        <User className="h-12 w-12 text-slate-700" />
                      </div>
                      <div className="text-center">
                        <span className="text-sm text-slate-500">Faculty since 2010</span>
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle>{faculty.name}</CardTitle>
                      <CardDescription>{faculty.title}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-slate-700">{faculty.bio}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="computing" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    name: "Dr. Ermek Bakirov",
                    title: "Professor of Computer Science",
                    bio: "Specializes in algorithms and computational complexity with applications in optimization.",
                  },
                  {
                    name: "Dr. Gulnara Ismailova",
                    title: "Associate Professor of Software Engineering",
                    bio: "Research interests include software architecture, testing, and quality assurance.",
                  },
                  {
                    name: "Dr. Dastan Orozov",
                    title: "Assistant Professor of Data Science",
                    bio: "Works on machine learning algorithms and their applications in various domains.",
                  },
                ].map((faculty, index) => (
                  <Card key={index} className="overflow-hidden">
                    <div className="aspect-square bg-slate-100 flex flex-col items-center justify-center p-4">
                      <div className="rounded-full bg-white p-4 mb-4">
                        <User className="h-12 w-12 text-slate-700" />
                      </div>
                      <div className="text-center">
                        <span className="text-sm text-slate-500">Faculty since 2010</span>
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle>{faculty.name}</CardTitle>
                      <CardDescription>{faculty.title}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-slate-700">{faculty.bio}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Statistics */}
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">By the Numbers</h2>
              <p className="max-w-[700px] text-slate-700 md:text-xl/relaxed">
                Key statistics that reflect our institute's size, scope, and impact.
              </p>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card className="text-center">
              <CardHeader className="pb-2">
                <CardTitle className="text-5xl font-bold text-slate-800">1,200+</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700">Students Enrolled</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader className="pb-2">
                <CardTitle className="text-5xl font-bold text-slate-800">85</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700">Faculty Members</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader className="pb-2">
                <CardTitle className="text-5xl font-bold text-slate-800">12</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700">Technical Programs</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader className="pb-2">
                <CardTitle className="text-5xl font-bold text-slate-800">92%</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700">Graduate Employment Rate</p>
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-6 mt-8 md:grid-cols-2">
            <Card className="text-center">
              <CardHeader className="pb-2">
                <CardTitle className="text-3xl font-bold text-slate-800">25+</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700">Industry Partners</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader className="pb-2">
                <CardTitle className="text-3xl font-bold text-slate-800">15</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700">Research Laboratories</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="w-full py-12 md:py-24 bg-slate-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Contact Us</h2>
              <p className="max-w-[700px] text-slate-700 md:text-xl/relaxed">
                Get in touch with Naryn Technical Institute.
              </p>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-slate-700 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Address</h3>
                    <p className="text-sm text-slate-700">
                      123 University Avenue
                      <br />
                      Naryn, Kyrgyzstan 722900
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-slate-700 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Phone</h3>
                    <p className="text-sm text-slate-700">+996 (3522) 51-234</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-slate-700 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-sm text-slate-700">contact@nit.edu.kg</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Building className="h-5 w-5 text-slate-700 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Office Hours</h3>
                    <p className="text-sm text-slate-700">
                      Monday - Friday: 9:00 AM - 5:00 PM
                      <br />
                      Saturday: 9:00 AM - 12:00 PM
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Campus Map</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative h-[300px] w-full overflow-hidden rounded-lg bg-slate-100 flex flex-col items-center justify-center p-6">
                  <MapPin className="h-12 w-12 text-slate-400 mb-4" />
                  <div className="text-center space-y-2">
                    <h3 className="font-medium">Campus Location</h3>
                    <p className="text-sm text-slate-700">
                      Our campus is located in the heart of Naryn city, approximately 5 kilometers from the city center.
                    </p>
                    <p className="text-sm text-slate-700">
                      The campus spans 15 hectares and includes academic buildings, laboratories, student dormitories,
                      and recreational facilities.
                    </p>
                  </div>
                </div>
                <div className="mt-4 flex justify-center">
                  <Button variant="outline" asChild>
                    <Link href="#">View Interactive Map</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* History */}
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our History</h2>
              <p className="max-w-[700px] text-slate-700 md:text-xl/relaxed">
                The journey of Naryn Technical Institute from its founding to the present day.
              </p>
            </div>
          </div>
          <div className="mx-auto max-w-3xl space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Founding and Early Years (2005-2010)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700">
                  Naryn Technical Institute was established in 2005 with a vision to provide high-quality technical
                  education in the Naryn region. Starting with just two departments and 150 students, the institute
                  focused on addressing the local need for skilled technical professionals.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Growth and Expansion (2010-2015)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700">
                  During this period, the institute experienced significant growth, adding new programs in computer
                  science, civil engineering, and renewable energy. The student population grew to over 500, and the
                  institute established its first research laboratories.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>International Recognition (2015-2020)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700">
                  The institute gained international recognition through partnerships with universities in Europe and
                  Asia. These collaborations led to student exchange programs, joint research and Asia. These
                  collaborations led to student exchange programs, joint research projects, and increased visibility in
                  the international academic community. The institute also received accreditation from international
                  educational bodies, further validating the quality of its programs.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Modern Era (2020-Present)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700">
                  In recent years, Naryn Technical Institute has focused on innovation and digital transformation. The
                  institute has invested in cutting-edge technologies, expanded its online learning capabilities, and
                  strengthened industry partnerships to ensure graduates are prepared for the rapidly evolving technical
                  landscape. Today, with over 1,200 students and a comprehensive range of programs, the institute
                  continues to be a leading technical education provider in the region.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
