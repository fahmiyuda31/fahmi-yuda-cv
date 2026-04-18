import { Printer } from 'lucide-react'
import { Header } from './components/Header'
import { 
  ProfileSection, 
  ExperienceSection, 
  EducationSection, 
  SkillsSection, 
  AdditionalSection 
} from './components/Sections'

export default function CVPage() {
  const handlePrint = () => {
    window.print()
  }

  return (
    <div className="min-h-screen py-10 px-4">
      <button 
        onClick={handlePrint}
        className="fixed bottom-8 right-8 bg-white text-primary w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110 hover:bg-primary hover:text-white z-50 group print:hidden"
        title="Generate PDF"
      >
        <Printer size={24} />
      </button>

      <div className="cv-container bg-white shadow-2xl rounded-3xl overflow-hidden max-w-3xl mx-auto">
        <Header />
        
        <main className="p-10">
          <ProfileSection />
          <ExperienceSection />
          <EducationSection />
          <SkillsSection />
          <AdditionalSection />
        </main>

        <footer className="bg-gray-50 p-8 text-center text-gray-400 text-sm border-t border-gray-100 italic">
          CV dibuat berdasarkan profil LinkedIn • Dapat diakses di www.linkedin.com/in/fahmi-yuda-fauzi-971944144
        </footer>
      </div>
    </div>
  )
}
