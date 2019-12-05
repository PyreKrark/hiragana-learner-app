<template>
  <div id="sidebar">
    <!-- <img id="logo" src="../assets/logo.png" alt=""> -->
    <ul>
      <li><a href="#!">Train!</a></li>
      <li><a href="#!" style="text-decoration: line-through;">Learn!</a> Coming Soon</li>
      <li><a href="#!" style="text-decoration: line-through;">Test!</a> Coming Soon</li>
    </ul>
  </div>
</template>

<script>
  export default {

  }

</script>

<style scoped>

#sidebar{
  margin-top: 27px;
  width: 200px;
  height: 20%;
  float: left;
  background: #1a1a1a;
  user-select: none;
}
#logo {
  width: 12vw;
  height: 12vw;
  display: block;
  margin: 20px auto;
  opacity: 0.7;
}
#sidebar ul{
  text-align: center;
  color: white;
  font-size: 26px;
  margin: 0;
  padding: 0;
}
#sidebar li{
  list-style: none;
  padding: 20px;
  border-radius: 5px;
}
#sidebar li:hover{
  background: #4e4e4e;
  color: white;
  padding: 20px 30px;
  display: block;
  margin: auto;
}
#sidebar a{
  text-decoration: none;
  color: white;
  opacity: 0.7;
  font-size: 24px;
}
</style>