/**
 * ============================================================================
 * Matrimonio Antonella & Pasquale — Web App / Dashboard Ospiti
 * Vanilla JavaScript ES6+ | Mobile-First Modal & RSVP Management
 * ============================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  // Elementi DOM Principali
  const modalBackdrop = document.getElementById('modalBackdrop');
  const modalSheet = document.getElementById('modalSheet');
  const modalBody = document.getElementById('modalBody');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const navButtons = document.querySelectorAll('[data-modal-target]');

  let currentActiveTrigger = null;

  /**
   * Apre la finestra Modale / Bottom Sheet caricando il template corrispondente
   * @param {string} targetId - ID del target (es: "modal-evento")
   * @param {HTMLElement} triggerBtn - Il pulsante che ha scatenato l'apertura
   */
  function openModal(targetId, triggerBtn) {
    const template = document.getElementById(`tmpl-${targetId}`);
    if (!template) return;

    currentActiveTrigger = triggerBtn;

    // Clona il contenuto dal template HTML
    modalBody.innerHTML = '';
    const content = template.content.cloneNode(true);
    modalBody.appendChild(content);

    // Mostra la modale
    modalBackdrop.classList.add('is-active');
    modalBackdrop.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden'; // Evita scroll sottostante

    if (triggerBtn) {
      triggerBtn.setAttribute('aria-expanded', 'true');
    }

    // Inizializza eventuali funzionalità interne al template aperto
    bindModalSpecificEvents(targetId);

    // Focus accessibile sulla modale
    setTimeout(() => {
      modalSheet.focus();
    }, 100);
  }

  /**
   * Chiude la modale / Bottom sheet
   */
  function closeModal() {
    if (!modalBackdrop.classList.contains('is-active')) return;

    modalBackdrop.classList.remove('is-active');
    modalBackdrop.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';

    if (currentActiveTrigger) {
      currentActiveTrigger.setAttribute('aria-expanded', 'false');
      currentActiveTrigger.focus();
      currentActiveTrigger = null;
    }
  }

  /**
   * Listener sui 4 bottoni della dashboard
   */
  navButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const target = btn.getAttribute('data-modal-target');
      openModal(target, btn);
    });
  });

  // Chiusura al clic sul pulsante X
  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      closeModal();
    });
  }

  // Chiusura cliccando sul backdrop esterno alla card
  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) {
        closeModal();
      }
    });
  }

  // Chiusura con tasto Escape (Accessibilità)
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalBackdrop.classList.contains('is-active')) {
      closeModal();
    }
  });

  /**
   * Supporto gesture swipe verso il basso per chiudere la sheet su mobile
   */
  let touchStartY = 0;
  let touchEndY = 0;

  if (modalSheet) {
    modalSheet.addEventListener('touchstart', (e) => {
      touchStartY = e.changedTouches[0].screenY;
    }, { passive: true });

    modalSheet.addEventListener('touchend', (e) => {
      touchEndY = e.changedTouches[0].screenY;
      const swipeDistance = touchEndY - touchStartY;
      // Se lo swipe è verso il basso di almeno 80px e il body della sheet è in cima
      if (swipeDistance > 80 && modalBody.scrollTop <= 10) {
        closeModal();
      }
    }, { passive: true });
  }

  /**
   * Logica specifica per ciascuna modale
   */
  function bindModalSpecificEvents(modalId) {
    // 1. EVENTO: Aggiungi al Calendario (download iCal .ics)
    if (modalId === 'modal-evento') {
      const btnCalendar = document.getElementById('btnAddToCalendar');
      if (btnCalendar) {
        btnCalendar.addEventListener('click', generateCalendarInvite);
      }
    }

    // 2. RSVP: Gestione invio e persistenza con localStorage
    if (modalId === 'modal-rsvp') {
      setupRsvpForm();
    }
  }

  /**
   * Generatore file evento .ics per Google Calendar / Apple Calendar
   */
  function generateCalendarInvite() {
    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Antonella & Pasquale Wedding//IT',
      'CALSCALE:GREGORIAN',
      'METHOD:PUBLISH',
      'BEGIN:VEVENT',
      'UID:wedding-antonella-pasquale-2027@masseriabonelli.it',
      'DTSTAMP:20261108T120000Z',
      'DTSTART:20270822T143000Z', // 16:30 locale (CEST = UTC+2)
      'DTEND:20270823T020000Z',
      'SUMMARY:Matrimonio Antonella & Pasquale',
      'DESCRIPTION:Celebrazione delle nozze di Antonella & Pasquale - Domenica 22 Agosto 2027 a Masseria Bonelli (Noci, Puglia).',
      'LOCATION:Masseria Bonelli, Strada Provinciale 161, 70015 Noci BA, Italia',
      'STATUS:CONFIRMED',
      'END:VEVENT',
      'END:VCALENDAR'
    ].join('\r\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', 'Matrimonio_Antonella_e_Pasquale.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  /**
   * Gestione del Form RSVP con persistenza in LocalStorage
   */
  function setupRsvpForm() {
    const form = document.getElementById('sheetRsvpForm');
    const successBox = document.getElementById('rsvpSuccessBox');
    const successText = document.getElementById('rsvpSuccessText');
    const btnEdit = document.getElementById('btnEditRsvp');
    const nameInput = document.getElementById('rsvpName');
    const dietaryInput = document.getElementById('rsvpDietary');
    const messageInput = document.getElementById('rsvpMessage');
    const guestsSelect = document.getElementById('rsvpGuests');
    const guestsCountField = document.getElementById('guestsCountField');
    const attendanceRadios = document.querySelectorAll('input[name="rsvpAttendance"]');

    if (!form) return;

    // Nasconde numero ospiti se la risposta è "No"
    attendanceRadios.forEach(radio => {
      radio.addEventListener('change', () => {
        if (guestsCountField) {
          guestsCountField.style.display = radio.value === 'no' ? 'none' : 'flex';
        }
      });
    });

    // Controllo se esiste già una risposta salvata in precedenza
    const savedRsvp = localStorage.getItem('wedding_rsvp_antonella_pasquale') || localStorage.getItem('wedding_rsvp_pasquale_antonella');
    if (savedRsvp) {
      try {
        const data = JSON.parse(savedRsvp);
        showSuccessView(data.name, data.attendance);
      } catch (e) {
        console.error('Errore lettura RSVP salvato', e);
      }
    }

    // Invio Form
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = nameInput.value.trim();
      if (!name) {
        nameInput.focus();
        nameInput.style.borderColor = '#B55838';
        return;
      }

      const attendance = document.querySelector('input[name="rsvpAttendance"]:checked')?.value || 'si';
      const guests = guestsSelect ? guestsSelect.value : '2';
      const dietary = dietaryInput ? dietaryInput.value.trim() : '';
      const message = messageInput ? messageInput.value.trim() : '';

      const rsvpPayload = {
        name,
        attendance,
        guests: attendance === 'si' ? guests : '0',
        dietary,
        message,
        timestamp: new Date().toISOString()
      };

      // Salvataggio nel browser dell'ospite
      localStorage.setItem('wedding_rsvp_antonella_pasquale', JSON.stringify(rsvpPayload));

      // Mostra feedback visivo
      showSuccessView(name, attendance);
    });

    function showSuccessView(guestName, attendance) {
      form.style.display = 'none';
      successBox.style.display = 'block';

      if (attendance === 'no') {
        successText.textContent = `Grazie ${guestName}. Ci dispiace che tu non possa essere presente, sarai comunque nei nostri cuori!`;
      } else {
        successText.textContent = `Grazie ${guestName}! La tua presenza renderà questo giorno davvero indimenticabile. Non vediamo l'ora di festeggiare insieme!`;
      }
    }

    // Permette di riaprire e modificare il form
    if (btnEdit) {
      btnEdit.addEventListener('click', () => {
        successBox.style.display = 'none';
        form.style.display = 'flex';
        nameInput.focus();
      });
    }
  }

  /**
   * ==========================================================================
   * CONTO ALLA ROVESCIA (COUNTDOWN) PER IL 22 AGOSTO 2027 ORE 16:30
   * ==========================================================================
   */
  function initCountdown() {
    const cdDays = document.getElementById('cdDays');
    const cdHours = document.getElementById('cdHours');
    const cdMinutes = document.getElementById('cdMinutes');
    const cdSeconds = document.getElementById('cdSeconds');

    if (!cdDays || !cdHours || !cdMinutes || !cdSeconds) return;

    // Data del matrimonio: 22 Agosto 2027 alle 16:30 (CEST = UTC+2)
    const weddingDate = new Date('2027-08-22T16:30:00+02:00').getTime();

    function updateCountdown() {
      const now = new Date().getTime();
      const distance = weddingDate - now;

      if (distance <= 0) {
        cdDays.textContent = '0';
        cdHours.textContent = '00';
        cdMinutes.textContent = '00';
        cdSeconds.textContent = '00';
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      cdDays.textContent = String(days);
      cdHours.textContent = String(hours).padStart(2, '0');
      cdMinutes.textContent = String(minutes).padStart(2, '0');
      cdSeconds.textContent = String(seconds).padStart(2, '0');
    }

    // Esegui subito e aggiorna ogni secondo
    updateCountdown();
    setInterval(updateCountdown, 1000);
  }

  // Avvio del conto alla rovescia
  initCountdown();
});
