export const SELECT_CARD_NAME = "SELECT_CARD_NAME"
export const SELECT_CARD_ATK = "SELECT_CARD_ATK"
export const SELECT_CARD_SKILL = "SELECT_CARD_SKILL"

export const INPUT_BOSS_ENTER = "INPUT_BOSS_ENTER"
export const INPUT_BOSS_DONE = "INPUT_BOSS_DONE"

export const card_atk = (position, value) => ({
  type: SELECT_CARD_ATK,
  position: position,
  value: value
})

export const card_name = (position, value) => ({
  type: SELECT_CARD_NAME,
  position: position,
  value: value
})

export const card_skill = (position, value) => ({
  type: SELECT_CARD_SKILL,
  position: position,
  value: value
})

export const input_boss_enter = (value) => ({
  type: INPUT_BOSS_ENTER,
  value: value
})
export const input_boss_done = (value) => ({
  type: INPUT_BOSS_DONE,
  value: value
})
