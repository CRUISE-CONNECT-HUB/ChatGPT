// ==UserScript==
// @name         ChatGPT Dark + Inter
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  Use Inter font & darker colors on chatgpt.com
// @author       You
// @match        https://chatgpt.com/*
// @grant        GM_addStyle
// @run-at       document-start
// ==/UserScript==

(function () {
  'use strict';

  // Inject Inter font
  const link = document.createElement('link');
  link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap';
  link.rel = 'stylesheet';
  document.addEventListener('DOMContentLoaded', () => {
    // Ensure head exists when running at document-start
    (document.head || document.documentElement).appendChild(link);
  });

  // Global CSS overrides
  GM_addStyle(`
    /* Apply Inter everywhere */
    body, button, textarea, input, [contenteditable="true"] {
      font-family: 'Inter', system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif !important;
    }

    /* Darken general palette */
    :root {
      --gray-600: #2b2b2b !important;
      --gray-700: #252525 !important;
      --gray-750: #252525 !important;
      --gray-800: #0f0f0f !important;
      --gray-900: #090909 !important;
    }

    /* Chat surface tweaks */
    .dark {
      --message-surface: #1b1b1bd9 !important;
    }

    /* Composer textbox (unified composer) */
    form[data-type="unified-composer"] div[contenteditable="true"][role="textbox"] {
      background-color: #1e1e1e !important;
      color: #e0e0e0 !important;
      border-radius: 12px !important;
    }

    /* Placeholder color (best-effort; contenteditable placeholders vary) */
    form[data-type="unified-composer"] div[contenteditable="true"][role="textbox"]::placeholder {
      color: #888 !important;
    }

    /* Inputs and textareas (fallbacks) */
    textarea, input[type="text"], input[type="search"] {
      background-color: #1e1e1e !important;
      color: #e0e0e0 !important;
    }

    /* Buttons hover/focus subtlety in dark */
    button:hover {
      filter: brightness(1.05);
    }
    button:active {
      filter: brightness(0.95);
    }
  `);
})();
