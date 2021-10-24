<script>
  import { patients } from "../store/stores";
  import Card from "../shared/Card.svelte";
  import PatientCard from "./PatientCard.svelte";
</script>

{#each $patients as patient}
  <Card>
    <PatientCard {patient} />
  </Card>
{/each}
