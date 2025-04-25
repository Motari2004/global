import Image from "next/image"
import Link from "next/link"
import "./wildlife.css"

export default function WildlifePage() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1>African Wildlife</h1>
          <p>Discover the incredible species we work to protect across the continent</p>
        </div>
      </section>

      <section className="section wildlife-intro">
        <div className="container">
          <div className="section-title">
            <h2>Africa's Biodiversity</h2>
          </div>
          <p className="intro-text">
            Africa is home to some of the world's most iconic wildlife species and diverse ecosystems. From the vast
            savannas to dense rainforests, the continent harbors an incredible array of animals, many of which are found
            nowhere else on Earth. However, these magnificent creatures face numerous threats including habitat loss,
            poaching, climate change, and human-wildlife conflict.
          </p>
          <p className="intro-text">
            At EcoHope, we focus our conservation efforts on protecting endangered and vulnerable species across various
            African ecosystems. Learn more about the incredible animals we work to protect and the challenges they face.
          </p>
        </div>
      </section>

      <section id="elephant" className="section animal-feature">
        <div className="container">
          <div className="animal-grid">
            <div className="animal-image">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="African Elephant in the savanna"
                width={800}
                height={600}
                className="rounded-image"
              />
            </div>
            <div className="animal-content">
              <h2>African Elephant</h2>
              <div className="animal-stats">
                <div className="stat">
                  <span className="stat-label">Scientific Name:</span>
                  <span className="stat-value">Loxodonta africana</span>
                </div>
                <div className="stat">
                  <span className="stat-label">Conservation Status:</span>
                  <span className="stat-value status-endangered">Endangered</span>
                </div>
                <div className="stat">
                  <span className="stat-label">Population:</span>
                  <span className="stat-value">Approximately 415,000</span>
                </div>
                <div className="stat">
                  <span className="stat-label">Habitat:</span>
                  <span className="stat-value">Savanna, forest, desert, marsh</span>
                </div>
              </div>
              <p>
                The African elephant is the world's largest land mammal and a keystone species that plays a crucial role
                in maintaining the biodiversity of African ecosystems. These intelligent giants shape the landscape by
                creating water holes, clearing paths through dense vegetation, and dispersing seeds.
              </p>
              <p>
                Despite international protection, African elephants continue to face severe threats from poaching for
                their ivory tusks and habitat loss due to human expansion. EcoHope works with local communities and
                authorities to protect elephant populations through anti-poaching initiatives, habitat conservation, and
                human-elephant conflict mitigation.
              </p>
              <Link href="/conservation#elephant-projects" className="btn">
                Our Elephant Conservation Projects
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="rhino" className="section animal-feature bg-light">
        <div className="container">
          <div className="animal-grid reverse">
            <div className="animal-content">
              <h2>Black Rhino</h2>
              <div className="animal-stats">
                <div className="stat">
                  <span className="stat-label">Scientific Name:</span>
                  <span className="stat-value">Diceros bicornis</span>
                </div>
                <div className="stat">
                  <span className="stat-label">Conservation Status:</span>
                  <span className="stat-value status-critical">Critically Endangered</span>
                </div>
                <div className="stat">
                  <span className="stat-label">Population:</span>
                  <span className="stat-value">Approximately 5,600</span>
                </div>
                <div className="stat">
                  <span className="stat-label">Habitat:</span>
                  <span className="stat-value">Savanna, woodland, grassland</span>
                </div>
              </div>
              <p>
                The black rhino is one of the oldest groups of mammals, virtually unchanged in their appearance for
                millions of years. These prehistoric-looking creatures are browsers, meaning they eat leaves and
                branches from bushes and trees, playing an important role in shaping the African landscape.
              </p>
              <p>
                Black rhinos have suffered a catastrophic 98% decline in population since 1960, primarily due to
                poaching for their horns, which are valued in traditional medicine and as status symbols. EcoHope
                supports intensive protection zones, anti-poaching units, and community conservation initiatives to save
                these magnificent animals from extinction.
              </p>
              <Link href="/conservation#rhino-projects" className="btn">
                Our Rhino Conservation Projects
              </Link>
            </div>
            <div className="animal-image">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Black Rhino in natural habitat"
                width={800}
                height={600}
                className="rounded-image"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="lion" className="section animal-feature">
        <div className="container">
          <div className="animal-grid">
            <div className="animal-image">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="African Lion pride"
                width={800}
                height={600}
                className="rounded-image"
              />
            </div>
            <div className="animal-content">
              <h2>African Lion</h2>
              <div className="animal-stats">
                <div className="stat">
                  <span className="stat-label">Scientific Name:</span>
                  <span className="stat-value">Panthera leo</span>
                </div>
                <div className="stat">
                  <span className="stat-label">Conservation Status:</span>
                  <span className="stat-value status-vulnerable">Vulnerable</span>
                </div>
                <div className="stat">
                  <span className="stat-label">Population:</span>
                  <span className="stat-value">20,000 - 25,000</span>
                </div>
                <div className="stat">
                  <span className="stat-label">Habitat:</span>
                  <span className="stat-value">Savanna, grassland, open woodland</span>
                </div>
              </div>
              <p>
                The African lion, often called the "king of beasts," is one of Africa's most iconic predators. These
                social cats live in prides and play a crucial role in maintaining healthy ecosystems by controlling
                herbivore populations and removing sick and weak animals.
              </p>
              <p>
                Lion populations have declined by approximately 43% in the last two decades due to habitat loss,
                human-wildlife conflict, and poaching. EcoHope works to protect lions through initiatives that secure
                their habitats, reduce conflicts with local communities, and combat illegal wildlife trade.
              </p>
              <Link href="/conservation#lion-projects" className="btn">
                Our Lion Conservation Projects
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section other-wildlife">
        <div className="container">
          <div className="section-title">
            <h2>Other Species We Protect</h2>
          </div>
          <div className="wildlife-grid">
            <div className="wildlife-card">
              <div className="wildlife-image">
                <Image src="/placeholder.svg?height=300&width=400" alt="Mountain Gorilla" width={400} height={300} />
              </div>
              <div className="wildlife-info">
                <h3>Mountain Gorilla</h3>
                <p className="status status-endangered">Endangered</p>
                <p>
                  These gentle giants share 98% of their DNA with humans and face threats from habitat loss and
                  poaching.
                </p>
              </div>
            </div>

            <div className="wildlife-card">
              <div className="wildlife-image">
                <Image src="/placeholder.svg?height=300&width=400" alt="Cheetah" width={400} height={300} />
              </div>
              <div className="wildlife-info">
                <h3>Cheetah</h3>
                <p className="status status-vulnerable">Vulnerable</p>
                <p>
                  The world's fastest land animal has lost 91% of its historic range due to habitat loss and human
                  conflict.
                </p>
              </div>
            </div>

            <div className="wildlife-card">
              <div className="wildlife-image">
                <Image src="/placeholder.svg?height=300&width=400" alt="African Wild Dog" width={400} height={300} />
              </div>
              <div className="wildlife-info">
                <h3>African Wild Dog</h3>
                <p className="status status-endangered">Endangered</p>
                <p>One of Africa's most endangered predators with fewer than 6,600 remaining in the wild.</p>
              </div>
            </div>

            <div className="wildlife-card">
              <div className="wildlife-image">
                <Image src="/placeholder.svg?height=300&width=400" alt="Giraffe" width={400} height={300} />
              </div>
              <div className="wildlife-info">
                <h3>Giraffe</h3>
                <p className="status status-vulnerable">Vulnerable</p>
                <p>
                  Giraffe populations have declined by 40% in the last three decades due to habitat loss and poaching.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section cta">
        <div className="container">
          <div className="cta-content">
            <h2>Help Us Protect Africa's Wildlife</h2>
            <p>
              Your support can make a difference in our efforts to save these magnificent species for future
              generations.
            </p>
            <div className="cta-buttons">
              <Link href="/donate" className="btn">
                Donate Now
              </Link>
              <Link href="/conservation" className="btn btn-secondary">
                Explore Our Projects
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
