// utils/loadBootstrapCSS.js
export function loadBootstrapCSS() {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = 'https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css';
  link.id = 'bootstrap-css';
  document.head.appendChild(link);
}

export function unloadBootstrapCSS() {
  const link = document.getElementById('bootstrap-css');
  if (link) {
    document.head.removeChild(link);
  }
}
