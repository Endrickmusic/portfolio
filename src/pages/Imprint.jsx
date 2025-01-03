import { Navigation } from "../components/Navigation"

export default function Imprint() {
  return (
    <>
      <Navigation />
      <div className="flex flex-col items-center justify-center min-h-screen p-10 bg-gray-500">
        <div className="max-w-2xl">
          <h1 className="text-2xl font-bold mb-6">Imprint</h1>

          <section className="mb-8">
            <h2 className="text-lg font-semibold mb-3">Contact Information</h2>
            <p className="text-sm">Christian Hohenbild</p>
            <p className="text-sm">Berlin, Germany</p>
            <p className="text-sm">Email: mail@christianhohenbild.de</p>
          </section>

          <section className="mb-8">
            <h2 className="text-lg font-semibold mb-3">Disclaimer</h2>
            <p className="mb-4 text-sm">
              The contents of this website have been created with the utmost
              care. However, I cannot guarantee the contents' accuracy,
              completeness or topicality. According to statutory provisions, I
              am responsible for my own content on these web pages.
            </p>
            <p>
              Links to third party websites are provided for convenience only
              and do not imply any endorsement or responsibility for the linked
              sites or their content.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-3">Copyright</h2>
            <p className="text-sm">
              © 2024 Christian Hohenbild. All rights reserved. The content and
              works provided on these pages are governed by German copyright
              law.
            </p>
          </section>
        </div>
      </div>
    </>
  )
}
