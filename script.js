(function() {
  try {
    function updateTheme() {
      const d = document.documentElement;
      const c = d.classList;
      c.remove('light', 'dark');
      const e = localStorage.getItem('theme');
      if (e === 'system' || (!e && true)) {
        const t = '(prefers-color-scheme: dark)',
          m = window.matchMedia(t);
        if (m.matches) {
          d.style.colorScheme = 'dark';
          c.add('dark');
        } else {
          d.style.colorScheme = 'light';
          c.add('light');
        }
      } else if (e) {
        c.add(e || '');
      }
      if (e === 'light' || e === 'dark') d.style.colorScheme = e;
    }

    // Update theme on page load
    updateTheme();

    // Update theme when color scheme preference changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', updateTheme);

    window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', updateTheme);

  } catch (e) { }
})();
