<script lang="ts">
  import { useMachine } from '@xstate/svelte';
  import type { StateFrom } from 'xstate';
  import { machine } from './machine';

  const { state, service } = useMachine(machine, {
    actions: {
      'action': () => {},
    }
  });

  function stateIdentity(state: StateFrom<typeof machine>) {
    return state;
  }

  const state1 = stateIdentity($state);
  const state2 = stateIdentity($service); // types not ok
</script>

<!-- equals true, but ts complains -->
state === service: <b>{$state === $service}</b>
