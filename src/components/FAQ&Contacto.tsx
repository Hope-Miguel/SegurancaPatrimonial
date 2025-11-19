"use client";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Headphones, CreditCard, Award } from "lucide-react";
const faqs = [
  {
    icon: Headphones,
    title: "Posso obter ajuda 24/7?",
    description:
      "Sim! Nossa equipe está disponível 24 horas por dia, 7 dias por semana para atendê-lo. Oferecemos suporte contínuo através de telefone, email e chat online para garantir sua tranquilidade a qualquer momento.",
  },
  {
    icon: CreditCard,
    title: "Posso reembolsar o pagamento?",
    description:
      "Trabalhamos com políticas transparentes de cancelamento e reembolso. Entre em contato com nossa equipe comercial para discutir sua situação específica e encontrarmos a melhor solução para você.",
  },
  {
    icon: Award,
    title: "Quantos anos de experiência têm?",
    description:
      "Contamos com mais de 15 anos de experiência no mercado de segurança patrimonial em Angola. Nossa equipe é formada por profissionais certificados com vasta experiência no setor.",
  },
];

export default function FAQContacto() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Lógica para enviar o email
    const serviceId = "service_kmvd00a";
    const templateId = "template_bul16v5";
    const publicKey = "c0R75tW3NDY4pJtVt";

    const templateParams = {
      from_name: name,
      message: message,
      reply_to: email,
      phone_number: number,
    };
    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("EMAIL ENVIADO COM SUCESSO!", response);
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((err) => {
        console.log("FALHA AO ENVIAR EMAIL...", err);
      });
  };

  return (
    <>
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* FAQ Side */}
            <div>
              <h2 className="relative z-10 max-w-xl leading-tight text-4xl font-semibold lg:text-5xl mb-4">
                Perguntas <span className="text-[#fab909]">Frequentes</span>
              </h2>
              <p className="text-gray-600 mb-8">
                Tire suas dúvidas sobre nossos serviços
              </p>

              <div className="space-y-6">
                {faqs.map((faq, index) => {
                  const Icon = faq.icon;
                  return (
                    <div key={index} className="flex gap-4">
                      <div className="shrink-0">
                        <div className="w-12 h-12 bg-[#fab909]/10 rounded-lg flex items-center justify-center">
                          <Icon className="text-[#fab909]" size={24} />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">
                          {faq.title}
                        </h3>
                        <p className="text-gray-600 text-sm">
                          {faq.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Entre em Contacto
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#fab909] focus:border-transparent"
                    placeholder="Seu nome"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#fab909] focus:border-transparent"
                    placeholder="seu@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#fab909] focus:border-transparent"
                    placeholder="+244 XXX XXX XXX"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Mensagem
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#fab909] focus:border-transparent resize-none"
                    placeholder="Como podemos ajudá-lo?"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#fab909] text-white py-3 rounded-lg font-semibold hover:bg-[#d9a308] transition"
                >
                  Enviar Mensagem
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
