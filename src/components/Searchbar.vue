<template>
    <v-row class="searchbar" grow>
        <v-text-field
            v-model="textfield"
            outlined
            hide-details
            class="searchfield"
            dense    
            width="600px"
            height="50px"
        >
        </v-text-field>
        <v-card class="searchbutton" dark color="grey darken-2" @click="search">
            <v-icon style="padding-top:15px">mdi-magnify</v-icon>
        </v-card>
    </v-row>
</template>

<script>
import { getUser } from '@/services.js';

export default {
    name: 'Searchbar',
    data: () => ({
        textfield: null
    }),
    methods:{
        search: function(){
            getUser(this.textfield).then(res => {
                console.log(res);
                console.log(res.data.login)
                let login = res.data.login
                this.$router.push({name:'result', params: {username: login}});
            }).catch(err => {
                console.log(err);
            })
        }
    }
}
</script>

<style scoped>
.searchbar{
    width: 700px;
    height: 50px;
}

.searchbutton{
    width: 100px;
    height: 50px;
}


.searchfield.v-text-field--outlined{
    border-radius: 0px;
}
.searchbutton.v-sheet.v-card{
    border-radius: 0px;
}

</style>