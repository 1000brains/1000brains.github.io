import Link from '@/components/Link'

type ExperienceProps = { title: string; company: string; range: string }

const Experience = ({ title, company, range, url, text1, text2 }) => {
  return (
    <div className="my-3">
      <div className="flex flex-row text-xl">
        <span className="text-gray-500 dark:text-gray-400">{title}</span>{' '}
        <span className="text-gray-500 dark:text-gray-400">&nbsp;@&nbsp;</span>{' '}
        <span className="text-primary-color-500 dark:text-primary-color-dark-500">
          <Link href={url} className="company">
            {company}
          </Link>
        </span>
      </div>
      <div>
        <div className="p-1 font-mono text-sm text-gray-400 dark:text-gray-600">{range}</div>
        <div className="p-2">
          <div className="flex flex-row ">
            <div className="text-primary-color-500 dark:text-primary-color-dark-500 mr-2 text-lg">
              {' '}
              &#8227;
            </div>
            <div className="text-gray-500 dark:text-gray-400">{text1}</div>
          </div>
          <div className="flex flex-row">
            <div className="text-primary-color-500 dark:text-primary-color-dark-500 mr-2 text-lg">
              {' '}
              &#8227;
            </div>
            <div className="text-gray-500 dark:text-gray-400">{text2}</div>
          </div>
          {/* <div className="items-top flex flex-row">
            <div className="text-primary-color-500 dark:text-primary-color-dark-500 mr-2 text-lg">
              {' '}
              &#8227;
            </div>
            <div className="text-gray-500 dark:text-gray-400">{text3}</div>
          </div> */}
        </div>
      </div>
      <div className="justify-center text-center text-2xl font-medium text-gray-200  dark:text-gray-600">
        &#126;&#126;&#126;
      </div>
    </div>
  )
}

export default Experience

