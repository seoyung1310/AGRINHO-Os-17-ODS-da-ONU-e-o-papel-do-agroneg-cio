const ods = {
  1: "Erradicação da Pobreza: geração de empregos e oportunidades de renda em áreas rurais.",
  2: "Fome Zero: aumento da produção agrícola sustentável e garantia da segurança alimentar.",
  3: "Saúde e Bem-Estar: produção de alimentos saudáveis e nutritivos.",
  4: "Educação de Qualidade: capacitação de agricultores e trabalhadores rurais.",
  5: "Igualdade de Gênero: empoderamento feminino no agronegócio.",
  6: "Água Potável e Saneamento: irrigação sustentável e conservação hídrica.",
  7: "Energia Limpa: uso de energias renováveis na produção agrícola.",
  8: "Trabalho Decente e Crescimento Econômico: geração de empregos e fortalecimento da economia local.",
  9: "Indústria, Inovação e Infraestrutura: adoção de tecnologias agrícolas modernas.",
  10: "Redução das Desigualdades: inclusão de pequenos agricultores e comunidades rurais.",
  11: "Cidades e Comunidades Sustentáveis: agricultura urbana e segurança alimentar.",
  12: "Consumo e Produção Responsáveis: redução de desperdícios e uso sustentável de recursos.",
  13: "Ação Contra a Mudança do Clima: redução das emissões de gases poluentes.",
  14: "Vida na Água: preservação de rios, lagos e ecossistemas aquáticos.",
  15: "Vida Terrestre: proteção da biodiversidade e recuperação ambiental.",
  16: "Paz, Justiça e Instituições Eficazes: políticas agrícolas justas e transparentes.",
  17: "Parcerias e Meios de Implementação: cooperação entre governos, empresas e sociedade civil."
};

function mostrarODS(numero) {
  const caixa = document.getElementById("infoODS");

  caixa.innerHTML = `
    <h3>${numero}ª ODS</h3>
    <p>${ods[numero]}</p>
  `;
}
