<template>
 <div
  class="card bg-white flex flex-col justify-center items-center"
  :class="{
 'card-rotate': store.isChanging || props.isSelected
  }"
 >
  <div class="flex flex-col justify-center items-center" :class="cardSide">
   <div class="flex justify-center items-center number mb-2" :class="suitColor">
    {{ cards[props.randomCard].number }}
   </div>

   <div class="number" :class="suitColor">
    {{ cards[props.randomCard].suit }}
   </div>
  </div>
  <div :class="cardSide === 'front' ? 'back' : 'front'">
   <img src="../assets/card.svg" alt="card" />
  </div>
 </div>
</template>

<script setup>
import cards from "../utils/cards";
import { ref, computed } from "vue";
import { useStore } from "../store/store";

const props = defineProps(["cardSide", "randomCard", "isSelected", "index"]);
const store = useStore();

let cardSide = ref(props.cardSide || "front");

const suitColor = computed(() => {
 return cards[props.randomCard].color === "red" ? "text-red" : "text-black";
});

</script>

<style scoped>
.card {
 border-radius: 20px;
}


.number {
 font-weight: 600;
 font-size: 48px;
 line-height: 58px;
 text-align: center;
}

.front,
.back {
 backface-visibility: hidden;
 position: absolute;
 transition: transform 0.6s linear;
 border-radius: 20px;
}

.front {
 transform: perspective(600px) rotateY(0deg);
}

.back {
 transform: perspective(600px) rotateY(180deg);
}

.card-rotate > .front {
 transform: perspective(600px) rotateY(-180deg);
}

.card-rotate > .back {
 transform: perspective(600px) rotateY(0deg);
}

@media screen and (max-width:800px) {
 img {
  width: 100px;
  height: 150px;
 }
 
 .number {
  font-size: 30px;
  line-height: 30px;
 }
}

@media screen and (max-width: 550px){
 img {
  width: 60px;
  height: 90px
 }
 
 .number {
  font-size: 20px;
  line-height: 20px;
 }
}
</style>
