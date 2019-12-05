<template>
  <div class="buttons">

    <!-- MINIMISE BUTTON -->
    <div @click="minimize" class="button minimize">
      <svg name="TitleBarMinimize" width="12" height="12" viewBox="0 0 12 12">
        <rect fill="#ffffff" width="10" height="1" x="1" y="6"></rect>
      </svg>
    </div>

     <!-- MAXIMISE BUTTON -->
    <div @click="maximize" class="button zoom">
      <svg name="TitleBarMaximize" width="12" height="12" viewBox="0 0 12 12">
        <rect width="9" height="9" x="1.5" y="1.5" fill="none" stroke="#ffffff"></rect>
      </svg>
    </div>

     <!-- CLOSE BUTTON -->
    <div @click="close" class="button close">
      <svg name="TitleBarClose" width="12" height="12" viewBox="0 0 12 12">
        <polygon
          fill="#ffffff"
          fill-rule="evenodd"
          points="11 1.576 6.583 6 11 10.424 10.424 11 6 6.583 1.576 11 1 10.424 5.417 6 1 1.576 1.576 1 6 5.417 10.424 1"
        ></polygon>
      </svg>

    </div>
  </div>
</template>

<script>
const { shell, remote } = require("electron");
const win = remote.getCurrentWindow();
export default {
  methods: {
    minimize() {
      win.minimize();
    },
    maximize() {
      return win.isMaximized() ? win.unmaximize() : win.maximize();
    },
    close() {
      win.close();
    }
  }
};
</script>

<style scoped lang="scss">
.buttons {
  display: flex;
  flex-direction: row;
  -webkit-app-region: no-drag;
  min-width: 73px;
  justify-content: center;
  position: absolute;
  right: 0;
  cursor: pointer;
  z-index: 100px;
}

.button {
  padding: 4px 12px;
  cursor: pointer;
  &:hover {
    background: #292929;
  }
  &.close:hover {
    background: #e41414;
  }
}
</style>