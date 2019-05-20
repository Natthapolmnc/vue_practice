new Vue({
    el:"#kaijaa-vue",
    data:{
        name:"Fame",
        foodfav:[],
        job:"",
        gender:'',
        age:19
    },
    methods: {
        addAge(){
            this.age++
        },
        subAge(){
            this.age--
        }
    },
})