'use client';

export default function Home() {
  // Add schema.org structured data
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Godwin Okronipa",
    "alternateName": "Exornam",
    "jobTitle": ["Product Manager", "Systems Designer", "AI Engineer"],
    "url": "https://godwinokronipa.github.io/my-website",
    "sameAs": [
      "https://www.linkedin.com/in/godwin-okronipa-5b59002b6",
      "https://GitHub.com/GodwinOkronipa",
      "https://substack.com/@godwinnotes"
    ],
    "email": "godwinokro2020@gmail.com",
    "telephone": "+233 200 645 732",
    "description": "Product Manager, Systems Designer, and AI Engineer specializing in ethical and responsible AI solutions.",
    "affiliation": {
      "@type": "Organization",
      "name": "Ghana Communication Technology University"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="futuristic-bg text-white min-h-screen overflow-x-hidden">
      {/* Top Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50">
        <nav className="mx-auto max-w-6xl mt-3 px-4 flex justify-center">
          <div className="glass backdrop-blur rounded-full mx-auto w-fit">
            <div className="flex items-center gap-6 px-5 py-2 text-sm text-zinc-300">
              <a href="#home" className="link-accent">Home</a>
              <a href="#about" className="link-accent">About</a>
              <a href="#experience" className="link-accent">Experience</a>
              <a href="#contact" className="link-accent">Contact</a>
            </div>
          </div>
        </nav>
      </header>

      {/* 1. Home */}
      <section id="home" className="anchor-offset px-6 sm:px-10 pt-20">
        <div className="max-w-5xl mx-auto w-full">
          <div className="glass-dark p-8 sm:p-12 animate-fadeUp">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight">
              Godwin Okronipa (Exornam)
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-zinc-200">
              <span className="accent">Product Manager</span> · <span className="accent">Systems Designer</span> · <span className="accent">AI Engineer</span> · Advocate for <span className="accent">Ethical & Responsible AI</span>
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                className="glass btn-accent px-5 py-2 rounded-full hover:scale-[1.02] transition" 
                href="https://www.linkedin.com/in/godwin-okronipa-5b59002b6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                target="_blank" rel="noreferrer"
                
              >
                LinkedIn
              </a>
              <a
                className="glass btn-accent px-5 py-2 rounded-full hover:scale-[1.02] transition"
                href="https://GitHub.com/GodwinOkronipa" target="_blank" rel="noreferrer"
              >
                GitHub
              </a>
              <a
                className="glass btn-accent px-5 py-2 rounded-full hover:scale-[1.02] transition"
                href="https://substack.com/@godwinnotes" target="_blank" rel="noreferrer"
              >
                Substack
              </a>
              <a
                className="glass btn-accent px-5 py-2 rounded-full hover:scale-[1.02] transition"
                href="mailto:godwinokro2020@gmail.com"
              >
                Email
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. About Me */}
      <section id="about" className="anchor-offset px-6 sm:px-10 py-16">
        <div className="max-w-5xl mx-auto w-full">
          <div className="glass-dark p-8 sm:p-10 animate-fadeUp">
            <h2 className="text-2xl sm:text-3xl font-semibold">About Me</h2>
            <div className="mt-2 h-0.5 w-12" style={{ background: 'var(--accent)' }} />
            {/* Gradient avatar with initials */}
            <div className="mt-4">
              <span className="inline-flex items-center justify-center w-14 h-14 rounded-full border-2 shadow-lg"
                style={{
                  borderColor: 'var(--accent)',
                  background: 'radial-gradient(110% 110% at 30% 30%, rgba(20,184,166,0.35), rgba(14,165,233,0.22) 55%, rgba(255,255,255,0.06) 100%)',
                  boxShadow: '0 10px 30px rgba(20,184,166,0.15)'
                }}
              >
                <span className="text-sm font-semibold tracking-wide">GO</span>
              </span>
            </div>

            <p className="mt-4 text-zinc-100">
              I’m a curious builder who loves <span className="accent">clean design</span> and <span className="accent">helpful systems</span>. At my core, I believe technology should feel intuitive and empowering, not overwhelming.
            </p>

            <p className="mt-3 text-zinc-200">
              Currently in my third year of Computer Engineering at GCTU, I sit at the intersection of <span className="accent">Hardware systems</span>, <span className="accent">Software Development</span> and <span className="accent">product management</span>. My work spans from <span className="accent">hands-on engineering</span> to <span className="accent">high-level strategy</span>, where I enjoy translating <span className="accent">complex technical concepts</span> into solutions that people can actually use.
            </p>

            <p className="mt-3 text-zinc-200">
              As a <span className="accent">Product Manager</span> at Flywheel Technologies, I’ve led the launch of over 20 apps and websites for SMEs in Ghana, helping businesses <span className="accent">digitize operations</span>, <span className="accent">automate workflows</span>, and uncover <span className="accent">efficiency gains</span> they didn’t think were possible. I don’t just ship products, I partner with teams to craft <span className="accent">strategies that align with client goals</span>, making life easier for the end user.
            </p>

            <p className="mt-3 text-zinc-200">
              At Telecel Ghana, my intern role as a <span className="accent">Digital Transformation Analyst</span> deepens this passion. I collaborate with cross-functional teams to <span className="accent">reimagine processes</span>, <span className="accent">analyze data</span>, and guide the adoption of <span className="accent">digital tools</span> that reduce friction and unlock new opportunities.
            </p>

            <p className="mt-3 text-zinc-200">
              Beyond industry, I’m deeply invested in the future of <span className="accent">ethical and responsible AI</span>. I see AI as a powerful tool for progress, but only if guided with principles of <span className="accent">fairness, transparency, and impact</span>. That belief underpins everything I do from classroom projects to my independent research and community work.
            </p>

            <p className="mt-3 text-zinc-200">
              At heart, I’m driven by <span className="accent">curiosity, creativity, and a commitment to impact</span>. Whether I’m sketching ideas on a whiteboard, debugging a stubborn system, or mentoring younger students about STEM and robotics, I find joy in creating and sharing <span className="accent">solutions that matter</span>. My vision is simple: to contribute to a future where Africa doesn’t just consume technology, but <span className="accent">builds it, shapes it, and leads with it</span>.
            </p>

            <div className="mt-6">
              <a href="#contact" className="btn-accent inline-flex items-center gap-2 px-3 py-2 rounded-full">
                <span className="inline-block w-2 h-2 rounded-full" style={{ background: 'var(--accent)' }} />
                Let’s connect
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Past Experiences and Volunteering */}
      <section id="experience" className="anchor-offset px-6 sm:px-10 py-16">
        <div className="max-w-5xl mx-auto w-full">
          <div className="glass-dark p-8 sm:p-10 animate-fadeUp">
            <h2 className="text-2xl sm:text-3xl font-semibold">Experience</h2>
            <div className="mt-2 h-0.5 w-14" style={{ background: 'var(--accent)' }} />

            <div className="mt-6 grid gap-4">
              <div className="glass p-5 rounded-xl">
                <h3 className="text-lg font-semibold">
                  Digital Transformation Analyst — Telecel Ghana <span className="font-normal text-zinc-300">(Sep 2025 – Present)</span>
                </h3>
                <ul className="mt-3 list-disc pl-5 text-zinc-300">
                  <li>Spearheaded <span className="accent">process automation</span> initiatives in TCASH and DT teams.</li>
                  <li>Analyzed operational data and proposed <span className="accent">digital workflows</span> that improved cross-department efficiency.</li>
                  <li>Collaborated with IT and business units to design <span className="accent">scalable digital solutions</span> for customer and internal platforms.</li>
                  <li>Supported the rollout of new <span className="accent">enterprise systems</span>, ensuring smooth adoption through training and documentation.</li>
                </ul>
              </div>

              <div className="glass p-5 rounded-xl">
                <h3 className="text-lg font-semibold">
                  Product Manager — Flywheel Technologies Ltd. <span className="font-normal text-zinc-300">(2024 – Present)</span>
                </h3>
                <ul className="mt-3 list-disc pl-5 text-zinc-300">
                  <li>Launched <span className="accent">20+ apps & websites</span> with cross-functional teams, delivering projects on time and within scope.</li>
                  <li>Crafted <span className="accent">product strategies</span> aligned with client goals, resulting in <span className="accent">measurable efficiency gains</span>.</li>
                  <li>Engaged directly with SMEs to understand pain points and translate them into <span className="accent">technical requirements</span>.</li>
                  <li>Oversaw <span className="accent">end-to-end product lifecycle</span>: ideation, design, development, deployment, and optimization.</li>
                </ul>
              </div>

              <div className="glass p-5 rounded-xl">
                <h3 className="text-lg font-semibold">
                  Robotics Instructor — Ghana Communication Technology University <span className="font-normal text-zinc-300">(2025 – Present)</span>
                </h3>
                <ul className="mt-3 list-disc pl-5 text-zinc-300">
                  <li>Mentor and guide students in <span className="accent">robotics engineering</span> principles, embedded systems, and automation technologies.</li>
                  <li>Lead hands-on workshops and project-based learning sessions to develop <span className="accent">practical robotics skills</span>.</li>
                  <li>Coach student teams for <span className="accent">national and international robotics competitions</span>, focusing on innovation and problem-solving.</li>
                  <li>Organize and judge <span className="accent">hackathons and tech challenges</span> to foster creativity and collaboration among students.</li>
                  <li>Develop curriculum and learning materials that bridge <span className="accent">theoretical knowledge</span> with <span className="accent">real-world applications</span> in robotics and automation.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Contact Me */}
      <section id="contact" className="anchor-offset px-6 sm:px-10 py-16">
        <div className="max-w-4xl mx-auto w-full">
          <div className="glass-dark p-8 sm:p-10 animate-fadeUp">
            <h2 className="text-2xl sm:text-3xl font-semibold">Contact Me</h2>
            <div className="mt-2 h-0.5 w-12" style={{ background: 'var(--accent)' }} />
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div className="glass p-4 rounded-xl">
                <p>📧 <strong>Email:</strong> <a className="underline" href="mailto:godwinokro2020@gmail.com">godwinokro2020@gmail.com</a></p>
                <p className="mt-2">📱 <strong>Phone:</strong> +233 200 645 732</p>
              </div>
              <div className="glass p-4 rounded-xl flex gap-5 items-center">
                <a className="underline flex items-center gap-2 link-accent" href="https://www.linkedin.com/in/godwin-okronipa-5b59002b6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noreferrer">
                  <span className="inline-block w-2 h-2 rounded-full" style={{ background: 'var(--accent)' }} />
                  LinkedIn
                </a>
                <a className="underline flex items-center gap-2 link-accent" href="https://GitHub.com/GodwinOkronipa" target="_blank" rel="noreferrer">
                  <span className="inline-block w-2 h-2 rounded-full" style={{ background: 'var(--accent)' }} />
                  GitHub
                </a>
              </div>
            </div>

            <form className="mt-6 grid gap-3">
              <div className="grid gap-2">
                <label htmlFor="name">Name</label>
                <input id="name" name="name" className="glass bg-transparent px-3 py-2 rounded-lg outline-none" placeholder="Your name" />
              </div>
              <div className="grid gap-2">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" className="glass bg-transparent px-3 py-2 rounded-lg outline-none" placeholder="you@example.com" />
              </div>
              <div className="grid gap-2">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows={5} className="glass bg-transparent px-3 py-2 rounded-lg outline-none" placeholder="Say hello..." />
              </div>
              <button type="submit" className="glass px-5 py-2 rounded-lg w-fit hover:scale-[1.02] transition">
                Send
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}