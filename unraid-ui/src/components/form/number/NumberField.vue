<script setup lang="ts">
import { cn } from '@/lib/utils';
import type { NumberFieldRootEmits, NumberFieldRootProps } from 'reka-ui';
import { NumberFieldRoot, useForwardPropsEmits } from 'reka-ui';
import { computed, type HTMLAttributes } from 'vue';

interface Props extends NumberFieldRootProps {
  class?: HTMLAttributes['class'];
}

const props = defineProps<Props>();
const emits = defineEmits<NumberFieldRootEmits>();

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;
  return delegated;
});

const forwarded = useForwardPropsEmits(delegatedProps, emits);
</script>

<template>
  <NumberFieldRoot v-bind="forwarded" :class="cn('grid gap-1.5 relative', props.class)">
    <slot />
  </NumberFieldRoot>
</template>
