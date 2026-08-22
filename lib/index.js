// Host half - minimal, no storage needed; toggle persisted via localStorage on client.
// This file satisfies dsh.bundle.patch loading. No inject required.
export const inject = [];
export function apply(ctx) {
  // Host placeholder - could add storage domain later if needed.
  // Keeping empty ensures the plugin mounts even without storage.
}
