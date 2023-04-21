import { createMachine } from 'xstate';

type Events =
| { type: 'event' }

type Actions =
| { type: 'action' }

export const machine = createMachine({
  initial: 'main',
  tsTypes: {} as import("./machine.typegen").Typegen0,
  schema: {
    events: {} as Events,
    actions: {} as Actions,
  },
  states: {
    main: {},
  },
  on: {
    'event': {
      actions: ['action'],
    },
  }
});
