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
          <span class="font-semibold mx-auto">
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

  mounted () {
    if (!this.isARKNetwork) {
      this.explorers[this.currentNetwork.name] = this.currentNetwork.explorer
      this.selectedIndex = this.currentNetwork.name
    } else if (this.isARKDevnet) {
      this.selectedIndex = 'ARK Explorer - APN Devnet'
    }
  },

  computed: {
    currentNetwork () {
      return walletApi.profiles.getCurrent().network
    },

    isARKMainnet () {
      return this.currentNetwork.nethash === '6e84d08bd299ed97c212c886c98a57e36545c8f5d645ca7eeae63a8bd62d8988'
    },

    isARKDevnet () {
      return this.currentNetwork.nethash === '2a44f340d76ffc3df204c5f38cd355b7496c9065a1ade2ef92071436bd72e867'
    },

    isARKNetwork () {
      return this.isARKMainnet || this.isARKDevnet
    },

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
