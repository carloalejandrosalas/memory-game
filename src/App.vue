<template>
  <div id="app">
    <div class="container mt-5">
      <strong>
        <h1 class="is-size-3">Score {{score}}</h1>
      </strong>
      <button class="button is-primary"></button>
      <div class="columns is-multiline">
        <div class="column is-3" v-for="(card, index) in cards" :key="index">
          <Card :isLocked="card.locked" :show="card.show" @click="handleClick(card)" :value="card.value" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Card from "./components/Card";

export default {
  name: "App",
  components: {
    Card,
  },
  data() {
    return {
      score: 0,
      cards: [],
      cards_selected: [],
      locked: false
    };
  },
  methods: {
    handleClick(card) {
      if(this.locked) return

      const existeEnArreglo = this.cards_selected.findIndex( item => item === card );
      
      if(existeEnArreglo === -1) {
        card.show = true;
      
      } else {
        card.show = false;
        this.cards_selected.splice(0, 1);
        return;
      }

      if (this.cards_selected.length < 1) {
        this.cards_selected.push(card);
      
      } else {
        this.locked = true
        setTimeout(() => {
          this.verifyCards(card)

        }, 500)
      }
    },
    verifyCards (card) {
      const primera_carta = this.cards_selected[0];

      if(card.value === primera_carta.value) {
        // alert('Encontrado')

        primera_carta.locked = true;
        card.locked = true;

      } else {
        // alert('no encontrado')
        primera_carta.show = false,
        card.show = false
      }

      this.cards_selected = [];
      this.locked = false
    },
    generateCards() {
      let contador = 8;
      let cards = [];

      for (let index = 1; index <= contador; index++) {
        const obj = {
          value: index,
          show: false,
          locked: false
        }
        cards.push({...obj}, {...obj});
      }

      this.cards = this.shuffle(cards);
    },
    shuffle (arr) {
      var currentIndex = arr.length, temporaryValue, randomIndex;

      // While there remain elements to shuffle...
      while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = arr[currentIndex];
        arr[currentIndex] = arr[randomIndex];
        arr[randomIndex] = temporaryValue;
      }

      return arr;
    }
  },
  mounted() {
    this.generateCards();
  }
};
</script>