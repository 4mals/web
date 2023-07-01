(function() {
  try {
    function updateTheme() {
      const d = document.documentElement;
      const c = d.classList;
      c.remove('light-theme', 'dark-theme');
      const e = localStorage.getItem('theme');
      if (e === 'system' || (!e && true)) {
        const t = '(prefers-color-scheme: dark)',
          m = window.matchMedia(t);
        if (m.matches) {
          d.style.colorScheme = 'dark';
          c.add('dark-theme');
        } else {
          d.style.colorScheme = 'light';
          c.add('light-theme');
        }
      } else if (e) {
        c.add(e + '-theme' || '');
      }
      if (e === 'light' || e === 'dark') d.style.colorScheme = e;
    }

    updateTheme();

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', updateTheme);

    window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', updateTheme);
  } catch (e) { }
})();
