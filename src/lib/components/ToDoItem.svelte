<script>
  import { update, formId, formTitle, formDesc } from "$lib/stores.js";

  export let id;
  export let title;
  export let description;

  const handleClickEdit = () => {
    update.set(true);
    formId.set(id);
    formTitle.set(title);
    formDesc.set(description);
  };
</script>

<div class="w-full max-w-[45%] bg-white rounded-lg p-6">
  <form method="POST" action="?/delete">
    <input type="hidden" name="id" value={id} />

    <div class="flex flex-col gap-4">
      <p class="text-xl">{title}</p>
      <p class="text-slate-600">{description}</p>

      <div class="flex flex-row items-center gap-4 mt-2">
        <button
          type="button"
          class="bg-black text-white rounded w-full p-1"
          on:click={handleClickEdit}>Edit ToDo</button
        >
        <button type="submit" class="bg-green-400 rounded w-full p-1">Done</button>
      </div>
    </div>
  </form>
</div>
