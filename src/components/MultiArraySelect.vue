<template>
  <div>
    <vue-multi-select
    v-model="values"
    search
    historyButton
    :filters="filters"
    :position="position"
    :options="options"
    :selectOptions="data" /> 
    <button
      @click="reloadFunction">
      Change v-model
    </button>
  </div>
</template>

<script>
import vueMultiSelect from 'vue-multi-select';
import 'vue-multi-select/dist/lib/vue-multi-select.css';

export default {
  name: 'MultiArraySelect',
  data() {
    return {
      name: 'first group',
      values: [
        '0',
        '2',
      ],
      data: [{
        title: 'part one',
        elements: [
          '0',
          '2',
          '3',
          '8',
          '9',
          '11',
          '13',
          '14',
          '15',
          '18',
        ],
      }, {
        title: 'part two',
        elements: [
          '23',
          '25',
          '31',
          '42',
          '56',
          '76',
          '82',
          '42',
          '13',
          '21',
        ],
      }],
      filters: [{
        nameAll: 'Select all',
        nameNotAll: 'Deselect all',
        func() {
          return true;
        },
      }],
      position: 'bottom-left',
      options: {
        multi: true,
        groups: true,
        labelList: 'elements',
        groupName: 'title',
        cssSelected: option => (option.selected ? { 'background-color': '#5764c6' } : ''),
      },
    };
  },
  methods: {
    reloadFunction() {
      this.values = [
        '2',
        '3',
      ];
    },
  },
  components: {
    vueMultiSelect,
  },
};
</script>
