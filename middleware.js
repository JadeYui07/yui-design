export const config = {
  matcher: '/(.*)',
};

export default function middleware(request) {
  const { pathname } = new URL(request.url);

  // Exempt paths — always pass through
  if (
    pathname === '/gate.html' ||
    pathname.startsWith('/api/') ||
    pathname.startsWith('/_vercel/') ||
    pathname === '/style.css' ||
    pathname === '/favicon.ico' ||
    pathname.startsWith('/images/')
  ) {
    return;
  }

  // Parse auth cookie
  const cookie = request.headers.get('cookie') || '';
  const match = cookie.match(/(?:^|;\s*)auth=([^;]*)/);
  const token = match ? decodeURIComponent(match[1]) : null;

  if (token && process.env.AUTH_TOKEN && token === process.env.AUTH_TOKEN) {
    return; // authorized
  }

  // Not authorized → redirect to gate
  return Response.redirect(new URL('/gate.html', request.url), 302);
}
