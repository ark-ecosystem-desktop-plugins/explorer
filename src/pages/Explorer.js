module.exports = {
  template: `
    <div class="flex flex-col">
      <MenuDropdown
        :value="selectedIndex"
        :items="explorers"
        class="flex align-center justify-center p-2 w-1/3 mb-2 text-grey-dark"
        @select="selectUrl"
      >
        <div
          slot="handler"
          slot-scope="handlerScope"
        >
          <MenuDropdownHandler
            :value="handlerScope.activeValue"
            :item="handlerScope.item"
            :placeholder="handlerScope.placeholder"
            :prefix="handlerScope.prefix"
            :icon-disabled="handlerScope.isOnlySelectedItem"
          >
            {{ handlerScope.activeValue }}
          </MenuDropdownHandler>
        </div>

        <div
          slot="item"
          slot-scope="itemScope"
          class="flex flex-row space-between"
        >
          <span class="font-semibold">
            {{ itemScope.value }}
          </span>
        </div>
      </MenuDropdown>

      <WebFrame v-if="selectedUrl" :src="selectedUrl" class="w-full h-full" />
    </div>
  `,

  data () {
    return {
      selectedIndex: 'ARK Explorer - APN',
      explorers: {
        'ARK Explorer - APN': 'https://explorer.ark.io/',
        'ARK Explorer - APN Devnet': 'https://dexplorer.ark.io/'
      }
    }
  },

  computed: {
    explorerNames () {
      return Object.keys(this.explorers)
    },

    selectedUrl () {
      return this.selectedIndex !== null ? this.explorers[this.selectedIndex] : this.explorers[0]
    }
  },

  methods: {
    selectUrl (value) {
      this.selectedIndex = value
    }
  }
}
