<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Emotify</span>
        <span class="font-weight-light"> Moody Giphy</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <Upload/>
    </v-toolbar>
  </v-app>
</template>

<script>
import Upload from "./components/Upload";

export default {
  name: "App",
  components: {
    Upload
  },
  data() {
    return {
      //
    };
  }
};
</script>
