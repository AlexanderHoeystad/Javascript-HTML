const baseurl = "https://drapialexogphilip.azurewebsites.net/api/MusicRecords"

Vue.createApp({
    data() {
        return {
            MusicRecords: [],
            // UpdatePokemon: {pokedexID: 0, name: "", type: ""},
            // AddPokemon: {name: "", type: ""},
            // DeletePokedexID: {pokedexID: 0},
            // AddMessage: "",
            // UpdateMessage: "",
            // DeleteMessage: "",   
            singleMusicRecord: null,
            // pokedexIDToGetBy : null,
        }
    },
    
    methods: {
        getAllMusicRecords() {
            this.helperGetAndShow(baseurl)
        }, 

        async helperGetAndShow(url) {
            try {
                const response = await axios.get(url)
                this.MusicRecords = await response.data

            } catch (ex) {
                alert(ex.message) // https://www.w3schools.com/js/js_popup.asp
            }
        },
        async GetMusicRecordByTitle(title) {
            const url = baseurl + "?title=" + title
            try {
                const response = await axios.get(url)
                this.MusicRecords = response.data
            } catch (ex) {
                alert(ex.message)
            }
        },

    },

}).mount("#app")