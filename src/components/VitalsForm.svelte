<script lang="ts">
  import axios from "axios";

  const handleSubmit = async (e: CustomEvent) => {
    const composition = e.detail;
    console.log("no curly braces", composition);
    console.log("composition with curly braces", { composition });
    const request = await axios.post(
      "http://64.227.189.25/ehrbase/rest/ecis/v1/composition",
      composition,
      {
        params: {
          format: "FLAT",
          templateId: "Body-temperature.v0.1",
          ehrId: "f814350b-228a-4004-a7f2-5b4781d8a950",
        },
      }
    );
    console.log(request.data)
  };
</script>

<mb-form style="padding: 1rem;" on:mb-submit={handleSubmit}>
  <mb-context path="body-temperature/category" />
  <mb-context path="body-temperature/context/start_time" />
  <mb-context path="body-temperature/context/setting" />
  <mb-quantity
    default="Cel"
    path="body-temperature/body_temperature/any_event:0/temperature"
    label="Temperature"
  >
    <mb-unit unit="Cel" label="Cel" />
    <mb-unit unit="[degF]" label="[degF]" />
  </mb-quantity>
  <mb-context path="body-temperature/body_temperature/any_event:0/time" />
  <mb-context path="body-temperature/body_temperature/subject" />
  <mb-context path="body-temperature/body_temperature/language" />
  <mb-context path="body-temperature/body_temperature/encoding" />
  <mb-context path="body-temperature/composer" />
  <mb-context path="body-temperature/language" />
  <mb-context path="body-temperature/territory" />
  <mb-submit>
    <sl-button type="primary">Submit</sl-button>
  </mb-submit>
</mb-form>
