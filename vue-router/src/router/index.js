import { createWebHistory, createRouter } from 'vue-router';
import NumberBaseball from '../../../number-baseball3/src/App';
import ResponseCheck from '../../../response-check/src/components/ResponseCheck';
import Lotto from '../../../lotto/src/components/LottoGenerator';
import RockScissorsPaper from '../../../rock-scissors-paper/src/App';
import mineSweeper from '../../../minesweeper/src/App';

const router = createRouter({
    history : createWebHistory(),
    routes : [ // path별 component를 추가한다.
        { 
            path : "/number-baseball", 
            name : "", 
            component : NumberBaseball
        },
        { 
            path : "/response-check", 
            name : "", 
            component : ResponseCheck 
        },
        { 
            path : "/lotto", 
            name : "", 
            component : Lotto 
        },
        { 
            path : "/rock-scissors-paper", 
            name : "", 
            component : RockScissorsPaper 
        },
        { 
            path : "/mine-sweeper", 
            name : "", 
            component : mineSweeper 
        },
    ]
});

export default router;