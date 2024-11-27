import { React } from "react"
import Header from "../component/header"
import Countdown from "../component/countdown"
import Important from "../component/important"
import Location from "../component/location"
import Contact from "../component/contact"
import Footer from "../component/footer"

export default function Home() {
  return (
    <div>
      <div>
        <Header />
        <main>
          <Countdown />
          <Important />
          <Location />
          <Contact />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  )
}