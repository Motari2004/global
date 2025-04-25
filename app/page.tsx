import Link from "next/link"
import Image from "next/image"
import "./page.css"

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <h1>Protecting Africa's Wildlife & Ecosystems</h1>
          <p>Join our mission to conserve biodiversity and promote sustainable environmental practices across Africa</p>
          <div className="hero-buttons">
            <Link href="/donate" className="btn">
              Donate Now
            </Link>
            <Link href="/about" className="btn btn-secondary">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      <section className="section mission">
        <div className="container">
          <div className="section-title">
            <h2>Our Mission</h2>
          </div>
          <div className="mission-content">
            <div className="mission-text">
              <p>
                At EcoHope, we are dedicated to protecting Africa's rich biodiversity through conservation initiatives,
                community engagement, and educational programs. We believe that sustainable solutions come from working
                together with local communities to preserve natural habitats and wildlife for future generations.
              </p>
              <p>
                Our team of conservationists, researchers, and volunteers work tirelessly across various regions in
                Africa to address environmental challenges and protect endangered species from extinction.
              </p>
              <Link href="/about" className="btn">
                About Our Work
              </Link>
            </div>
            <div className="mission-image">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Conservation team working in the field"
                width={600}
                height={400}
                className="rounded-image"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section featured-wildlife">
        <div className="container">
          <div className="section-title">
            <h2>Featured Wildlife</h2>
          </div>
          <div className="wildlife-grid">
            <div className="wildlife-card">
              <div className="wildlife-image">
                <Image src="/placeholder.svg?height=300&width=400" alt="African Elephant" width={400} height={300} />
              </div>
              <div className="wildlife-info">
                <h3>African Elephant</h3>
                <p>The world's largest land mammal, facing threats from poaching and habitat loss.</p>
                <Link href="/wildlife#elephant" className="read-more">
                  Learn More
                </Link>
              </div>
            </div>

            <div className="wildlife-card">
              <div className="wildlife-image">
                <Image src="/placeholder.svg?height=300&width=400" alt="Black Rhino" width={400} height={300} />
              </div>
              <div className="wildlife-info">
                <h3>Black Rhino</h3>
                <p>Critically endangered due to poaching for their horns and habitat fragmentation.</p>
                <Link href="/wildlife#rhino" className="read-more">
                  Learn More
                </Link>
              </div>
            </div>

            <div className="wildlife-card">
              <div className="wildlife-image">
                <Image src="/placeholder.svg?height=300&width=400" alt="African Lion" width={400} height={300} />
              </div>
              <div className="wildlife-info">
                <h3>African Lion</h3>
                <p>The king of the savanna, whose populations have declined by 43% in the last two decades.</p>
                <Link href="/wildlife#lion" className="read-more">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section impact">
        <div className="container">
          <div className="section-title">
            <h2>Our Impact</h2>
          </div>
          <div className="impact-stats">
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">Conservation Projects</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">100,000+</div>
              <div className="stat-label">Hectares Protected</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">25+</div>
              <div className="stat-label">Endangered Species</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">30+</div>
              <div className="stat-label">Community Partnerships</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section donation-cta">
        <div className="container">
          <div className="donation-content">
            <h2>Support Our Conservation Efforts</h2>
            <p>
              Your donation helps us protect endangered wildlife, restore habitats, and support local communities across
              Africa. Every contribution makes a difference.
            </p>
            <Link href="/donate" className="btn btn-secondary">
              Donate Now
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
