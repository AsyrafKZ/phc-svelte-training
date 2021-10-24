import { writable, derived } from "svelte/store";

export const items = writable(["Patients List", "Register Patient"]);
export const activeTab = writable("Patients List");
export const patients = writable([
  {
    id: 1,
    firstName: "John",
    lastName: "Doe",
  },
  {
    id: 2,
    firstName: "Jane",
    lastName: "Roe",
  },
  {
    id: 3,
    firstName: "Tanaka",
    lastName: "Kyudai",
  },
]);
export const currentPatient = writable(0);
