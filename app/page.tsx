const services = [
  { n: "01", title: "Administração e execução de obras", text: "Planejamento e execução de obras residenciais e comerciais com controle de custos, prazos, qualidade e segurança." },
  { n: "02", title: "Projetos", text: "Desenvolvimento e análise técnica de projetos com soluções compatibilizadas, eficientes e adequadas a cada necessidade." },
  { n: "03", title: "Instalações", text: "Coordenação técnica para antecipar interferências, reduzir retrabalho e tornar a execução mais racional e econômica." },
  { n: "04", title: "Consultoria e gerenciamento", text: "Acompanhamento especializado, visão integral do projeto e decisões orientadas à qualidade em todas as etapas." },
];

const projects = [
  { title: "Congrats Hall", type: "Projeto executado", img: "/assets/images_portfolio_capa_2c6870003cbc392095aeeb4db5367832.jpg" },
  { title: "Condomínio Bosque de Patamares", type: "Reforma residencial", img: "/assets/images_portfolio_capa_713ca2b76c5b9be13380d955a9df3ed5.jpg" },
  { title: "Núcleo Clínico Cirúrgico", type: "Obra corporativa", img: "/assets/images_portfolio_capa_238d1f6d2463fd84761f964fc15b845d.jpg" },
  { title: "Apartamento Mansão das Dálias", type: "Reforma residencial", img: "/assets/images_portfolio_capa_dd5bd8565dd115ef15ceac899d1b895f.jpg" },
  { title: "Loja Doce Chaminé", type: "Obra comercial", img: "/assets/images_portfolio_capa_94252496a45d4fc39683633497ee03ad0.jpg" },
  { title: "Monte Pascoal Praia Hotel", type: "Hotelaria", img: "/assets/images_portfolio_capa_e85d674e318a1e3e522f18ce0ed671aa0.jpg" },
  { title: "Centro de Convenções Monte Pascoal", type: "Hotelaria e eventos", img: "/assets/images_portfolio_capa_54c55b02d029dbd3d7c19d2d05c2baa00.jpg" },
  { title: "Bravo Caminhões", type: "Obra corporativa", img: "/assets/images_portfolio_capa_0d412c20eb549f9ef220b0c17b64b60b0.jpg" },
  { title: "Condomínio Recanto de Vilas", type: "Obra residencial", img: "/assets/images_portfolio_capa_5c0ed211889aba690993db022feabe0f0.jpg" },
];

const clientLogos = [
  "00dc5b0ff2717f59875b776337f44067.png", "04cb49819b585365a85b2f46080f2e9e.jpg",
  "0ffc78cc6d851f16a701517b6f57bd83.png", "27ca97dd17c3d5b1a033d4858507ea5d.png",
  "28d8f21cadc0da9a50d3e04e202fff5f.png", "2c652434a3eb4086f5675add6b9cbe84.png",
  "30958014501a2e5098f78d5273d3cd4b.png", "35a59d79fdf6ddaf1116c8bdc2b9ecb9.png",
  "4281870daf80a8baf37acc4b6c983cec.png", "4aea94dc3992af0c1cf7fe2c28cafd9f.jpg",
  "50a2fed679549be25f2b106895df3dcd.jpg", "53af8945c2fbb1562ec62b52e8f4acf6.jpg",
  "5b57fffebacaff9cec3e9cadbd3466e0.png", "6661631f1b1bb92b5f7dbfcdf3c4e835.jpg",
  "7443e3ce54f3baacd23ca195fec1b8ea.jpg", "7820e1f08f82f2afd9fbb365dfd58d00.png",
  "81d254473ebdb75d10422bb048476df6.png", "ab931c599f54538609c6376e005c029f.jpg",
  "b0a66dd9fd5c8f9e77ed2d1685835fa4.png", "c1b6b1470eb8eb2b8fefbb10e45e3881.jpg",
  "d23b3424a2373a9a0a70cf6b0d715d14.png", "d9b15ac690a961181e79006284380819.png",
  "e70c24c88e3da1a150710031474e0f89.jpg", "ee6d694ccc7c73eeb9fd124fdf21b033.png",
  "f47f3d18448da6ea78258f97a4f044ff.png", "fd35f98c9048361dd277ebf617eac556.png",
];

