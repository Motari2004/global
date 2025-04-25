import Image from "next/image"
import "./about.css"

export default function AboutPage() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1>About EcoHope</h1>
          <p>Learn about our mission, vision, and the team behind our conservation efforts</p>
        </div>
      </section>

      <section className="section about-intro">
        <div className="container">
          <div className="about-grid">
            <div className="about-content">
              <h2>Our Story</h2>
              <p>
                EcoHope was founded in 2010 by a group of passionate conservationists who witnessed firsthand the rapid
                decline of wildlife populations and natural habitats across Africa. What began as a small initiative to
                protect endangered species in Kenya has grown into a comprehensive conservation organization operating
                in multiple African countries.
              </p>
              <p>
                Over the years, we have expanded our focus to include not only wildlife protection but also habitat
                restoration, community engagement, and environmental education. We believe that lasting conservation
                success can only be achieved through holistic approaches that address the interconnected challenges
                facing Africa's ecosystems.
              </p>
            </div>
            <div className="about-image">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="EcoHope founders in the field"
                width={600}
                height={500}
                className="rounded-image"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section vision-mission">
        <div className="container">
          <div className="vision-mission-grid">
            <div className="vision-box">
              <h2>Our Vision</h2>
              <p>
                A world where Africa's wildlife thrives in healthy ecosystems, supported by communities that value and
                benefit from conservation.
              </p>
            </div>
            <div className="mission-box">
              <h2>Our Mission</h2>
              <p>
                To protect and restore Africa's biodiversity through innovative conservation solutions, community
                partnerships, and environmental education.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section values">
        <div className="container">
          <div className="section-title">
            <h2>Our Core Values</h2>
          </div>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">
                <i className="fas fa-leaf"></i>
              </div>
              <h3>Environmental Stewardship</h3>
              <p>
                We are committed to protecting and enhancing the natural environment for present and future generations.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon">
                <i className="fas fa-users"></i>
              </div>
              <h3>Community Partnership</h3>
              <p>
                We believe in working alongside local communities, respecting their knowledge and ensuring they benefit
                from conservation.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon">
                <i className="fas fa-microscope"></i>
              </div>
              <h3>Scientific Integrity</h3>
              <p>
                Our work is grounded in sound science and research, ensuring effective and evidence-based conservation
                strategies.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon">
                <i className="fas fa-handshake"></i>
              </div>
              <h3>Collaboration</h3>
              <p>We foster partnerships with governments, NGOs, and private sectors to maximize conservation impact.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section team">
        <div className="container">
          <div className="section-title">
            <h2>Our Team</h2>
          </div>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-image">
                <Image src="/placeholder.svg?height=300&width=300" alt="Dr. Sarah Kimani" width={300} height={300} />
              </div>
              <h3>Dr. Sarah Kimani</h3>
              <p className="member-role">Founder & Executive Director</p>
              <p className="member-bio">
                With over 20 years of experience in wildlife conservation across East Africa, Dr. Kimani leads our
                organization with passion and expertise.
              </p>
            </div>

            <div className="team-member">
              <div className="member-image">
                <Image src="/placeholder.svg?height=300&width=300" alt="Dr. James Omondi" width={300} height={300} />
              </div>
              <h3>Dr. James Omondi</h3>
              <p className="member-role">Head of Research</p>
              <p className="member-bio">
                A renowned ecologist specializing in savanna ecosystems and large mammal conservation.
              </p>
            </div>

            <div className="team-member">
              <div className="member-image">
                <Image src="/placeholder.svg?height=300&width=300" alt="Amina Diallo" width={300} height={300} />
              </div>
              <h3>Amina Diallo</h3>
              <p className="member-role">Community Outreach Director</p>
              <p className="member-bio">Specializes in developing sustainable community-based conservation programs.</p>
            </div>

            <div className="team-member">
              <div className="member-image">
                <Image src="/placeholder.svg?height=300&width=300" alt="Michael Njenga" width={300} height={300} />
              </div>
              <h3>Michael Njenga</h3>
              <p className="member-role">Field Operations Manager</p>
              <p className="member-bio">
                Coordinates our on-the-ground conservation efforts and anti-poaching initiatives.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section partners">
        <div className="container">
          <div className="section-title">
            <h2>Our Partners</h2>
          </div>
          <div className="partners-grid">
            <div className="partner-logo">
              <Image src="/placeholder.svg?height=150&width=200" alt="Partner Organization" width={200} height={150} />
            </div>
            <div className="partner-logo">
              <Image src="/placeholder.svg?height=150&width=200" alt="Partner Organization" width={200} height={150} />
            </div>
            <div className="partner-logo">
              <Image src="/placeholder.svg?height=150&width=200" alt="Partner Organization" width={200} height={150} />
            </div>
            <div className="partner-logo">
              <Image src="/placeholder.svg?height=150&width=200" alt="Partner Organization" width={200} height={150} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
