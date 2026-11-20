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
      luogo_story: "Un'antica dimora storica del XVI secolo situata nel cuore della campagna di Noci, circondata da ulivi e muretti a secco. Un luogo autentico dove il tempo sembra essersi fermato per celebrare l'amore. Ci vediamo lì!",
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
      valle_title: "Valle d'Itria e dintorni",
      valle_subtitle: 'I nostri consigli per godervi al meglio questi giorni',
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
      luogo_story: 'A 16th-century historic residence nestled in the heart of the Noci countryside, surrounded by olive groves and traditional dry-stone walls. An authentic sanctuary where time stands still to celebrate love. See you there!',
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
      valle_title: 'Itria Valley & Surroundings',
      valle_subtitle: 'Our personal tips to make the most of your time here.',
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

    // Inizializza la mappa centrata tra Bari, Valle d'Itria, Matera e Taranto con zoom 9
    leafletMap = L.map('pugliaMap', {
      scrollWheelZoom: true,
      zoomControl: true
    }).setView([40.82, 17.10], 9);

    // Rimuove la scritta "Leaflet" con la bandierina (non obbligatoria per licenza)
    if (leafletMap.attributionControl) {
      leafletMap.attributionControl.setPrefix(false);
    }

    // Rilevamento protocollo di apertura (Locale file:/// vs Server Web http/https)
    // NOTA TECNICA: I server di OpenStreetMap.Mapnik (tile.openstreetmap.org) bloccano tassativamente (HTTP 403)
    // qualsiasi richiesta priva di header HTTP Referer (come avviene sempre aprendo un file con doppio clic su Windows).
    // In locale (file:///) usiamo la cartografia ESRI World Street Map (nessun blocco, 100% gratuita, nomi in italiano e senza watermark).
    // Online (http:// o https://) viene caricato automaticamente OpenStreetMap.Mapnik.
    const isLocalFile = (window.location.protocol === 'file:');

    const tileUrl = isLocalFile
      ? 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}'
      : 'https://tile.openstreetmap.org/{z}/{x}/{y}.png';

    const tileAttribution = isLocalFile
      ? 'Tiles &copy; Esri'
      : '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a> contributors';

    L.tileLayer(tileUrl, {
      maxZoom: 19,
      attribution: tileAttribution,
      referrerPolicy: 'strict-origin-when-cross-origin'
    }).addTo(leafletMap);

    // Ricalcola le dimensioni della mappa quando la modale è completamente aperta
    setTimeout(() => {
      if (leafletMap) {
        leafletMap.invalidateSize();
      }
    }, 250);

    // Icona elegante stile matrimonio per i borghi (Bordeaux & Oat)
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

    // Icona Speciale Cuoricino per Masseria Bonelli (Il luogo del matrimonio)
    const heartPinIcon = L.divIcon({
      className: 'wedding-heart-marker',
      html: `
        <div class="heart-pin-wrapper">
          <div class="heart-pin-glow"></div>
          <div class="heart-pin-badge">
            <span class="heart-pin-symbol">❤️</span>
          </div>
          <div class="heart-pin-label">Masseria Bonelli</div>
        </div>
      `,
      iconSize: [110, 56],
      iconAnchor: [55, 19]
    });

    // Array di configurazione Luoghi della Valle d'Itria e dintorni (3 foto per luogo, supporta sia .jpg che .jpeg)
    const placesData = [
      {
        lat: 40.7332,
        lng: 17.0257,
        title: "Masseria Bonelli",
        isHeart: true,
        desc: "Il cuore del nostro matrimonio! È un'antica dimora storica del XVI secolo situata nel cuore della campagna di Noci, circondata da ulivi e muretti a secco. Ci vediamo lì!",
        desc_en: "The heart of our wedding! An ancient 16th-century historic estate nestled in the heart of the Noci countryside, surrounded by olive groves and traditional dry-stone walls. See you there!",
        images: ["sfondo-masseria.jpg", "sfondo-gatte.jpeg"]
      },
      {
        lat: 40.6300,
        lng: 16.8000,
        title: "Laterza",
        desc: "La terra d’origine di Antonella e il motivo per cui ci troviamo qui, famosa per la tradizione delle maioliche e per il profumo del celebre pane cotto a legna. Ma sapevate che in Puglia esistono i canyon? Laterza si affaccia a strapiombo su una delle gravine più grandi d'Europa, uno scenario imponente che Pasquale ha esplorato a piedi percorrendo il Cammino Materano.",
        desc_en: "Antonella’s hometown and the very reason we are here, famous for its historic maiolica ceramics and the aroma of its celebrated wood-fired bread. But did you know there are canyons in Puglia? Laterza perches right on the edge of one of Europe’s largest ravines, a dramatic landscape that Pasquale explored on foot while hiking the Cammino Materano.",
        images: ["foto-laterza-1.jpg", "foto-laterza-2.jpg", "foto-laterza-3.jpg"]
      },
      {
        lat: 40.6664,
        lng: 16.6043,
        title: "Matera",
        desc: "A pochi chilometri da Laterza, la Città dei Sassi è forse il posto più celebre da non perdere. I \"Sassi\" non sono semplici pietre, ma due antichi quartieri, interamente scavati nella roccia calcarea, tra i nuclei abitati più antichi al mondo. Perdetevi tra i suoi vicoli scolpiti nella pietra, le chiese rupestri e le terrazze panoramiche, specialmente al tramonto, quando si accendono migliaia di piccole luci.",
        desc_en: "Just a few kilometers from Laterza, the \"City of Stones\" is arguably the most iconic place not to be missed. The Sassi aren't just rocks, but two ancient districts, carved directly into the limestone cliff, ranking among the oldest continuously inhabited settlements in the world. Get lost among its stone-sculpted alleys, cave churches, and panoramic terraces, especially at sunset when thousands of tiny lights come alive.",
        images: ["foto-matera-1.jpg", "foto-matera-2.jpg", "foto-matera-3.jpg"]
      },
      {
        lat: 40.4764,
        lng: 17.2408,
        title: "Taranto",
        desc: "La \"Città dei Due Mari\", sospesa tra storia millenaria e brezza marina. Una passeggiata sul lungomare fino al Castello Aragonese e al Ponte Girevole, per poi assaporare il pescato freschissimo e le celebri cozze tarantine vista mare.",
        desc_en: "The \"City of Two Seas,\" suspended between ancient Greek history and sea breeze. Take a stroll along the waterfront to the Aragonese Castle and the Swing Bridge, then enjoy freshly caught seafood right by the water.",
        images: ["foto-taranto-1.jpg", "foto-taranto-2.jpg"]
      },
      {
        lat: 40.7838,
        lng: 17.2366,
        title: "Alberobello",
        desc: "Se c'è un posto da visitare nella Valle d’Itria è questo, famoso in tutto il mondo per i suoi trulli, le antiche costruzioni in pietra a secco dai tetti a cono, Patrimonio dell'Umanità UNESCO. Passeggiate con il naso all'insù tra i suoi rioni per immergervi in un’atmosfera unica, magari gustando un pasticciotto caldo da Martinucci.",
        desc_en: "If there is one place you must visit in the Itria Valley, this is it, world-famous for its trulli, the ancient dry-stone dwellings with conical roofs recognized as a UNESCO World Heritage site. Stroll through its historic districts with your eyes turned upward to soak in the unique atmosphere, ideally while enjoying a warm pasticciotto pastry from Martinucci.",
        images: ["foto-alberobello-1.jpg", "foto-alberobello-2.jpg", "foto-alberobello-3.jpg"]
      },
      {
        lat: 40.7303,
        lng: 17.5786,
        title: "Ostuni",
        desc: "La \"Città Bianca\", arroccata sull'ultima collina prima dell'Adriatico. Il centro storico è un intreccio continuo di vicoli dipinti a calce, scalinate e piccole botteghe, circondato da ulivi secolari che accompagnano lo sguardo fino al mare.",
        desc_en: "The \"White City,\" perched on the last hill before the Adriatic Sea. Its historic center is a tight weave of lime-washed alleys, staircases, and small artisan shops, surrounded by centuries-old olive trees stretching all the way to the coast.",
        images: ["foto-ostuni-1.jpg", "foto-ostuni-2.jpg", "foto-ostuni-3.jpg"]
      },
      {
        lat: 40.7028,
        lng: 17.3364,
        title: "Martina Franca",
        desc: "Il volto barocco della Valle d'Itria, con un centro storico fatto di vicoli bianchi, balconi in ferro battuto e palazzi nobiliari decorati in pietra. È una cittadina molto viva, perfetta per una passeggiata serale tra le sue piazze prima di fermarsi in pasticceria a provare i classici bocconotti alla crema e amarena.",
        desc_en: "The Baroque side of the Itria Valley, featuring an old town of whitewashed alleys, wrought-iron balconies, and ornate stone palaces. It’s a lively town, ideal for an evening stroll through its piazzas before stopping at a local pastry shop to try the traditional bocconotti filled with custard and black cherry.",
        images: ["foto-martina-franca-1.jpg", "foto-martina-franca-2.jpg"]
      },
      {
        lat: 40.7554,
        lng: 17.3275,
        title: "Locorotondo",
        desc: "Il suo nome significa letteralmente \"luogo rotondo\", per via della forma circolare del centro storico. È un dedalo ordinato di vicoli bianchi, balconi fioriti e casette dai tetti spioventi. Il punto forte è il suo belvedere, chiamato scherzosamente dai locali \"il lungomare\" per la vista sconfinata sulla valle: il posto perfetto per un aperitivo con un calice di vino bianco locale o un buon Primitivo.",
        desc_en: "Its name literally means \"round place,\" referring to the circular layout of its historic center. It’s a neat maze of whitewashed alleys, flower-filled balconies, and houses with pitched roofs. The highlight is its panoramic terrace, jokingly called \"the seafront\" by locals for its endless view over the valley, the ideal spot for an aperitivo with a glass of crisp local white wine or a bold Primitivo.",
        images: ["foto-locorotondo-1.jpg", "foto-locorotondo-2.jpg"]
      },
      {
        lat: 41.1297,
        lng: 16.8696,
        title: "Bari",
        desc: "Per chi arriva in aereo, questo è il punto di partenza e di ritorno del viaggio. Prima o dopo il volo, vale la pena fermarsi per una passeggiata sul suo celebre lungomare e perdersi tra i vicoli di Bari Vecchia, cuore autentico della città dove sorge la Basilica di San Nicola. Imperdibile una tappa in panificio per assaggiare la vera focaccia barese, alta, croccante e condita con pomodorini e olive.",
        desc_en: "For those flying in, this is the starting and ending point of the trip. Before or after your flight, it’s worth stopping for a walk along its famous seafront promenade and getting lost in the alleys of Bari Vecchia (Old Bari), the authentic heart of the city home to the Basilica of Saint Nicholas. A stop at a local bakery is a must to taste real focaccia barese, thick, crispy, and topped with cherry tomatoes and olives.",
        images: ["foto-bari-1.jpg", "foto-bari-2.jpg", "foto-bari-3.jpg"]
      },
      {
        lat: 40.9950,
        lng: 17.2172,
        title: "Polignano a Mare",
        desc: "Per chi ha voglia di un bagno o semplicemente di ammirare il mare da vicino, questa è la tappa ideale. Famosa per il suo centro storico costruito a strapiombo sulle scogliere e per la celebre caletta di Lama Monachile incastonata tra due pareti di roccia, offre scorci spettacolari da ogni terrazza panoramica. Prima di ripartire, fermatevi nel borgo antico per assaggiare il famoso \"caffè speciale\" locale.",
        desc_en: "For those looking to take a swim or simply enjoy the sea up close, this is the ideal stop. Famous for its historic center perched dramatically on the cliffs and the iconic Lama Monachile cove tucked between two rock walls, it offers breathtaking views from every panoramic terrace. Before heading back, stop by the old town to try its famous local caffè speciale.",
        images: ["foto-polignano-1.jpg", "foto-polignano-2.jpg"]
      }
    ];

    // Riferimenti alla Bottom Sheet personalizzabile con Galleria Carousel
    const bottomSheet = document.getElementById('mapBottomSheet');
    const sheetGallery = document.getElementById('sheetGallery');
    const sheetDots = document.getElementById('sheetDots');
    const sheetTitle = document.getElementById('sheetTitle');
    const sheetDesc = document.getElementById('sheetDesc');
    const closeMapSheet = document.getElementById('closeMapSheet');

    // Listener per la chiusura della scheda dal bottone 'X'
    if (closeMapSheet && bottomSheet) {
      closeMapSheet.onclick = function (e) {
        if (e) e.stopPropagation();
        bottomSheet.classList.remove('is-open');
      };
    }

    // Chiude la scheda quando l'utente tocca o clicca direttamente sulla mappa fuori dai pin
    leafletMap.on('click', function () {
      if (bottomSheet && bottomSheet.classList.contains('is-open')) {
        bottomSheet.classList.remove('is-open');
      }
    });

    // Itera sull'array e crea un L.marker per ogni luogo collegato alla Bottom Sheet con Carousel
    placesData.forEach(place => {
      const iconToUse = place.isHeart ? heartPinIcon : weddingPinIcon;
      const marker = L.marker([place.lat, place.lng], { 
        icon: iconToUse,
        zIndexOffset: place.isHeart ? 1000 : 0
      }).addTo(leafletMap);

      marker.on('click', function (e) {
        if (e && e.originalEvent) {
          e.originalEvent.stopPropagation();
        }

        // Centra leggermente la mappa sul marker cliccato (con offset nord per visibilità sopra la scheda)
        const offsetLat = place.isHeart ? 0.025 : 0.035;
        leafletMap.panTo([place.lat + offsetLat, place.lng], { animate: true });

        // 1. Svuota #sheetGallery e #sheetDots, e riporta lo scroll della galleria a 0
        if (sheetGallery) {
          sheetGallery.innerHTML = '';
          sheetGallery.scrollLeft = 0;
          sheetGallery.onscroll = null;
        }
        if (sheetDots) {
          sheetDots.innerHTML = '';
        }

        // 2. Genera dinamicamente un tag <img> per ogni elemento dell'array place.images
        const imagesList = Array.isArray(place.images) && place.images.length > 0 
          ? place.images 
          : (place.img ? [place.img] : ['foto-luogo.jpg']);

        if (sheetGallery) {
          imagesList.forEach((imgSrc, idx) => {
            const imgEl = document.createElement('img');
            imgEl.src = imgSrc;
            imgEl.alt = `${place.title} - foto ${idx + 1}`;
            imgEl.loading = 'lazy';
            // Supporto universale sia per estensioni .jpg che .jpeg o .png
            imgEl.onerror = function () {
              const currentSrc = this.getAttribute('src') || '';
              const step = parseInt(this.getAttribute('data-err-step') || '0', 10);

              if (step === 0) {
                this.setAttribute('data-err-step', '1');
                // Se era specificato .jpg prova con .jpeg e viceversa
                if (currentSrc.endsWith('.jpg')) {
                  this.src = currentSrc.slice(0, -4) + '.jpeg';
                  return;
                } else if (currentSrc.endsWith('.jpeg')) {
                  this.src = currentSrc.slice(0, -5) + '.jpg';
                  return;
                }
              } else if (step === 1) {
                this.setAttribute('data-err-step', '2');
                const base = currentSrc.replace(/\.(jpeg|jpg)$/i, '');
                this.src = base + '.png';
                return;
              }
              // Fallback finale
              this.onerror = null;
              this.src = 'sfondo-gatte.jpeg';
            };
            sheetGallery.appendChild(imgEl);
          });
        }

        // 3. Gestione indicatori (pallini .sheet-dot) e listener di scorrimento
        if (sheetDots) {
          if (imagesList.length > 1) {
            sheetDots.style.display = 'flex';
            imagesList.forEach((_, idx) => {
              const dot = document.createElement('span');
              dot.className = idx === 0 ? 'sheet-dot active' : 'sheet-dot';
              dot.setAttribute('data-index', idx);
              dot.setAttribute('aria-label', `Foto ${idx + 1}`);
              dot.addEventListener('click', function (ev) {
                if (ev) ev.stopPropagation();
                if (sheetGallery) {
                  const width = sheetGallery.clientWidth || sheetGallery.offsetWidth || 1;
                  sheetGallery.scrollTo({ left: idx * width, behavior: 'smooth' });
                }
              });
              sheetDots.appendChild(dot);
            });

            // Listener scroll su #sheetGallery per aggiornare il pallino attivo in base alla foto visibile
            if (sheetGallery) {
              sheetGallery.onscroll = function () {
                const width = sheetGallery.clientWidth || sheetGallery.offsetWidth || 1;
                const activeIndex = Math.min(
                  Math.round(sheetGallery.scrollLeft / width),
                  imagesList.length - 1
                );
                const dots = sheetDots.querySelectorAll('.sheet-dot');
                dots.forEach((dot, dotIdx) => {
                  if (dotIdx === activeIndex) {
                    dot.classList.add('active');
                  } else {
                    dot.classList.remove('active');
                  }
                });
              };
            }
          } else {
            // Se c'è una sola foto, nascondi #sheetDots
            sheetDots.style.display = 'none';
          }
        }

        // 4. Popola titolo e descrizione
        if (sheetTitle) {
          sheetTitle.textContent = place.title;
        }
        if (sheetDesc) {
          sheetDesc.textContent = (currentLang === 'en' && place.desc_en) ? place.desc_en : place.desc;
        }

        // 5. Mostra la scheda scorrendo elegantemente dal basso
        if (bottomSheet) {
          bottomSheet.classList.add('is-open');
        }
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
