async function loadFooter() {
  const container = document.getElementById('footer-container');
  if (!container) return;

  try {
    const res = await fetch('footer.html');  // Aquí pones la ruta a tu archivo footer.html
    if (!res.ok) throw new Error('No se pudo cargar footer.html');
    const html = await res.text();
    container.innerHTML = html;
  } catch (error) {
    console.error('Error cargando footer:', error);
  }
}

document.addEventListener('DOMContentLoaded', loadFooter);


async function loadNavBar() {
  const container = document.getElementById('navBar-container');
  if (!container) return;

  try {
    const res = await fetch('navBar.html');  // Ruta a tu archivo navbar.html
    if (!res.ok) throw new Error('No se pudo cargar navBar.html');
    const html = await res.text();
    container.innerHTML = html;
  } catch (error) {
    console.error('Error cargando navBar:', error);
  }
}

document.addEventListener('DOMContentLoaded', loadNavBar);
