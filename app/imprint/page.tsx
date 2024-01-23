import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Page' })

export default function Imprint() {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Imprint
          </h1>
        </div>
        <div className="container py-12">
          <p>Created by: Christopher Schicho, A-4240 Freistadt</p>
          <p>
            This is my personal website which is meant to exchange ideas and thoughts about
            artificial intelligence. This website is not part of a company or comparable
            institution. Furthermore, this website does not follow any political interest.
          </p>
        </div>
      </div>
    </>
  )
}
