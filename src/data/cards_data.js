import {
  ATTACK,
  BOOST,
  NONE,
  NORMAL,
  BOSS,
  SENSEI,
  TUIGEKI,
  ATK,
  ATR,
  ATC,
  CHA,
} from '../reducers/input.js'

export default [
  { label: '【N】★★★★★★★★★★★ (親密度Lv.600)',
    data:{
      atk: 347,
      skill: {
        type: ATTACK,
        boss: BOSS,
        fusion: false,
        target: NONE,
        value: 25,
        skill2: {
          boss: NONE,
          value: 0
        }
      }
    }
  },
  { label: '【N】★★★★★★★★★★☆ (親密度Lv.500)',
    data:{
      atk: 332,
      skill: {
        type: ATTACK,
        boss: BOSS,
        fusion: false,
        target: NONE,
        value: 5,
        skill2: {
          boss: NONE,
          value: 0
        }
      }
    }
  },
  { label: '【N】★★★★★★★★★☆☆ (親密度Lv.400)',
    data:{
      atk: 317,
      skill: {
        type: ATTACK,
        boss: BOSS,
        fusion: false,
        target: NONE,
        value: 5,
        skill2: {
          boss: NONE,
          value: 0
        }
      }
    }
  },
  { label: '【SSR】★★★★★ ボスアタック +22',
    data:{
      atk: 322,
      skill: {
        type: ATTACK,
        boss: BOSS,
        fusion: false,
        target: NONE,
        value: 22,
        skill2: {
          boss: NONE,
          value: 0
        }
      }
    }
  },
  { label: '【SSR】★★★★★ ボスアタック +19 (コラボ系)',
    data:{
      atk: 317,
      skill: {
        type: ATTACK,
        boss: BOSS,
        fusion: false,
        target: NONE,
        value: 19,
        skill2: {
          boss: NONE,
          value: 0
        }
      }
    }
  },
  { label: '【SSR】★★★★★ アタック +17',
    data:{
      atk: 322,
      skill: {
        type: ATTACK,
        boss: NORMAL,
        fusion: false,
        target: NONE,
        value: 17,
        skill2: {
          boss: NONE,
          value: 0
        }
      }
    }
  },
  { label: '【SSR】★★★★★ アタック +15 (コラボ系)',
    data:{
      atk: 317,
      skill: {
        type: ATTACK,
        boss: NORMAL,
        fusion: false,
        target: NONE,
        value: 15,
        skill2: {
          boss: NONE,
          value: 0
        }
      }
    }
  },
  { label: '【SSR】★★★★★ フュージョン +8',
    data:{
      atk: 322,
      skill: {
        type: ATTACK,
        boss: NORMAL,
        fusion: true,
        target: NONE,
        value: 8,
        skill2: {
          boss: NONE,
          value: 0
        }
      }
    }
  },
  { label: '【SSR】★★★★★ フュージョン +6 (ボスアタック +2)',
    data:{
      atk: 322,
      skill: {
        type: ATTACK,
        boss: NORMAL,
        fusion: true,
        target: NONE,
        value: 6,
        skill2: {
          boss: BOSS,
          value: 2
        }
      }
    }
  },
  { label: '【SSR】★★★★★ まんたんボスアタック +24',
    data:{
      atk: 322,
      skill: {
        type: ATTACK,
        boss: BOSS,
        fusion: false,
        target: NONE,
        value: 24,
        skill2: {
          boss: NONE,
          value: 0
        }
      }
    }
  },
  { label: '【SSR】★★★★★ まんたんアタック +18',
    data:{
      atk: 322,
      skill: {
        type: ATTACK,
        boss: NORMAL,
        fusion: false,
        target: NONE,
        value: 18,
        skill2: {
          boss: NONE,
          value: 0
        }
      }
    }
  },
  { label: '【SSR】★★★★★ アタック +15 (先制 +5)',
    data:{
      atk: 327,
      skill: {
        type: ATTACK,
        boss: NORMAL,
        fusion: false,
        target: NONE,
        value: 15,
        skill2: {
          boss: SENSEI,
          value: 5
        }
      }
    }
  },
  { label: '【SSR】★★★★★ アタック +18 (危) （ユキ）',
    data:{
      atk: 322,
      skill: {
        type: ATTACK,
        boss: NORMAL,
        fusion: false,
        target: NONE,
        value: 18,
        skill2: {
          boss: NONE,
          value: 0
        }
      }
    }
  },
  { label: '【SSR】★★★★★ アタック +17 (ボスアタック +3)(莉久のみ)',
    data:{
      atk: 327,
      skill: {
        type: ATTACK,
        boss: NORMAL,
        fusion: false,
        target: NONE,
        value: 17,
        skill2: {
          boss: BOSS,
          value: 3
        }
      }
    }
  },
  { label: '【SSR】★★★★★ アタック +17 (トラスト +3)',
    data:{
      atk: 327,
      skill: {
        type: ATTACK,
        boss: NORMAL,
        fusion: false,
        target: NONE,
        value: 17,
        skill2: {
          boss: NORMAL,
          value: 3
        }
      }
    }
  },
  { label: '【SSR】★★★★★ アタック +16 (追撃 +2)（莉緒のみ）',
    data:{
      atk: 327,
      skill: {
        type: ATTACK,
        boss: NORMAL,
        fusion: false,
        target: NONE,
        value: 16,
        skill2: {
          boss: TUIGEKI,
          value: 2
        }
      }
    }
  },
  { label: '【SSR】★★★★★ ローミスアタック +19（楓のみ）',
    data:{
      atk: 327,
      skill: {
        type: ATTACK,
        boss: NORMAL,
        fusion: false,
        target: NONE,
        value: 19,
        skill2: {
          boss: NONE,
          value: 0
        }
      }
    }
  },
  { label: '【SR+】★★★★★ ボスフュージョン +7',
    data:{
      atk: 300,
      skill: {
        type: ATTACK,
        boss: BOSS,
        fusion: true,
        target: NONE,
        value: 7,
        skill2: {
          boss: NONE,
          value: 0
        }
      }
    }
  },
  { label: '【SR+】★★★★★ ノーダメボスアタック +19',
    data:{
      atk: 300,
      skill: {
        type: ATTACK,
        boss: BOSS,
        fusion: false,
        target: NONE,
        value: 19,
        skill2: {
          boss: NONE,
          value: 0
        }
      }
    }
  },
  { label: '【SR+】★★★★★ 先制アタック +18',
    data:{
      atk: 300,
      skill: {
        type: ATTACK,
        boss: SENSEI,
        fusion: false,
        target: NONE,
        value: 18,
        skill2: {
          boss: NONE,
          value: 0
        }
      }
    }
  },
  { label: '【SR+】★★★★★ アタック +13 (追撃+3)',
    data:{
      atk: 300,
      skill: {
        type: ATTACK,
        boss: NORMAL,
        fusion: false,
        target: NONE,
        value: 13,
        skill2: {
          boss: TUIGEKI,
          value: 3
        }
      }
    }
  },
  { label: '【SR+】★★★★★ フュージョン +4 (アタック+2) (サイクリング莉緒)',
    data:{
      atk: 300,
      skill: {
        type: ATTACK,
        boss: NORMAL,
        fusion: true,
        target: NONE,
        value: 4,
        skill2: {
          boss: NORMAL,
          value: 2
        }
      }
    }
  },
  { label: '【SR+】★★★★★ まんたんアタック +16 (CD付属)',
    data:{
      atk: 300,
      skill: {
        type: ATTACK,
        boss: NORMAL,
        fusion: false,
        target: NONE,
        value: 16,
        skill2: {
          boss: NONE,
          value: 0
        }
      }
    }
  },
  { label: '【SR】★★★★★ アタック +13',
    data:{
      atk: 287,
      skill: {
        type: ATTACK,
        boss: NORMAL,
        fusion: false,
        target: NONE,
        value: 13,
        skill2: {
          boss: NONE,
          value: 0
        }
      }
    }
  },
  { label: '【SR】★★★★★ アタック +13 (コラボ系)',
    data:{
      atk: 282,
      skill: {
        type: ATTACK,
        boss: NORMAL,
        fusion: false,
        target: NONE,
        value: 13,
        skill2: {
          boss: NONE,
          value: 0
        }
      }
    }
  },
  { label: '【SR】★★★★★ ボスアタック +17',
    data:{
      atk: 287,
      skill: {
        type: ATTACK,
        boss: BOSS,
        fusion: false,
        target: NONE,
        value: 17,
        skill2: {
          boss: NONE,
          value: 0
        }
      }
    }
  },
  { label: '【SR】★★★★★ ボスアタック +19',
    data:{
      atk: 287,
      skill: {
        type: ATTACK,
        boss: BOSS,
        fusion: false,
        target: NONE,
        value: 19,
        skill2: {
          boss: NONE,
          value: 0
        }
      }
    }
  },
  { label: '【SR】★★★★★ アタック +17 (コラボ系)',
    data:{
      atk: 282,
      skill: {
        type: ATTACK,
        boss: BOSS,
        fusion: false,
        target: NONE,
        value: 17,
        skill2: {
          boss: NONE,
          value: 0
        }
      }
    }
  },
  { label: '【SR】★★★★★ ノーダメアタック +16',
    data:{
      atk: 287,
      skill: {
        type: ATTACK,
        boss: NORMAL,
        fusion: false,
        target: NONE,
        value: 16,
        skill2: {
          boss: NONE,
          value: 0
        }
      }
    }
  },
  { label: '【SR】★★★★★ まんたんアタック +14',
    data:{
      atk: 287,
      skill: {
        type: ATTACK,
        boss: NORMAL,
        fusion: false,
        target: NONE,
        value: 14,
        skill2: {
          boss: NONE,
          value: 0
        }
      }
    }
  },
  { label: '【SR】★★★★★ フュージョン +4 (アタック +2)',
    data:{
      atk: 287,
      skill: {
        type: ATTACK,
        boss: NORMAL,
        fusion: true,
        target: NONE,
        value: 4,
        skill2: {
          boss: NORMAL,
          value: 2
        }
      }
    }
  },
  { label: '【SR】★★★★★ ボスフュージョン +7',
    data:{
      atk: 287,
      skill: {
        type: ATTACK,
        boss: BOSS,
        fusion: true,
        target: NONE,
        value: 7,
        skill2: {
          boss: NONE,
          value: 0
        }
      }
    }
  },
  { label: '【SR】★★★★★ 茜ニャン (アタック +401)',
    data:{
      atk: 50,
      skill: {
        type: ATTACK,
        boss: NORMAL,
        fusion: false,
        target: NONE,
        value: 401,
        skill2: {
          boss: NONE,
          value: 0
        }
      }
    }
  },


  //////////////////////////////////////////////////////////////////
  { label: '【SSR】★★★★★ デイドリーム・フェアリーズ',
    data:{
      atk: 327,
      skill: {
        type: BOOST,
        boss: NORMAL,
        fusion: false,
        target: ATR,
        value: 22,
        skill2: {
          boss: NONE,
          value: 0
        }
      }
    }
  },
  { label: '【SSR】★★★★☆ デイドリーム・フェアリーズ',
    data:{
      atk: 312,
      skill: {
        type: BOOST,
        boss: NORMAL,
        fusion: false,
        target: ATR,
        value: 20,
        skill2: {
          boss: NONE,
          value: 0
        }
      }
    }
  },
  { label: '【SSR】★★★☆☆ デイドリーム・フェアリーズ',
    data:{
      atk: 300,
      skill: {
        type: BOOST,
        boss: NORMAL,
        fusion: false,
        target: ATR,
        value: 20,
        skill2: {
          boss: NONE,
          value: 0
        }
      }
    }
  },
  { label: '【SSR】★★☆☆☆ デイドリーム・フェアリーズ',
    data:{
      atk: 285,
      skill: {
        type: BOOST,
        boss: NORMAL,
        fusion: false,
        target: ATR,
        value: 20,
        skill2: {
          boss: NONE,
          value: 0
        }
      }
    }
  },
  { label: '【SSR】★☆☆☆☆ デイドリーム・フェアリーズ',
    data:{
      atk: 262,
      skill: {
        type: BOOST,
        boss: NORMAL,
        fusion: false,
        target: ATR,
        value: 20,
        skill2: {
          boss: NONE,
          value: 0
        }
      }
    }
  },
  { label: '【SSR】★★★★★ 属性ブースト +17 (ガチャ・巫女あかりのみ)',
    data:{
      atk: 327,
      skill: {
        type: BOOST,
        boss: NORMAL,
        fusion: false,
        target: ATR,
        value: 17,
        skill2: {
          boss: NONE,
          value: 0
        }
      }
    }
  },
  { label: '【SSR】★★★★★ ボスブースト +22 (ガチャ・有栖のみ)',
    data:{
      atk: 322,
      skill: {
        type: BOOST,
        boss: BOSS,
        fusion: false,
        target: ATR,
        value: 22,
        skill2: {
          boss: NONE,
          value: 0
        }
      }
    }
  },
  { label: '【SSR】★★★★★ ボスブースト +18 (サントラCD付属) ',
    data:{
      atk: 317,
      skill: {
        type: BOOST,
        boss: BOSS,
        fusion: false,
        target: ATR,
        value: 18,
        skill2: {
          boss: NONE,
          value: 0
        }
      }
    }
  },
  { label: '【SSR】★★★★★ ボスブースト +20 (コラボ系)',
    data:{
      atk: 317,
      skill: {
        type: BOOST,
        boss: BOSS,
        fusion: false,
        target: ATR,
        value: 20,
        skill2: {
          boss: NONE,
          value: 0
        }
      }
    }
  },
  { label: '【SSR】★☆☆☆☆ ボスブースト +18(コラボ系)',
    data:{
      atk: 257,
      skill: {
        type: BOOST,
        boss: BOSS,
        fusion: false,
        target: ATR,
        value: 18,
        skill2: {
          boss: NONE,
          value: 0
        }
      }
    }
  },
  { label: '【SR+】★★★★★ ボス[キャラ]ブースト +17 (オリジナル ミッション系)',
    data:{
      atk: 300,
      skill: {
        type: BOOST,
        boss: BOSS,
        fusion: false,
        target: CHA,
        value: 17,
        skill2: {
          boss: NONE,
          value: 0
        }
      }
    }
  },
  { label: '【SR+】★★★★★ まんたんブースト +15 (煌上 花音のみ) ',
    data:{
      atk: 300,
      skill: {
        type: BOOST,
        boss: BOSS,
        fusion: false,
        target: ATR,
        value: 15,
        skill2: {
          boss: NONE,
          value: 0
        }
      }
    }
  },
  { label: '【SR+】★★★★★ ラブマックスブースト +16 (ロザリーのみ) ',
    data:{
      atk: 300,
      skill: {
        type: BOOST,
        boss: BOSS,
        fusion: false,
        target: ATK,
        value: 16,
        skill2: {
          boss: NONE,
          value: 0
        }
      }
    }
  },
  { label: '【SR】★★★★★ ボス属性ブースト +17',
    data:{
      atk: 287,
      skill: {
        type: BOOST,
        boss: BOSS,
        fusion: false,
        target: ATR,
        value: 17,
        skill2: {
          boss: NONE,
          value: 0
        }
      }
    }
  },
  { label: '【SR】★★★★★ ボス属性ブースト +17 (コラボ系)',
    data:{
      atk: 282,
      skill: {
        type: BOOST,
        boss: BOSS,
        fusion: false,
        target: ATR,
        value: 17,
        skill2: {
          boss: NONE,
          value: 0
        }
      }
    }
  },
  { label: '【SR】★★★★★ 属性ブースト +12',
    data:{
      atk: 287,
      skill: {
        type: BOOST,
        boss: NORMAL,
        fusion: false,
        target: ATR,
        value: 12,
        skill2: {
          boss: NONE,
          value: 0
        }
      }
    }
  },
  { label: '【SR】★★★★★ 属性ブースト +12 (コラボ系)',
    data:{
      atk: 282,
      skill: {
        type: BOOST,
        boss: NORMAL,
        fusion: false,
        target: ATR,
        value: 12,
        skill2: {
          boss: NONE,
          value: 0
        }
      }
    }
  },
  { label: '【SR】★★★★★ キャラブースト +14',
    data:{
      atk: 287,
      skill: {
        type: BOOST,
        boss: NORMAL,
        fusion: false,
        target: ATC,
        value: 14,
        skill2: {
          boss: NONE,
          value: 0
        }
      }
    }
  },
  { label: '【SR】★★★★★ キャラブースト +14 (コラボ系)',
    data:{
      atk: 282,
      skill: {
        type: BOOST,
        boss: NORMAL,
        fusion: false,
        target: ATC,
        value: 14,
        skill2: {
          boss: NONE,
          value: 0
        }
      }
    }
  },
  { label: '【SR】★★★★★ ボス[キャラ]ブースト +17 (ガチャ茜・椿のみ)',
    data:{
      atk: 287,
      skill: {
        type: BOOST,
        boss: BOSS,
        fusion: false,
        target: CHA,
        value: 17,
        skill2: {
          boss: NONE,
          value: 0
        }
      }
    }
  },
  { label: '【SR】★★★★★ まんたんブースト +14',
    data:{
      atk: 287,
      skill: {
        type: BOOST,
        boss: NORMAL,
        fusion: false,
        target: ATK,
        value: 14,
        skill2: {
          boss: NONE,
          value: 0
        }
      }
    }
  },
  { label: '【SR】★★★★★ まんたん属性ブースト +15',
    data:{
      atk: 287,
      skill: {
        type: BOOST,
        boss: NORMAL,
        fusion: false,
        target: ATR,
        value: 15,
        skill2: {
          boss: NONE,
          value: 0
        }
      }
    }
  },
  { label: '【SR】★★★★★ ノーダメブースト +16',
    data:{
      atk: 287,
      skill: {
        type: BOOST,
        boss: NORMAL,
        fusion: false,
        target: ATK,
        value: 16,
        skill2: {
          boss: NONE,
          value: 0
        }
      }
    }
  },
  { label: '【SR】★★★★★ 属性ブースト +12 (アタック +3)',
    data:{
      atk: 287,
      skill: {
        type: BOOST,
        boss: NORMAL,
        fusion: false,
        target: ATR,
        value: 16,
        skill2: {
          boss: NORMAL,
          value: 3
        }
      }
    }
  },

]
