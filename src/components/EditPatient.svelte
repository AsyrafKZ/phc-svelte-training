<script lang="ts">
  import PatientDemoForm from "../shared/PatientDemoForm.svelte";
  import { onDestroy } from "svelte";
  import { patients, activeTab, currentPatient, items } from "../store/stores";
  $: patient = $patients[$currentPatient];
  //   let firstName = patient.firstName;
  const handleEdit = () => {
    // patient = {
    //   ...patient,
    //   firstName: patient.firstName,
    //   lastName: patient.lastName,
    // };
    console.log(patient);
    items.set(["Patients List", "Register Patient"]);
    $activeTab = "Patients List";
  };
  onDestroy(() => {
    items.set(["Patients List", "Register Patient"]);
    $activeTab = "Patients List";
  });
</script>

<!-- <div class="form">
  <input type="text" placeholder="First Name" bind:value={patient.firstName} />
  <input type="text" placeholder="Last Name" bind:value={patient.lastName} />
  <button on:click={handleEdit}>{buttonName}</button>  aaaa
</div> -->
<PatientDemoForm
  buttonName={"Edit"}
  bind:value={patient}
  on:submit={handleEdit}
/>
