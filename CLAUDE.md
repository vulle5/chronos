# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npx expo start          # Start dev server (opens QR code for Expo Go / dev client)
npx expo start --ios    # Start and open iOS simulator
npx expo start --android # Start and open Android emulator
npx expo start --web    # Start web version
npm run lint            # Run ESLint via expo lint
npm run prebuild        # Run expo pre-build step to build native directories (ios and android)
```

EAS builds (requires EAS CLI and login):
```bash
eas build --profile development  # Build dev client (iOS/Android)
eas build --profile preview      # Internal distribution build
eas build --profile production   # App Store / Play Store build
```

## Architecture

**Expo SDK 54**, React Native 0.81, React 19. New Architecture enabled (`newArchEnabled: true`). React Compiler enabled (`experiments.reactCompiler: true`).

**Routing** — Expo Router v6 with file-based routing. Route files live under `app/`, rendering screen components from the `screens/` folder. The root layout (`app/_layout.tsx`) wraps everything in a React Navigation `ThemeProvider` and a `Stack`. The `(tabs)` group provides the bottom-tab navigator with two tabs (Home, Explore). A `modal` screen is registered at the root stack level.

**Styling** — NativeWind (Tailwind CSS for React Native) is used for styling, integrated with the custom theming system. `constants/theme.ts` exports `Colors` (light/dark palettes) and `Fonts` (platform-specific font stacks). `hooks/use-color-scheme.ts` wraps the system color scheme; there is a separate `.web.ts` variant for web. `hooks/use-theme-color.ts` resolves a named color token against the active scheme, with optional per-component overrides.

**Components** — Organized into `components/primitives/` (basic UI elements like `ThemedText`, `ThemedView`, `IconSymbol` with platform overrides) and `components/ui/` (higher-level components like `Collapsible`). `HapticTab` wraps tab bar buttons with haptic feedback. Screen components are located in the `screens/` folder.

**Path alias** — `@/` maps to the repo root (configured in `tsconfig.json`).

**EAS** — `eas.json` defines three build profiles: `development` (dev client, internal distribution), `preview` (internal), `production` (auto-increment build number). The EAS project ID is `8f7166d1-d8b1-4a70-9eff-0577436e5acc`, owner `vulle-inc`.

**Platform overrides** — Files ending in `.ios.tsx`, `.web.ts`, etc. are picked up automatically by Metro/Expo. The `IconSymbol` component uses this to render SF Symbols on iOS and a Materialicons fallback elsewhere.
