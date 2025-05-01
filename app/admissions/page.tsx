import Link from "next/link"
import { CheckCircle, FileText, GraduationCap, Users, CalendarClock, Mail, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function AdmissionsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 bg-slate-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Admissions</h1>
              <p className="max-w-[600px] text-slate-700 md:text-xl">
                Join our community of innovators and problem-solvers. Naryn Technical Institute offers comprehensive
                programs designed to prepare you for success in technical fields.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild>
                  <Link href="#application-process">Apply Now</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="#requirements">View Requirements</Link>
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="flex flex-col space-y-6 bg-white p-6 rounded-lg shadow-sm border">
                <div className="bg-slate-100 p-4 rounded-lg">
                  <h3 className="font-medium text-lg mb-2">Application Deadlines</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <CalendarClock className="h-5 w-5 text-slate-700 mt-0.5" />
                      <div>
                        <p className="font-medium">Fall Semester</p>
                        <p className="text-sm text-slate-700">May 1, 2025</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <CalendarClock className="h-5 w-5 text-slate-700 mt-0.5" />
                      <div>
                        <p className="font-medium">Spring Semester</p>
                        <p className="text-sm text-slate-700">November 1, 2025</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <GraduationCap className="h-5 w-5 text-slate-700 mt-0.5" />
                      <div>
                        <p className="font-medium">Scholarship Applications</p>
                        <p className="text-sm text-slate-700">One month after general deadline</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-slate-50 p-4 rounded-lg">
                  <h3 className="font-medium text-lg mb-2">Contact Admissions</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Mail className="h-5 w-5 text-slate-700" />
                      <span className="text-sm">admissions@nit.edu.kg</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="h-5 w-5 text-slate-700" />
                      <span className="text-sm">+996 (3522) 51-235</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Admissions Tabs */}
      <section className="w-full py-12 md:py-24" id="application-process">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="process" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="process">Application Process</TabsTrigger>
              <TabsTrigger value="requirements" id="requirements">
                Requirements
              </TabsTrigger>
              <TabsTrigger value="audience">Target Audience</TabsTrigger>
            </TabsList>
            <TabsContent value="process" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Application Process</CardTitle>
                  <CardDescription>Follow these steps to apply to Naryn Technical Institute</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-4">
                      <div className="flex items-start gap-4">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-100">
                          <span className="text-sm font-bold">1</span>
                        </div>
                        <div className="space-y-1">
                          <h3 className="font-medium">Review Program Requirements</h3>
                          <p className="text-sm text-slate-700">
                            Ensure you meet the academic and other requirements for your chosen program.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-100">
                          <span className="text-sm font-bold">2</span>
                        </div>
                        <div className="space-y-1">
                          <h3 className="font-medium">Complete Online Application</h3>
                          <p className="text-sm text-slate-700">
                            Fill out the online application form with your personal and academic information.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-100">
                          <span className="text-sm font-bold">3</span>
                        </div>
                        <div className="space-y-1">
                          <h3 className="font-medium">Submit Required Documents</h3>
                          <p className="text-sm text-slate-700">
                            Upload transcripts, test scores, and other required documentation.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start gap-4">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-100">
                          <span className="text-sm font-bold">4</span>
                        </div>
                        <div className="space-y-1">
                          <h3 className="font-medium">Pay Application Fee</h3>
                          <p className="text-sm text-slate-700">
                            Submit the non-refundable application fee to complete your application.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-100">
                          <span className="text-sm font-bold">5</span>
                        </div>
                        <div className="space-y-1">
                          <h3 className="font-medium">Interview (if required)</h3>
                          <p className="text-sm text-slate-700">
                            Some programs may require an interview as part of the selection process.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-100">
                          <span className="text-sm font-bold">6</span>
                        </div>
                        <div className="space-y-1">
                          <h3 className="font-medium">Receive Admission Decision</h3>
                          <p className="text-sm text-slate-700">
                            Applications are reviewed and decisions are typically sent within 4-6 weeks.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6">
                    <Button asChild>
                      <Link href="#">Start Application</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="requirements" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Admission Requirements</CardTitle>
                  <CardDescription>Academic and other requirements for admission to our programs</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <h3 className="text-lg font-medium">General Requirements</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                          <span>Completed secondary education (high school diploma or equivalent)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                          <span>Minimum GPA of 2.5 on a 4.0 scale (or equivalent)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                          <span>Proficiency in English (for programs taught in English)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                          <span>Completed application form and fee</span>
                        </li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-medium">Program-Specific Requirements</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                          <span>Engineering Programs: Strong background in mathematics and physics</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                          <span>Computer Science: Background in mathematics and basic programming knowledge</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                          <span>
                            Technical Management: Basic understanding of technical concepts and business principles
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-medium">Required Documents</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <FileText className="h-5 w-5 text-slate-700 mt-0.5" />
                          <span>Official transcripts from all previous educational institutions</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <FileText className="h-5 w-5 text-slate-700 mt-0.5" />
                          <span>Standardized test scores (if applicable)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <FileText className="h-5 w-5 text-slate-700 mt-0.5" />
                          <span>Personal statement or essay</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <FileText className="h-5 w-5 text-slate-700 mt-0.5" />
                          <span>Letters of recommendation (2-3)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <FileText className="h-5 w-5 text-slate-700 mt-0.5" />
                          <span>Copy of passport or ID</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="audience" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Target Audience</CardTitle>
                  <CardDescription>Who should apply to Naryn Technical Institute</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6 md:grid-cols-3">
                    <Card>
                      <CardHeader className="pb-2">
                        <div className="rounded-full bg-slate-100 p-2 w-10 h-10 flex items-center justify-center mb-2">
                          <GraduationCap className="h-5 w-5 text-slate-700" />
                        </div>
                        <CardTitle className="text-lg">High School Graduates</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-slate-700">
                          Recent high school graduates with strong academic backgrounds in mathematics, science, and
                          technical subjects who are interested in pursuing careers in engineering, technology, or
                          applied sciences.
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="pb-2">
                        <div className="rounded-full bg-slate-100 p-2 w-10 h-10 flex items-center justify-center mb-2">
                          <Users className="h-5 w-5 text-slate-700" />
                        </div>
                        <CardTitle className="text-lg">Transfer Students</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-slate-700">
                          Students who have completed coursework at other institutions and wish to transfer to Naryn
                          Technical Institute to complete their degrees in technical fields.
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="pb-2">
                        <div className="rounded-full bg-slate-100 p-2 w-10 h-10 flex items-center justify-center mb-2">
                          <FileText className="h-5 w-5 text-slate-700" />
                        </div>
                        <CardTitle className="text-lg">International Students</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-slate-700">
                          Students from around the world who are interested in receiving a quality technical education
                          in a diverse and supportive environment.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="mt-6 space-y-4">
                    <h3 className="text-lg font-medium">Ideal Candidates</h3>
                    <p className="text-slate-700">Naryn Technical Institute seeks students who demonstrate:</p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <span>Strong academic potential, particularly in STEM subjects</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <span>Problem-solving abilities and critical thinking skills</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <span>Interest in innovation and practical applications of technology</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <span>Commitment to learning and professional development</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <span>Potential to contribute to the institute's diverse community</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-12 md:py-24 bg-slate-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Frequently Asked Questions</h2>
              <p className="max-w-[700px] text-slate-700 md:text-xl/relaxed">
                Find answers to common questions about admissions at Naryn Technical Institute.
              </p>
            </div>
          </div>
          <div className="mx-auto max-w-3xl mt-8">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>When are the application deadlines?</AccordionTrigger>
                <AccordionContent>
                  For the Fall semester, applications are due by May 1. For the Spring semester, applications are due by
                  November 1. International students should apply at least 3 months before these deadlines to allow time
                  for visa processing.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Are scholarships available?</AccordionTrigger>
                <AccordionContent>
                  Yes, Naryn Technical Institute offers merit-based scholarships, need-based financial aid, and specific
                  scholarships for underrepresented groups in technical fields. Scholarship applications are typically
                  due one month after the general application deadline.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Can I transfer credits from another institution?</AccordionTrigger>
                <AccordionContent>
                  Yes, we accept transfer credits from accredited institutions. The Admissions Committee will evaluate
                  your previous coursework to determine which credits can be transferred. Generally, courses with a
                  grade of C or better in subjects relevant to your program of study may be eligible for transfer.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>What English proficiency tests are accepted?</AccordionTrigger>
                <AccordionContent>
                  We accept TOEFL (minimum score of 80 iBT), IELTS (minimum score of 6.5), and Duolingo English Test
                  (minimum score of 105). Tests must have been taken within the last two years.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>Is on-campus housing available?</AccordionTrigger>
                <AccordionContent>
                  Yes, we offer on-campus dormitories for both domestic and international students. Housing applications
                  are separate from admission applications and should be submitted as soon as you receive your
                  acceptance letter to ensure availability.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div className="flex justify-center mt-8">
            <Button variant="outline" asChild>
              <Link href="#">Contact Admissions Office</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
