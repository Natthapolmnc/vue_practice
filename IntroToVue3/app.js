new Vue({
    el:"#Fame",
    data:{
         like:false,
         product:["Powder","Soap","Chicken","Beef"],
         student:[
             {name:"Natthapol",age:20,status:true},
             {name:"Natchapot",age:20,status:false},
             {name:"Kai", age:30,status:true}
         ]
    },
    methods: {
        toggleLike(){
            this.like=!this.like;
        },
    },
})