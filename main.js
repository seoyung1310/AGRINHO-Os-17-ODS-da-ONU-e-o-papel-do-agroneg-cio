const ods = {
  1: "ODS 1 - Erradicação da Pobreza: geração de empregos e oportunidades de renda em áreas rurais.",

  2: "ODS 2 - Fome Zero: aumento da produção agrícola sustentável, garantindo segurança alimentar e nutrição adequada.",

  3: "ODS 3 - Saúde e Bem-Estar: práticas agrícolas promovem alimentos saudáveis e nutritivos.",

  4: "ODS 4 - Educação de Qualidade: capacitação de trabalhadores e agricultores sobre práticas sustentáveis.",

  5: "ODS 5 - Igualdade de Gênero: fortalecimento da participação feminina no agronegócio.",

  6: "ODS 6 - Água Potável e Saneamento: uso de irrigação sustentável e conservação dos recursos hídricos.",

  7: "ODS 7 - Energia Limpa: utilização de energias renováveis na produção agrícola.",

  8: "ODS 8 - Trabalho Decente e Crescimento Econômico: geração de empregos dignos e crescimento econômico local.",

  9: "ODS 9 - Indústria, Inovação e Infraestrutura: adoção de tecnologias que aumentam a eficiência agrícola.",

  10: "ODS 10 - Redução das Desigualdades: inclusão de pequenos agricultores e comunidades rurais.",

  11: "ODS 11 - Cidades e Comunidades Sustentáveis: agricultura urbana e promoção da segurança alimentar.",

  12: "ODS 12 - Consumo e Produção Responsáveis: redução de desperdícios e uso sustentável dos recursos.",

  13: "ODS 13 - Ação Contra a Mudança Global do Clima: práticas agrícolas que reduzem emissões de gases poluentes.",

  14: "ODS 14 - Vida na Água: preservação dos recursos hídricos e dos ecossistemas aquáticos.",

  15: "ODS 15 - Vida Terrestre: preservação da biodiversidade e recuperação de ecossistemas.",

  16: "ODS 16 - Paz, Justiça e Instituições Eficazes: promoção de políticas agrícolas justas e transparentes.",

  17: "ODS 17 - Parcerias e Meios de Implementação: fortalecimento da cooperação entre governos, empresas e sociedade civil."
};

function mostrarODS(numero) {
  const caixa = document.getElementById("infoODS");

  caixa.innerHTML = `
    <h3>${numero}ª ODS</h3>
    <p>${ods[numero]}</p>
  `;
}

function mostrarListaODS() {
  const lista = document.getElementById("listaODS");

  if (lista.style.display === "block") {
    lista.style.display = "none";
    return;
  }

  lista.style.display = "block";

  lista.innerHTML = `
    <h2>🌍 Lista Completa das 17 ODS</h2>
    <ul>
      <li>ODS 1 - Erradicação da Pobreza</li>
      <li>ODS 2 - Fome Zero</li>
      <li>ODS 3 - Saúde e Bem-Estar</li>
      <li>ODS 4 - Educação de Qualidade</li>
      <li>ODS 5 - Igualdade de Gênero</li>
      <li>ODS 6 - Água Potável e Saneamento</li>
      <li>ODS 7 - Energia Limpa</li>
      <li>ODS 8 - Trabalho Decente e Crescimento Econômico</li>
      <li>ODS 9 - Indústria, Inovação e Infraestrutura</li>
      <li>ODS 10 - Redução das Desigualdades</li>
      <li>ODS 11 - Cidades e Comunidades Sustentáveis</li>
      <li>ODS 12 - Consumo e Produção Responsáveis</li>
      <li>ODS 13 - Ação Contra a Mudança do Clima</li>
      <li>ODS 14 - Vida na Água</li>
      <li>ODS 15 - Vida Terrestre</li>
      <li>ODS 16 - Paz, Justiça e Instituições Eficazes</li>
      <li>ODS 17 - Parcerias e Meios de Implementação</li>
    </ul>
  `;
}ª ODS</h3>
    <p>${ods[numero]}</p>
  `;
}
