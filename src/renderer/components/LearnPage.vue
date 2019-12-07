<template>
	<div class="page">

		<vue-flip active-click="true" width="100px" height="150px" class="card" v-for="(eng, hira) in obj">
        <div slot="front">{{ hira }}</div>
        <div slot="back">{{ eng }}</div>
    </vue-flip>

	</div>
</template>

<script>
import VueFlip from 'vue-flip';

export default {
    name: 'learn-page',
    components: {
    	'vue-flip': VueFlip
    },
    data () {
      return {
        obj: { 
          "あ":"a",
          "い":"i",
          "う":"u",
          "え":"e",
          "お":"o",
          "か":"ka",
          "き":"ki",
          "く":"ku",
          "け":"ke",
          "こ":"ko",
          "さ":"sa",
          "し":"shi",
          "す":"su",
          "せ":"se",
          "そ":"so",
          "た":"ta",
          "ち":"chi",
          "つ":"tsu",
          "て":"te",
          "と":"to",
          "な":"na",
          "に":"ni",
          "ぬ":"nu",
          "ね":"ne",
          "の":"no",
          "は":"ha",
          "ひ":"hi",
          "ふ":"fu",
          "へ":"he",
          "ほ":"ho",
          "ま":"ma",
          "み":"mi",
          "む":"mu",
          "め":"me",
          "も":"mo",
          "や":"ya",
          "ゆ":"yu",
          "よ":"yo",
          "ら":"ra",
          "り":"ri",
          "る":"ru",
          "れ":"re",
          "ろ":"ro",
          "わ":"wa",
          "を":"wo",
          "ん":"n"
        }
      }
    }
  }
</script>

<style>
.front {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #121212;
}

.back {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #333333;
}

.card {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 20px;
  cursor: pointer;
  user-select: none;
  display: inline-table;
  font-size: 3em;
  color: white;
}
</style>