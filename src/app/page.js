import Banner from "@/app/components/banner"
import ButtonGroup from "@/app/components/buttongroup"
import Gallery from "./components/gallery"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="grid-cols-2 grid h-screen">
        <Banner/>
        <Gallery />
      </div>
    </main>
  )
}
