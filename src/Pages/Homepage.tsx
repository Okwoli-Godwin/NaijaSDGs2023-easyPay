
// import Hero from "../Components/blocks/home/Hero"
import CTA from "../Components/blocks/home/CTA"
import FAQ from "../Components/blocks/home/Faq"
import Features from "../Components/blocks/home/Features"
import Team from "../Components/blocks/home/Team"
import Users from "../Components/blocks/home/Users"

import Hero from "./Hero"

const Homepage = () => {
  return (
    <div>
      <Hero />
      <Users/>
<Features/>
<CTA/>
      <Team/>
<FAQ/>
    </div>
  )
}

export default Homepage