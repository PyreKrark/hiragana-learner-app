<template>
	<div>
		<SideBar></Sidebar>

		<div class="topbar">
			<WindowsButtons></WindowsButtons>
		</div>

  	<div id="app">
    	<router-view></router-view>
  		</div>
	</div>
</template>

<script>
  import WindowsButtons from './components/WindowsButtons.vue'
  import SideBar from './components/SideBar.vue'

  export default {
    name: 'hiragana',
    components: { WindowsButtons,  SideBar}
  }
</script>

<style>
body {
	background: #1a1a1a;
}

.topbar {
    height: 25px;
    width: 100%;
    -webkit-app-region: drag;
    background: #1a1a1a;
    position: fixed;
    z-index: 999;
    display: flex;
}
</style>
