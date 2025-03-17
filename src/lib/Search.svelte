<script lang="ts">
  let props = $props();
  let query = $state("");

  const submit = (e: SubmitEvent) => {
    e.preventDefault();
    window.location.href = `https://www.google.com/search?q=${query}&gl=us&gws_rd=cr`;
  };

  const focusField = (e: HTMLInputElement) => {
    e.focus();
  };
</script>

<div class="z-[9999] absolute bottom-[calc(50vh-(300px/2)-50px)] left-0 w-svw">
  <form onsubmit={submit} novalidate class="text-center">
    <input
      type="text"
      placeholder="Search Google"
      use:focusField
      bind:value={query}
      class={[
        "border-2 h-12 px-3 py-2 rounded-xl w-[400px] text-center text-[18px]!",
        props.darkMode
          ? "border-zinc-500 text-zinc-200 outline-zinc-500"
          : "border-zinc-800 text-zinc-800 outline-zinc-800",
      ]}
    />
  </form>
</div>
