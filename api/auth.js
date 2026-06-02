module.exports = function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { password } = req.body || {};

  if (!password) {
    return res.status(400).json({ error: 'Password required' });
  }

  if (password === process.env.SITE_PASSWORD) {
    res.setHeader(
      'Set-Cookie',
      `auth=${process.env.AUTH_TOKEN}; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=2592000`
    );
    return res.status(200).json({ ok: true });
  }

  return res.status(401).json({ error: 'Wrong password' });
};
