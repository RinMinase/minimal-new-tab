<script lang="ts">
  import { onMount } from "svelte";
  import Datetime from "./lib/Datetime.svelte";

  import sun from "./assets/sun.svg?raw";
  import moon from "./assets/moon.svg?raw";
  import Search from "./lib/Search.svelte";

  let darkMode = $state(false);

  onMount(() => {
    if (localStorage.getItem("color-scheme")) {
      darkMode = localStorage.getItem("color-scheme") === "dark";
    } else {
      if (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      ) {
        darkMode = true;
        localStorage.setItem("color-scheme", "dark");
      } else {
        darkMode = false;
        localStorage.setItem("color-scheme", "light");
      }
    }
  });

  const changeMode = () => {
    localStorage.setItem("color-scheme", darkMode ? "light" : "dark");
    darkMode = !darkMode;
  };
</script>

<main class={["flex flex-col h-svh", darkMode ? "bg-zinc-800" : "bg-zinc-200"]}>
  <div class="flex justify-end p-2 relative">
    <div
      class={[
        "relative inline-block h-8 w-8 cursor-pointer z-[9900]",
        darkMode ? "stroke-white" : "stroke-zinc-900",
      ]}
      onclick={changeMode}
    >
      {#if darkMode}
        <div class="absolute top-0 left-0 h-8 w-8 cursor-pointer">
          {@html moon}
        </div>
      {:else}
        <div class="absolute top-0 left-0 h-8 w-8 cursor-pointer">
          {@html sun}
        </div>
      {/if}
    </div>
  </div>

  <Search {darkMode} />
  <Datetime {darkMode} />
</main>
