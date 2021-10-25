<script>
  import { items, activeTab } from "../store/stores";
  const handleReturn = () => {
    items.set(["Patients List", "Register Patient"]);
    $activeTab = "Patients List";
  };
</script>

<sl-button type="neutral" on:click={handleReturn}>Return</sl-button>

<!-- <style>
  button {
    height: fit-content;
    padding: 10px;
    background-color: wheat;
    border-radius: 5px;
    margin: 1rem;
  }
</style> -->