function ClientsCarousel() {
  return (
    <section className="clients" aria-labelledby="clientes-titulo">
      <div className="container">
        <div className="clients-title"><h2 id="clientes-titulo">Clientes e Parceiros</h2><span /></div>
        <div className="clients-row">
          <div className="clients-track">
            {clientLogos.map((logo, index) => <div className="client-slide" key={logo}><img src={`/assets/clients/${logo}`} alt={`Cliente e parceiro Construart ${index + 1}`} /></div>)}
            {clientLogos.map((logo, index) => <div className="client-slide" key={`copy-${logo}`} aria-hidden="true"><img src={`/assets/clients/${logo}`} alt="" /></div>)}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main>
      <div className="topbar">
        <div className="container topbar-inner">
          <span>Engenharia civil em Salvador e região metropolitana</span>
          <div><a href="tel:+557141027293">(71) 4102-7293</a><i /> <a href="mailto:contato@construartengenharia.com.br">contato@construartengenharia.com.br</a></div>
        </div>
      </div>

      <header className="header">
        <div className="container nav-wrap">
          <a className="brand" href="#inicio" aria-label="Construart Engenharia — início">
            <img src="/assets/images_logo-d3773e2c2f05ffbd3b596c9da54bdd87.png" alt="Construart Engenharia" />
          </a>
          <nav aria-label="Navegação principal">
            <a href="#inicio">Início</a><a href="#empresa">A empresa</a><a href="#servicos">Serviços</a><a href="#portfolio">Portfólio</a>
          </nav>
          <a className="nav-cta" href="#contato">Solicitar orçamento <span>↗</span></a>
        </div>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-image" />
        <div className="hero-shade" />
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow light"><span /> Engenharia que constrói confiança</p>
            <h1>Transformamos projetos em obras de excelência.</h1>
            <p className="lead">Soluções completas em construção civil, do planejamento à entrega, com rigor técnico, gestão eficiente e compromisso com cada detalhe.</p>
            <div className="hero-actions">
              <a className="button primary" href="#contato">Fale com um especialista <b>↗</b></a>
              <a className="text-link" href="#portfolio">Conheça nossas obras <b>↓</b></a>
            </div>
          </div>
          <aside className="hero-card">
            <small>ATUAÇÃO</small>
            <strong>Obras de pequeno, médio e grande porte</strong>
            <p>Salvador, região metropolitana e interior da Bahia.</p>
            <div className="card-line"><span>Qualidade</span><span>Segurança</span><span>Economia</span></div>
          </aside>
        </div>
        <div className="scroll-note">CONSTRUART ENGENHARIA <span /></div>
      </section>

      <section className="trust-strip">
        <div className="container trust-grid">
          <div><b>01</b><span><strong>Qualidade em primeiro lugar</strong>Processos orientados à excelência</span></div>
          <div><b>02</b><span><strong>Atendimento personalizado</strong>Soluções para cada cliente</span></div>
          <div><b>03</b><span><strong>Melhor custo-benefício</strong>Eficiência sem abrir mão da qualidade</span></div>
        </div>
      </section>

      <section className="section about" id="empresa">
        <div className="container about-grid">
          <div className="about-visual">
            <img src="/assets/stock/about-survey.jpg" alt="Profissional realizando levantamento técnico em obra" />
            <div className="stamp"><strong>360°</strong><span>Gestão completa<br/>da sua obra</span></div>
          </div>
          <div className="about-copy">
            <p className="eyebrow"><span /> Sobre a Construart</p>
            <h2>Experiência técnica para construir com tranquilidade.</h2>
            <p>Administramos e executamos obras, instalações, serviços especializados, reformas e projetos de engenharia. Nossa atuação une conhecimento técnico, mão de obra experiente e gestão próxima para reduzir erros, retrabalhos e desperdícios.</p>
            <p>Da primeira análise à entrega, conduzimos cada etapa com transparência, segurança e foco no resultado.</p>
            <div className="about-points"><span>✓ Planejamento criterioso</span><span>✓ Equipe qualificada</span><span>✓ Gestão de prazos e custos</span><span>✓ Respeito às normas</span></div>
            <a className="inline-link" href="#servicos">Conheça nossas soluções <b>→</b></a>
          </div>
        </div>
      </section>

      <section className="section services" id="servicos">
        <div className="container">
          <div className="section-head">
            <div><p className="eyebrow light"><span /> O que fazemos</p><h2>Soluções completas para cada etapa da obra.</h2></div>
            <p>Atuação técnica integrada para transformar necessidades em projetos bem planejados, executados e gerenciados.</p>
          </div>
          <div className="service-grid">{services.map((s) => <article key={s.n} className="service-card"><small>{s.n}</small><div className="service-icon">⌁</div><h3>{s.title}</h3><p>{s.text}</p><a href="#contato" aria-label={`Solicitar orçamento para ${s.title}`}>Saiba mais <b>↗</b></a></article>)}</div>
        </div>
      </section>

      <section className="section portfolio" id="portfolio">
        <div className="container">
          <div className="portfolio-head"><div><p className="eyebrow"><span /> Portfólio</p><h2>Obras que traduzem nosso compromisso.</h2></div><p>Projetos residenciais, comerciais, corporativos e de hotelaria executados com atenção técnica e acabamento de qualidade.</p></div>
          <div className="project-grid">{projects.map((p, i) => <article className={`project project-${i+1}`} key={p.title}><img src={p.img} alt={p.title} /><div className="project-overlay"><small>{p.type}</small><h3>{p.title}</h3></div></article>)}</div>
        </div>
      </section>

      <ClientsCarousel />

      <section className="process section">
        <div className="container process-grid">
          <div><p className="eyebrow"><span /> Nosso processo</p><h2>Clareza do primeiro contato à entrega.</h2><p>Uma condução técnica simples de acompanhar, com decisões transparentes em cada etapa.</p></div>
          <ol><li><b>01</b><span><strong>Entendimento</strong>Levantamento das necessidades, objetivos e características do projeto.</span></li><li><b>02</b><span><strong>Planejamento</strong>Definição de escopo, soluções, cronograma e estimativa de investimento.</span></li><li><b>03</b><span><strong>Execução e gestão</strong>Acompanhamento técnico, controle de qualidade, prazo, custos e segurança.</span></li><li><b>04</b><span><strong>Entrega</strong>Validação final e conclusão com o padrão de qualidade Construart.</span></li></ol>
        </div>
      </section>

      <section className="contact section" id="contato">
        <div className="container contact-grid">
          <div className="contact-copy"><p className="eyebrow light"><span /> Fale conosco</p><h2>Vamos construir o seu próximo projeto?</h2><p>Conte-nos sobre sua necessidade. Nossa equipe entrará em contato para entender o escopo e orientar os próximos passos.</p><div className="contact-list"><a href="tel:+557141027293"><small>TELEFONE</small>(71) 4102-7293</a><a href="https://wa.me/5571991383933"><small>WHATSAPP</small>(71) 99138-3933</a><a href="mailto:contato@construartengenharia.com.br"><small>E-MAIL</small>contato@construartengenharia.com.br</a></div></div>
          <form className="contact-form"><div className="field-row"><label>Nome<input name="nome" placeholder="Como podemos chamar você?" /></label><label>Telefone<input name="telefone" placeholder="(71) 00000-0000" /></label></div><label>E-mail<input name="email" type="email" placeholder="seuemail@empresa.com.br" /></label><label>Como podemos ajudar?<select name="servico" defaultValue=""><option value="" disabled>Selecione um serviço</option><option>Execução de obras</option><option>Projetos</option><option>Instalações</option><option>Consultoria e gerenciamento</option></select></label><label>Mensagem<textarea name="mensagem" rows={3} placeholder="Conte brevemente sobre o seu projeto" /></label><a className="button primary submit" href="mailto:contato@construartengenharia.com.br">Enviar solicitação <b>↗</b></a></form>
        </div>
      </section>

      <footer><div className="container footer-top"><img src="/assets/images_logo-d3773e2c2f05ffbd3b596c9da54bdd87.png" alt="Construart Engenharia" /><p>Engenharia civil com qualidade, segurança e compromisso.</p><div><strong>Endereço</strong><span>Rua Dr. José Peroba, 297 — Sala 1305<br/>Stiep, Salvador — BA</span></div><div><strong>Navegação</strong><a href="#empresa">A empresa</a><a href="#servicos">Serviços</a><a href="#portfolio">Portfólio</a></div></div><div className="container footer-bottom"><span>© 2026 Construart Engenharia. Todos os direitos reservados.</span><a href="#inicio">Voltar ao topo ↑</a></div></footer>
      <a className="whatsapp" href="https://wa.me/5571991383933" aria-label="Entre em contato pelo WhatsApp">
        <span className="whatsapp-label">Entre em contato</span>
        <span className="whatsapp-icon"><img src="/assets/whatsapp.svg" alt="" /></span>
      </a>
    </main>
  );
}
