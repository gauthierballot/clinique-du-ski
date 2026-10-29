/**
 * api/lang.js
 * ===========
 * Fonction serverless Vercel (Edge Function compatible).
 * Détecte le pays de l'utilisateur via l'en-tête `x-vercel-ip-country`
 * injecté automatiquement par Vercel — sans aucun service externe payant.
 *
 * Règle de langue :
 *   France (FR) → français ("fr")
 *   Tous les autres pays → anglais ("en")
 *
 * Endpoint appelé par le JS côté client : GET /api/lang
 * Réponse : { "lang": "fr", "country": "FR" }
 */

export default function handler(req, res) {
  // Vercel injecte automatiquement le code pays ISO 3166-1 alpha-2
  // Exemple : "FR", "CH", "US", "DE", "GB" ...
  const country = (req.headers['x-vercel-ip-country'] || '').toUpperCase();

  // Seule la France reçoit le français par défaut
  const lang = country === 'FR' ? 'fr' : 'en';

  // Cache CDN de 1 heure — économise les appels répétés
  res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate=86400');
  res.setHeader('Content-Type', 'application/json');

  res.status(200).json({ lang, country });
}
