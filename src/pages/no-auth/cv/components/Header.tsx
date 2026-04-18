import { Mail, MapPin, Linkedin } from 'lucide-react'
import fahmiImage from '@/assets/fahmi.webp'

export function Header() {
  return (
    <header className="bg-linear-to-br from-[#667eea] to-[#764ba2] text-white p-12 text-center">
      <img 
        src={fahmiImage} 
        alt="Fahmi Yuda Fauzi" 
        className="w-36 h-36 rounded-full border-4 border-white shadow-xl object-cover mx-auto mb-6"
      />
      <h1 className="text-4xl font-bold tracking-tight mb-3">FAHMI YUDA FAUZI</h1>
      <p className="text-xl font-light opacity-90 mb-6">
        Developer Empowered by AI — Smarter Code, Faster Results
      </p>
      <div className="flex flex-wrap justify-center gap-6 text-sm">
        <span className="flex items-center gap-2">
          <MapPin size={16} /> Kota Bekasi, West Java, Indonesia
        </span>
        <span className="flex items-center gap-2">
          <Mail size={16} /> fahmiyuda31@gmail.com
        </span>
        <a 
          href="https://www.linkedin.com/in/fahmi-yuda-fauzi-971944144" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:underline"
        >
          <Linkedin size={16} /> LinkedIn Profile
        </a>
      </div>
    </header>
  )
}
