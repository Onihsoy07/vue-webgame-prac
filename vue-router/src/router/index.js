import { createWebHistory, createRouter } from 'vue-router';
import NumberBaseball from '../../../number-baseball3/src/components/NumberBaseball';
import ResponseCheck from '../../../response-check/src/components/ResponseCheck';
import Lotto from '../../../lotto/src/components/LottoGenerator';
import RockScissorsPaper from '../../../rock-scissors-paper/src/components/RockScissorsPaper';
import MineSweeper from '../../../minesweeper/src/components/MimeSweeper';
import InnerResponseCheck from '@/components/response-check/ResponseCheck';
import InnerLottoGenerator from '@/components/lotto-generator/LottoGenerator';

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
            component : MineSweeper 
        },
        { 
            path : "/inner-lotto-generator", 
            name : "", 
            component : InnerLottoGenerator 
        },
        { 
            path : "/inner-respone-check", 
            name : "", 
            component : InnerResponseCheck 
        },
    ]
});

export default router;