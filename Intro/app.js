new Vue({
    el:"#vue-app",
    data:{
        name:"Natthapol Maneechote",
        occu:"Student",
        age:19,
        status:false,
        count:0,
        website:"https://www.facebook.com/FameManeechote"
    },
    methods: {
        getName: function(){
            return this.name
        },
        setName: function(n){
            this.name=n
        },
        addAge: function(){
            this.age++;
            console.log(this.age);
        },
        SubtractAge: function(){
            this.age--;
            console.log(this.age);
        },
        addCount:function(){
            this.count++;
        },
        SubtractCount:function(){
            this.count--;
        }
    },
})