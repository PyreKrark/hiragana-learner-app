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

@import url('https://fonts.googleapis.com/css?family=Montserrat:300,600');

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-family: 'Montserrat';
}

#app {
  overflow: hidden;
}

body {
  overflow: hidden;
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

.page {
  text-align: center;
  width: 100%;
  margin-top: 21px;
  margin-right: 120px;
  background: #131517;
  border-radius: 5px;
  color: white;
  height: 100vh;
  padding: 1px;
  overflow: auto;
}
</style>
