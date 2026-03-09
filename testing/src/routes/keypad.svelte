<script>
	// props
	export let expand = 1
	export let type = 'normal'
	export let clicked = () => {
		console.log('I am being clicked.')
	}
	
	// internal state
	const typeToColor = {
		clear: "#FAD5D0",
    equal: "#6B91F7",
    operator: "#CBD9FF",
    normal: "#FFF"
	}
	
	let bgColor = typeToColor[type]
</script>

<button class="key-pad" style="grid-column: span {expand}; background-color: {bgColor};" on:click={clicked}>
	<slot>C</slot>
</button>

<style>
	.key-pad {
    border: 1px solid #f0f0f0;
    padding: 22px 20px;
    margin: 0;
    font-size: 16px;
  }
  .key-pad:active {
    background-color: #ddd !important;
  }
</style>