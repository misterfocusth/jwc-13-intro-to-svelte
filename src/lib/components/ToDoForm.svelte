<script>
  import { update, formId, formTitle, formDesc } from "$lib/stores.js";
</script>

<form
  method="POST"
  class="flex flex-col gap-4 max-w-[50%]"
  action={$update ? "?/update" : "?/create"}
>
  {#if $update}
    <input type="hidden" name="id" value={$formId} />
  {/if}

  <input
    type="text"
    name="title"
    required
    value={$formTitle || ""}
    placeholder="e.g. Coding Svelte"
    class="p-2 border border-gray-300 rounded-lg w-full"
  />

  <textarea
    type="text"
    rows="5"
    name="description"
    value={$formDesc || ""}
    placeholder="e.g. Simple JWC13 Web App using Svelte"
    class="p-2 border border-gray-300 rounded-lg w-full"
  />

  {#if $update}
    <button
      type="button"
      class="p-2 bg-red-500 text-white rounded-lg"
      on:click={() => {
        update.set(false);
        formId.set("");
        formTitle.set("");
        formDesc.set("");
      }}
    >
      Cancel
    </button>
  {/if}

  <button type="submit" class="p-2 bg-blue-500 text-white rounded-lg">
    {$update ? "Update" : "Create"}
  </button>
</form>
