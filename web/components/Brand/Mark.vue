<script setup lang="ts">
export interface Props {
  gradientStart?: string;
  gradientStop?: string;
}

withDefaults(defineProps<Props>(), {
  gradientStart: '#e32929',
  gradientStop: '#ff8d30',
});
</script>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 133.52 76.97"
  >
    <defs>
      <linearGradient
        id="unraid-mark"
        x1="23.76"
        y1="81.49"
        x2="109.76"
        y2="-4.51"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" :stop-color="gradientStart" />
        <stop offset="1" :stop-color="gradientStop" />
      </linearGradient>
    </defs>
    <path
      fill="url(#unraid-mark)"
      d="M63.49,19.24H70V57.73H63.49ZM6.54,57.73H0V19.24H6.54Zm25.2,4.54h6.55V77H31.74ZM15.87,45.84h6.54V69.62H15.87Zm31.75,0h6.54V69.62H47.62ZM127,19.24h6.54V57.73H127ZM101.77,14.7H95.23V0h6.54Zm15.88,16.44H111.1V7.35h6.55Zm-31.75,0H79.36V7.35H85.9Z"
    />
  </svg>
</template>
