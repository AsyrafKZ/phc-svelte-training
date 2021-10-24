<script lang="ts">
  import { createEventDispatcher } from "svelte";
  export let buttonName: string;
  //   export let firstName: string;
  //   export let lastName: string;
  export let value: { firstName: string; lastName: string } = {
    firstName: "",
    lastName: "",
  };
  const dispatch = createEventDispatcher();

  const submit = () => {
    dispatch("submit");
  };
</script>

<div class="form">
  <input type="text" placeholder="First Name" bind:value={value.firstName} />
  <input type="text" placeholder="Last Name" bind:value={value.lastName} />
  <button on:click={submit}>{buttonName}</button>
</div>

<style>
  .form {
    padding-top: 20px;
  }
</style>
