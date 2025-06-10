import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import Link from '@/components/Link'

export const getStaticProps: GetStaticProps = async () => {
  return { props: {} }
}

const moocs = [
  {
    title: 'Basic 3D Modeling using Blender',
    platform: 'edX / IITBombayX',
    learners: '25,000+',
    link: 'https://www.edx.org/course/basic-3d-modeling-using-blender',
    description:
      'Comprehensive course on 3D modeling fundamentals using open-source Blender software',
    achievement: 'edX Prize 2019 Finalist',
  },
  {
    title: 'Basic 3D Animation using Blender',
    platform: 'SWAYAM',
    learners: '15,000+',
    link: 'https://online-degree.swayam.gov.in/nd1_tqp20_c01_s2_ge01/preview',
    description: 'Advanced course covering 3D animation principles and techniques',
  },
  {
    title: 'Visual Design for Education',
    platform: 'IITBombayX',
    learners: '10,000+',
    link: 'https://iitbombayx.in/courses/basic-3d-modeling-using-blender',
    description: 'Course on applying visual design principles in educational content creation',
  },
]

const workshops = [
  {
    title: 'Active Learning Pedagogy in Classrooms',
    description:
      'Workshop on implementing active learning strategies in traditional classroom settings',
    audience: 'Faculty and Educators',
    duration: '2 days',
  },
  {
    title: 'ICT Tools for Active Learning',
    description: 'Hands-on training on using technology tools to enhance student engagement',
    audience: 'Teachers and Trainers',
    duration: '1 day',
  },
  {
    title: 'Blender for Educators',
    description: 'Training educators to use Blender for creating educational 3D content',
    audience: 'STEM Educators',
    duration: '3 days',
  },
]

const talks = [
  {
    title: 'Visual Design and Films in Education',
    event: 'International Conference on Educational Technology',
    year: '2023',
    description: 'Keynote on the role of visual storytelling in modern education',
  },
  {
    title: 'The Future of MOOCs',
    event: 'EdTech Summit India',
    year: '2022',
    description: 'Panel discussion on emerging trends in online education',
  },
  {
    title: '3D Animation in Learning Environments',
    event: 'IEEE Conference on Learning Technologies',
    year: '2021',
    description: 'Research presentation on effectiveness of 3D visualization in education',
  },
]

