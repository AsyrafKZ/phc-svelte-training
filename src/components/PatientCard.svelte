<script>
  import { activeTab, items, currentPatient } from "../store/stores";
  export let patient;
  $: fullName = patient.firstName + " " + patient.lastName;
  const handleView = () => {
    $currentPatient = patient.id - 1;
    $items = [...$items, "Patient Details"];
    $activeTab = "Patient Details";
  };
  const handleEdit = () => {
    $currentPatient = patient.id - 1;
    $items = [...$items, "Edit Patient"];
    $activeTab = "Edit Patient";
  };
</script>

<header>
  <h2>{fullName}</h2>
  <span>
    <sl-button class="button" size="medium" type="primary" on:click={handleView}>View</sl-button>
    <sl-button class="button" size="medium" type="primary" on:click={handleEdit}>Edit</sl-button>
  </span>
</header>

<style>
  header {
    display: flex;
    justify-content: space-between;
  }
  .button {
    margin: 1rem;

    box-shadow: none;
  }
</style>
