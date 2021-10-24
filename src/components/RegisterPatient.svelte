<script lang="ts">
  import { patients, activeTab } from "../store/stores";
  let firstName = "";
  let lastName = "";
  const handleRegister = () => {
    $patients = [
      ...$patients,
      { id: $patients.length + 1, firstName: firstName, lastName: lastName },
    ];
    $activeTab = "Patients List";
  };
</script>

<div class="form">
  <input type="text" placeholder="First Name" bind:value={firstName} />
  <input type="text" placeholder="Last Name" bind:value={lastName} />
  <button on:click={handleRegister}>Register</button>
</div>

<style>
  .form {
    padding-top: 20px;
  }
</style>
