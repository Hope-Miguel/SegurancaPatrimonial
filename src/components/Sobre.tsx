export default function Sobre() {
  return (
    <>
      <section className="py-16 md:py-22">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h2 className="relative z-10 max-w-xl leading-tight text-4xl font-semibold lg:text-5xl">
            <span className="text-[#fab909]">Proteção e Confiança</span> Líderes
            em Segurança Patrimonial.
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            <div className="flex-1 relative h-full flex items-center justify-center">
              <div className="relative w-96 h-96">
                {/* Quadrado amarelo rotacionado com brilho */}
                <div className="absolute inset-0 bg-linear-to-br from-yellow-300 to-orange-400 rounded-3xl transform -rotate-12 shadow-2xl shadow-yellow-400/30"></div>

                {/* Elementos decorativos */}
                <div className="absolute -top-8 -right-8 w-32 h-32 border-2 border-purple-400/30 rounded-2xl transform rotate-45"></div>
                <div className="absolute -bottom-8 -left-8 w-40 h-40 border-2 border-yellow-400/20 rounded-3xl"></div>

                {/* Imagem principal */}
                <img
                  src="about.webp"
                  alt="Transformação"
                  className="relative w-full h-full object-cover rounded-3xl shadow-2xl"
                />

                {/* Overlay decorativo */}
                <div className="absolute inset-0 rounded-3xl bg-linear-to-tr from-purple-600/20 to-transparent"></div>
              </div>
            </div>

            <div className="relative space-y-4">
              <p className="text-muted-foreground">
                Somos uma empresa angolana especializada em segurança
                patrimonial, com mais de 15 anos de experiência no mercado.
                <span className="text-accent-foreground font-bold">
                  {" "}
                  Nossa missão é proteger o que mais importa para você: seu
                  patrimônio,{" "}
                </span>{" "}
                — sua família e seu negócio.
              </p>
              <p className="text-muted-foreground">
                Com uma equipe altamente qualificada e tecnologia de ponta,
                oferecemos soluções integradas de segurança que combinam
                vigilância humana, monitoramento eletrônico e sistemas
                inteligentes de controle de acesso.
              </p>

              <div className="pt-6">
                <blockquote className="border-l-4 pl-4">
                  <p>
                    Atendemos empresas, condomínios, residências e eventos em
                    toda Luanda, sempre com profissionalismo, discrição e
                    eficiência.
                  </p>

                  <div className="mt-6 space-y-3">
                    <cite className="block font-medium">
                      Otavia Miguel, CEO
                    </cite>
                    <img
                      className="h-5 w-fit dark:invert"
                      src="https://html.tailus.io/blocks/customers/nvidia.svg"
                      alt="Nvidia Logo"
                      height="20"
                      width="auto"
                    />
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
