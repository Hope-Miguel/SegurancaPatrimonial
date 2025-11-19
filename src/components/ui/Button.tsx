import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function Button() {
  
  return (
    <div className="">
     <Link href="/Forms">
                  <button className="group px-8 py-3 bg-linear-to-r from-yellow-400 to-orange-400 text-black font-bold rounded-lg hover:shadow-lg hover:shadow-yellow-400/50 transition-all duration-300 flex items-center gap-2">
               Formulário
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              </Link>
    </div>
  )
}