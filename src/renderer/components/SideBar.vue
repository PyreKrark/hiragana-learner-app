<template>
    <div id="sidebar">
      <!-- <img id="logo" src="../assets/logo.png" alt=""> -->
      <ul>
        <router-link to="train">
          <li><a>Train!</a></li>
        </router-link>
        <router-link to="learn">
          <li><a>Learn!</a></li>
        </router-link>
        <li><a href="#!" style="text-decoration: line-through;">Test!</a> Coming Soon</li>
      </ul>

      <div class="icons">
        <div href="#" @click.prevent="open('https://github.com/PyreKrark/hiragana-learner-app')" style="padding-left: 5px;">
          <icon style="height: 40px; width: 40px; background: white; border-radius: 20px;" :icon="['fab', 'github']"></icon>
        </div>

        <div style="padding-left: 112px;">
          <icon id="settings" style="height: 40px; width: 40px; filter: invert(100%);" :icon="['fa', 'cog']"></icon>
        </div>
      </div>

    </div>
</template>

<script>

  export default {
    methods: {
      open(link) {
        shell.openExternal(link);
      }
    }
  }
</script>

<style scoped>

#sidebar {
  margin-top: 23px;
  width: 200px;
  height: 100vh;
  float: left;
  background: #1a1a1a;
  user-select: none;
  position: relative;
}
#logo {
  width: 12vw;
  height: 12vw;
  display: block;
  margin: 20px auto;
  opacity: 0.7;
}
#sidebar ul {
  text-align: center;
  color: white;
  font-size: 26px;
  margin: 0;
  padding: 0;
}
#sidebar li {
  list-style: none;
  padding: 20px;
  border-radius: 5px;
}
#sidebar li:hover {
  background: #4e4e4e;
  color: white;
  padding: 20px 30px;
  display: block;
  margin: auto;
}
#sidebar a {
  text-decoration: none;
  color: white;
  opacity: 0.7;
  font-size: 24px;
}
.icons {
  display: flex;
  flex-direction: row;
  position: absolute;
  bottom: 25px;
  cursor: pointer;
}
</style>