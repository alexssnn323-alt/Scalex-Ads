'use strict';

(() => {
  const root = document.documentElement;
  const one = (selector, parent = document) => parent.querySelector(selector);
  const all = (selector, parent = document) => [...parent.querySelectorAll(selector)];
  const readPreference = (key) => { try { return localStorage.getItem(key); } catch { return null; } };
  const savePreference = (key, value) => { try { localStorage.setItem(key, value); } catch { /* Storage is optional. */ } };
  const english = Object.fromEntries(all('[data-t], [data-t-html]').map(element => [element.dataset.t || element.dataset.tHtml, element.dataset.tHtml ? element.innerHTML : element.textContent]));
  const translations = {
    en: english,
    es: {
      skip: 'Ir al contenido', nav_work: 'El diseño', nav_services: 'Servicios', nav_process: 'El proceso', nav_talk: 'Platiquemos', mobile_note: 'Un buen trabajo merece ser visto.',
      hero_eyebrow: 'Ideas propias. Diseño que destaca.', hero_title: 'Hecho para<br /><em>destacar.</em>', hero_desc: 'Tú haces un gran trabajo. Nosotros creamos las páginas web y los anuncios en Meta que ayudan a que las personas indicadas lo vean.', hero_cta: 'Hagamos crecer tu presencia', hero_explore: 'Explora el diseño', hero_footnote: 'Páginas web a medida · Publicidad en Meta · English & Español',
      demo_address: 'TU NEGOCIO, REIMAGINADO', mock_eyebrow: 'HECHO PARA DURAR. DISEÑADO PARA INSPIRAR.', mock_title: 'Una primera<br /><em>impresión sólida.</em>', mock_cta: 'Explora nuestro trabajo ↗', mock_phone: 'Bien hecho.<br />Desde los<br /><em>cimientos.</em>', mock_phone_cta: 'Platiquemos ↗', hero_design_label: 'Los detalles hacen la diferencia.', hero_design_note: 'Un concepto web de ScaleX Ads', hero_art_caption: 'Diseñado con intención. Hasta el último detalle.', hero_bottom: 'PARA LOS NEGOCIOS QUE CONSTRUYEN NUESTRA COMUNIDAD.', scroll: 'Sigue explorando',
      trade_remodel: 'REMODELACIÓN', trade_concrete: 'CONCRETO', trade_landscape: 'JARDINERÍA', trade_local: 'SERVICIOS LOCALES',
      work_label: '01 / EL DISEÑO', work_title: 'Tu trabajo.<br /><em>Más a la vista.</em>', work_desc: 'Tu página debe mostrar la mejor versión de tu negocio. Explora algunas ideas que podríamos llevar a la tuya.', concept_disclosure: 'Conceptos ilustrativos de diseño · No son proyectos de clientes',
      project_one_eyebrow: 'DISEÑO Y FUNCIONALIDAD', project_one_display: 'Hecho para<br /><em>lo que viene.</em>', project_one_cta: 'Descubre la diferencia ↗', project_one_title: 'Una base más sólida.', project_one_type: 'Concreto y construcción / Concepto web', project_two_eyebrow: 'EL EXTERIOR, REIMAGINADO.', project_two_display: 'Espacio<br />para <em>crecer.</em>', project_two_cta: 'Descubre tu exterior ↗', project_two_title: 'Una nueva perspectiva.', project_two_type: 'Jardinería / Concepto web', view_concept: 'Ver concepto', work_closing: 'La página que estás explorando también es nuestro trabajo. La tipografía, el movimiento y cada detalle son parte de lo que podemos llevar a la tuya.', work_your_turn: '¿Sigue tu negocio?',
      services_label: '02 / LO QUE HACEMOS', services_title: 'Un lugar al que llegar.<br /><em>Una razón para entrar.</em>', services_desc: 'Una buena página web y la publicidad bien pensada pueden trabajar juntas. Empieza por lo que tu negocio necesita.', service_web_title: 'Páginas web a medida', service_web_summary: 'Una primera impresión que se queda.', service_ads_title: 'Publicidad en Meta', service_ads_summary: 'Haz que tu negocio esté en la conversación.', services_note: 'Pensado para tu trabajo. Explicado en tu idioma. Inglés o español.',
      wire_title: 'Proyecta tu calidad.<br /><em>Deja tu huella.</em>', wire_cta: 'Platiquemos ↗', web_panel_title: 'Tu negocio, bien presentado.', web_panel_desc: 'Diseño a medida, información clara de tus servicios y fotos de tus propios proyectos. Con el mismo cuidado en celular y computadora.', web_feature_one: 'Diseño adaptable y movimiento cuidado', web_feature_two: 'Galerías de trabajos y zonas de servicio', web_feature_three: 'Opciones claras de contacto y presupuestos', web_feature_four: 'Plan de publicación y entrega acordada', web_panel_cta: 'Hablemos de tu página',
      ad_sponsored: 'Patrocinado · Concepto de diseño', ad_headline: 'Tu espacio.<br /><em>Reimaginado.</em>', ad_bottom: 'Dale vida a tu visión.', ad_learn: 'Más información ↗', ad_concept: 'CONCEPTO ILUSTRATIVO DE ANUNCIO · NO ES UNA CAMPAÑA ACTIVA', ads_panel_title: 'Buena creatividad. Un plan claro.', ads_panel_desc: 'Campañas en Facebook e Instagram pensadas para tus servicios, tu público y el tipo de consultas que le sirven a tu negocio.', ads_feature_one: 'Plan de campaña y configuración de público', ads_feature_two: 'Diseño y textos de anuncios', ads_feature_three: 'Pruebas y optimización continua', ads_feature_four: 'Reportes claros y comunicación', ads_terms: 'La inversión publicitaria es aparte de la tarifa de gestión. Antes de publicar, acordamos el alcance, presupuesto y reportes.', ads_panel_cta: 'Hablemos de anuncios en Meta',
      process_label: '03 / TODO CLARO', process_title: 'Lo bueno empieza<br /><em>con un plan claro.</em>', process_desc: 'Desde la primera conversación hasta el último detalle, sabrás qué estamos creando, por qué importa y qué sigue.', step_one_title: 'Nos entendemos.', step_one_desc: 'Conocemos tu negocio, tus clientes y hacia dónde quieres llevarlo.', step_one_tag: 'LA CONVERSACIÓN', step_two_title: 'Aclaramos todo.', step_two_desc: 'Acordamos el alcance, precio, plazo y costos antes de empezar.', step_two_tag: 'EL PLAN', step_three_title: 'Creamos con intención.', step_three_desc: 'El diseño, los textos y la creatividad toman forma. Revisas la propuesta y compartes tus comentarios.', step_three_tag: 'LOS DETALLES', step_four_title: 'Lo damos a conocer.', step_four_desc: 'Publicamos después de tu aprobación y seguimos el plan acordado de entrega web o gestión de campañas.', step_four_tag: 'EL SIGUIENTE CAPÍTULO',
      faq_label: 'ALGUNAS COSAS QUE DEBES SABER', faq_title: 'Hagámoslo<br /><em>sencillo.</em>', faq_one_q: '¿Necesito una página y anuncios?', faq_one_a: 'Puedes empezar por uno. Si tu presencia en línea necesita mejorar, una página puede ser el primer paso. Si ya tienes una oferta clara y un lugar útil al que enviar a las personas, podemos hablar de anuncios en Meta. Juntos vemos por dónde empezar.', faq_two_q: '¿Cuánto cuesta un proyecto?', faq_two_a: 'Primero definimos lo que necesitas. Antes de empezar, confirmamos el precio del sitio o la tarifa de gestión, el plazo, las revisiones y cualquier costo de dominio, alojamiento o publicidad.', faq_three_q: '¿Pueden actualizar mi página actual?', faq_three_a: 'Revisamos tu página, su plataforma y el acceso que tienes. Después te explicamos si conviene una renovación puntual o crear una nueva.', faq_four_q: '¿Podemos trabajar en español?', faq_four_a: 'Sí. Podemos platicar de tu proyecto, revisar los detalles y mantener la comunicación en español. Aquí no se pierde nada en la traducción.',
      contact_label: 'HAGAMOS ALGO QUE VALGA LA PENA VER.', contact_title: 'Tu siguiente<br /><em>capítulo.</em><span class="contact-star" aria-hidden="true">✳</span>', contact_desc: 'Cuéntanos de tu negocio. En una llamada gratis de 30 minutos, exploramos las posibilidades.', contact_cta: 'Empecemos la conversación', contact_message: 'O mándanos mensaje por Instagram', footer_tagline: 'Un buen trabajo merece ser visto.', footer_services: 'Páginas web y Meta ads / English & Español', back_top: 'Volver al inicio', concept_modal_label: 'CONCEPTO ILUSTRATIVO DE DISEÑO', preview_desktop: 'Computadora', preview_mobile: 'Celular', concept_modal_note: 'Una propuesta de diseño, no un proyecto terminado de un cliente. Contenido e imágenes de muestra.', concept_modal_cta: 'Creemos el tuyo'
    }
  };
  let language = readPreference('scalex_lang') === 'es' ? 'es' : 'en';
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let userPaused = readPreference('scalex_motion') === 'paused';
  const motionButton = one('#motion-control');
  const menu = one('#mobile-nav');
  const menuButton = one('#menu-toggle');
  const conceptDialog = one('#concept-dialog');
  const conceptFrame = one('#concept-frame');
  let currentProject = 'concrete';
  let conceptOpener = null;

  function applyLanguage(nextLanguage) {
    language = nextLanguage === 'es' ? 'es' : 'en';
    const dictionary = translations[language];
    all('[data-t]').forEach(element => { const value = dictionary[element.dataset.t]; if (typeof value === 'string') element.textContent = value; });
    all('[data-t-html]').forEach(element => { const value = dictionary[element.dataset.tHtml]; if (typeof value === 'string') element.innerHTML = value; });
    root.lang = language;
    all('[data-lang]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.lang === language)));
    document.title = language === 'es' ? 'ScaleX Ads — Páginas Web y Publicidad en Meta' : 'ScaleX Ads — Websites & Meta Ads for Local Businesses';
    one('meta[name="description"]').content = language === 'es' ? 'Páginas web a medida y publicidad en Meta para contratistas y negocios locales. ScaleX Ads ayuda a que tu trabajo destaque. Inglés y español.' : 'Distinctive websites and Meta ads for contractors and local service businesses. ScaleX Ads brings your work into focus. English and Spanish.';
    menuButton.setAttribute('aria-label', language === 'es' ? 'Abrir navegación' : 'Open navigation');
    one('#menu-close').setAttribute('aria-label', language === 'es' ? 'Cerrar navegación' : 'Close navigation');
    menu.setAttribute('aria-label', language === 'es' ? 'Navegación del sitio' : 'Site navigation');
    one('#concept-close').setAttribute('aria-label', language === 'es' ? 'Cerrar vista del concepto' : 'Close concept preview');
    all('.project-art').forEach(button => button.setAttribute('aria-label', language === 'es' ? `Explorar concepto web de ${button.dataset.project === 'concrete' ? 'concreto' : 'jardinería'}` : `Explore ${button.dataset.project === 'concrete' ? 'concrete' : 'landscaping'} website concept`));
    one('.hero-art').setAttribute('aria-label', language === 'es' ? 'Concepto ilustrativo de una página para un contratista de concreto' : 'Illustrative website design for a concrete contractor');
    savePreference('scalex_lang', language);
    updateMotionState();
    if (conceptDialog.open) renderConcept(currentProject);
  }

  function updateMotionState() {
    const paused = userPaused || reducedMotion.matches;
    root.classList.toggle('motion-paused', paused);
    motionButton.setAttribute('aria-pressed', String(paused));
    motionButton.disabled = reducedMotion.matches;
    motionButton.setAttribute('aria-label', language === 'es' ? (paused ? 'Reanudar animaciones decorativas' : 'Pausar animaciones decorativas') : (paused ? 'Resume decorative animations' : 'Pause decorative animations'));
    motionButton.title = motionButton.getAttribute('aria-label');
    if (paused) all('[data-tilt]').forEach(element => { element.style.removeProperty('--tilt-x'); element.style.removeProperty('--tilt-y'); });
  }
  motionButton.addEventListener('click', () => { userPaused = !userPaused; savePreference('scalex_motion', userPaused ? 'paused' : 'on'); updateMotionState(); });
  reducedMotion.addEventListener('change', updateMotionState);
  all('[data-lang]').forEach(button => button.addEventListener('click', () => applyLanguage(button.dataset.lang)));

  // Native dialogs handle focus containment and Escape without a custom focus trap.
  menuButton.addEventListener('click', () => { menu.showModal(); menuButton.setAttribute('aria-expanded', 'true'); document.body.style.overflow = 'hidden'; });
  one('#menu-close').addEventListener('click', () => menu.close());
  all('a', menu).forEach(link => link.addEventListener('click', () => menu.close()));
  menu.addEventListener('close', () => { menuButton.setAttribute('aria-expanded', 'false'); document.body.style.overflow = conceptDialog.open ? 'hidden' : ''; });
  window.matchMedia('(min-width: 741px)').addEventListener('change', event => { if (event.matches && menu.open) menu.close(); });

  // Content is visible by default; reveal enhancement is added only after setup.
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -18px 0px' });
    all('.reveal').forEach(element => observer.observe(element));
    all('.hero-copy .reveal, .process-step').forEach((element, index) => element.style.setProperty('--reveal-delay', `${(index % 5) * 75}ms`));
    root.classList.add('js-motion');
  }

  let scrollFrame = 0;
  function updateScroll() {
    const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    one('.scroll-progress').style.transform = `scaleX(${Math.min(1, Math.max(0, window.scrollY / maxScroll))})`;
    one('#header').classList.toggle('is-scrolled', window.scrollY > 60);
    scrollFrame = 0;
  }
  function scheduleScroll() { if (!scrollFrame) scrollFrame = requestAnimationFrame(updateScroll); }
  window.addEventListener('scroll', scheduleScroll, { passive: true });
  window.addEventListener('resize', scheduleScroll, { passive: true });
  document.addEventListener('visibilitychange', () => root.classList.toggle('tab-hidden', document.hidden));
  all('[data-tilt]').forEach(stage => {
    let pointerFrame = 0;
    const scene = stage.closest('.hero-art');
    stage.addEventListener('pointermove', event => {
      if (userPaused || reducedMotion.matches || event.pointerType !== 'mouse' || window.innerWidth < 741 || pointerFrame) return;
      pointerFrame = requestAnimationFrame(() => {
        const bounds = scene.getBoundingClientRect();
        const x = Math.max(-1, Math.min(1, ((event.clientX - bounds.left) / bounds.width - 0.5) * 2));
        const y = Math.max(-1, Math.min(1, ((event.clientY - bounds.top) / bounds.height - 0.5) * 2));
        stage.style.setProperty('--tilt-x', `${(x * 5).toFixed(2)}deg`);
        stage.style.setProperty('--tilt-y', `${(-y * 4).toFixed(2)}deg`);
        pointerFrame = 0;
      });
    });
    stage.addEventListener('pointerleave', () => { if (pointerFrame) cancelAnimationFrame(pointerFrame); pointerFrame = 0; stage.style.setProperty('--tilt-x', '0deg'); stage.style.setProperty('--tilt-y', '0deg'); });
  });

  const serviceTabs = all('[data-service]');
  function selectService(name, focus = false) {
    serviceTabs.forEach(button => {
      const active = button.dataset.service === name;
      button.classList.toggle('is-active', active);
      button.setAttribute('aria-selected', String(active));
      button.tabIndex = active ? 0 : -1;
      one(`#panel-${button.dataset.service}`).hidden = !active;
      if (active && focus) button.focus({ preventScroll: true });
    });
    scheduleScroll();
  }
  serviceTabs.forEach((button, index) => {
    button.addEventListener('click', () => selectService(button.dataset.service));
    button.addEventListener('keydown', event => {
      const keys = ['ArrowDown', 'ArrowUp', 'ArrowLeft', 'ArrowRight', 'Home', 'End'];
      if (!keys.includes(event.key)) return;
      event.preventDefault();
      const next = event.key === 'Home' ? 0 : event.key === 'End' ? serviceTabs.length - 1 : (index + (['ArrowDown', 'ArrowRight'].includes(event.key) ? 1 : -1) + serviceTabs.length) % serviceTabs.length;
      selectService(serviceTabs[next].dataset.service, true);
    });
  });

  // Fully responsive, isolated concept pages. Their links stay inside the demo.
  function conceptMarkup(project) {
    const isLandscape = project === 'landscape';
    const es = language === 'es';
    const asset = filename => new URL(`assets/${filename}`, document.baseURI).href;
    const image = asset(isLandscape ? 'landscaped-yard.webp' : 'concrete-home.webp');
    const secondaryImage = asset(isLandscape ? 'concrete-home.webp' : 'remodeled-kitchen.webp');
    const brand = isLandscape ? 'FIELDWORK' : 'FORM';
    const title = isLandscape ? (es ? 'Tu exterior,<br><em>reimaginado.</em>' : 'Your outdoors,<br><em>reimagined.</em>') : (es ? 'Bien pensado.<br><em>Mejor construido.</em>' : 'Thoughtfully built.<br><em>Beautifully finished.</em>');
    const intro = isLandscape ? (es ? 'Un espacio para<br>vivir afuera.' : 'More room<br>for life outside.') : (es ? 'El buen trabajo se nota<br>en cada detalle.' : 'Good work shows<br>in every detail.');
    const body = es ? 'Un diseño pensado para mostrar tus servicios, dar espacio a tus mejores fotos y facilitar que las personas conozcan tu negocio.' : 'A considered design that gives your services clarity, your project photos room to breathe, and your customers a useful place to start.';
    const featureNames = isLandscape ? (es ? ['Diseño de jardines', 'Espacios al aire libre', 'Cuidado de temporada'] : ['Garden design', 'Outdoor living', 'Seasonal care']) : (es ? ['Concreto y cimientos', 'Remodelación de interiores', 'Construcción a medida'] : ['Concrete & foundations', 'Interior renovations', 'Custom construction']);
    const label = es ? 'CONCEPTO DE DISEÑO POR SCALEX ADS · NEGOCIO E IMÁGENES ILUSTRATIVOS' : 'A DESIGN CONCEPT BY SCALEX ADS · ILLUSTRATIVE BUSINESS & IMAGERY';
    return `<!DOCTYPE html><html lang="${es ? 'es' : 'en'}"><head><base href="about:srcdoc"><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>${brand} — ${es ? 'Concepto web' : 'Website concept'}</title><style>
      *{box-sizing:border-box;margin:0}html{scroll-behavior:smooth;scroll-padding-top:20px}body{font-family:Arial,sans-serif;background:${isLandscape ? '#e9eee3' : '#efede6'};color:#293326;line-height:1.6}a{color:inherit;text-decoration:none}a:focus-visible{outline:2px solid #cba76b;outline-offset:5px}em{font-family:Georgia,serif;font-weight:400}img{display:block;max-width:100%}.notice{text-align:center;padding:8px 18px;font-size:7px;letter-spacing:.12em;background:#293326;color:#fff}.hero{height:570px;min-height:450px;position:relative;color:#fff;background:#293326;overflow:hidden}.hero>img{position:absolute;width:100%;height:100%;object-fit:cover}.shade{position:absolute;inset:0;background:linear-gradient(90deg,#0c1c0cbc,#15201318),linear-gradient(0deg,#11200e66,transparent 65%)}nav{position:relative;z-index:1;display:flex;justify-content:space-between;align-items:center;gap:20px;padding:28px 6%;border-bottom:1px solid #ffffff42}.brand{font-size:25px;letter-spacing:-.04em}.nav-links{display:flex;gap:25px;font-size:9px}.copy{position:absolute;left:6%;bottom:65px;right:6%}.eyebrow{font-size:8px;letter-spacing:.16em;margin-bottom:17px}h1{font-size:clamp(48px,6.8vw,78px);letter-spacing:-.055em;line-height:1.05;font-weight:400}.cta{display:inline-flex;gap:30px;padding:12px 20px;background:#f0ede4;color:#293326;font-size:10px;margin-top:25px}.intro{padding:70px 6% 50px;display:grid;grid-template-columns:1.2fr 1fr;gap:45px;align-items:end}.intro h2{font-weight:400;font-size:36px;letter-spacing:-.045em;line-height:1.15}.intro p{font-size:12px;line-height:1.9;max-width:350px;color:#5f6859}.features{display:grid;grid-template-columns:repeat(3,1fr);gap:25px;padding:0 6% 65px}.feature{border-top:1px solid #33432c44;padding-top:18px}.feature small{font-size:9px;color:#7a876d}.feature h3{font-size:15px;font-weight:400;margin-top:19px}.feature p{font-size:11px;color:#5f6859;margin-top:9px;line-height:1.8}.projects{padding:0 6% 65px}.projects .eyebrow{color:#68775b}.project-grid{display:grid;grid-template-columns:1.2fr 1fr;gap:22px}.project-grid img{width:100%;aspect-ratio:1.2;object-fit:cover}.project-grid figure:nth-child(2){padding-top:40px}.project-grid figcaption{font-size:10px;color:#5f6859;margin-top:10px}.closing{background:#293326;color:#f0ede4;padding:55px 6%;display:flex;justify-content:space-between;align-items:end;gap:30px}.closing h2{font-size:42px;font-weight:400;letter-spacing:-.05em;line-height:1.1}.closing p{font-size:10px;color:#c3cbba;max-width:225px}.closing .cta{font-size:9px;margin-top:0}footer{display:flex;justify-content:space-between;gap:20px;padding:24px 6%;font-size:8px;color:#68775b}@media(max-width:600px){.notice{font-size:6px;line-height:1.6}.hero{height:550px}.hero>img{object-position:58% center}nav{padding:24px 7%}.brand{font-size:23px}.nav-links{gap:15px;font-size:8px}.copy{left:7%;right:7%;bottom:55px}h1{font-size:52px;line-height:1.07}.eyebrow{font-size:6px;letter-spacing:.13em}.intro{grid-template-columns:1fr;padding:45px 7% 33px;gap:22px}.intro h2{font-size:32px}.intro p{font-size:12px}.features{grid-template-columns:1fr;padding:0 7% 40px;gap:22px}.feature h3{margin-top:10px}.feature p{margin-top:5px}.projects{padding:0 7% 40px}.project-grid{grid-template-columns:1fr}.project-grid figure:nth-child(2){padding-top:0}.closing{padding:40px 7%;align-items:start;flex-direction:column;gap:23px}.closing h2{font-size:38px}.closing p{max-width:300px}.closing .cta{margin-top:0}footer{font-size:7px;padding:22px 7%}}@media(prefers-reduced-motion:reduce){html{scroll-behavior:auto}}
      </style></head><body><div class="notice">${label}</div><section class="hero"><img src="${image}" alt="${es ? 'Fotografía conceptual de arquitectura y exteriores' : 'Concept photography of architecture and outdoor spaces'}"><div class="shade"></div><nav><a class="brand" href="#">${brand}</a><div class="nav-links"><a href="#about">${es ? 'Nosotros' : 'Our approach'}</a><a href="#projects">${es ? 'Proyectos' : 'The work'}</a></div></nav><div class="copy"><p class="eyebrow">${isLandscape ? 'LANDSCAPE / OUTDOOR LIVING' : 'CONCRETE / REMODELING / CRAFT'}</p><h1>${title}</h1><a class="cta" href="#projects">${es ? 'Explora los proyectos' : 'Explore the work'} <span>↗</span></a></div></section><section class="intro" id="about"><h2>${intro}</h2><p>${body}</p></section><div class="features">${featureNames.map((name, index) => `<article class="feature"><small>0${index + 1} /</small><h3>${name}</h3><p>${es ? 'Un espacio claro para explicar este servicio y ayudar al cliente a entender lo que ofreces.' : 'A clear place to explain this service and help customers understand what you offer.'}</p></article>`).join('')}</div><section class="projects" id="projects"><p class="eyebrow">${es ? 'UNA NUEVA PERSPECTIVA / IMÁGENES DE CONCEPTO' : 'A FRESH PERSPECTIVE / CONCEPT IMAGERY'}</p><div class="project-grid"><figure><img src="${image}" alt="${es ? 'Imagen conceptual del diseño principal' : 'Main design concept image'}"><figcaption>${es ? 'Espacios bien pensados.' : 'Spaces, considered.'}</figcaption></figure><figure><img src="${secondaryImage}" alt="${es ? 'Imagen conceptual de materiales y arquitectura' : 'Concept image of materials and architecture'}"><figcaption>${es ? 'Los detalles hacen la diferencia.' : 'The details make the difference.'}</figcaption></figure></div></section><section class="closing"><h2>${es ? 'Tu visión.<br><em>Bien presentada.</em>' : 'Your vision.<br><em>Beautifully presented.</em>'}</h2><p>${es ? 'Esto es una propuesta de diseño. Usa el enlace debajo de esta vista para platicar de tu propia página web.' : 'This is an illustrative design direction. Use the link below this preview to talk about your own website.'}</p><a class="cta" href="#">${es ? 'Volver al inicio ↑' : 'Back to the top ↑'}</a></section><footer><span>${brand} / ${es ? 'CONCEPTO DE DISEÑO' : 'DESIGN CONCEPT'}</span><span>DESIGN BY SCALEX ADS</span></footer></body></html>`;
  }

  function renderConcept(project) {
    currentProject = project === 'landscape' ? 'landscape' : 'concrete';
    one('#concept-dialog-title').textContent = currentProject === 'landscape' ? (language === 'es' ? 'FIELDWORK / Jardinería' : 'FIELDWORK / Landscaping') : (language === 'es' ? 'FORM / Concreto y construcción' : 'FORM / Concrete & construction');
    conceptFrame.title = language === 'es' ? 'Concepto interactivo de página para contratistas' : 'Interactive contractor website design concept';
    conceptFrame.srcdoc = conceptMarkup(currentProject);
  }
  all('[data-project]').forEach(button => button.addEventListener('click', () => {
    conceptOpener = button;
    renderConcept(button.dataset.project);
    conceptFrame.classList.remove('is-mobile');
    all('[data-preview-size]').forEach(control => control.setAttribute('aria-pressed', String(control.dataset.previewSize === 'desktop')));
    conceptDialog.showModal();
    document.body.style.overflow = 'hidden';
  }));
  one('#concept-close').addEventListener('click', () => conceptDialog.close());
  conceptDialog.addEventListener('close', () => { document.body.style.overflow = menu.open ? 'hidden' : ''; if (conceptOpener) conceptOpener.focus({ preventScroll: true }); });
  conceptDialog.addEventListener('click', event => { if (event.target !== conceptDialog) return; const rect = conceptDialog.getBoundingClientRect(); if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) conceptDialog.close(); });
  all('[data-preview-size]').forEach(button => button.addEventListener('click', () => {
    conceptFrame.classList.toggle('is-mobile', button.dataset.previewSize === 'mobile');
    all('[data-preview-size]').forEach(control => control.setAttribute('aria-pressed', String(control === button)));
  }));

  one('#year').textContent = new Date().getFullYear();
  applyLanguage(language);
  updateScroll();
})();
