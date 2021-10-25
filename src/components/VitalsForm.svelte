<mb-form class="flex flex-col gap-3 p-5 shadow-lg rounded-lg border m-5">
  <mb-context path="vitals.v0/category" />
  <mb-context path="vitals.v0/context/start_time" />
  <mb-context path="vitals.v0/context/setting" />
  <mb-quantity
    default="Cel"
    path="vitals.v0/vitals/body_temperature/any_event:0/temperature"
    label="Temperature"
  >
    <mb-unit unit="Cel" label="Cel" />
    <mb-unit unit="[degF]" label="[degF]" />
  </mb-quantity>
  <mb-context path="vitals.v0/vitals/body_temperature/any_event:0/time" />
  <mb-context path="vitals.v0/vitals/body_temperature/subject" />
  <mb-context path="vitals.v0/vitals/body_temperature/language" />
  <mb-context path="vitals.v0/vitals/body_temperature/encoding" />
  <mb-quantity
    default="mm[Hg]"
    path="vitals.v0/vitals/blood_pressure/any_event:0/systolic"
    label="Systolic"
  >
    <mb-unit unit="mm[Hg]" label="mm[Hg]" />
  </mb-quantity>
  <mb-quantity
    default="mm[Hg]"
    path="vitals.v0/vitals/blood_pressure/any_event:0/diastolic"
    label="Diastolic"
  >
    <mb-unit unit="mm[Hg]" label="mm[Hg]" />
  </mb-quantity>
  <mb-context path="vitals.v0/vitals/blood_pressure/any_event:0/time" />
  <mb-context path="vitals.v0/vitals/blood_pressure/subject" />
  <mb-context path="vitals.v0/vitals/blood_pressure/language" />
  <mb-context path="vitals.v0/vitals/blood_pressure/encoding" />
  <mb-quantity
    default="/min"
    path="vitals.v0/vitals/pulse_heart_beat/any_event:0/rate"
    label="Rate"
  >
    <mb-unit unit="/min" label="/min" />
  </mb-quantity>
  <mb-context path="vitals.v0/vitals/pulse_heart_beat/any_event:0/time" />
  <mb-select
    path="vitals.v0/vitals/pulse_heart_beat/maximum/math_function"
    label="math_function"
  >
    <mb-option value="144" label="maximum" />
  </mb-select>
  <mb-duration
    year
    month
    hour
    path="vitals.v0/vitals/pulse_heart_beat/maximum/width"
    label="width"
  />
  <mb-context path="vitals.v0/vitals/pulse_heart_beat/maximum/time" />
  <mb-context path="vitals.v0/vitals/pulse_heart_beat/subject" />
  <mb-context path="vitals.v0/vitals/pulse_heart_beat/language" />
  <mb-context path="vitals.v0/vitals/pulse_heart_beat/encoding" />
  <mb-quantity
    default="/min"
    path="vitals.v0/vitals/respiration/any_event:0/rate"
    label="Rate"
  >
    <mb-unit unit="/min" label="/min" />
  </mb-quantity>
  <mb-context path="vitals.v0/vitals/respiration/any_event:0/time" />
  <mb-context path="vitals.v0/vitals/respiration/subject" />
  <mb-context path="vitals.v0/vitals/respiration/language" />
  <mb-context path="vitals.v0/vitals/respiration/encoding" />
  <mb-percent
    path="vitals.v0/vitals/pulse_oximetry/any_event:0/spo"
    label="SpO₂"
  />
  <mb-quantity
    default="ml/min"
    path="vitals.v0/vitals/pulse_oximetry/any_event:0/inspired_oxygen/flow_rate"
    label="Flow rate"
  >
    <mb-unit unit="ml/min" label="ml/min" />
    <mb-unit unit="l/min" label="l/min" />
  </mb-quantity>
  <mb-percent
    path="vitals.v0/vitals/pulse_oximetry/any_event:0/inspired_oxygen/percent_o"
    label="Percent O₂"
  />
  <mb-checkbox
    path="vitals.v0/vitals/pulse_oximetry/any_event:0/inspired_oxygen/on_air"
    label="On air"
  />
  <mb-context path="vitals.v0/vitals/pulse_oximetry/any_event:0/time" />
  <mb-context path="vitals.v0/vitals/pulse_oximetry/subject" />
  <mb-context path="vitals.v0/vitals/pulse_oximetry/language" />
  <mb-context path="vitals.v0/vitals/pulse_oximetry/encoding" />
  <mb-select
    path="vitals.v0/vitals/national_early_warning_score_news/point_in_time:0/respiration_rate"
    label="Respiration rate"
  >
    <mb-option value="at0018" label="12-20" ordinal="0" />
    <mb-option value="at0019" label="9-11" ordinal="1" />
    <mb-option value="at0020" label="21-24" ordinal="2" />
    <mb-option value="at0021" label="<=8 or >=25" ordinal="3" /></mb-select
  >
  <mb-select
    path="vitals.v0/vitals/national_early_warning_score_news/point_in_time:0/oxygen_saturation"
    label="Oxygen saturation"
  >
    <mb-option value="at0030" label=">= 96" ordinal="0" />
    <mb-option value="at0031" label="94-95" ordinal="1" />
    <mb-option value="at0032" label="92-93" ordinal="2" />
    <mb-option value="at0033" label="<=91" ordinal="3" /></mb-select
  >
  <mb-select
    path="vitals.v0/vitals/national_early_warning_score_news/point_in_time:0/supplemental_oxygen"
    label="Supplemental oxygen"
  >
    <mb-option value="at0036" label="No" ordinal="0" />
    <mb-option value="at0037" label="Yes" ordinal="2" /></mb-select
  >
  <mb-select
    path="vitals.v0/vitals/national_early_warning_score_news/point_in_time:0/body_temperature"
    label="Body temperature"
  >
    <mb-option value="at0022" label="36.1-38.0" ordinal="0" />
    <mb-option value="at0023" label="35.1-36.0 or 38.1-39.0" ordinal="1" />
    <mb-option value="at0038" label=">=39.1" ordinal="2" />
    <mb-option value="at0039" label="<=35.0" ordinal="3" /></mb-select
  >
  <mb-select
    path="vitals.v0/vitals/national_early_warning_score_news/point_in_time:0/systolic_blood_pressure"
    label="Systolic blood pressure"
  >
    <mb-option value="at0014" label="111-219" ordinal="0" />
    <mb-option value="at0015" label="101-110" ordinal="1" />
    <mb-option value="at0016" label="91-100" ordinal="2" />
    <mb-option value="at0017" label="<=90 or >= 220" ordinal="3" /></mb-select
  >
  <mb-select
    path="vitals.v0/vitals/national_early_warning_score_news/point_in_time:0/heart_rate"
    label="Heart rate"
  >
    <mb-option value="at0013" label="51-90" ordinal="0" />
    <mb-option value="at0012" label="41-50 or 91-110" ordinal="1" />
    <mb-option value="at0011" label="111-130" ordinal="2" />
    <mb-option value="at0010" label="<=40 or >=131" ordinal="3" /></mb-select
  >
  <mb-select
    path="vitals.v0/vitals/national_early_warning_score_news/point_in_time:0/level_of_consciousness"
    label="Level of consciousness"
  >
    <mb-option value="at0024" label="A" ordinal="0" />
    <mb-option value="at0025" label="V, P or U" ordinal="3" /></mb-select
  >
  <mb-quantity
    path="vitals.v0/vitals/national_early_warning_score_news/point_in_time:0/total_score"
    label="Total score"
    hideunit
  />
  <mb-context
    path="vitals.v0/vitals/national_early_warning_score_news/point_in_time:0/time"
  />
  <mb-context
    path="vitals.v0/vitals/national_early_warning_score_news/subject"
  />
  <mb-context
    path="vitals.v0/vitals/national_early_warning_score_news/language"
  />
  <mb-context
    path="vitals.v0/vitals/national_early_warning_score_news/encoding"
  />
  <mb-context path="vitals.v0/composer" />
  <mb-context path="vitals.v0/language" />
  <mb-context path="vitals.v0/territory" />
</mb-form>
