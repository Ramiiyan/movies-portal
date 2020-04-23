<template>
    <v-navigation-drawer
        app dark
        v-model="drawer"
        :expand-on-hover="expandOnHover"
        :mini-variant="miniVariant"
    >
      <v-list nav dense class="py-0">
        <v-list-item one-line :class="miniVariant && 'px-0'">
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
        >
          <v-list-item-icon>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title> {{item.title}} </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
</template>

<script>
export default {
    data:()=>({
        drawer:true,
        items:[
            {title:"Home", icon:"mdi-home-outline"},
            {title:"Setting", icon:"mdi-cog-outline"},
        ],
      miniVariant:true,
      expandOnHover:true,  
    }),
}
</script>