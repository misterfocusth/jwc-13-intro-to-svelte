<script>
  import { message } from "$lib/index.js";

  import ToDoForm from "../lib/components/ToDoForm.svelte";
  import ToDoItem from "../lib/components/ToDoItem.svelte";

  export let data;

  console.log(data);
</script>

<div class="flex flex-col gap-1">
  <p class="text-blue-500 text-3xl font-bold">JWC13</p>
  <p class="text-xl">Let's create JWC13's ToDo List</p>
</div>

<div class="mt-12">
  <ToDoForm />
</div>

<div class="mt-12 flex flex-row gap-16 flex-wrap">
  {#each data.todos as todo}
    <ToDoItem id={todo.id} title={todo.title} description={todo.description} />
  {/each}
</div>
