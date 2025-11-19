import { MessageCircle, Phone, Facebook, Instagram, Linkedin} from "lucide-react";

export default function Banner() {
  return (
    <>
      <nav className="bg-[#020e2a] text-white px-6 py-2.5 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10 sm:px-3.5 sm:before:flex-1">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
         
          <div className="text-sm font-medium flex gap-4">
            <a href="tel:+244123456789" className="flex items-center gap-2">
              <Phone size={15} className="text-[#fab909]" />
              <span>+244 923 456 789</span>
            </a>
            <a href="tel:+244123456789" className="flex items-center gap-2">
              <MessageCircle size={15} className="text-[#fab909]" />
              <span>Live Chat</span>
            </a>
            
          </div>

           <div className="text-sm font-medium flex items-center gap-2">
            <span className="text-sm font-extrabold text-[#fab909]">Segui-nos:</span>
      <a href="#" className="hover:text-blue-400">
        <Facebook size={15} />
      </a>
      <a href="#" className="hover:text-pink-400">
        <Instagram size={15} />
      </a>
      <a href="#" className="hover:text-blue-500">
        <Linkedin size={15} />
      </a>
          </div>
        </div>
      </nav>
    </>
  );
}
