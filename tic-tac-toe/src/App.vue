<template>
  <tic-tac-toe :table-data="tableData" :result="result"></tic-tac-toe>
</template>

<script>
import TicTacToe from './components/TicTacToeComponent.vue'

export default {
  name: 'App',
  components: {
    TicTacToe,
    
  },
  data() {
    return {
      tableData: [
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
      ],
      turn: 'O',
      turnCount: 0,
      result: '',

    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
