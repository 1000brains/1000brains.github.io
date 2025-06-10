import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import Link from '@/components/Link'

export const getStaticProps: GetStaticProps = async () => {
  return { props: {} }
}

const govAssociations = [
  {
    organization: "Ministry of Human Resource Development (MHRD)",
    role: "Principal Investigator",
    project: "Blender Training Initiative",
    duration: "2016-2019",
    description: "Led national program to popularize Blender 3D animation software across educational institutions"
  },
  {
    organization: "SWAYAM Platform",
    role: "Course Creator & Instructor",
    project: "3D Animation MOOCs",
    duration: "2018-Present",
    description: "Developed and delivered multiple courses on 3D modeling and animation for government's digital education platform"
  },
  {
    organization: "Educational Multimedia Research Center (EMMRC)",
    role: "Director",
    project: "MOOC Production & Faculty Training",
    duration: "2020-2022",
    description: "Spearheaded audio-visual production of MOOCs and conducted capacity building programs for MOOC instructors"
  }
]

const platforms = [
  {
    name: "SWAYAM",
    logo: "🇮🇳",
    description: "Government of India's digital education platform",
    courses: 5,
    learners: "50,000+",
    link: "https://swayam.gov.in"
  },
  {
    name: "IITBombayX",
    logo: "🎓",
    description: "IIT Bombay's MOOC platform",
    courses: 8,
    learners: "75,000+", 
    link: "https://iitbombayx.in"
  },
  {
    name: "edX",
    logo: "📚",
    description: "Global online learning platform",
    courses: 3,
    learners: "25,000+",
    link: "https://edx.org"
  }
]

const initiatives = [
  {
    title: "Learner-Centric MOOC (LCM) Model",
    description: "Developed a comprehensive framework for creating engaging and effective online courses",
    impact: "Adopted by multiple institutions for MOOC development",
    link: "http://lcm-model.org",
    year: "2018"
  },
  {
    title: "OSCAR Project",
    description: "Open Source Courseware Animations Repository for educational learning objects",
    impact: "Created standardized templates for educational animation production",
    link: "#",
    year: "2015"
  },
  {
    title: "National Blender Training Program",
    description: "Conducted 20+ workshops across India training 1000+ educators in 3D animation",
    impact: "Established Blender as a viable tool for educational content creation",
    link: "#",
    year: "2016"
  }
]

const achievements = [
  {
    title: "edX Prize 2019 Finalist",
    description: "Course on 3D modeling shortlisted for prestigious edX Prize",
    category: "Innovation in Online Learning"
  },
  {
    title: "Apple Distinguished Educator",
    description: "Recognized by Apple Asia for excellence in educational technology",
    category: "Educational Technology Leadership",
    year: "2007"
  },
  {
    title: "100K+ Global Learners",
    description: "Courses have reached over 100,000 learners worldwide",
    category: "Global Impact"
  }
]

