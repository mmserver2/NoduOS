export const workerRuntimeShell = {
  name: '@noduos/app-worker-runtime-shell',
  stage: 'foundation-only',
  startsWorker: false,
  consumesQueue: false,
  executesJob: false,
  deploys: false
} as const;
