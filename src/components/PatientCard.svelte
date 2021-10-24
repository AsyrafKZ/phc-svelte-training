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
    <button on:click={handleView}>View</button>
    <button on:click={handleEdit}>Edit</button>
  </span>
</header>

<style>
  header {
    display: flex;
    justify-content: space-between;
  }
  button {
    margin: 1rem;
    min-height: 50px;
    min-width: 100px;
    font-size: larger;
    border-radius: 5px;
    box-shadow: none;
    background-color: salmon;
  }
</style>
