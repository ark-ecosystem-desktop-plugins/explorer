module.exports = {
  template: `
    <div>
      <WebFrame src="https://arkecosystem.github.io/explorer/" class="w-full h-full" />
    </div>
  `,

  components: {
    WebFrame: walletApi.components.WebFrame
  }
}
