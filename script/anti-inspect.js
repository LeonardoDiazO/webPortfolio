/**
 * Anti-Inspect Protection
 * Leonardo Díaz - Portfolio
 * ⚠️ Este archivo está protegido. No modifiques ni redistribuyas sin autorización.
 */

(function () {
    'use strict';

    // ─── 1. BLOQUEAR CLICK DERECHO ─────────────────────────────────────────────
    document.addEventListener('contextmenu', function (e) {
        e.preventDefault();
        return false;
    });

    // ─── 2. BLOQUEAR ATAJOS DE TECLADO ────────────────────────────────────────
    document.addEventListener('keydown', function (e) {
        const key = e.key || e.keyCode;

        // F12
        if (key === 'F12' || e.keyCode === 123) {
            e.preventDefault();
            return false;
        }

        // Ctrl+Shift+I (Inspector)
        if (e.ctrlKey && e.shiftKey && (key === 'I' || key === 'i' || e.keyCode === 73)) {
            e.preventDefault();
            return false;
        }

        // Ctrl+Shift+J (Consola)
        if (e.ctrlKey && e.shiftKey && (key === 'J' || key === 'j' || e.keyCode === 74)) {
            e.preventDefault();
            return false;
        }

        // Ctrl+Shift+C (Selector de elementos)
        if (e.ctrlKey && e.shiftKey && (key === 'C' || key === 'c' || e.keyCode === 67)) {
            e.preventDefault();
            return false;
        }

        // Ctrl+U (Ver código fuente)
        if (e.ctrlKey && (key === 'U' || key === 'u' || e.keyCode === 85)) {
            e.preventDefault();
            return false;
        }

        // Ctrl+S (Guardar página)
        if (e.ctrlKey && (key === 'S' || key === 's' || e.keyCode === 83)) {
            e.preventDefault();
            return false;
        }

        // Ctrl+A (Seleccionar todo)
        if (e.ctrlKey && (key === 'A' || key === 'a' || e.keyCode === 65)) {
            e.preventDefault();
            return false;
        }

        // Ctrl+P (Imprimir)
        if (e.ctrlKey && (key === 'P' || key === 'p' || e.keyCode === 80)) {
            e.preventDefault();
            return false;
        }
    });

    // ─── 3. BLOQUEAR SELECCIÓN DE TEXTO ──────────────────────────────────────
    document.addEventListener('selectstart', function (e) {
        e.preventDefault();
        return false;
    });

    // ─── 4. BLOQUEAR ARRASTRE DE ELEMENTOS ───────────────────────────────────
    document.addEventListener('dragstart', function (e) {
        e.preventDefault();
        return false;
    });

    // ─── 5. DETECCIÓN DE DEVTOOLS ─────────────────────────────────────────────
    // Técnica basada en diferencia de tamaño de ventana
    var devToolsOpen = false;

    function showDevToolsWarning() {
        if (devToolsOpen) return;
        devToolsOpen = true;

        var overlay = document.getElementById('devtools-overlay');
        if (overlay) {
            overlay.style.display = 'flex';
        }
    }

    function hideDevToolsWarning() {
        devToolsOpen = false;
        var overlay = document.getElementById('devtools-overlay');
        if (overlay) {
            overlay.style.display = 'none';
        }
    }

    // Detección por tamaño (DevTools abiertos en la misma ventana)
    function checkDevTools() {
        var widthThreshold = window.outerWidth - window.innerWidth > 160;
        var heightThreshold = window.outerHeight - window.innerHeight > 160;

        if (widthThreshold || heightThreshold) {
            showDevToolsWarning();
        } else {
            hideDevToolsWarning();
        }
    }

    // Detección por tiempo de ejecución del debugger (técnica avanzada)
    setInterval(function () {
        var startTime = performance.now();
        // eslint-disable-next-line no-debugger
        debugger;
        var endTime = performance.now();
        if (endTime - startTime > 100) {
            showDevToolsWarning();
        }
    }, 1000);

    setInterval(checkDevTools, 800);

    // ─── 6. CREAR OVERLAY DE ADVERTENCIA (DOM listo) ─────────────────────────
    function createOverlay() {
        if (document.getElementById('devtools-overlay')) return;

        var overlay = document.createElement('div');
        overlay.id = 'devtools-overlay';
        overlay.innerHTML = [
            '<div class="devtools-content">',
            '  <div class="devtools-icon">🔒</div>',
            '  <h2>Acceso Restringido</h2>',
            '  <p>Las herramientas de desarrollo están bloqueadas en este sitio.</p>',
            '  <p class="devtools-sub">Por favor cierra las DevTools para continuar navegando.</p>',
            '</div>'
        ].join('');

        document.body.appendChild(overlay);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', createOverlay);
    } else {
        createOverlay();
    }

})();
