import { User, Briefcase, GraduationCap, Zap, BarChart3 } from 'lucide-react'

export function ProfileSection() {
  return (
    <section className="mb-10">
      <h2 className="section-title">
        <User className="text-primary" /> Profil Profesional
      </h2>
      <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-primary shadow-sm leading-relaxed text-gray-700">
        Seorang developer yang berdedikasi dengan fokus pada pengembangan solusi cerdas menggunakan
        kecerdasan buatan (AI). Memiliki semangat untuk menciptakan kode yang lebih efisien dan cepat
        dengan memanfaatkan teknologi terbaru. Berbasis di Kota Bekasi dengan pengalaman di industri
        teknologi.
      </div>
    </section>
  )
}

export function ExperienceSection() {
  return (
    <section className="mb-10">
      <h2 className="section-title">
        <Briefcase className="text-primary" /> Pengalaman Kerja
      </h2>
      <div className="experience-item">
        <h3 className="text-lg font-semibold text-gray-900">Developer</h3>
        <div className="text-primary font-medium my-1">Ravelware Technology</div>
        <div className="text-gray-500 text-sm mb-3">Saat ini</div>
        <p className="text-gray-600 leading-relaxed">
          [Deskripsi pekerjaan - tanggung jawab dan pencapaian utama]
        </p>
      </div>
    </section>
  )
}

export function EducationSection() {
  return (
    <section className="mb-10">
      <h2 className="section-title">
        <GraduationCap className="text-primary" /> Pendidikan
      </h2>
      <div className="education-item">
        <h3 className="text-lg font-semibold text-gray-900">Universitas Singaperbangsa Karawang</h3>
        <div className="text-gray-500 text-sm my-1">Sarjana Teknik / Ilmu Komputer</div>
        <p className="text-gray-600 leading-relaxed">
          Menempuh pendidikan tinggi di Universitas Singaperbangsa Karawang yang membangun fondasi kuat
          dalam bidang teknologi dan pengembangan perangkat lunak.
        </p>
      </div>
    </section>
  )
}

export function SkillsSection() {
  const skills = [
    "AI Development", "Software Development", "Web Development", 
    "Problem Solving", "Kecerdasan Buatan", "Coding"
  ]
  return (
    <section className="mb-10">
      <h2 className="section-title">
        <Zap className="text-primary" /> Keahlian Teknis
      </h2>
      <div className="flex flex-wrap gap-3">
        {skills.map(skill => (
          <span key={skill} className="skill-tag">
            {skill}
          </span>
        ))}
      </div>
    </section>
  )
}

export function AdditionalSection() {
  return (
    <section>
      <h2 className="section-title">
        <BarChart3 className="text-primary" /> Informasi Tambahan
      </h2>
      <ul className="space-y-3 text-gray-700">
        <li className="flex items-center gap-2">
          <span className="text-primary">👥</span> 64 Connections di LinkedIn
        </li>
        <li className="flex items-center gap-2">
          <span className="text-primary">👀</span> Aktif membangun jaringan profesional
        </li>
        <li className="flex items-center gap-2">
          <span className="text-primary">✅</span> Profil LinkedIn terverifikasi
        </li>
        <li className="flex items-center gap-2">
          <span className="text-primary">🌐</span> Bahasa: Indonesia, English
        </li>
      </ul>
    </section>
  )
}
