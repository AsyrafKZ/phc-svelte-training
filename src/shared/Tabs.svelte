<script lang="ts">
  import { items, activeTab } from "../store/stores";
</script>

<div>
  {#each $items as item, i}
    <sl-button type="default"
      class:active={$activeTab == item}
      on:click={() => ($activeTab = item)}>{item}</sl-button
    >
  {/each}
</div>

<style>
  .active {
    border: 2px solid #d91b42;
  }
</style>
