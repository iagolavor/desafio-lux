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
        <v-card class="searchbutton" dark color="grey darken-2">
            <v-icon style="padding-top:15px">mdi-magnify</v-icon>
        </v-card>
    </v-row>
</template>

<script>
export default {
    name: 'Searchbar',
    data: () => ({
        textfield: null
    })
}
</script>

<style scoped>
.searchbar{
    position: absolute;
    width: 700px;
    height: 50px;
    left: 370px;
    top: 528px;
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