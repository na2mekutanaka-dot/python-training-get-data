import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

// Vuetify 関連の import を追加
import { createVuetify } from "vuetify";
// @ts-ignore
import "vuetify/styles";
import { aliases, mdi } from "vuetify/iconsets/mdi";

const vuetify = createVuetify({
  icons: {
    defaultSet: "mdi",
    aliases,
    sets: { mdi },
  },
});

createApp(App).use(vuetify).mount("#app");
