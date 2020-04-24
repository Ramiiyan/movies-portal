<template>
    <v-navigation-drawer
        app dark
        v-model="drawer"
        :expand-on-hover="expandOnHover"
        :mini-variant="miniVariant"
    >
      <v-list nav dense class="py-0">
        <v-list-item :class="miniVariant && 'px-0'">
          <v-list-item-avatar>
            <img src="https://randomuser.me/api/portraits/men/81.jpg">
          </v-list-item-avatar>
          <v-list-item-content>
              <v-list-item-title style="font-size:18px;">Movie Portal</v-list-item-title>
            </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          @click.stop="Settings = item.dialog"
        >
          <v-list-item-icon>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title> {{item.title}} </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-dialog
        v-model="Settings"
        max-width="290"
      >
        <v-card>
          <v-card-title class="headline">HELLO WORLD</v-card-title>
          <v-card-text>this is my testing modal </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn text @click="Settings = false">Disagree</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-navigation-drawer>
</template>

<script>
export default {
    data:()=>({
        drawer:true,
        Settings:false,
        items:[
            {title:"Home", icon:"mdi-home-outline",dialog:false},
            {title:"Settings", icon:"mdi-cog-outline",dialog:true},
        ],
      miniVariant:true,
      expandOnHover:true,  
    }),
}
</script>