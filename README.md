# Browser Storage Hooks

React hooks wrapper for local and session storage Browser API's.

## How to use

`npm i @chainsafe/browser-storage-hooks` or
`yarn add @chainsafe/browser-storage-hooks`

When ever local or session storage is required,
`import { useLocalStorage, useSessionStorage } from "@chainsafe/browser-storage-hooks"`

The hooks expose a feature flag as well as safe getters and setters for both session and local storage:

```
  canUseSessionStorage: boolean;
  sessionStorageRemove: (key: string) => void;
  sessionStorageGet: (key: string) => string | null;
  sessionStorageSet: (key: string, value: string) => void;
```

### Happy Building ♡
