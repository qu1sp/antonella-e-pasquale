/**
 * ============================================================================
 * Matrimonio Antonella & Pasquale — Web App / Dashboard Ospiti (Versione 11)
 * Vanilla JavaScript ES6+ | Mobile-First Modal, RSVP & Sistema Bilingue (IT / EN)
 * ============================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  // --------------------------------------------------------------------------
  // 1. DIZIONARIO TRADUZIONI BILINGUE (ITALIANO / ENGLISH)
  // --------------------------------------------------------------------------
  const translations = {
    it: {
      // Hero & Countdown
      cd_days: 'GIORNI',
      cd_hours: 'ORE',
      cd_minutes: 'MINUTI',
      cd_minutes_short: 'MIN',
      cd_seconds: 'SECONDI',
      cd_seconds_short: 'SEC',
      cd_tagline: "fino all'inizio del nostro per sempre",
      scroll_cta: 'Scorri per scoprire',
      lang_name: 'Italiano',

      // Citazione d'Amore
      quote_v1: 'Una vita accanto,',
      quote_v2: 'la mente funziona a incastro,',
      quote_v3: 'A capire a fondo il mondo',
      quote_v4: "ogni giorno ti serve l'altro.",

      // Bottoni Principali
      btn_rsvp: 'R.S.V.P. — CONFERMA PRESENZA',
      btn_evento: "L'Evento",
      btn_luogo: 'Il Luogo',
      btn_logistica: 'Logistica',
      btn_valle: "Valle d'Itria",

      // Modal: L'Evento
      evento_kicker: 'Il Programma',
      evento_title: "L'Evento",
      evento_subtitle: 'Domenica 22 Agosto 2027 · Ore 16:30',
      evento_t1_title: 'Accoglienza & Benvenuto',
      evento_t1_desc: 'Benvenuto tra i giardini della Masseria con infusi freschi e rinfresco estivo pugliese.',
      evento_t2_title: 'La Cerimonia',
      evento_t2_desc: 'Rito immerso tra querce secolari e profumo di terra pugliese.',
      evento_t3_title: "Aperitivo nell'Aia",
      evento_t3_desc: 'Musica dal vivo, finger food locale e tramonto tra i muretti a secco.',
      evento_t4_title: 'Cena sotto le Stelle',
      evento_t4_desc: 'Banchetto conviviale con i sapori autentici della nostra terra e vini selezionati.',
      evento_t5_title: 'Taglio Torta & Party',
      evento_t5_desc: 'Dolci della tradizione, open bar e danze fino a notte fonda.',
      evento_btn_cal: 'Aggiungi al Calendario (iCal / Google)',

      // Modal: Il Luogo
      luogo_kicker: 'La Nostra Cornice',
      luogo_title: 'Il Luogo',
      luogo_subtitle: 'Masseria Bonelli · Noci (Bari)',
      luogo_story: "Un'antica masseria fortificata del XVII secolo incastonata tra ulivi secolari, trulli storici e boschi di querce. Un luogo autentico dove il tempo sembra essersi fermato per celebrare l'amore.",
      luogo_info_addr_label: 'Indirizzo',
      luogo_info_addr_val: 'Strada Provinciale 161, 70015 Noci (BA)',
      luogo_info_coords_label: 'Coordinate',
      luogo_info_dress_label: 'Dress Code',
      luogo_info_dress_val: 'Eleganza estiva pugliese (abiti leggeri e calzature adatte al prato)',
      luogo_btn_maps: 'Apri in Google Maps',

      // Modal: Logistica
      logistica_kicker: 'Come Raggiungerci',
      logistica_title: 'Logistica & Viaggi',
      logistica_subtitle: 'Tutte le informazioni per arrivare e soggiornare sereni',
      logistica_air_title: 'Aeroporti Consigliati',
      logistica_air_desc: 'Bari Karol Wojtyła (BRI) dista circa 65 km (50 min in auto). Brindisi Papola Casale (BDS) dista circa 75 km (55 min in auto). Consigliamo il noleggio auto per muoversi liberamente in Valle d\'Itria.',
      logistica_train_title: 'In Treno',
      logistica_train_desc: 'Stazione Centrale di Bari, poi treno regionale o transfer privato per Noci/Alberobello.',
      logistica_shuttle_title: 'Navetta & Parcheggio',
      logistica_shuttle_desc: 'Ampio parcheggio privato all\'interno della Masseria. Su richiesta nella conferma RSVP organizzeremo navette dagli hotel convenzionati.',
      logistica_stay_title: 'Dove Alloggiare',
      logistica_stay_desc: 'Abbiamo selezionato e concordato tariffe speciali con alcune strutture di charme tra Noci e Alberobello:',
      logistica_code_label: 'Convenzione "Matrimonio Antonella & Pasquale"',
      logistica_btn_shuttle: 'Richiedi Assistenza Navetta',

      // Modal: Valle d'Itria
      valle_kicker: 'Guida per gli Ospiti',
      valle_title: "Valle d'Itria",
      valle_subtitle: 'I nostri luoghi del cuore da esplorare durante il vostro soggiorno',
      valle_alb_title: 'Alberobello',
      valle_alb_desc: 'Patrimonio UNESCO, celebre in tutto il mondo per la sua distesa di oltre mille trulli in pietra viva (a 12 minuti dalla Masseria).',
      valle_loc_title: 'Locorotondo',
      valle_loc_desc: 'Uno dei borghi più belli d\'Italia: vicoli bianchi immacolati, balconi fioriti e viste mozzafiato sulla valle punteggiata di vigneti.',
      valle_mart_title: 'Martina Franca',
      valle_mart_desc: 'Eleganza barocca, palazzi nobiliari rococò e patria del rinomato Capocollo di Martina Franca.',
      valle_sea_title: 'Polignano a Mare & Monopoli',
      valle_sea_desc: 'A soli 30 minuti: scogliere a picco sul mare turchese, calette nascoste e passeggiate serali nei porticcioli antichi.',

      // Modal: R.S.V.P.
      rsvp_kicker: 'La Vostra Presenza',
      rsvp_title: 'R.S.V.P.',
      rsvp_subtitle: 'Vi preghiamo di confermare entro il 14 Febbraio 2027',
      rsvp_name_label: 'Nome e Cognome *',
      rsvp_name_ph: 'es: Mario Rossi',
      rsvp_att_label: 'Confermi la tua presenza? *',
      rsvp_att_yes: 'Sì, ci sarò con gioia!',
      rsvp_att_no: 'Purtroppo non potrò',
      rsvp_guests_label: 'Numero Totale Ospiti *',
      rsvp_guests_ph: 'es: 2',
      rsvp_children_label: 'Ci sono bambini?',
      rsvp_children_yes: 'Sì',
      rsvp_children_no: 'No',
      rsvp_children_opt_title: 'Opzioni per i bambini:',
      rsvp_kids_menu: 'Menu bambini',
      rsvp_kids_animation: 'Animazione per bambini',
      rsvp_diet_label: 'Intolleranze, allergie o preferenze alimentari',
      rsvp_diet_ph: 'es: Nessuna intolleranza, celiachia, vegetariano...',
      rsvp_msg_label: 'Vuoi dirci qualcosa? (facoltativo)',
      rsvp_msg_ph: 'Scrivi qui eventuali note o richieste...',
      rsvp_btn_submit: 'CONFERMA PARTECIPAZIONE',
      rsvp_sending: 'INVIO IN CORSO...',
      rsvp_success_title: 'Risposta Registrata!',
      rsvp_success_yes: 'Grazie {name}! La tua presenza renderà questo giorno davvero indimenticabile. La conferma è stata inviata a Pasquale e Antonella!',
      rsvp_success_no: 'Grazie {name}. Ci dispiace che tu non possa essere presente, sarai comunque nei nostri cuori!',
      rsvp_btn_edit: 'Modifica la tua risposta',

      // Calendar invite texts
      ics_summary: 'Matrimonio Antonella & Pasquale',
      ics_desc: 'Celebrazione delle nozze di Antonella & Pasquale - Domenica 22 Agosto 2027 a Masseria Bonelli (Noci, Puglia).'
    },

    en: {
      // Hero & Countdown
      cd_days: 'DAYS',
      cd_hours: 'HOURS',
      cd_minutes: 'MINUTES',
      cd_minutes_short: 'MIN',
      cd_seconds: 'SECONDS',
      cd_seconds_short: 'SEC',
      cd_tagline: 'until forever begins',
      scroll_cta: 'Scroll to explore',
      lang_name: 'English',

      // Love Quote (Poetic English Translation)
      quote_v1: 'A lifetime side by side,',
      quote_v2: 'two minds intertwined,',
      quote_v3: 'To truly understand the world',
      quote_v4: 'each day you need the other.',

      // Main Buttons
      btn_rsvp: 'R.S.V.P. — CONFIRM ATTENDANCE',
      btn_evento: 'The Event',
      btn_luogo: 'The Venue',
      btn_logistica: 'Logistics',
      btn_valle: 'Itria Valley',

      // Modal: The Event
      evento_kicker: 'The Schedule',
      evento_title: 'The Event',
      evento_subtitle: 'Sunday, August 22, 2027 · 4:30 PM',
      evento_t1_title: 'Welcome & Refreshments',
      evento_t1_desc: 'Welcome in the Masseria gardens with refreshing infusions and Apulian summer delicacies.',
      evento_t2_title: 'The Ceremony',
      evento_t2_desc: 'The ceremony nestled among ancient olive trees, oak woods, and the scent of Apulia.',
      evento_t3_title: 'Aperitif in the Courtyard',
      evento_t3_desc: 'Live music, local artisanal tastings, and sunset over the dry-stone walls.',
      evento_t4_title: 'Dinner Under the Stars',
      evento_t4_desc: 'A convivial feast featuring authentic flavors of our land and selected wines.',
      evento_t5_title: 'Cake Cutting & Party',
      evento_t5_desc: 'Traditional sweets, open bar, and dancing late into the night.',
      evento_btn_cal: 'Add to Calendar (iCal / Google)',

      // Modal: The Venue
      luogo_kicker: 'Our Setting',
      luogo_title: 'The Venue',
      luogo_subtitle: 'Masseria Bonelli · Noci (Bari)',
      luogo_story: 'A 17th-century fortified Masseria nestled among centuries-old olive trees, historic trulli, and gentle oak forests. An authentic sanctuary where time stands still to celebrate love.',
      luogo_info_addr_label: 'Address',
      luogo_info_addr_val: 'Strada Provinciale 161, 70015 Noci (BA), Italy',
      luogo_info_coords_label: 'Coordinates',
      luogo_info_dress_label: 'Dress Code',
      luogo_info_dress_val: 'Apulian Summer Elegance (light fabrics and lawn-friendly footwear)',
      luogo_btn_maps: 'Open in Google Maps',

      // Modal: Logistics
      logistica_kicker: 'Travel & Stay',
      logistica_title: 'Logistics & Travel',
      logistica_subtitle: 'Everything you need to arrive easily and enjoy your stay',
      logistica_air_title: 'Recommended Airports',
      logistica_air_desc: 'Bari Karol Wojtyła (BRI) is approx. 65 km away (50 min drive). Brindisi Papola Casale (BDS) is approx. 75 km away (55 min drive). We recommend renting a car to freely explore the beauty of the Itria Valley.',
      logistica_train_title: 'By Train',
      logistica_train_desc: 'Bari Central Station, then regional train or private transfer to Noci/Alberobello.',
      logistica_shuttle_title: 'Shuttle & Parking',
      logistica_shuttle_desc: 'Spacious private parking inside the Masseria. Upon request in your RSVP confirmation, we will arrange shuttles from recommended partner hotels.',
      logistica_stay_title: 'Where to Stay',
      logistica_stay_desc: 'We have reserved special arrangements with several charming accommodations between Noci and Alberobello:',
      logistica_code_label: 'Code: "Antonella & Pasquale Wedding"',
      logistica_btn_shuttle: 'Request Shuttle Assistance',

      // Modal: Itria Valley
      valle_kicker: 'Guest Guide',
      valle_title: 'Itria Valley',
      valle_subtitle: 'Our favorite places to explore during your stay in Puglia',
      valle_alb_title: 'Alberobello',
      valle_alb_desc: 'UNESCO World Heritage site, famous across the globe for its fairy-tale landscape of over a thousand dry-stone trulli (12 mins from the Masseria).',
      valle_loc_title: 'Locorotondo',
      valle_loc_desc: 'One of the most beautiful villages in Italy: immaculate white alleys, blooming balconies, and sweeping views over the vineyard-dotted valley.',
      valle_mart_title: 'Martina Franca',
      valle_mart_desc: 'Baroque elegance, rococo palazzi, and birthplace of the world-famous artisanal Capocollo.',
      valle_sea_title: 'Polignano a Mare & Monopoli',
      valle_sea_desc: 'Just 30 minutes away: dramatic sea cliffs over turquoise waters, secret coves, and evening promenades along ancient harbors.',

      // Modal: R.S.V.P.
      rsvp_kicker: 'Your Presence',
      rsvp_title: 'R.S.V.P.',
      rsvp_subtitle: 'Please kindly confirm your attendance by February 14, 2027',
      rsvp_name_label: 'Full Name *',
      rsvp_name_ph: 'e.g. John Smith',
      rsvp_att_label: 'Will you attend? *',
      rsvp_att_yes: 'Yes, joyfully attending!',
      rsvp_att_no: 'Regretfully cannot attend',
      rsvp_guests_label: 'Total Number of Guests *',
      rsvp_guests_ph: 'e.g. 2',
      rsvp_children_label: 'Are children attending?',
      rsvp_children_yes: 'Yes',
      rsvp_children_no: 'No',
      rsvp_children_opt_title: 'Options for children:',
      rsvp_kids_menu: 'Kids menu',
      rsvp_kids_animation: 'Kids entertainment',
      rsvp_diet_label: 'Dietary requirements or allergies',
      rsvp_diet_ph: 'e.g. None, gluten-free, vegetarian, vegan...',
      rsvp_msg_label: 'Would you like to tell us anything? (optional)',
      rsvp_msg_ph: 'Write any notes or special requests here...',
      rsvp_btn_submit: 'CONFIRM ATTENDANCE',
      rsvp_sending: 'SENDING...',
      rsvp_success_title: 'Response Saved!',
      rsvp_success_yes: 'Thank you {name}! Your presence will make our wedding truly unforgettable. Your confirmation has been delivered to Pasquale & Antonella!',
      rsvp_success_no: 'Thank you {name}. We are truly sorry you cannot be there, but you will be in our hearts!',
      rsvp_btn_edit: 'Edit your response',

      // Calendar invite texts
      ics_summary: 'Antonella & Pasquale Wedding',
      ics_desc: 'Wedding celebration of Antonella & Pasquale - Sunday, August 22, 2027 at Masseria Bonelli (Noci, Puglia, Italy).'
    }
  };

  // Lingua attiva corrente (default IT, oppure recuperata dal browser)
  let currentLang = localStorage.getItem('wedding_lang') || 'it';
  if (!translations[currentLang]) currentLang = 'it';

  /**
   * Applica le traduzioni a tutti gli elementi DOM marcati con data-i18n
   * @param {string} lang - 'it' o 'en'
   */
  function applyLanguage(lang) {
    if (!translations[lang]) return;
    currentLang = lang;
    localStorage.setItem('wedding_lang', lang);

    const dict = translations[lang];

    // 1. Aggiorna elementi nel DOM principale
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) {
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          el.placeholder = dict[key];
        } else {
          el.textContent = dict[key];
        }
      }
    });

    // 2. Aggiorna l'etichetta del bottone lingua
    const currentLangLabel = document.getElementById('currentLangLabel');
    if (currentLangLabel) {
      currentLangLabel.textContent = lang.toUpperCase();
    }

    // 3. Aggiorna stato attivo nel menu opzioni
    document.querySelectorAll('.lang-option').forEach(opt => {
      const optLang = opt.getAttribute('data-lang');
      if (optLang === lang) {
        opt.classList.add('is-active');
        opt.setAttribute('aria-selected', 'true');
      } else {
        opt.classList.remove('is-active');
        opt.setAttribute('aria-selected', 'false');
      }
    });

    // 4. Aggiorna html lang attribute
    document.documentElement.setAttribute('lang', lang);

    // 5. Se una modale è aperta in questo momento, ricaricala nella nuova lingua
    if (modalBackdrop && modalBackdrop.classList.contains('is-active') && currentActiveTargetId) {
      openModal(currentActiveTargetId, currentActiveTrigger);
    }
  }

  // --------------------------------------------------------------------------
  // 2. GESTIONE SELETTORE LINGUA CON MAPPAMONDO
  // --------------------------------------------------------------------------
  const langSwitcher = document.getElementById('langSwitcher');
  const langToggleBtn = document.getElementById('langToggleBtn');

  if (langToggleBtn && langSwitcher) {
    langToggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = langSwitcher.classList.toggle('is-open');
      langToggleBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // Selezione di una lingua dal menu
    document.querySelectorAll('.lang-option').forEach(option => {
      option.addEventListener('click', (e) => {
        e.stopPropagation();
        const selectedLang = option.getAttribute('data-lang');
        applyLanguage(selectedLang);
        langSwitcher.classList.remove('is-open');
        langToggleBtn.setAttribute('aria-expanded', 'false');
        langToggleBtn.focus();
      });
    });

    // Chiude il menu cliccando altrove
    document.addEventListener('click', (e) => {
      if (!langSwitcher.contains(e.target)) {
        langSwitcher.classList.remove('is-open');
        langToggleBtn.setAttribute('aria-expanded', 'false');
      }
    });

    // Chiude con tasto Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && langSwitcher.classList.contains('is-open')) {
        langSwitcher.classList.remove('is-open');
        langToggleBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // --------------------------------------------------------------------------
  // 3. SISTEMA MODALI / BOTTOM SHEET
  // --------------------------------------------------------------------------
  const modalBackdrop = document.getElementById('modalBackdrop');
  const modalSheet = document.getElementById('modalSheet');
  const modalBody = document.getElementById('modalBody');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const navButtons = document.querySelectorAll('[data-modal-target]');

  let currentActiveTrigger = null;
  let currentActiveTargetId = null;

  /**
   * Apre la finestra Modale / Bottom Sheet caricando il template corrispondente
   * e iniettando le traduzioni correnti
   */
  function openModal(targetId, triggerBtn) {
    const template = document.getElementById(`tmpl-${targetId}`);
    if (!template) return;

    currentActiveTrigger = triggerBtn;
    currentActiveTargetId = targetId;

    // Clona il contenuto dal template HTML
    modalBody.innerHTML = '';
    const content = template.content.cloneNode(true);

    // Traduci al volo gli elementi dentro il template appena clonato
    const dict = translations[currentLang] || translations.it;
    content.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) {
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          el.placeholder = dict[key];
        } else {
          el.textContent = dict[key];
        }
      }
    });

    modalBody.appendChild(content);

    // Mostra la modale
    modalBackdrop.classList.add('is-active');
    modalBackdrop.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    if (triggerBtn) {
      triggerBtn.setAttribute('aria-expanded', 'true');
    }

    // Inizializza eventi specifici del template
    bindModalSpecificEvents(targetId);

    setTimeout(() => {
      modalSheet.focus();
    }, 100);
  }

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
    currentActiveTargetId = null;

    if (leafletMap) {
      try {
        leafletMap.remove();
      } catch (e) {}
      leafletMap = null;
    }
  }

  // Listener sui bottoni della dashboard
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

  // Chiusura cliccando sul backdrop esterno
  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) {
        closeModal();
      }
    });
  }

  // Chiusura con tasto Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalBackdrop.classList.contains('is-active')) {
      closeModal();
    }
  });

  // Supporto swipe down per mobile
  let touchStartY = 0;
  let touchEndY = 0;

  if (modalSheet) {
    modalSheet.addEventListener('touchstart', (e) => {
      touchStartY = e.changedTouches[0].screenY;
    }, { passive: true });

    modalSheet.addEventListener('touchend', (e) => {
      touchEndY = e.changedTouches[0].screenY;
      const swipeDistance = touchEndY - touchStartY;
      if (swipeDistance > 80 && modalBody.scrollTop <= 10) {
        closeModal();
      }
    }, { passive: true });
  }

  function bindModalSpecificEvents(modalId) {
    // 1. EVENTO: Aggiungi al Calendario (.ics)
    if (modalId === 'modal-evento') {
      const btnCalendar = document.getElementById('btnAddToCalendar');
      if (btnCalendar) {
        btnCalendar.addEventListener('click', generateCalendarInvite);
      }
    }

    // 2. RSVP: Gestione invio e persistenza
    if (modalId === 'modal-rsvp') {
      setupRsvpForm();
    }

    // 3. VALLE D'ITRIA: Inizializza Mappa Interattiva Leaflet (solo all'apertura del modale)
    if (modalId === 'modal-valle-itria') {
      initMap();
    }
  }

  /**
   * Generatore file evento .ics bilingue per Apple/Google Calendar
   */
  function generateCalendarInvite() {
    const dict = translations[currentLang] || translations.it;
    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Antonella & Pasquale Wedding//' + currentLang.toUpperCase(),
      'CALSCALE:GREGORIAN',
      'METHOD:PUBLISH',
      'BEGIN:VEVENT',
      'UID:wedding-antonella-pasquale-2027@masseriabonelli.it',
      'DTSTAMP:20261108T120000Z',
      'DTSTART:20270822T143000Z', // 16:30 CEST (UTC+2)
      'DTEND:20270823T020000Z',
      `SUMMARY:${dict.ics_summary}`,
      `DESCRIPTION:${dict.ics_desc}`,
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
   * Gestione del Form RSVP con Invio Reale via Email a Web3Forms tramite AJAX (Fetch API)
   */
  function setupRsvpForm() {
    const form = document.getElementById('sheetRsvpForm');
    const successBox = document.getElementById('rsvpSuccessBox');
    const successText = document.getElementById('rsvpSuccessText');
    const btnEdit = document.getElementById('btnEditRsvp');
    const btnSubmit = document.getElementById('btnSubmitRsvp');
    const nameInput = document.getElementById('rsvpName');
    const guestsCountField = document.getElementById('guestsCountField');
    const guestsInput = document.getElementById('rsvpGuests');
    const attendanceRadios = document.querySelectorAll('input[name="rsvpAttendance"]');
    const childrenField = document.getElementById('childrenField');
    const childrenOptionsField = document.getElementById('childrenOptionsField');
    const childrenRadios = document.querySelectorAll('input[name="rsvpHasChildren"]');
    const kidsMenuCheckbox = document.getElementById('rsvpKidsMenu');
    const kidsAnimationCheckbox = document.getElementById('rsvpKidsAnimation');
    const dietaryField = document.getElementById('dietaryField');

    if (!form) return;

    // Gestione visualizzazione opzioni bambini (Sì / No)
    childrenRadios.forEach(radio => {
      radio.addEventListener('change', () => {
        if (childrenOptionsField) {
          if (radio.value === 'si') {
            childrenOptionsField.style.display = 'flex';
          } else {
            childrenOptionsField.style.display = 'none';
            if (kidsMenuCheckbox) kidsMenuCheckbox.checked = false;
            if (kidsAnimationCheckbox) kidsAnimationCheckbox.checked = false;
          }
        }
      });
    });

    // Gestione presenza (Sì, ci sarò / Purtroppo non potrò)
    attendanceRadios.forEach(radio => {
      radio.addEventListener('change', () => {
        const isAttending = radio.value !== 'no';
        if (guestsCountField) {
          guestsCountField.style.display = isAttending ? 'flex' : 'none';
        }
        if (guestsInput) {
          guestsInput.required = isAttending;
          guestsInput.disabled = !isAttending;
        }
        if (childrenField) {
          childrenField.style.display = isAttending ? 'flex' : 'none';
          const checkedChild = document.querySelector('input[name="rsvpHasChildren"]:checked');
          if (childrenOptionsField) {
            childrenOptionsField.style.display = (isAttending && checkedChild && checkedChild.value === 'si') ? 'flex' : 'none';
          }
        }
        if (dietaryField) {
          dietaryField.style.display = isAttending ? 'flex' : 'none';
        }
      });
    });

    const savedRsvp = localStorage.getItem('wedding_rsvp_antonella_pasquale') || localStorage.getItem('wedding_rsvp_pasquale_antonella');
    if (savedRsvp) {
      try {
        const data = JSON.parse(savedRsvp);
        showSuccessView(data.name, data.attendance);
      } catch (e) {
        console.error('Errore lettura RSVP salvato', e);
      }
    }

    // Intercetta l'evento 'submit' del form
    form.addEventListener('submit', async (e) => {
      // 1. Previene il comportamento di default
      e.preventDefault();

      // Valida Nome (obbligatorio)
      const name = nameInput ? nameInput.value.trim() : '';
      if (!name) {
        if (nameInput) {
          nameInput.focus();
          nameInput.style.borderColor = '#B55838';
        }
        return;
      }

      const attendance = document.querySelector('input[name="rsvpAttendance"]:checked')?.value || 'si';

      // Valida Numero Ospiti (obbligatorio se conferma presenza)
      if (attendance === 'si' && guestsInput) {
        const guestsVal = parseInt(guestsInput.value, 10);
        if (isNaN(guestsVal) || guestsVal < 1) {
          guestsInput.focus();
          guestsInput.style.borderColor = '#B55838';
          return;
        }
      }

      // 2. Usa FormData per raccogliere tutti i dati inseriti nel modulo
      const formData = new FormData(form);

      // 3. URL presente nell'attributo action del form (Web3Forms API)
      const actionUrl = form.getAttribute('action') || 'https://api.web3forms.com/submit';

      // 4. Stato di caricamento: disabilita il bottone e cambia il testo in 'INVIO IN CORSO...'
      const originalBtnContent = btnSubmit ? btnSubmit.innerHTML : '';
      if (btnSubmit) {
        btnSubmit.disabled = true;
        const dict = translations[currentLang] || translations.it;
        btnSubmit.textContent = dict.rsvp_sending || 'INVIO IN CORSO...';
      }

      try {
        // 5. Invia i dati con metodo POST e header Accept: application/json per abilitare AJAX
        const response = await fetch(actionUrl, {
          method: 'POST',
          headers: {
            'Accept': 'application/json'
          },
          body: formData
        });

        const data = await response.json().catch(() => null);

        // 6. Gestione Risposta: se response.ok è vero, nascondi il form e mostra il div successo
        if (response.ok && (!data || data.success !== false)) {
          // Backup di sicurezza nel browser dell'ospite
          localStorage.setItem('wedding_rsvp_antonella_pasquale', JSON.stringify({
            name,
            attendance,
            timestamp: new Date().toISOString()
          }));

          showSuccessView(name, attendance);
        } else {
          throw new Error(data?.message || `HTTP error! status: ${response.status}`);
        }
      } catch (error) {
        console.error('Errore durante l\'invio del modulo RSVP:', error);
        // Se la richiesta fallisce, mostra l'alert richiesto
        alert('Si è verificato un errore di rete. Riprova più tardi.');
      } finally {
        // Ripristina il bottone di invio
        if (btnSubmit) {
          btnSubmit.disabled = false;
          btnSubmit.innerHTML = originalBtnContent;
        }
      }
    });

    function showSuccessView(guestName, attendance) {
      form.style.display = 'none';
      if (successBox) {
        successBox.style.display = 'block';
      }

      if (successText) {
        const dict = translations[currentLang] || translations.it;
        if (attendance === 'no') {
          successText.textContent = dict.rsvp_success_no.replace('{name}', guestName);
        } else {
          successText.textContent = dict.rsvp_success_yes.replace('{name}', guestName);
        }
      }
    }

    if (btnEdit) {
      btnEdit.addEventListener('click', () => {
        if (successBox) successBox.style.display = 'none';
        form.style.display = 'flex';
        if (guestsInput) guestsInput.disabled = false;
        if (nameInput) nameInput.focus();
      });
    }
  }

  // --------------------------------------------------------------------------
  // 4. MAPPA INTERATTIVA VALLE D'ITRIA CON LEAFLET.JS (STILE PADLET / CARTO POSITRON)
  // --------------------------------------------------------------------------
  let leafletMap = null;

  function initMap() {
    const mapContainer = document.getElementById('pugliaMap');
    if (!mapContainer || typeof L === 'undefined') return;

    // Se esiste già una mappa precedente, la rimuoviamo per reinizializzare pulito
    if (leafletMap) {
      try {
        leafletMap.remove();
      } catch (err) {
        console.warn('Rimozione mappa:', err);
      }
      leafletMap = null;
    }

    // Configurazione icone predefinite Leaflet CDN per evitare 404
    if (L.Icon && L.Icon.Default) {
      delete L.Icon.Default.prototype._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
        iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
        shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
      });
    }

    // Inizializza la mappa centrata sulla Valle d'Itria (coordinate [40.7, 17.3]) con zoom iniziale di 9
    leafletMap = L.map('pugliaMap', {
      scrollWheelZoom: true,
      zoomControl: true
    }).setView([40.7, 17.3], 9);

    // Rimuove la scritta "Leaflet" con la bandierina (non obbligatoria per licenza)
    if (leafletMap.attributionControl) {
      leafletMap.attributionControl.setPrefix(false);
    }

    // TileLayer Elegante Stile Wedding (Senza confini marittimi, senza curve di livello, 100% gratuito e senza API Key)
    L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
      maxZoom: 18,
      attribution: 'Tiles &copy; Esri'
    }).addTo(leafletMap);

    // Ricalcola le dimensioni della mappa quando la modale è completamente aperta
    setTimeout(() => {
      if (leafletMap) {
        leafletMap.invalidateSize();
      }
    }, 250);

    // Icona elegante stile matrimonio (Bordeaux & Oat)
    const weddingPinIcon = L.divIcon({
      className: 'wedding-pin-marker',
      html: `<div style="
        width: 30px;
        height: 30px;
        background-color: #601D2D;
        border: 2px solid #EDD5AB;
        border-radius: 50% 50% 50% 0;
        transform: rotate(-45deg);
        box-shadow: 0 3px 8px rgba(96, 29, 45, 0.35);
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
      "><div style="
        width: 10px;
        height: 10px;
        background-color: #EDD5AB;
        border-radius: 50%;
        transform: rotate(45deg);
      "></div></div>`,
      iconSize: [30, 30],
      iconAnchor: [15, 30],
      popupAnchor: [0, -30]
    });

    // Array dei luoghi chiave richiesti: Matera, Laterza, Alberobello, Locorotondo, Martina Franca, Ostuni, Taranto
    const places = [
      {
        name: 'Alberobello',
        coords: [40.7838, 17.2366],
        desc_it: 'Patrimonio UNESCO celebre in tutto il mondo per la sua fiabesca distesa di oltre mille trulli in pietra viva.',
        desc_en: 'UNESCO World Heritage site worldwide famous for its fairytale landscape of over a thousand stone trulli.',
        image: 'foto-luogo.jpg'
      },
      {
        name: 'Locorotondo',
        coords: [40.7554, 17.3275],
        desc_it: 'Uno dei borghi più belli d\'Italia: vicoli bianchi immacolati, balconi fioriti e viste mozzafiato sui vigneti della valle.',
        desc_en: 'One of Italy’s most picturesque villages: whitewashed alleys, blooming balconies, and panoramic vineyard vistas.',
        image: 'foto-luogo.jpg'
      },
      {
        name: 'Martina Franca',
        coords: [40.7028, 17.3364],
        desc_it: 'Elegante gioiello del Barocco pugliese con maestosi palazzi nobiliari, portali scolpiti e patria del Capocollo.',
        desc_en: 'Stately jewel of Apulian Baroque with aristocratic palaces, sculpted portals, and culinary delicacies.',
        image: 'foto-luogo.jpg'
      },
      {
        name: 'Ostuni',
        coords: [40.7303, 17.5786],
        desc_it: 'La celebre "Città Bianca" arroccata su tre colli, con scorci luminosi e una vista incantevole verso la marina e gli uliveti.',
        desc_en: 'The iconic "White City" perched across three hills, featuring bright whitewashed lanes and sea-view olive groves.',
        image: 'foto-luogo.jpg'
      },
      {
        name: 'Matera',
        coords: [40.6664, 16.6043],
        desc_it: 'La millenaria Città dei Sassi patrimonio UNESCO, un emozionante viaggio nel tempo tra case e chiese rupestri scavate nella roccia calcarea.',
        desc_en: 'The ancient City of the Sassi, UNESCO World Heritage site and European Capital of Culture, carved into canyon rock.',
        image: 'foto-luogo.jpg'
      },
      {
        name: 'Laterza',
        coords: [40.6300, 16.8000],
        desc_it: 'Famosa per la sua spettacolare gravina monumentale, il pane tipico cotto a legna e la rinomata tradizione delle maioliche.',
        desc_en: 'Famous for its monumental canyon ravine, traditional wood-fired artisan bread, and antique maiolica ceramics.',
        image: 'foto-luogo.jpg'
      },
      {
        name: 'Taranto',
        coords: [40.4764, 17.2408],
        desc_it: 'L\'antica città spartana tra i Due Mari, ricca di storia con il Castello Aragonese, il Ponte Girevole e i tesori del Museo MarTA.',
        desc_en: 'The historic Spartan city of the Two Seas, featuring the Aragonese Castle, the Swing Bridge, and the treasures of MarTA.',
        image: 'foto-luogo.jpg'
      }
    ];

    // Itera sull'array e crea un L.marker per ogni luogo con Card stile Padlet
    places.forEach(place => {
      const description = (currentLang === 'en' && place.desc_en) ? place.desc_en : place.desc_it;
      
      const popupHtml = `
        <div class="padlet-card">
          <img src="${place.image}" alt="${place.name}" class="padlet-card-img" onerror="this.onerror=null;this.src='sfondo-gatte.jpeg';">
          <div class="padlet-card-body">
            <h4 class="padlet-card-title">${place.name}</h4>
            <p class="padlet-card-desc">${description}</p>
          </div>
        </div>
      `;

      const marker = L.marker(place.coords, { icon: weddingPinIcon }).addTo(leafletMap);
      marker.bindPopup(popupHtml, {
        maxWidth: 240,
        className: 'padlet-popup'
      });
    });
  }

  // --------------------------------------------------------------------------
  // 4. CONTO ALLA ROVESCIA (COUNTDOWN) PER IL 22 AGOSTO 2027 ORE 16:30
  // --------------------------------------------------------------------------
  function initCountdown() {
    const cdDays = document.getElementById('cdDays');
    const cdHours = document.getElementById('cdHours');
    const cdMinutes = document.getElementById('cdMinutes');
    const cdSeconds = document.getElementById('cdSeconds');

    if (!cdDays || !cdHours || !cdMinutes || !cdSeconds) return;

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

    updateCountdown();
    setInterval(updateCountdown, 1000);
  }

  // Avvio Countdown e Inizializzazione Lingua
  initCountdown();
  applyLanguage(currentLang);
});
