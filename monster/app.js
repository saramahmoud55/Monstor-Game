function getRandomNumber(min , max){
 return Math.floor( Math.random()* (max-min)) +min
}

const app =Vue.createApp({
  data(){
    return{
        playerHealth:100,
        monsterHealth:100,
        currentRound:0,
        winner:null
    }
  },
  watch:{
    playerHealth(value){
        if(value <= 0 && this.monsterHealth <= 0){
            this.winner ="draw"
        }else if(value <= 0){
            this.winner= 'monstor'
        }
    },
    monsterHealth(value){
        if(value <= 0 && this.playerHealth <= 0){
            this.winner ="draw"

        }else if(value <= 0){
            this.winner= 'player'

        }
    },

  },
  computed:{
    monsterBarStyle(){
        if(this.monsterHealth <=0){
            return {width:0+'%'}
        }
        return {width: this.monsterHealth+"%"}
    },
    playerBarStyle(){
            if(this.playerHealth <=0){
            return {width:0+'%'}
        }
        return {width: this.playerHealth+"%"}
    },
    isspecialAttackReady(){
        return  this.currentRound % 3 !== 0
    }
  },
  methods:{
    attackMonster(){
        this.currentRound++;
       const attackValue =getRandomNumber(5,12);
        this.monsterHealth =this.monsterHealth - attackValue;
        this.attackPlayer();
    },
    attackPlayer(){
         const attackValue =getRandomNumber(8,12);
        this.playerHealth = this.playerHealth - attackValue
    },
    specialAttack(){
        this.currentRound++;
        const attackValue =getRandomNumber(10,25)
        this.monsterHealth =this.monsterHealth - attackValue
        this.attackPlayer();

    },
    healPlayer(){
        const healValue=getRandomNumber(8,20);
        if(this.playerHealth + healValue > 100){
        this.playerHealth=100
        }else{
            this.playerHealth += healValue
        };
        this.attackPlayer();
    },
    startNewGame(){
        this.monsterHealth =100;
        this.playerHealth=100;
        this.currentRound =0;
        this.winner=null
    },
    surrender(){
        this.winner='monstor'

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