export default function Teaching({}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <PageSEO
        title={`Teaching - ${siteMetadata.author}`}
        description="Teaching philosophy, MOOCs, workshops, and educational initiatives by Sameer Sahasrabudhe"
      />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Teaching
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Empowering learners through innovative pedagogy, technology, and creative expression
          </p>
        </div>

        {/* Teaching Philosophy */}
        <div className="py-8">
          <h2 className="mb-6 text-2xl font-bold leading-8 tracking-tight text-gray-900 dark:text-gray-100">
            Teaching Philosophy
          </h2>
          <div className="rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50 p-8 dark:from-blue-900 dark:to-indigo-900">
            <blockquote className="mb-4 text-lg italic text-gray-700 dark:text-gray-300">
              "Education should be as engaging as entertainment. My goal is to bridge the gap
              between learning and enjoyment through visual storytelling, interactive design, and
              active learning methodologies."
            </blockquote>
            <p className="text-gray-600 dark:text-gray-400">
              With over 25 years of experience in visual design and educational technology, I
              believe in creating learning experiences that are not just informative but
              transformative.
            </p>
          </div>
        </div>

        {/* MOOCs */}
        <div className="py-8">
          <h2 className="mb-6 text-2xl font-bold leading-8 tracking-tight text-gray-900 dark:text-gray-100">
            Massive Open Online Courses (MOOCs)
          </h2>
          <div className="space-y-6">
            {moocs.map((mooc, index) => (
              <div
                key={index}
                className="rounded-lg border-l-4 border-primary-500 bg-white p-6 shadow-md dark:bg-gray-800"
              >
                <div className="mb-3 flex items-start justify-between">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                    <Link href={mooc.link} className="hover:text-primary-500">
                      {mooc.title}
                    </Link>
                  </h3>
                  {mooc.achievement && (
                    <span className="rounded bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300">
                      {mooc.achievement}
                    </span>
                  )}
                </div>
                <p className="mb-3 text-gray-600 dark:text-gray-400">{mooc.description}</p>
                <div className="flex flex-wrap gap-4 text-sm">
                  <span className="font-medium text-primary-600 dark:text-primary-400">
                    📚 {mooc.platform}
                  </span>
                  <span className="font-medium text-green-600 dark:text-green-400">
                    👥 {mooc.learners} learners
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Active Learning */}
        <div className="py-8">
          <h2 className="mb-6 text-2xl font-bold leading-8 tracking-tight text-gray-900 dark:text-gray-100">
            Active Learning Initiatives
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
              <h3 className="mb-3 text-lg font-semibold text-gray-900 dark:text-gray-100">
                Classroom Innovation
              </h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li>• Flipped classroom methodologies</li>
                <li>• Interactive design workshops</li>
                <li>• Project-based learning</li>
                <li>• Peer-to-peer learning sessions</li>
              </ul>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
              <h3 className="mb-3 text-lg font-semibold text-gray-900 dark:text-gray-100">
                Technology Integration
              </h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li>• 3D visualization tools</li>
                <li>• Animation software training</li>
                <li>• Digital storytelling platforms</li>
                <li>• Collaborative design tools</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Workshops */}
        <div className="py-8">
          <h2 className="mb-6 text-2xl font-bold leading-8 tracking-tight text-gray-900 dark:text-gray-100">
            Workshops & Training
          </h2>
          <div className="space-y-4">
            {workshops.map((workshop, index) => (
              <div key={index} className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
                <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-gray-100">
                  {workshop.title}
                </h3>
                <p className="mb-3 text-gray-600 dark:text-gray-400">{workshop.description}</p>
                <div className="flex gap-4 text-sm text-gray-500 dark:text-gray-500">
                  <span>
                    <strong>Audience:</strong> {workshop.audience}
                  </span>
                  <span>
                    <strong>Duration:</strong> {workshop.duration}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Talks & Presentations */}
        <div className="py-8">
          <h2 className="mb-6 text-2xl font-bold leading-8 tracking-tight text-gray-900 dark:text-gray-100">
            Talks & Presentations
          </h2>
          <div className="space-y-4">
            {talks.map((talk, index) => (
              <div key={index} className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
                <div className="mb-2 flex items-start justify-between">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                    {talk.title}
                  </h3>
                  <span className="text-sm text-gray-500 dark:text-gray-500">{talk.year}</span>
                </div>
                <p className="mb-2 font-medium text-primary-600 dark:text-primary-400">
                  {talk.event}
                </p>
                <p className="text-gray-600 dark:text-gray-400">{talk.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Consultancy */}
        <div className="py-8">
          <h2 className="mb-6 text-2xl font-bold leading-8 tracking-tight text-gray-900 dark:text-gray-100">
            Consultancy & Advisory
          </h2>
          <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
            <h3 className="mb-3 text-lg font-semibold text-gray-900 dark:text-gray-100">
              MOOC Creation & Educational Technology
            </h3>
            <p className="mb-4 text-gray-600 dark:text-gray-400">
              Providing consultancy services for institutions and organizations looking to create
              engaging online courses and implement educational technology solutions.
            </p>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <h4 className="mb-2 font-medium text-gray-900 dark:text-gray-100">
                  Services Offered:
                </h4>
                <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                  <li>• MOOC design and development</li>
                  <li>• Educational content strategy</li>
                  <li>• Faculty training programs</li>
                  <li>• Technology integration planning</li>
                </ul>
              </div>
              <div>
                <h4 className="mb-2 font-medium text-gray-900 dark:text-gray-100">
                  Expertise Areas:
                </h4>
                <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                  <li>• Visual design for education</li>
                  <li>• 3D animation and modeling</li>
                  <li>• Active learning methodologies</li>
                  <li>• Educational multimedia production</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
