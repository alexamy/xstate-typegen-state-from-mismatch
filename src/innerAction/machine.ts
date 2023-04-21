import { createMachine } from 'xstate';

export const machine = createMachine({
  initial: 'main',
  tsTypes: {} as import("./machine.typegen").Typegen0,
  schema: {
    events: {} as { type: 'event' },
    actions: {} as { type: 'action' },
  },
  states: { main: {} },
  on: {
    'event': { actions: ['action'] },
  }
}, {
  actions: { 'action': () => {} }
});
