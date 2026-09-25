import jwt from 'jsonwebtoken';

const COOKIE_NAME = 'archi_session';
const secret = () => process.env.JWT_SECRET || 'development-only-change-me';

export function setSession(res, user) {
  const token = jwt.sign({ sub: user.id, role: user.role }, secret(), { expiresIn: '7d' });
  res.cookie(COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });
}

export function clearSession(res) {
  res.clearCookie(COOKIE_NAME);
}

export function requireAuth(req, res, next) {
  try {
    const token = req.cookies?.[COOKIE_NAME];
    if (!token) return res.status(401).json({ error: 'Authentication required' });
    req.auth = jwt.verify(token, secret());
    next();
  } catch {
    return res.status(401).json({ error: 'Invalid or expired session' });
  }
}
