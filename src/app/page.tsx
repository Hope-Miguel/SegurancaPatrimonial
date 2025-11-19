import Diferenciais from "@/components/Diferenciais";
import FAQContacto from "@/components/FAQ&Contacto";
import Herosection from "@/components/Herosection";
import Nossosprofiss from "@/components/Nossosprofiss";
import Servicos from "@/components/Servicos";
import Sobre from "@/components/Sobre";

export default function Home() {
  return (
    <>
    
    <Herosection />
    <Sobre />
    <Servicos />
    <Diferenciais/>
    <Nossosprofiss/>
    <FAQContacto/>
    </>
  );
}
