# Browser Storage Hooks

React hooks for local and session storage

## How to use

`import { useLocalStorage, useSessionStorage } from "@chainsafe/browser-storage-hooks"`

The hooks expose a feature flag as well as safe getters and setters for both session and local storage:

```
  canUseSessionStorage: boolean;
  sessionStorageRemove: (key: string) => void;
  sessionStorageGet: (key: string) => string | null;
  sessionStorageSet: (key: string, value: string) => void;
```

### Happy Building ♡
