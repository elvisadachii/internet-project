// nav.js — inject sidebar navigation on every page
const NAV_LINKS = [
  { href: '../index.html', label: 'Home — All Terms' },
  { href: '../pages/www.html', label: 'World Wide Web' },
  { href: '../pages/tcp-ip.html', label: 'TCP/IP' },
  { href: '../pages/web-browsers.html', label: 'Web Browsers' },
  { href: '../pages/web-servers.html', label: 'Web Servers' },
  { href: '../pages/url.html', label: 'URLs' },
  { href: '../pages/dns.html', label: 'DNS' },
  { href: '../pages/http.html', label: 'HTTP' },
  { href: '../pages/intranet.html', label: 'Intranet' },
  { href: '../pages/extranet.html', label: 'Extranet' },
  { href: '../pages/multitier.html', label: 'Multitier Architecture' },
  { href: '../pages/ftp.html', label: 'FTP' },
  { href: '../pages/html.html', label: 'HTML' },
  { href: '../pages/web1.html', label: 'Web 1.0' },
  { href: '../pages/web2.html', label: 'Web 2.0' },
  { href: '../pages/web3.html', label: 'Web 3.0' },
  { href: '../pages/web4.html', label: 'Web 4.0' },
];

function buildNav(activePage) {
  const nav = document.getElementById('sidebar');
  if (!nav) return;

  const brand = `
    <div class="nav-brand">
      <h2>Internet Terminology</h2>
      <p>Topic 1 — Complete Reference</p>
    </div>`;

  const items = NAV_LINKS.map(link => {
    const isActive = link.href.includes(activePage) ? ' class="active"' : '';
    return `<li><a href="${link.href}"${isActive}>${link.label}</a></li>`;
  }).join('');

  nav.innerHTML = `${brand}<ul>${items}</ul><div class="nav-footer">© 2025 Internet Terms Reference</div>`;
}
