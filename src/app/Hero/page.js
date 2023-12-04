import HomeStart from "@/components/Home/HomeStart"
import HomeService from "@/components/Home/HomeService"
import Testimonials from "@/components/Home/Testimonials"
import HomeTeam from "@/components/Home/HomeTeam"

export default function Hero() {
  return (
    <>
      <HomeStart />
      <HomeTeam />
      <HomeService />
      <Testimonials />
    </>
  )
}