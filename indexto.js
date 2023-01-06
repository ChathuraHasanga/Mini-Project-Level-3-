new Vue({
    el:"#app",
    data(){
        return{
            taskList:[],
            task: "",
            color: ""
        }
    },

methods:{
    addTask:function(){
        if(this.task !=""){
            this.taskList.push(this.task);
            this.task ="";
            this.color ="#ggg";

        }else{
            this.color = "#fff";
        }
    },


removeTask: function(index){
    this.taskList.splice(index, 1);
    }
},

});