import { derived, readable } from "svelte/store";

export const device = readable("", (set) => {
  const userAgent = typeof navigator !== "undefined" ? navigator.userAgent : "";

  const isAndroid = /android/i.test(userAgent);
  const isIos = /ip[honead]{2,4}/i.test(userAgent);
  const isDesktop = !isAndroid && !isIos;

  const device = isDesktop ? "desktop" : isIos ? "ios" : "android";
  set(device);
  return function stop() {};
});

export const isDesktop = derived(device, ($device) => $device === "desktop");
