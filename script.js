const btn = document.getElementById('theme-toggle');
const docTarget = document.documentElement; // The <html> element

btn.addEventListener('click', () => {
    // 1. Determine current state
    const currentTheme = docTarget.getAttribute('data-theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    let newTheme;

    if (currentTheme) {
        // If a manual theme is already set, toggle it
        newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    } else {
        // If following system, toggle to the opposite of the system
        newTheme = systemPrefersDark ? 'light' : 'dark';
    }

    // 2. Apply and Save
    docTarget.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
});
