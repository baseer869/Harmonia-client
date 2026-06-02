# Deploy — Harmonia (client website, Railway)

The website has no backend — it calls the admin's public API. Deploy the
**admin first**, then this.

## 1. Push this folder to its own GitHub repo
```bash
cd harmonia
git init
git add -A
git commit -m "Harmonia client website"
git branch -M main
git remote add origin git@github.com:<you>/harmonia.git
git push -u origin main
```
`.env.local` is gitignored — only `.env.example` is committed.

## 2. Railway service
Railway → **New → Deploy from GitHub repo** → pick `harmonia`, in the same
project as the admin (or a new one). Then **Settings → Networking → Generate
Domain** (e.g. `https://harmonia.up.railway.app`).

## 3. Environment variables (Variables tab)
| Key | Value |
|-----|-------|
| `NEXT_PUBLIC_API_URL` | `<admin URL>/api/public` (e.g. `https://harmonia-admin.up.railway.app/api/public`) |
| `NEXT_PUBLIC_TENANT_SLUG` | `marrakech-luxury` (must match the seeded tenant slug) |

> These are build-time inlined (`NEXT_PUBLIC_*`). If you change them, trigger a
> redeploy so the new value is baked into the client bundle.

## 4. Close the loop
Back in the **admin** service, set `CLIENT_ORIGIN` to this client's URL and
redeploy the admin (CORS allow-list).

## 5. Test the demo
- Open the client URL → **Voyageurs** shows the live catalogue.
- Click a card → **Réserver** (service preselected) → fill date/people/contact →
  submit → booking confirmation with a `BK-…` code.
- The booking appears in the admin under **Bookings**.

Share the client URL with your 2–3 testers.
