<script lang="ts">
  import { items, activeTab } from "./store/stores";
  import Header from "./components/Header.svelte";
  import Footer from "./components/Footer.svelte";
  import PatientsList from "./components/PatientsList.svelte";
  import RegisterPatient from "./components/RegisterPatient.svelte";
  import Tabs from "./shared/Tabs.svelte";
  import PatientDetail from "./components/PatientDetail.svelte";
  import EditPatient from "./components/EditPatient.svelte";
</script>

<main>
  <Header />
  <Tabs />
  {#if $activeTab === "Patients List"}
    <PatientsList />
  {:else if $activeTab === "Register Patient"}
    <RegisterPatient />
  {:else if $activeTab === "Patient Details"}
    <PatientDetail />
  {:else if $activeTab === "Edit Patient"}
    <EditPatient />
  {/if}
  <Footer />
</main>

<style>
  main {
    max-width: 960px;
    margin: 40px auto;
  }
</style>
