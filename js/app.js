(function () {
  const app = document.getElementById('app');

  const ICON_MAIL = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2.5" y="5" width="19" height="14" rx="1.5" fill="currentColor" stroke="none"/><path d="M3 6.5l9 7 9-7" stroke="#fff" stroke-width="1.8"/></svg>';
  const ICON_GH = '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor" stroke-width="1.6"/><path fill="currentColor" d="M12 5.2a6.8 6.8 0 0 0-2.15 13.25c.34.06.46-.15.46-.33v-1.2c-1.9.41-2.3-.8-2.3-.8-.31-.79-.76-1-.76-1-.62-.42.05-.41.05-.41.69.05 1.05.71 1.05.71.61 1.05 1.6.75 1.99.57.06-.44.24-.75.43-.92-1.52-.17-3.12-.76-3.12-3.38 0-.75.27-1.36.7-1.84-.07-.17-.3-.87.07-1.8 0 0 .57-.18 1.88.7a6.5 6.5 0 0 1 3.42 0c1.3-.88 1.88-.7 1.88-.7.37.93.14 1.63.07 1.8.44.48.7 1.09.7 1.84 0 2.63-1.6 3.2-3.13 3.37.25.22.47.63.47 1.27v1.88c0 .18.12.4.47.33A6.8 6.8 0 0 0 12 5.2z"/></svg>';
  const ARROW_L = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M15 5l-7 7 7 7"/></svg>';
  const ARROW_R = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M9 5l7 7-7 7"/></svg>';

  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const li = (arr) => arr.map((t) => `<li>${esc(t)}</li>`).join('');

  let current = 0;

  /* ---------- 프로젝트 슬라이드 ---------- */
  function slideHtml(i) {
    const pr = PROJECTS[i];
    const total = PROJECTS.length;
    const prev = PROJECTS[(i - 1 + total) % total];
    const next = PROJECTS[(i + 1) % total];

    const half = Math.ceil(pr.stack.length / 2);
    const stackHtml = `<div class="stack"><ul class="bul">${li(pr.stack.slice(0, half))}</ul><ul class="bul">${li(pr.stack.slice(half))}</ul></div>`;

    const linkHtml = pr.github
      ? `<p class="proj-link">GitHub · <a href="${pr.github}" target="_blank" rel="noopener">${esc(pr.github)}</a></p>`
      : pr.site
        ? `<p class="proj-link">Service · <a href="${pr.site}" target="_blank" rel="noopener">${esc(pr.site)}</a></p>`
        : '';

    const details = pr.details.map((d) => `
      <section class="detail">
        <div class="detail__img"><img src="assets/images/${d.img}" alt="${esc(d.title)}"></div>
        <div class="vline"></div>
        <div>
          <h3>${esc(d.title)}</h3>
          <ul class="bul grp">
            ${d.groups.map((g) => `<li>${esc(g.h)}<ul class="bul sub">${li(g.sub)}</ul></li>`).join('')}
          </ul>
        </div>
      </section>`).join('');

    return `
      <div class="title-band">
        <div class="wrap band-row">
          <h3 class="band-title">${esc(pr.title)}</h3>
          <div class="arrows">
            <span class="count">${i + 1} / ${total}</span>
            <button type="button" class="arrow" data-dir="-1" aria-label="이전 프로젝트: ${esc(prev.title)}">${ARROW_L}</button>
            <button type="button" class="arrow" data-dir="1" aria-label="다음 프로젝트: ${esc(next.title)}">${ARROW_R}</button>
          </div>
        </div>
      </div>
      <div class="wrap">
        <section class="proj-top">
          <div class="shots ${pr.wide ? 'wide' : ''}">
            ${pr.shots.map((s) => `<img src="assets/images/${s}" alt="${esc(pr.title)} 화면">`).join('')}
          </div>
          <div class="vline"></div>
          <div class="info">
            <section>
              <h4>개요</h4>
              <dl class="kv">
                <dt>설명</dt><dd>${esc(pr.summary)}</dd>
                <dt>타겟층</dt><dd>${esc(pr.target)}</dd>
                <dt>진행기간</dt><dd>${esc(pr.periodLong)}</dd>
                <dt>인원</dt><dd>${esc(pr.team)}</dd>
              </dl>
            </section>
            <section>
              <h4>맡은 역할</h4>
              <ul class="bul">${li(pr.roles)}</ul>
            </section>
            <section>
              <h4>기술 스택</h4>
              ${stackHtml}
            </section>
            ${linkHtml}
          </div>
        </section>

        <section class="arch">
          <h4 class="sec-title">Architecture</h4>
          <img src="assets/images/${pr.architecture}" alt="${esc(pr.title)} 아키텍처">
        </section>

        ${details}

        <nav class="pager">
          <button type="button" class="pager__btn" data-dir="-1" aria-label="이전 프로젝트: ${esc(prev.title)}">${ARROW_L}<span>Prev</span></button>
          <button type="button" class="pager__btn" data-dir="1" aria-label="다음 프로젝트: ${esc(next.title)}"><span>Next</span>${ARROW_R}</button>
        </nav>
      </div>`;
  }

  function showSlide(i, scroll) {
    const total = PROJECTS.length;
    current = (i + total) % total;
    document.getElementById('slide').innerHTML = slideHtml(current);
    if (scroll) scrollToId('projects', 'auto');
  }

  function scrollToId(id, behavior) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: behavior || 'smooth' });
  }

  /* ---------- Home ---------- */
  function renderHome() {
    const p = PROFILE;
    const skills = p.skills.map((g) => `
      <div class="skill-group"><h3>${esc(g.group)}</h3><ul>${li(g.items)}</ul></div>`).join('');

    // 상단 미리보기 목록: 제목/자세히 보기를 누르면 아래 상세 섹션의 해당 프로젝트로 이동
    const preview = PROJECTS.map((pr) => {
      const links = [];
      if (pr.github) links.push(`<a href="${pr.github}" target="_blank" rel="noopener">${esc(pr.github)}</a>`);
      if (pr.site) links.push(`<a href="${pr.site}" target="_blank" rel="noopener">${esc(pr.site)}</a>`);
      return `
        <article class="proj-item" data-id="${esc(pr.id)}" tabindex="0" role="link" aria-label="${esc(pr.title)} 상세 보기">
          <h3>${esc(pr.title)} (${esc(pr.period)})</h3>
          <p class="desc">${esc(pr.summary)}</p>
          <p class="team">인원: ${esc(pr.team)}</p>
          <div class="links">${links.join('')}</div>
        </article>`;
    }).join('');

    app.innerHTML = `
      <section class="hero">
        <div class="hero__band"></div>
        <div class="wrap hero__inner">
          <div class="hero__photo"><img src="${p.photo}" alt="${esc(p.name)} 프로필 사진"></div>
          <div class="hero__side">
            <div class="hero__banner">
              <h1 class="hero__name">${esc(p.name)}</h1>
              <p class="hero__role">${esc(p.role)}</p>
            </div>
            <div class="hero__contact">
              <a href="mailto:${p.email}">${ICON_MAIL}<span>${esc(p.email)}</span></a>
              <a href="${p.github}" target="_blank" rel="noopener">${ICON_GH}<span>${esc(p.github)}</span></a>
            </div>
          </div>
        </div>
      </section>

      <div class="wrap">
        <section id="about" class="about">
          <h2 class="sec-title">About Me</h2>
          ${p.about.map((t) => `<p>${esc(t)}</p>`).join('')}
        </section>

        <div class="home-cols">
          <section id="projects-preview">
            <h2 class="sec-title">Projects</h2>
            <div class="proj-list">${preview}</div>
          </section>
          <section id="skills">
            <h2 class="sec-title">Skills</h2>
            ${skills}
          </section>
        </div>
      </div>

      <section id="projects" class="projects">
        <div class="wrap"><h2 class="sec-title">Project Details</h2></div>
        <div id="slide"></div>
      </section>`;

    // 프로젝트 요약 카드 전체 클릭(또는 Enter/Space): 상세로 이동. 카드 안의 외부 링크는 그대로 동작
    const list = app.querySelector('.proj-list');
    const openItem = (item) => route('#/projects/' + item.dataset.id);
    list.addEventListener('click', (e) => {
      if (e.target.closest('a')) return;
      const item = e.target.closest('.proj-item');
      if (item) openItem(item);
    });
    list.addEventListener('keydown', (e) => {
      if (e.key !== 'Enter' && e.key !== ' ') return;
      const item = e.target.closest('.proj-item');
      if (!item || e.target !== item) return;
      e.preventDefault();
      openItem(item);
    });

    // 화살표(밴드/하단) 클릭: 이벤트 위임
    document.getElementById('slide').addEventListener('click', (e) => {
      const btn = e.target.closest('[data-dir]');
      if (!btn) return;
      showSlide(current + Number(btn.dataset.dir), true);
    });
  }

  /* ---------- Router ---------- */
  function route(hash) {
    const parts = String(hash || '').replace(/^#\/?/, '').split('/');   // '', 'about', 'projects', 'projects/triplet'
    const first = parts[0];

    if (!document.getElementById('about')) {
      renderHome();
      showSlide(0, false);
    }

    if (first === 'projects' && parts[1]) {
      const idx = PROJECTS.findIndex((x) => x.id === parts[1]);
      if (idx >= 0 && idx !== current) showSlide(idx, false);
      scrollToId('projects');
    } else if (['about', 'projects', 'skills'].includes(first)) {
      scrollToId(first);
    } else {
      window.scrollTo(0, 0);
    }
  }

  // 키보드 좌/우 화살표로도 프로젝트 이동 (프로젝트 섹션이 화면에 보일 때)
  document.addEventListener('keydown', (e) => {
    if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return;
    const sec = document.getElementById('projects');
    if (!sec) return;
    const r = sec.getBoundingClientRect();
    if (r.top < window.innerHeight * 0.6 && r.bottom > 80) {
      showSlide(current + (e.key === 'ArrowRight' ? 1 : -1), false);
    }
  });

  // 사이트 내 링크(#/...)는 주소를 바꾸지 않고 직접 이동한다.
  // → 새로고침하면 항상 최상단에서 시작하고, 같은 메뉴를 다시 눌러도 동작한다.
  document.addEventListener('click', (e) => {
    const a = e.target.closest('a[href^="#/"]');
    if (!a) return;
    e.preventDefault();
    route(a.getAttribute('href'));
  });

  // 새로고침 시 이전 스크롤 위치/주소 해시를 복원하지 않고 최상단에서 시작
  if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
  if (location.hash) history.replaceState(null, '', location.pathname + location.search);
  route('');
})();
