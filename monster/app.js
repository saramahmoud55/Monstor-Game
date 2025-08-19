function getRandomNumber(min , max){
 return Math.floor( Math.random()* (max-min)) +min
}

const app =createApp({
  data(){
    return{
        playerHealth:100,
        monsterHealth:100,
    }
  },
  methods:{
    attackMonster(){
       const attackValue =getRandomNumber(5,12);
        this.monsterHealth =this.monsterHealth - attackValue;
        this.attackPlayer();
    },
    attackPlayer(){
         const attackValue =getRandomNumber(8,12);
        this.attackPlayer = this.attackPlayer -attackValue
    }
  }

    
})
app.mount('#game')



















// function getRandomNumber(min, max) {
//     return Math.floor(Math.random() * (max - min)) + min;
// }

// const app = Vue.createApp({
//     data() {
//         return {
//             playerHealth: 100,
//             monsterHealth: 100
//         }
//     },
//     method: {
//         attackMonster() {
//             const attackValue = getRandomNumber(5, 12);
//             this.monsterHealth -= attackValue;
//             this.attackPlayer();
//         },
//         attackPlayer() {
//             const attackValue = getRandomNumber(16, 8);
//             this.playerHealth -= attackValue;
//         }
//     }
// });

// app.mount('#game');