export default function EdTech({}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <PageSEO
        title={`EdTech - ${siteMetadata.author}`}
        description="Educational Technology initiatives, government associations, and MOOC development by Sameer Sahasrabudhe"
      />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Educational Technology
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Transforming education through technology, innovation, and learner-centric design
          </p>
        </div>

        {/* Impact Overview */}
        <div className="py-8">
          <h2 className="text-2xl font-bold leading-8 tracking-tight text-gray-900 dark:text-gray-100 mb-6">
            Impact at a Glance
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800 p-6 rounded-lg">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">100K+</div>
              <div className="text-gray-600 dark:text-gray-300">Global Learners</div>
            </div>
            <div className="text-center bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900 dark:to-green-800 p-6 rounded-lg">
              <div className="text-3xl font-bold text-green-600 dark:text-green-400">16+</div>
              <div className="text-gray-600 dark:text-gray-300">MOOCs Created</div>
            </div>
            <div className="text-center bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900 dark:to-purple-800 p-6 rounded-lg">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">20+</div>
              <div className="text-gray-600 dark:text-gray-300">Workshops Conducted</div>
            </div>
            <div className="text-center bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900 dark:to-orange-800 p-6 rounded-lg">
              <div className="text-3xl font-bold text-orange-600 dark:text-orange-400">1000+</div>
              <div className="text-gray-600 dark:text-gray-300">Educators Trained</div>
            </div>
          </div>
        </div>

        {/* Government Associations */}
        <div className="py-8">
          <h2 className="text-2xl font-bold leading-8 tracking-tight text-gray-900 dark:text-gray-100 mb-6">
            Government Associations
          </h2>
          <div className="space-y-6">
            {govAssociations.map((assoc, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border-l-4 border-green-500">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                    {assoc.organization}
                  </h3>
                  <span className="text-sm text-gray-500 dark:text-gray-500">{assoc.duration}</span>
                </div>
                <div className="mb-2">
                  <span className="text-primary-600 dark:text-primary-400 font-medium">{assoc.role}</span>
                  <span className="text-gray-500 mx-2">•</span>
                  <span className="text-gray-700 dark:text-gray-300">{assoc.project}</span>
                </div>
                <p className="text-gray-600 dark:text-gray-400">{assoc.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* MOOC Platforms */}
        <div className="py-8">
          <h2 className="text-2xl font-bold leading-8 tracking-tight text-gray-900 dark:text-gray-100 mb-6">
            MOOC Platforms
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {platforms.map((platform, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-center mb-4">
                  <div className="text-4xl mb-2">{platform.logo}</div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                    <Link href={platform.link} className="hover:text-primary-500">
                      {platform.name}
                    </Link>
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-center mb-4">{platform.description}</p>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-xl font-bold text-primary-600 dark:text-primary-400">{platform.courses}</div>
                    <div className="text-sm text-gray-500">Courses</div>
                  </div>
                  <div>
                    <div className="text-xl font-bold text-primary-600 dark:text-primary-400">{platform.learners}</div>
                    <div className="text-sm text-gray-500">Learners</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Initiatives */}
        <div className="py-8">
          <h2 className="text-2xl font-bold leading-8 tracking-tight text-gray-900 dark:text-gray-100 mb-6">
            Key Initiatives
          </h2>
          <div className="space-y-6">
            {initiatives.map((initiative, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                    {initiative.link !== "#" ? (
                      <Link href={initiative.link} className="hover:text-primary-500">
                        {initiative.title}
                      </Link>
                    ) : (
                      initiative.title
                    )}
                  </h3>
                  <span className="bg-primary-100 text-primary-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-primary-900 dark:text-primary-300">
                    {initiative.year}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-3">{initiative.description}</p>
                <div className="bg-green-50 dark:bg-green-900 p-3 rounded">
                  <p className="text-green-700 dark:text-green-300 text-sm">
                    <strong>Impact:</strong> {initiative.impact}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements & Recognition */}
        <div className="py-8">
          <h2 className="text-2xl font-bold leading-8 tracking-tight text-gray-900 dark:text-gray-100 mb-6">
            Achievements & Recognition
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-yellow-900 dark:to-yellow-800 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  {achievement.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-3">{achievement.description}</p>
                <span className="inline-block bg-yellow-200 dark:bg-yellow-700 text-yellow-800 dark:text-yellow-200 text-xs font-medium px-2.5 py-0.5 rounded">
                  {achievement.category}
                </span>
                {achievement.year && (
                  <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">
                    {achievement.year}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Future Vision */}
        <div className="py-8">
          <h2 className="text-2xl font-bold leading-8 tracking-tight text-gray-900 dark:text-gray-100 mb-6">
            Future Vision
          </h2>
          <div className="bg-gradient-to-r from-primary-50 to-primary-100 dark:from-primary-900 dark:to-primary-800 p-8 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
              Democratizing Quality Education Through Technology
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              My vision is to continue bridging the gap between traditional education and modern technology, 
              making high-quality learning experiences accessible to learners worldwide. Through innovative 
              pedagogical approaches and cutting-edge tools, we can transform how knowledge is created, 
              shared, and consumed.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Focus Areas:</h4>
                <ul className="text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• AI-powered personalized learning</li>
                  <li>• Immersive VR/AR educational experiences</li>
                  <li>• Global accessibility and inclusion</li>
                  <li>• Sustainable educational technology</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Goals:</h4>
                <ul className="text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• Reach 1 million learners by 2025</li>
                  <li>• Develop next-gen MOOC platform</li>
                  <li>• Train 10,000 educators globally</li>
                  <li>• Establish EdTech research center</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
