# UI & Component Conventions

## CRITICAL: Component Override Policy
This project uses a "Themed Primitive First" architecture. You must use project-specific components located in `components/primitives/` instead of their standard React Native counterparts.

### Required Mappings:
- **Instead of** `View` (from `react-native`) → **Use** `ThemedView`
- **Instead of** `Text` (from `react-native`) → **Use** `ThemedText`
- **Instead of** `TextInput` (from `react-native`) → **Use** `ThemedTextInput` (when created)
- **Instead of** `ScrollView` (from `react-native`) → **Check for** `ThemedScrollView`

**Rule:** NEVER import `Text` or `View` directly from `react-native` for UI rendering. Always use the `@/` alias for imports.

## 1. Component Hierarchy
- **Primitives (`components/primitives/`)**: Lowest level, cross-platform building blocks (Buttons, Inputs, Text). Must handle platform differences (iOS/Android/Web) internally and consume theme tokens.
- **UI Components (`components/ui/`)**: Reusable patterns built from primitives (Cards, Modals, List Items).
- **Screens (`screens/`)**: Full-page layouts. Logic lives here; styling is passed down.
- **Routes (`app/`)**: Entry points only. Keep logic minimal; Only add route-specific logic (like header options) and render a component from `screens/`.

## 2. Styling (NativeWind / Tailwind)
- **Class-Based**: Always use `className` strings for styling. Avoid `StyleSheet.create()`.
- **Responsive Design**: Use Tailwind's `sm:`, `md:`, etc., for web-specific layouts, but prioritize the mobile-first view.
- **Consistency**: Use the design tokens defined in `constants/theme.ts` via Tailwind classes (e.g., `text-primary`, `bg-background`).
- **Platform Specifics**: Use `ios:`, `android:`, and `web:` prefixes for platform-specific styling tweaks.

## 3. Implementation Rules
- **Type Safety**: Every component must have an interface or type for its Props.
- **Functional Components**: Use arrow functions (`const Component = () => ...`).
- **Performance**:
  - Use `FlashList` from `shopify/flash-list` for long lists (crucial for the schedule grid).
  - Wrap expensive sub-components in `memo` if they rerender frequently.
- **Icons**: Use the `IconSymbol` component for all icons to ensure platform consistency (SF Symbols on iOS, Material Icons elsewhere).

## 4. The "Schedule App" Specifics
- **The Grid**: The weekly view should be a horizontal ScrollView containing 7 vertical columns.
- **Interactive States**: Use `Pressable` instead of `TouchableOpacity` for better control over hover/active states on Web.
- **Modals**: Use the `app/modal.tsx` pattern for task creation to ensure native modal behavior on iOS.

## 5. Coding Standards
- **Prop Ordering**: `className` should always be the first or last prop for readability.
- **De-structuring**: Destructure props in the function signature.
- **File Naming**: Use kebab-case for filenames (`task-card.tsx`) but PascalCase for the Component name (`TaskCard`).