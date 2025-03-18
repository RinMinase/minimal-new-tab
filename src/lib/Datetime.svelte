<script lang="ts">
  import { onMount } from "svelte";

  const INTERVAL_MS = 30_000;
  let props = $props();

  let hour12 = $state(false);
  let time = $state("");
  let date = $state("");
  let timer: number | undefined = $state();

  const getTime = (type?: boolean) => {
    return new Date().toLocaleTimeString("en-US", {
      hour12: type !== undefined ? type : hour12,
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const getDate = () => {
    return new Date().toString().split(" ").slice(1, 4).join(" ");
  };

  const createInterval = () => {
    timer = setInterval(() => {
      time = getTime();
      date = getDate();
    }, INTERVAL_MS);
  };

  $effect(() => {
    createInterval();

    return () => {
      if (timer) clearInterval(timer);
    };
  });

  onMount(() => {
    if (localStorage.getItem("hour12")) {
      hour12 = !!localStorage.getItem("hour12");
    }

    time = getTime(!!localStorage.getItem("hour12"));
    date = getDate();

    document.addEventListener("visibilitychange", () => {
      if (document.visibilityState === "hidden") {
        if (timer) clearInterval(timer);
      } else {
        if (!timer) {
          createInterval();
        } else {
          clearInterval(timer);
          createInterval();
        }
      }
    });
  });

  const changeTimeType = () => {
    time = getTime(!hour12);
    localStorage.setItem("hour12", `${!hour12}`);

    hour12 = !hour12;
  };
</script>

<div
  class={[
    "absolute top-0 left-0 h-svh w-svw flex flex-col align-center justify-center z-0",
    props.darkMode ? "text-white" : "text-zinc-900",
  ]}
>
  <h1 class="text-[50px] text-center">{date}</h1>
  <h1 class="flex justify-center items-center font-[500]">
    <span class="flex items-end">
      <span class="text-[160px] tracking-[-5px]">
        {time.replace(/ (A|P)M/, "")}
      </span>
      <span class="inline-flex text-[80px] pb-4 pl-2">
        {time.replace(/\d\d:\d\d ?/, "")}
      </span>
    </span>
    <span
      class="flex items-center border border-slate-300 p-2 rounded-xl cursor-pointer ml-8 opacity-50 hover:opacity-100 transition-opacity ease-in"
      onclick={changeTimeType}
    >
      ···
    </span>
  </h1>
</div>
