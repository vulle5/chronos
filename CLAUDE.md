## Commands

```bash
npx expo start          # Start dev server (opens QR code for Expo Go / dev client)
npx expo start --ios    # Start and open iOS simulator
npx expo start --android # Start and open Android emulator
npx expo start --web    # Start web version
npm run lint            # Run ESLint via expo lint
npm run prebuild        # Run expo pre-build step to build native directories (ios and android)
```

## Architecture

**Expo SDK 54**, React Native 0.81, React 19.

**Routing** — Expo Router v6 with file-based routing. Route files live under `app/`, rendering screen components from the `screens/` folder.

**Styling** — NativeWind (Tailwind CSS for React Native) is used for styling.

**Components** — react-native-reusables the use NativeWind for styling.

## Agent skills

### Issue tracker

Issues live in GitHub Issues (`github.com/vulle5/chronos`). See `docs/agents/issue-tracker.md`.

### Triage labels

Default canonical labels (`needs-triage`, `needs-info`, `ready-for-agent`, `ready-for-human`, `wontfix`). See `docs/agents/triage-labels.md`.

### Domain docs

Single-context repo — `CONTEXT.md` and `docs/adr/` at the repo root. See `docs/agents/domain.md`.
