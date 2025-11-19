"use client";
import { Phone, Mail, MapPin, Shield, CheckCircle } from 'lucide-react';
import { useState } from 'react';

export default function FormularioSeguranca() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    tipo_propriedade: '',
    area_m2: '',
    servico: '',
    mensagem: ''
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    
    const dataToSend = new FormData();
    dataToSend.append('access_key', 'd2e48cee-be92-47ed-891a-f90c9dbe40c3');
    dataToSend.append('nome', formData.nome);
    dataToSend.append('email', formData.email);
    dataToSend.append('telefone', formData.telefone);
    dataToSend.append('tipo_propriedade', formData.tipo_propriedade);
    dataToSend.append('area_m2', formData.area_m2);
    dataToSend.append('servico', formData.servico);
    dataToSend.append('mensagem', formData.mensagem);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: dataToSend
      });

      const data = await response.json();

      if (data.success) {
        alert('Formulário enviado com sucesso! Em breve entraremos em contato.');
        setFormData({
          nome: '',
          email: '',
          telefone: '',
          tipo_propriedade: '',
          area_m2: '',
          servico: '',
          mensagem: ''
        });
      } else {
        alert('Erro ao enviar. Tente novamente.');
      }
    } catch (error) {
      console.error('Erro:', error);
      alert('Erro ao enviar formulário.');
    }
  };

  const beneficios = [
    {
      titulo: 'Monitoramento 24/7',
      descricao: 'Proteção contínua do seu patrimônio todos os dias'
    },
    {
      titulo: 'Tecnologia de Ponta',
      descricao: 'Câmeras 4K e sistemas inteligentes de IA'
    },
    {
      titulo: 'Resposta Rápida',
      descricao: 'Equipe pronta em menos de 5 minutos'
    },
    {
      titulo: 'Suporte Premium',
      descricao: 'Atendimento dedicado 24 horas por dia'
    },
    {
      titulo: 'Relatórios Detalhados',
      descricao: 'Análises completas de segurança e ocorrências'
    },
    {
      titulo: 'Preços Competitivos',
      descricao: 'As melhores taxas do mercado garantidas'
    }
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-100 to-slate-200">
      
      {/* Banner */}
      <div className="relative h-96 bg-linear-to-r from-blue-600 to-blue-800 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-size-[50px_50px]"></div>
        
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 h-full flex flex-col justify-center items-center text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Shield className="w-12 h-12 text-yellow-400" />
            <h1 className="text-5xl font-bold text-white">Solicitação de Segurança</h1>
          </div>
          <p className="text-xl text-blue-100 max-w-2xl">
            Proteja seu patrimônio com as melhores soluções de segurança do mercado
          </p>
        </div>
      </div>

      {/* Conteúdo Principal */}
      <div className="relative max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-8">
          
          {/* Formulário - Esquerda */}
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Solicite um Orçamento</h2>
            
            <div onSubmit={handleSubmit} className="space-y-5">
              
              {/* Nome e Email */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Nome Completo *</label>
                  <input
                    type="text"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg text-gray-800 placeholder-gray-500 focus:border-blue-500 focus:outline-none transition"
                    placeholder="Seu nome"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg text-gray-800 placeholder-gray-500 focus:border-blue-500 focus:outline-none transition"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              {/* Telefone e Tipo Propriedade */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Telefone *</label>
                  <input
                    type="tel"
                    name="telefone"
                    value={formData.telefone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg text-gray-800 placeholder-gray-500 focus:border-blue-500 focus:outline-none transition"
                    placeholder="(11) 99999-9999"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Tipo de Propriedade *</label>
                  <select
                    name="tipo_propriedade"
                    value={formData.tipo_propriedade}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg text-gray-800 focus:border-blue-500 focus:outline-none transition"
                  >
                    <option value="">Selecione</option>
                    <option value="residencial">Residencial</option>
                    <option value="comercial">Comercial</option>
                    <option value="industrial">Industrial</option>
                    <option value="condominio">Condomínio</option>
                  </select>
                </div>
              </div>

              {/* Área e Serviço */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Área (m²) *</label>
                  <input
                    type="number"
                    name="area_m2"
                    value={formData.area_m2}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg text-gray-800 placeholder-gray-500 focus:border-blue-500 focus:outline-none transition"
                    placeholder="Ex: 5000"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Serviço Desejado *</label>
                  <select
                    name="servico"
                    value={formData.servico}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg text-gray-800 focus:border-blue-500 focus:outline-none transition"
                  >
                    <option value="">Selecione</option>
                    <option value="vigilancia">Vigilância 24h</option>
                    <option value="cameras">Monitoramento de Câmeras</option>
                    <option value="alarme">Sistema de Alarme</option>
                    <option value="controle_acesso">Controle de Acesso</option>
                    <option value="completo">Pacote Completo</option>
                  </select>
                </div>
              </div>

              {/* Mensagem */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Mensagem / Observações</label>
                <textarea
                  name="mensagem"
                  value={formData.mensagem}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg text-gray-800 placeholder-gray-500 focus:border-blue-500 focus:outline-none transition resize-none"
                  placeholder="Descreva suas necessidades..."
                ></textarea>
              </div>

              {/* Botão Submit */}
              <button
                onClick={handleSubmit}
                className="w-full py-3 bg-linear-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Enviar Solicitação
              </button>
            </div>
          </div>

          {/* Card Benefícios - Direita (Fixo) */}
          <div className="sticky top-20 h-fit">
            <div className="bg-linear-to-br from-blue-50 to-white rounded-2xl p-8 shadow-xl border border-blue-100">
              
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Por que nos escolher?</h2>
              <p className="text-gray-600 mb-8">Confira todos os benefícios de ser nosso cliente</p>
              
              <div className="space-y-4">
                {beneficios.map((beneficio, index) => (
                  <div key={index} className="flex gap-3 p-3 rounded-lg hover:bg-blue-100 transition">
                    <CheckCircle className="w-6 h-6 text-blue-500 shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-gray-800">{beneficio.titulo}</h3>
                      <p className="text-sm text-gray-600">{beneficio.descricao}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Info de Contato */}
              <div className="mt-8 pt-8 border-t border-blue-200 space-y-3">
                <div className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-blue-500" />
                  <span className="text-gray-700"><strong>(244) 9000-0000</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-5 h-5 text-blue-500" />
                  <span className="text-gray-700"><strong>contato@seguranca.com</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-blue-500" />
                  <span className="text-gray-700"><strong>Luanda, Angola</strong></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}