(function () {
  const projects = window.PORTFOLIO_PROJECTS || [];
  const byId = new Map(projects.map((project) => [project.id, project]));
  const featuredHost = document.getElementById("project-featured");
  const gridHost = document.getElementById("project-grid");
  const dialog = document.getElementById("project-dialog");
  const dialogBody = document.getElementById("dialog-body");
  const dialogKicker = dialog.querySelector(".dialog-kicker");
  const closeButton = dialog.querySelector(".dialog-close");
  const baseTitle = document.title;

  let lastTrigger = null;
  let currentId = null;
  let pushedByOpen = false;

  function esc(value) {
    return String(value == null ? "" : value).replace(/[&<>"']/g, (char) => {
      return {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
      }[char];
    });
  }

  function hashProjectId() {
    if (location.hash.indexOf("#p-") !== 0) {
      return "";
    }
    try {
      return decodeURIComponent(location.hash.slice(3));
    } catch (error) {
      return "";
    }
  }

  function metricChips(metrics) {
    return metrics.map((metric) => `<span>${esc(metric)}</span>`).join("");
  }

  function featuredCard(project) {
    return `
      <a class="project-card featured" href="#p-${esc(project.id)}" data-project="${esc(project.id)}" aria-label="查看 ${esc(project.title)} 详情">
        <div class="featured-media">
          <img src="${esc(project.cover)}" alt="${esc(project.coverAlt)}" loading="eager" decoding="async">
          <span class="cover-badge">FEATURED</span>
        </div>
        <div class="featured-copy">
          <div class="card-kicker"><span class="card-no">${esc(project.no)}</span><span>${esc(project.type)}</span></div>
          <h3>${esc(project.title)}</h3>
          <p class="card-meta">${esc(project.meta)}</p>
          <p class="card-summary">${esc(project.tagline)}</p>
          <ul class="card-points">${project.cardPoints.map((point) => `<li>${esc(point)}</li>`).join("")}</ul>
          <div class="chip-row">${metricChips(project.metrics)}</div>
          <span class="card-cta">展开详情 <span aria-hidden="true">→</span></span>
        </div>
      </a>
    `;
  }

  function miniCard(project) {
    return `
      <a class="project-card mini" href="#p-${esc(project.id)}" data-project="${esc(project.id)}" aria-label="查看 ${esc(project.title)} 详情">
        <div class="card-media">
          <img src="${esc(project.cover)}" alt="${esc(project.coverAlt)}" loading="lazy" decoding="async">
          <span class="card-no">${esc(project.no)}</span>
        </div>
        <div class="card-body">
          <p class="card-type">${esc(project.type)}</p>
          <h3>${esc(project.title)}</h3>
          <p class="card-meta">${esc(project.meta)}</p>
          <p class="card-summary">${esc(project.tagline)}</p>
          <div class="chip-row">${metricChips(project.metrics)}</div>
          <span class="card-cta">展开详情 <span aria-hidden="true">→</span></span>
        </div>
      </a>
    `;
  }

  function mediaHtml(project, media) {
    const contain = media.fit === "contain" ? " contain" : "";
    const caption = media.caption ? `<figcaption>${esc(media.caption)}</figcaption>` : "";

    if (media.type === "model") {
      return `
        <figure class="media-item">
          <model-viewer src="${esc(media.src)}" poster="${esc(media.poster || "")}" alt="${esc(media.alt || project.title)}"
            camera-controls auto-rotate rotation-per-second="16deg" camera-orbit="-25deg 68deg auto"
            touch-action="pan-y" shadow-intensity="0.6" exposure="1.05" loading="lazy"></model-viewer>
          ${caption}
        </figure>
      `;
    }

    if (media.type === "video") {
      return `
        <figure class="media-item">
          <video controls playsinline preload="none" poster="${esc(media.poster || "")}" aria-label="${esc(media.aria || media.caption || project.title)}">
            <source src="${esc(media.src)}" type="video/mp4">
          </video>
          ${caption}
        </figure>
      `;
    }

    const alt = media.alt || project.title;
    return `
      <figure class="media-item${contain}">
        <a class="media-link" href="${esc(media.src)}" target="_blank" rel="noopener" aria-label="查看大图：${esc(alt)}">
          <img src="${esc(media.src)}" alt="${esc(alt)}" loading="lazy" decoding="async">
        </a>
        ${caption}
      </figure>
    `;
  }

  function detailHtml(project) {
    const layout = project.media.length > 2 ? "grid" : "stack";
    return `
      <div class="detail-media ${layout}">
        ${project.media.map((media) => mediaHtml(project, media)).join("")}
      </div>
      <div class="detail-copy">
        <p class="eyebrow">PROJECT ${esc(project.no)}</p>
        <h2 id="dialog-title">${esc(project.title)}</h2>
        <p class="detail-meta">${esc(project.meta)}</p>
        <p class="detail-summary">${esc(project.summary)}</p>
        <ul class="detail-points">
          ${project.bullets.map((bullet) => `<li><strong>${esc(bullet.label)}</strong><span>${esc(bullet.text)}</span></li>`).join("")}
        </ul>
        <div class="detail-metrics">${metricChips(project.metrics)}</div>
      </div>
    `;
  }

  function renderCards() {
    const featured = projects.find((project) => project.featured) || projects[0];
    const rest = projects.filter((project) => project !== featured);

    featuredHost.innerHTML = featured ? featuredCard(featured) : "";
    gridHost.innerHTML = rest.map(miniCard).join("");
  }

  function pauseMedia() {
    dialog.querySelectorAll("video").forEach((video) => {
      video.pause();
      video.currentTime = 0;
    });
  }

  function openProject(id, trigger, updateHistory) {
    const project = byId.get(id);
    if (!project) {
      return;
    }

    if (dialog.open && currentId === id) {
      return;
    }

    if (trigger) {
      lastTrigger = trigger;
    }

    currentId = id;
    dialogBody.innerHTML = detailHtml(project);
    dialogKicker.textContent = "PROJECT " + project.no + " / " + project.title;
    document.title = project.title + " · 林俊宏";
    document.body.classList.add("is-locked");

    if (!dialog.open) {
      dialog.showModal();
    }

    closeButton.focus({ preventScroll: true });
    dialogBody.scrollTop = 0;

    if (updateHistory) {
      const hash = "#p-" + id;
      if (location.hash !== hash) {
        history.pushState({ project: id }, "", hash);
        pushedByOpen = true;
      }
    } else if (history.state && history.state.project === id) {
      pushedByOpen = true;
    }
  }

  function closeProject(fromHistory) {
    pauseMedia();
    if (dialog.open) {
      dialog.close();
    }
    document.body.classList.remove("is-locked");
    dialogKicker.textContent = "PROJECT DETAIL";
    document.title = baseTitle;
    currentId = null;

    if (!fromHistory) {
      if (pushedByOpen) {
        pushedByOpen = false;
        history.back();
        return;
      }
      if (location.hash.indexOf("#p-") === 0) {
        history.replaceState(null, "", location.pathname + location.search);
      }
    } else {
      pushedByOpen = false;
    }

    if (lastTrigger && document.contains(lastTrigger)) {
      lastTrigger.focus({ preventScroll: true });
    }
    lastTrigger = null;
  }

  function syncFromLocation() {
    const id = hashProjectId();
    if (id && byId.has(id)) {
      openProject(id, null, false);
    } else if (dialog.open) {
      closeProject(true);
    }
  }

  document.addEventListener("click", (event) => {
    const card = event.target.closest("[data-project]");
    if (!card) {
      return;
    }
    event.preventDefault();
    openProject(card.dataset.project, card, true);
  });

  closeButton.addEventListener("click", () => closeProject(false));

  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) {
      closeProject(false);
    }
  });

  dialog.addEventListener("cancel", (event) => {
    event.preventDefault();
    closeProject(false);
  });

  window.addEventListener("popstate", syncFromLocation);

  renderCards();

  const initialId = hashProjectId();
  if (initialId && byId.has(initialId)) {
    if (history.state && history.state.project === initialId) {
      history.replaceState(null, "", location.hash);
    }
    openProject(initialId, null, false);
  }
})();