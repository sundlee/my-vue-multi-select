<template>
  <div>
    <vue-multi-select
      v-model="values"
      search
      historyButton
      :filters="filters"
      :options="options"
      :selectOptions="data"/>
      <button
        @click="reloadFunction" >
        Change v-model
      </button>
  </div>
</template>

<script>
import vueMultiSelect from 'vue-multi-select';
import 'vue-multi-select/dist/lib/vue-multi-select.css';

export default {
  name: 'CustomSelect',
  data() {
    return {
      name: 'first group',
      values: [
        { label: '2' },
        { label: '3' },
      ],
      data: [{
        title: 'part one',
        elements: [
          { label: '0', disabled: true },
          { label: '2' },
          { label: '3' },
          { label: '8' },
          { label: '9' },
          { label: '11' },
          { label: '13' },
          { label: '14' },
          { label: '15' },
          { label: '18' },
        ],
      }, {
        title: 'part two',
        elements: [
          { label: '23' },
          { label: '25' },
          { label: '31' },
          { label: '42' },
          { label: '56' },
          { label: '76' },
          { label: '82' },
          { label: '42' },
          { label: '13' },
          { label: '21' },
        ],
      }],
      filters: [{
        nameAll: 'Select all',
        nameNotAll: 'Deselect all',
        func() {
          return true;
        },
      }],
      options: {
        multi: true,
        groups: true,
        labelName: 'label',
        labelList: 'elements',
        groupName: 'title',
        cssSelected: option => (option.selected ? { 'background-color': '#5764c6' } : ''),
      },
    };
  },
  methods: {
    reloadFunction() {
      this.values = [
        { label: '2' },
        { label: '3' },
      ];
    },
  },
  components: {
    vueMultiSelect,
  },
};
</script>
