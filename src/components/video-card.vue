<template>
    <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
      <template v-slot:activator="{ on }">
        <v-btn color="primary" dark v-on="on">Open Dialog</v-btn>
      </template>
      <v-card>
        <corePlayer/>
        <v-btn class="mx-2" fab dark large absolute color="indigo" @click="dialog = false">
            <v-icon dark>mdi-close</v-icon>
        </v-btn>
      </v-card>
    </v-dialog>
</template>
<script>

import corePlayer from './corePlayer';

export default {
    components: {
        corePlayer,
    },
    data (){
        return {
            dialog : false,
        }
    }
}
</script>