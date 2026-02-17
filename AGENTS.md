# AGENTS

## Repo Overview
- This repo is an Expo/React Native app located in `app-v1/`.
- Use `expo-router` with `src/app` routes.
- TypeScript is strict; path alias `~/*` maps to `app-v1`.
- Styling uses NativeWind with `className` and theme in `src/global.css`.

## Required Agent Rules (Cursor)
- Use Tailwind CSS classes with `className` for all styling.
- Use React Native `StyleSheet` only when specifically requested.
- Follow the project's theme configuration in `src/global.css`.

## Git Guidelines (Cursor)
- Keep commit messages short and clear.
- Use a single sentence to describe what changed.
- If a commit is large, use bullet points to break down changes.
- Explain why the change was made if it is not obvious.

## Setup
- Node is managed via asdf; see `.tool-versions` (nodejs 22.18.0).
- Install deps in `app-v1/` with `npm install`.

## Common Commands (run in `app-v1/`)
- Start web: `npm run start:web`
- Start iOS: `npm run start:ios`
- Start Android: `npm run start:android`
- Expo start (alternate): `npx expo start`
- Expo start clean: `npx expo start -c`
- Prebuild all: `npx expo prebuild`
- Prebuild iOS: `npx expo prebuild --platform ios`
- Prebuild Android: `npx expo prebuild --platform android`
- Run iOS native: `npx expo run:ios`
- Run Android native: `npx expo run:android`

## Linting
- Lint all: `npx eslint .`
- ESLint config: `app-v1/eslint.config.js` (Flat config, Expo preset).

## Tests
- No test runner or scripts are configured in `app-v1/package.json`.
- Single test: not applicable until a test framework is added.
- If you add tests, update this section with the exact command.

## Code Style
- Language: TypeScript (strict), React 19, React Native 0.81, Expo Router 6.
- Prefer functional components and hooks; components are exported as named exports.
- Use `type` aliases over `interface` for component props and state shapes.
- Keep files small and focused; screens often compose header/content components.
- Avoid unnecessary comments; add only when logic is non-obvious.

## Imports
- Order imports: React/expo/React Native first, third-party next, then internal `~/src/...`, then relative `./`.
- Separate import groups with a blank line.
- Use `type` imports for types where possible.
- Use the `~/*` alias (configured in `tsconfig.json`) for app imports.

## Formatting
- Use single quotes and semicolons (matches existing files).
- Favor trailing commas on multiline objects/arrays.
- Keep JSX compact; avoid extra wrapper components when not needed.
- Keep Tailwind class strings readable; use `cn()` for conditional classes.

## Naming
- Components: PascalCase (e.g., `SignInContent`, `ProfileHeader`).
- Hooks/state: camelCase (e.g., `profileInit`, `loading`).
- Constants: camelCase or SCREAMING_SNAKE only for true constants.
- Screen files follow kebab-case under `src/screens/`.
- Use `*-content.tsx`, `*-header.tsx` for screen composition.

## React Native & Expo Patterns
- Wrap screens with `SafeAreaView` where appropriate.
- Use `ScrollView` for form screens and set `keyboardShouldPersistTaps='handled'`.
- Prefer `Pressable` and `Button` UI components over raw touchables.
- Use `Platform.select` for web/native differences.
- Use `expo-router` navigation helpers (`router.replace`, `router.navigate`, `<Link />`).

## Styling (NativeWind)
- Use `className` with Tailwind utilities for all styling (Cursor rule).
- Keep theme tokens in `src/global.css` and reuse variables via Tailwind classes.
- Use `cn()` from `src/lib/utils.ts` to merge className values.
- Use existing UI primitives in `src/components/ui/` before creating new ones.
- Avoid inline styles unless required for non-styleable props or animations.

## State Management
- Zustand stores live in `src/stores/` and export a named store (`AuthStore`, `ProfileStore`).
- Store state uses `type State` and `type Actions` with an `initState` object.
- Call store actions with `Store()` hook or `Store.getState()` in async flows.

## Forms
- Forms use `react-hook-form` with `Controller`.
- Keep validation rules next to the `Controller`.
- Access errors via `useFormState({ control })`.

## API Usage
- API client is generated OpenAPI in `src/openapi/`; do not edit these files directly.
- Use `src/api.ts` to initialize `AuthApi` and `UsersApi`.
- API base URL comes from `EXPO_PUBLIC_API_URL`.
- Pass auth tokens explicitly to API calls (e.g., `profileGetAPI(token)`).

## Error Handling
- Use try/catch for async calls that hit APIs or storage.
- Use `ErrorGet` from `src/scripts/error.ts` to normalize API errors.
- For user-facing errors, show a toast via `Toast().showToast(...)`.
- In stores, rethrow or return clean errors so screens can present them.

## Storage
- AsyncStorage keys: token stored under `token`.
- Clear auth/profile state via store actions instead of manual state resets.

## Routing & Layout
- Routes live in `src/app/` following Expo Router conventions.
- Auth/app stacks are grouped in `(auth)` and `(app)` folders.
- Use `_layout.tsx` for shared layouts per group.
- The web entrypoint is `src/app/+html.tsx` and not-found is `+not-found.tsx`.

## UI Components
- UI primitives live in `src/components/ui/` (Button, Input, Text, AlertDialog, etc.).
- Reuse `Text` variants for consistent typography.
- Use `Icon` wrapper for Lucide icons and pass `as` prop.
- Toast host is `ToastHost`; mount once near app root.

## Animation & Gestures
- Use `react-native-reanimated` for animated values.
- Use `react-native-gesture-handler` for gestures (see `Toast`).

## Files to Avoid Editing
- `src/openapi/*` is auto-generated; regenerate instead of editing.
- `dist/` is ignored by ESLint; treat as build output.

## If You Add New Tooling
- Add scripts to `app-v1/package.json` and update this file.
- Prefer npm scripts over ad-hoc commands for repeatable tasks.

## Quick Reference Paths
- App root: `app-v1/`
- Routes: `app-v1/src/app/`
- Screens: `app-v1/src/screens/`
- Components: `app-v1/src/components/`
- Stores: `app-v1/src/stores/`
- Global styles: `app-v1/src/global.css`
- API entry: `app-v1/src/api.ts`
- OpenAPI client: `app-v1/src/openapi/`

## Notes for Agents
- Keep changes small and consistent with existing patterns.
- Do not invent missing commands; document only what exists.
- When unsure, follow nearby file conventions.
- Update `AGENTS.md` if repo conventions change.
