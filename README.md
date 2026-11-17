# PAM Airport · Vacation Planner 2027

A shared calendar for the team's 2027 vacations. Everyone can view it. Only **Areef** and **Alim** can make changes, after signing in with their own passwords.

**Features:** a year calendar for each person and for the whole team, remaining leave days, an easy date box ("1st January to 15th"), Fridays set as days off automatically, blackout dates with warnings, Maldives public holidays, a separate international holiday list, a full edit history, and an Excel download in the 2026 layout.

## Files

| File | What it is |
|---|---|
| `index.html` | The app |
| `firebase-config.js` | Your Firebase settings and the two managers' emails |
| `seed.js` | Starter data: team, leave types and 2027 holidays |
| `firestore.rules` | Database security rules: everyone can read, only managers can write, and history can't be edited |

## One-time setup (about 10 minutes)

1. **Create the Firebase project.** Go to [console.firebase.google.com](https://console.firebase.google.com) → **Add project** (free Spark plan).
2. **Create the database.** Go to **Build → Firestore Database → Create database** → choose production mode → pick a location close to you (e.g. `asia-south1`).
3. **Add the security rules.** Open **Firestore → Rules**, paste the contents of `firestore.rules`, and put in the two managers' real emails. Then click **Publish**.
4. **Turn on password sign-in.** Go to **Build → Authentication → Get started → Email/Password → Enable**.
5. **Create the two manager logins.** Go to **Authentication → Users → Add user**, once for Areef and once for Alim, each with their email and a starting password.
6. **Register the website.** Go to **Project settings → Your apps → Web (</>)**, register the app, and copy the `firebaseConfig` values into `firebase-config.js`. Put the same two emails in `MANAGER_EMAILS`.
7. **Allow the website address.** Go to **Authentication → Settings → Authorized domains** and add `<your-github-username>.github.io`.
8. **Publish on GitHub Pages.** In the repo, open **Settings → Pages → Deploy from a branch → `main` / root → Save**.
9. **Load the starter data.** Open the site, sign in as Areef or Alim, and tap **"Load team, leave types & holidays"**.

## Notes

- Anyone with the link can **view** the planner. Only the two manager accounts can **change** it. Firebase enforces this, not the page.
- Managers can change their password in the app (tap their name → Change password). They can also use "Forgot password?" on the sign-in screen.
- The Islamic holiday dates are expected dates. Tick "confirmed" in **Settings → Public holidays** once they are announced.
