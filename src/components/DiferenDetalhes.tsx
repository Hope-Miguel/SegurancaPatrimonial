export default function FeatureGrid() {
  const items = [
    {
      id: 1,
      image: "/customer.png",
      title: "Suporte 24/7",
      text: "Atendimento disponível a qualquer hora, todos os dias do ano. Sua segurança não tira folga."
    },
    {
      id: 2,
      image: "/employee.png",
      title: "Profissionais Qualificados",
      text: "Equipe treinada e certificada com anos de experiência em segurança patrimonial."
    },
    {
      id: 3,
      image: "/locked.png",
      title: "Serviço Verificado",
      text: "Processos auditados e certificações reconhecidas. Qualidade comprovada em cada atendimento."
    },
    {
      id: 4,
      image: "/lock.png",
      title: "Proteção Garantida",
      text: "Tecnologia de ponta e protocolos rigorosos para máxima segurança do seu patrimônio."
    },
  ];

  return (
    <section className="py-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
          {items.map((item) => (
            <div key={item.id} className="">
              <img
                src={item.image}
                alt={item.title}
                className=" object-cover"
              />
              <h3 className="text-2xl font-semibold text-gray-800 mt-4 mb-4">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm ">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}