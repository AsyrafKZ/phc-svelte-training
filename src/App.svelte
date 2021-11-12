<script lang="ts">
  import "medblocks-ui"
  import "medblocks-ui/dist/shoelace"
  import "medblocks-ui/dist/src/medblocks/form/form"
  // import '@shoelace-style/shoelace/dist/themes/base.css'
  import { items, activeTab } from "./store/stores";
  import Header from "./components/Header.svelte";
  import Footer from "./components/Footer.svelte";
  import PatientsList from "./components/PatientsList.svelte";
  import RegisterPatient from "./components/RegisterPatient.svelte";
  import Tabs from "./shared/Tabs.svelte";
  import PatientDetail from "./components/PatientDetail.svelte";
  import EditPatient from "./components/EditPatient.svelte";
import VitalsForm from "./components/VitalsForm.svelte";

let r = fetch("http://64.227.189.25/ehrbase/rest/ecis/v1/template/PHC-Triage.v0").then(res => res.json())

</script>

<main>
  <Header />
  
  {#await r}
<!-- optionally show something while promise is pending -->
<p> awaiting for response from the openEHR server</p>
{:then data}
<!-- promise was fulfilled -->
<pre>
    A template is fetched! {JSON.stringify(data.webTemplate.templateId, null, 2)}
  </pre
>
{:catch error}
<!-- optionally show something while promise was rejected -->
<p>Whoopsie something has gone wrong!</p>
{/await}

  <Tabs />
  {#if $activeTab === "Patients List"}
    <PatientsList />
  {:else if $activeTab === "Register Patient"}
    <RegisterPatient />
  {:else if $activeTab === "Vitals Form"}
  <VitalsForm/>
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
