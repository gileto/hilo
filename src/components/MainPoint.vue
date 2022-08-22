<template>
 <div class="flex flex-col h-full justify-center items-center overflow-hidden">
  <div class="flex mb-7 items-center justify-center">
  <div class="flex cards justify-center">
    <div v-for="card in discardPile" class="flex mr-5">
     <Card class="mr-5" :randomCard="card"/>
    </div>
  </div>
   <div class="flex flex-col play">
    <p class="text-white m-1 text-center text-xl">Bet:</p>
    <input class="mb-4 rounded p-2" type="number" v-model="bet"/>
    <button
    :disabled="store.userPoint <= 0"
    :class="store.userPoint <= 0 ? 'opacity-50' : 'opacity-100'"
     @click="startGame()"
     class="text-white rounded border border-white border-solid p-2"
    >
     Play
    </button>
   </div>
  </div>
  <div
   v-if="!store.isStarted"
   class="cursor-pointer text-center select-none self-center new-cart"
   @click="getRandomCard()"
  >
   <img src="../assets/refresh.svg"  class="new-cart-img"/>
  </div>
  <div class="text-white text-center text-xl m-2"> Your points: {{ store.userPoints }}</div>
  <div class="text-white text-center text-xl m-2">Your bet: {{ bet }}</div>
  <div v-if="store.isStarted" class="text-white text-center text-xl m-2">{{ text }}</div>
  <div v-if="store.isStarted" class="flex justify-between started-cards">
   <div class="low mr-5">
    <button
     @click="selectLow()"
     class="choice-button bg-red rounded-full text-white"
    >
     Lower
    </button>
   </div>
   <div v-for="(card, index) of mainCards" :key="index" class="mr-5">
    <button
     @click="selectCard(card)"
     class="card mobile-card"
     :disabled="!store.isOptionChoosed || disabled"
     :class="[!store.isOptionChoosed ? 'opacity-50' : 'opacity-100']"
    >
     <div><Card :cardSide="'back'" :randomCard="card.number" :isSelected="card.isSelected" :index="index" /></div>
    </button>
   </div>
   <div class="high">
    <button
     @click="selectHigh()"
     class="choice-button bg-green rounded-full text-white"
    >
     Higher
    </button>
   </div>
  </div>
  <div v-if="store.isEnded && store.isStarted" class="m-2" @click="newGame">
    <button  class="text-white rounded border border-white border-solid p-2 new-game">New Game</button>
  </div>
 </div>
</template>

<script setup>
import Card from "../components/Card.vue";
import cards from "../utils/cards";
import { useStore } from "../store/store";
import { ref, onMounted } from "vue";

let discardPile = ref([]);
let disabled = ref(false)
const setRandomCard = () => {
 return Math.floor(Math.random() * cards.length)
}

onMounted(() => {
  discardPile.value.push(setRandomCard())
})
const store = useStore();
const bet = ref('')
const text = ref('')

let mainCards = ref([])
const startGame = () => {
  if(store.userPoints < bet.value) {
  alert ('Your bet has to be lower or equal your points!')
  } else {
 mainCards.value = Array.from({length: 3},() => ({number: setRandomCard(),isSelected: false}))
 store.isStarted = true;
 store.isChanging = false;
 }
 
};

const selectLow = () => {
  store.isOptionChoosed = true;
  store.choice = 'low'
  store.isChanging = false;
};

const selectHigh = () => {
  store.isOptionChoosed = true;
  store.choice = 'high'
  store.isChanging = false;
};

let getRandomCard = () => {
 store.isChanging = true;
 setTimeout(() => {
  store.isChanging = false;
  discardPile.value = [Math.floor(Math.random() * cards.length)];
 }, 800);
};

const selectCard = (card) => {
  card.isSelected = true;
  disabled.value = true;
  if (store.choice === 'low') {
    if (cards[card.number].cost < cards[discardPile.value[0]].cost) {
      text.value = 'WIN! +' + bet.value
      store.userPoints += +bet.value
    } else if(cards[discardPile.value[0]].cost === cards[card.number].cost) {
      text.value = 'Draw' 
    } else {
      text.value = 'LOSE! -' + bet.value
      store.userPoints -= +bet.value
    }
  } else if (store.choice = 'high') {
    if (cards[card.number].cost > cards[discardPile.value[0]].cost) {
      text.value = 'WIN! +' + bet.value
      store.userPoints += +bet.value
    } else if(cards[discardPile.value[0]].cost === cards[card.number].cost) {
      text.value = 'Draw'
    } else {
      text.value = 'LOSE -' + bet.value
      store.userPoints -= +bet.value
    }
  }
  store.isEnded = true;
}

const newGame = () => {
  discardPile.value = []
  discardPile.value.push(setRandomCard())
  store.isStarted = false;
  bet.value = ''
  text.value = ''
  store.isOptionChoosed = false
  disabled.value = false
}

</script>

<style scoped>
.choice-button {
 width: 64px;
 height: 64px;
}

.card {
 width: 175px;
 height: 276px;
}

.new-cart {
 width: 100px;
 height: 100px;
 background-color: white;
 display: flex;
 justify-content: center;
 align-items: center;
 border-radius: 20px;
}

.new-game {
  margin-top: 20px;
}


@media screen and (max-width: 800px) {
  .card {
    width: 100px;
    height: 150px;
    border-radius: 10px;
  }
 }
 
 @media screen and (max-width: 550px) {
  .card {
    width: 60px;
    height: 90px;
  }
  
  .new-cart {
   width: 50px;
   height: 50px;
  }
  
  .new-cart-img {
    width: 40px;
  }
  .play {
    width: 100px;
  }
  
  .choice-button {
    width: 40px;
    height: 40px;
    font-size: 10px;
  }
}

</style>
