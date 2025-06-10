import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import Link from '@/components/Link'

export const getStaticProps: GetStaticProps = async () => {
  return { props: {} }
}

const publications = [
  {
    title: 'Learner-Centric MOOC Model: A Framework for Educational Technology',
    authors: 'Sameer Sahasrabudhe, Sridhar Iyer, Sahana Murthy',
    journal: 'Educational Technology Research',
    year: '2019',
    link: 'http://lcm-model.org',
  },
  {
    title: 'Visual Communication in Educational Content Creation',
    authors: 'Sameer Sahasrabudhe',
    journal: 'International Conference on Educational Technology',
    year: '2018',
    link: '#',
  },
  {
    title: '3D Animation for Educational Purposes: Best Practices',
    authors: 'Sameer Sahasrabudhe',
    journal: 'EdMedia Conference',
    year: '2017',
    link: '#',
  },
]

const students = [
  {
    name: 'Research Scholar 1',
    degree: 'PhD',
    topic: 'Visual Design in Educational Technology',
    status: 'Ongoing',
  },
  {
    name: 'Research Scholar 2',
    degree: 'M.Tech',
    topic: '3D Animation for Learning',
    status: 'Completed 2023',
  },
]

const projects = [
  {
    title: 'OSCAR - Open Source Courseware Animations Repository',
    description:
      'Development of learning objects and interaction design strategies for educational animations.',
    funding: 'Ministry of Human Resource Development, Government of India',
    duration: '2015-2018',
  },
  {
    title: 'Blender Training Initiative',
    description:
      'National program to popularize and train personnel in Blender 3D animation software.',
    funding: 'MHRD, Government of India',
    duration: '2016-2019',
  },
  {
    title: 'Educational Technology Research',
    description: 'Research collaboration with Kyoto University, Japan on educational multimedia.',
    funding: 'Kyoto University, Japan',
    duration: '2020-2022',
  },
]

export default function Research({}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <PageSEO
        title={`Research - ${siteMetadata.author}`}
        description="Research work, publications, students, and projects by Sameer Sahasrabudhe"
      />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Research
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Exploring the intersection of visual design, educational technology, and learning
            experiences
          </p>
        </div>

        {/* Research Areas */}
        <div className="py-8">
          <h2 className="mb-6 text-2xl font-bold leading-8 tracking-tight text-gray-900 dark:text-gray-100">
            Research Areas
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
              <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-gray-100">
                Educational Technology
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Development of learner-centric models for online education and MOOCs
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
              <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-gray-100">
                Visual Communication
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Research on visual design principles in educational content creation
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
              <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-gray-100">
                3D Animation for Education
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Application of 3D visualization and animation in learning environments
              </p>
            </div>
          </div>
        </div>

        {/* Publications */}
        <div className="py-8">
          <h2 className="mb-6 text-2xl font-bold leading-8 tracking-tight text-gray-900 dark:text-gray-100">
            Publications
          </h2>
          <div className="space-y-4">
            {publications.map((pub, index) => (
              <div key={index} className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
                <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-gray-100">
                  {pub.link !== '#' ? (
                    <Link href={pub.link} className="hover:text-primary-500">
                      {pub.title}
                    </Link>
                  ) : (
                    pub.title
                  )}
                </h3>
                <p className="mb-1 text-gray-600 dark:text-gray-400">{pub.authors}</p>
                <p className="text-sm text-gray-500 dark:text-gray-500">
                  {pub.journal} • {pub.year}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Research Projects */}
        <div className="py-8">
          <h2 className="mb-6 text-2xl font-bold leading-8 tracking-tight text-gray-900 dark:text-gray-100">
            Research Projects
          </h2>
          <div className="space-y-6">
            {projects.map((project, index) => (
              <div key={index} className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
                <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-gray-100">
                  {project.title}
                </h3>
                <p className="mb-3 text-gray-600 dark:text-gray-400">{project.description}</p>
                <div className="flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-500">
                  <span>
                    <strong>Funding:</strong> {project.funding}
                  </span>
                  <span>
                    <strong>Duration:</strong> {project.duration}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Students */}
        <div className="py-8">
          <h2 className="mb-6 text-2xl font-bold leading-8 tracking-tight text-gray-900 dark:text-gray-100">
            Research Students
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {students.map((student, index) => (
              <div key={index} className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
                <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-gray-100">
                  {student.name}
                </h3>
                <p className="mb-1 text-gray-600 dark:text-gray-400">
                  <strong>{student.degree}</strong> - {student.topic}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-500">{student.status}</p>
              </div>
            ))}
          </div>
        </div>

        {/* EdTech Achievements */}
        <div className="py-8">
          <h2 className="mb-6 text-2xl font-bold leading-8 tracking-tight text-gray-900 dark:text-gray-100">
            EdTech Impact
          </h2>
          <div className="rounded-lg bg-gradient-to-r from-primary-50 to-primary-100 p-8 dark:from-primary-900 dark:to-primary-800">
            <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-3">
              <div>
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">
                  100K+
                </div>
                <div className="text-gray-600 dark:text-gray-300">Learners Worldwide</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">25+</div>
                <div className="text-gray-600 dark:text-gray-300">MOOCs Created</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">
                  edX Prize
                </div>
                <div className="text-gray-600 dark:text-gray-300">2019 Finalist</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

