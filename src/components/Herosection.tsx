import Button from "./ui/Button";

export default function Herosection() {
  return (
    <>
      <main>
        <section
          className="overflow-hidden relative inset-0 bg-cover bg-top"
          style={{ backgroundImage: "url('/slide1.jpg')" }}
        >
          {/* Overlay escuro */}
          <div className="absolute inset-0 bg-black/60" />

          <div className="relative z-10 mx-auto max-w-5xl px-6 py-28 lg:py-25">
            <div className="lg:flex lg:items-center lg:gap-12">
              <div className="relative z-10 mx-auto max-w-xl text-center lg:ml-0 lg:w-1/2 lg:text-left">
                <h1 className="relative z-10 max-w-xl leading-tight text-white text-4xl font-semibold lg:text-5xl mb-6">
                  Proteja Seu Patrimônio{" "}
                  <span className="text-[#fab909]">Agora Mesmo</span>
                </h1>
                <p className="mt-8 text-white">
                  Soluções completas de segurança com tecnologia avançada e
                  profissionais certificados. Atendimento 24 horas, 7 dias por
                  semana.
                </p>

                <div className="mx-auto flex gap-4 my-10 max-w-sm lg:my-12 lg:ml-0 lg:mr-auto">
                  <div className="flex gap-4 pt-4">
                   <Button/>
                    <button className="px-8 py-3 border-2 border-yellow-400/50 text-purple-300 font-bold rounded-lg hover:bg-purple-400/10 transition-all duration-300">
                      Saiba Mais
                    </button>
                  </div>{" "}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
