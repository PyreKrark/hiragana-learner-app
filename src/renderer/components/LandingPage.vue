<template>
  <div id="wrapper">

      <div class="page">
        <div id="imageBox"> 
            <h1 id="letter" v-model="question">{{ letter }}</h1>
        </div>

        <div id="answerBox">
          <input id="answerBar" type="text" placeholder="Enter the answer..." v-on:keyup.enter="submit()" v-model="answer"><br>
          <button id="answerButton" @click="submit()" style="">Answer!</button>
          <p id="notify" v-bind:style="{color: CorrectColour}">{{notify}}</p>
        </div>
      </div>

      
  </div>
</template>

<script>

  //const letters = "あいうえおかきくけこさしすせそたちつてとなにぬねはひふへほまみむめもやゆよらりるれろわをん".split("");

  let obj = { 
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

  export default {
    name: "landing-page",
    components: {},
    data () {
      return {
        answer: "",
        question: "",
        notify: "",
        CorrectColour: "red"
      }
    },
    methods: {
      open (link) {
        this.$electron.shell.openExternal(link)
      },
      submit () {
        // Submit first sorts out the "correct" text to send then switches to the next "question".
        this.CorrectColour = (obj[letter.innerHTML] == this.answer) ? "green" : "red";
        this.notify = (obj[letter.innerHTML] == this.answer) ? this.notify = "Correct!" : `Incorrect! ${letter.innerHTML} is \"${obj[letter.innerHTML]}\"!`;

        this.answer = "";
        letter.innerHTML = Object.keys(obj)[Math.floor(Math.random() * Object.keys(obj).length)];
      }
    },
    computed: {
      letter: function() {
        // Randomises "question" upon load
        return Object.keys(obj)[Math.floor(Math.random() * Object.keys(obj).length)];
      }
    }
  }
</script>

<style scoped>
  #wrapper {
    background: #1a1a1a;
    width: 100vw;
    display: flex;
    flex-direction: row;
  }
  #imageBox {
    margin-top: 100px;
    margin-left: auto;
    margin-right: auto;
    width: 200px;
    height: 200px;
    background: #16181a;
    text-align: center;
    font-size: 4em;
    line-height: 200px;
    user-select: all;
  }
  #answerBox {
    margin-top: 100px;
    user-select: none;
  }

  #answerBar {
    width: 350px;
    height: 40px;
  }
  #answerButton {
    margin-top: 20px;
    width: 150px;
    height: 45px;
  }
  #notify {
    margin-top: 50px;
    font-size: 2em;
  }

</style>