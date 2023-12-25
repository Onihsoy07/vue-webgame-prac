<template>
  <div>
    <tic-tac-toe :table-data="tableData" :result="result" :turn="turn" @on-click-td="onClickTd"></tic-tac-toe>
    <EmitTestVue @emit-post-test="onEmitPostTest"></EmitTestVue>
  </div>
</template>

<script>
import EmitTestVue from './components/EmitTest.vue';
import TicTacToe from './components/TicTacToeComponent.vue';

export default {
  name: 'App',
  components: {
    TicTacToe,
    EmitTestVue,
    
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
  },
  methods: {
    onEmitPostTest(word) {
      console.log(word);
    },
    onClickTd() {
      console.log('aaaaaaaaaaaa');
      if(this.turnCount >= 0) {
        this.tableData[this.rowIdx][this.cellIdx] = this.turn;
        this.turnCount++;

        let win = false;
        if(this.tableData[this.rowIdx][0] === this.turn && this.tableData[this.rowIdx][1] === this.turn && this.tableData[this.rowIdx][2] === this.turn) {
            win = true;
        }
        if(this.tableData[0][this.cellIdx] === this.turn && this.tableData[1][this.cellIdx] === this.turn && this.tableData[2][this.cellIdx] === this.turn) {
            win = true;
        }
        if(this.tableData[0][0] === this.turn && this.tableData[1][1] === this.turn && this.tableData[2][2] === this.turn) {
            win = true;
        }
        if(this.tableData[2][0] === this.turn && this.tableData[1][1] === this.turn && this.tableData[0][2] === this.turn) {
            win = true;
        }
        
        if(win) {
            this.result = this.turn + '승리';
            this.tableData = [['', '', ''], ['', '', ''], ['', '', '']];
            this.turn = 'O';
            this.turnCount = 0;
            return win;
        }
        if(this.turnCount === 9) {
            this.result = '무승부';
            this.tableData = [['', '', ''], ['', '', ''], ['', '', '']];
            this.turn = 'O';
            return;
        }

        this.turn = this.turn === 'O' ? 'X' : 'O';
      }
    }
  },
  mounted() {
  },
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
