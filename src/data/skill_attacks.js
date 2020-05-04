import {
  ATTACK,
  NORMAL,
  NONE,
  BOSS,
  SENSEI,
  TUIGEKI,
} from '../reducers/input.js'

export default [
  { label: 'アタック',
    data:{
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
  { label: 'ボスアタック',
    data:{
      skill: {
        type: ATTACK,
        boss: BOSS,
        fusion: false,
        target: null,
        value: 15,
        skill2: {
          boss: NONE,
          value: 0
        }
      }
    }
  },
  { label: '先制アタック',
    data:{
      skill: {
        type: ATTACK,
        boss: SENSEI,
        fusion: false,
        target: null,
        value: 15,
        skill2: {
          boss: NONE,
          value: 0
        }
      }
    }
  },
  { label: 'フージョン',
    data:{
      skill: {
        type: ATTACK,
        boss: NORMAL,
        fusion: true,
        target: null,
        value: 5,
        skill2: {
          boss: NONE,
          value: 0
        }
      }
    }
  },
  { label: 'ボスフージョン',
    data:{
      skill: {
        type: ATTACK,
        boss: BOSS,
        fusion: true,
        target: null,
        value: 5,
        skill2: {
          boss: NONE,
          value: 0
        }
      }
    }
  },
  { label: '先制フージョン',
    data:{
      skill: {
        type: ATTACK,
        boss: BOSS,
        fusion: true,
        target: null,
        value: 5,
        skill2: {
          boss: NONE,
          value: 0
        }
      }
    }
  },
  { label: 'アタック＋（アタック）',
    data:{
      skill: {
        type: ATTACK,
        boss: NORMAL,
        fusion: false,
        target: null,
        value: 15,
        skill2: {
          boss: NORMAL,
          value: 2
        }
      }
    }
  },
  { label: 'アタック＋（ボスアタック）',
    data:{
      skill: {
        type: ATTACK,
        boss: NORMAL,
        fusion: false,
        target: NONE,
        value: 15,
        skill2: {
          boss: BOSS,
          value: 2
        }
      }
    }
  },
  { label: 'アタック＋（追撃）',
    data:{
      skill: {
        type: ATTACK,
        boss: NORMAL,
        fusion: false,
        target: NONE,
        value: 15,
        skill2: {
          boss: TUIGEKI,
          value: 2
        }
      }
    }
  },
  { label: 'フュージョン＋（アタック）',
    data:{
      skill: {
        type: ATTACK,
        boss: NORMAL,
        fusion: true,
        target: NONE,
        value: 5,
        skill2: {
          boss: NORMAL,
          value: 2
        }
      }
    }
  },
  { label: 'フュージョン＋（ボスアタック）',
    data:{
      skill: {
        type: ATTACK,
        boss: NORMAL,
        fusion: true,
        target: NONE,
        value: 5,
        skill2: {
          boss: BOSS,
          value: 2
        }
      }
    }
  },
  { label: 'フュージョン＋（追撃）',
    data:{
      skill: {
        type: ATTACK,
        boss: NORMAL,
        fusion: true,
        target: NONE,
        value: 5,
        skill2: {
          boss: TUIGEKI,
          value: 2
        }
      }
    }
  },
  { label: 'ボスフュージョン＋（アタック）',
    data:{
      skill: {
        type: ATTACK,
        boss: BOSS,
        fusion: true,
        target: NONE,
        value: 5,
        skill2: {
          boss: NORMAL,
          value: 2
        }
      }
    }
  },
  { label: 'ボスフュージョン＋（ボスアタック）',
    data:{
      skill: {
        type: ATTACK,
        boss: BOSS,
        fusion: true,
        target: NONE,
        value: 5,
        skill2: {
          boss: BOSS,
          value: 2
        }
      }
    }
  },
  { label: 'ボスフュージョン＋（追撃）',
    data:{
      skill: {
        type: ATTACK,
        boss: BOSS,
        fusion: true,
        target: NONE,
        value: 5,
        skill2: {
          boss: TUIGEKI,
          value: 2
        }
      }
    }
  },
]
