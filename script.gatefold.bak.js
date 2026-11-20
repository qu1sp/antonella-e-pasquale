/**
 * Matrimonio Elegante - Pasquale & Antonella
 * Gate-Fold Animation & Scroll Unlock Controller
 * Puro Vanilla JavaScript
 */

document.addEventListener('DOMContentLoaded', () => {
  const cardContainer = document.getElementById('cardContainer');
  const heroSection = document.getElementById('heroSection');
  const tapHint = document.getElementById('tapHint');
  const doorLeft = document.getElementById('doorLeft');
  const scrollIndicator = document.getElementById('scrollIndicator');
  const rsvpForm = document.getElementById('rsvpForm');
  const rsvpSuccess = document.getElementById('rsvpSuccess');

  let animationTriggered = false;
  let scrollUnlocked = false;

  // Assicuriamo lo stato bloccato iniziale
  document.body.classList.add('is-locked');
  document.documentElement.classList.add('is-locked');

  /**
   * Avvia la Gate-fold animation
   * Fase 1: Fade-out e scale-up del fiocco
   * Fase 2 & 3: Apertura 3D delle antine sinistra e destra
   * Fase 4: Rivelazione dell'invito sottostante
   */
  function triggerGateFoldAnimation() {
    if (animationTriggered) return;
    animationTriggered = true;

    // Aggiunge la classe che fa partire le transizioni CSS
    cardContainer.classList.add('is-open');

    // Timer di sicurezza o ascoltatore di transitionend per sbloccare lo scroll
    // L'animazione dura complessivamente ~1.95s (delay 0.35s + duration 1.6s)
    const animationDurationMs = 2100;

    let unlockedTimeout = setTimeout(() => {
      unlockPageScroll();
    }, animationDurationMs);

    if (doorLeft) {
      doorLeft.addEventListener('transitionend', (e) => {
        // Rileviamo il termine della trasformazione dell'antina
        if (e.propertyName === 'transform') {
          clearTimeout(unlockedTimeout);
          unlockPageScroll();
        }
      }, { once: true });
    }
  }

  /**
   * Rimuove il blocco dello scroll e attiva l'indicatore per continuare la lettura
   */
  function unlockPageScroll() {
    if (scrollUnlocked) return;
    scrollUnlocked = true;

    // Rimuove la classe di blocco da body e html
    document.body.classList.remove('is-locked');
    document.documentElement.classList.remove('is-locked');

    // Mostra l'indicatore di scorrimento verso il basso
    if (heroSection) {
      heroSection.classList.add('is-unlocked');
    }
  }

  // Trigger: Apertura ESCLUSIVAMENTE al clic / tap dell'utente
  if (cardContainer) {
    cardContainer.addEventListener('click', (e) => {
      e.stopPropagation();
      triggerGateFoldAnimation();
    });
    // Supporto accessibilità da tastiera (Enter o Barra Spaziatrice)
    cardContainer.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        triggerGateFoldAnimation();
      }
    });
  }

  if (tapHint) {
    tapHint.addEventListener('click', (e) => {
      e.stopPropagation();
      triggerGateFoldAnimation();
    });
  }

  // Clic su tutta la hero section per massima usabilità da mobile e desktop
  if (heroSection) {
    heroSection.addEventListener('click', () => {
      if (!animationTriggered) {
        triggerGateFoldAnimation();
      }
    });
  }

  // Click sull'indicatore di scorrimento per scendere comodamente ai dettagli
  if (scrollIndicator) {
    scrollIndicator.addEventListener('click', () => {
      const detailsSection = document.getElementById('weddingDetails');
      if (detailsSection) {
        detailsSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  // Gestione placeholder invio modulo RSVP
  if (rsvpForm) {
    rsvpForm.addEventListener('submit', (e) => {
      e.preventDefault();
      rsvpForm.style.display = 'none';
      if (rsvpSuccess) {
        rsvpSuccess.classList.add('is-visible');
      }
    });
  }
});
