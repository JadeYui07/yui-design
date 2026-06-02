export const config = {
  matcher: '/(.*)',
};

export default function middleware(request) {
  const auth = request.headers.get('authorization');

  if (auth) {
    const [scheme, encoded] = auth.split(' ');
    if (scheme === 'Basic') {
      const [user, pass] = atob(encoded).split(':');
      if (user === 'jade' && pass === process.env.SITE_PASSWORD) {
        return;
      }
    }
  }

  return new Response('Authentication required', {
    status: 401,
    headers: { 'WWW-Authenticate': 'Basic realm="Portfolio"' },
  });
}
