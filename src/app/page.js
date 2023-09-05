import Banner from "@/app/components/banner"
import ButtonGroup from "@/app/components/buttongroup"
import Gallery from "./components/gallery"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-dark-bg-primary">
      <div className="lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-1 grid h-auto gap-8">
        <Banner />
        <div>
          <Gallery />
        </div>
      </div>
    </main>
  )
}
