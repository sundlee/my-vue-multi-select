<template>
  <div>
    <vue-multi-select
      v-model="values"
      :btnLabel="btnLabel"
      search
      historyButton
      :selectOptions="data" />
  </div>
</template>

<script>
import vueMultiSelect from 'vue-multi-select';
import 'vue-multi-select/dist/lib/vue-multi-select.css';

export default {
  name: 'SingleSelect',
  data() {
    return {
      btnLabel: values => values.length > 0 ? values[0].name : 'Select ...',
      name: 'first group',
      values: [],
      data: [
        { name: '0' },
        { name: '2' },
        { name: '3' },
        { name: '8' },
        { name: '9' },
        { name: '11' },
        { name: '13' },
        { name: '14' },
        { name: '15' },
        { name: '18' },
      ],
    };
  },
  methods: {
  },
  components: {
    vueMultiSelect,
  },
};
</script>
