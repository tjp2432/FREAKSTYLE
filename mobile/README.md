# Freak Style - Mobile App (Future)

This directory will contain the React Native mobile application.

## Setup (when ready)

```bash
# Create a new Expo project
npx create-expo-app@latest mobile

# Or initialize React Native CLI
npx @react-native-community/cli init FreakStyleMobile
```

## Architecture Notes

- Share TypeScript types from `src/types/` via a shared package
- Reuse API client from `src/services/api.ts` 
- Components in `src/components/ui/` are designed to be portable
