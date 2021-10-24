<script>
  import { onDestroy } from "svelte";
  import { patients, currentPatient, items, activeTab } from "../store/stores";
  import Card from "../shared/Card.svelte";
  import ReturnButton from "../shared/ReturnButton.svelte";
  $: patient = $patients[$currentPatient];
  $: fullName = patient.firstName + " " + patient.lastName;
  onDestroy(() => {
    items.set(["Patients List", "Register Patient"]);
    $activeTab = "Patients List";
  });
</script>

<Card>
  <header>
    <h2>{fullName}</h2>
    <ReturnButton />
  </header>
  <pre>ID: {patient.id}</pre>
  <pre>First Name: {patient.firstName}</pre>
  <pre>Last Name: {patient.lastName}</pre>
</Card>

<style>
  header {
    display: flex;
    justify-content: space-between;
    height: 3rem;
  }
</style>
