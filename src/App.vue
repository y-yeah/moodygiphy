<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Emotify</span>
        <span class="font-weight-light">Moody Giphy</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <Upload :photo="photo"/>
    </v-toolbar>
    <v-container>
      <v-img v-if="photo.length > 0" :src="photo[0]" width="40%"/>
    </v-container>
  </v-app>
</template>

<script>
import Upload from "./components/Upload";

export default {
  name: "App",
  components: {
    Upload
  },
  data: () => ({
    photo: []
  })
};
</script>
