export const CARD_NAME = "CARD_NAME"
export const CARD_ATK = "CARD_ATK"
export const CARD_SKILL = "CARD_SKILL"
export const CARD_SKILL_TYPE = "CARD_SKILL_TYPE"
export const CARD_SKILL_BOSS = "CARD_SKILL_BOSS"
export const CARD_SKILL_FUSION = "CARD_SKILL_FUSION"
export const CARD_SKILL_TARGET = "CARD_SKILL_TARGET"
export const CARD_SKILL_SKILL2 = "CARD_SKILL_SKILL2"
export const CARD_SKILL_VALUE = "CARD_SKILL_VALUE"
export const CARD_SKILL2_VALUE = "CARD_SKILL2_VALUE"
export const CARD_SAMPLE = "CARD_SAMPLE"
export const CARD_SAMPLE_NAME = "CARD_SAMPLE_NAME"
export const CARD_SAMPLE_SKILL = "CARD_SAMPLE_SKILL"

export const BOSS_ENTER = "BOSS_ENTER"
export const BOSS_DONE = "BOSS_DONE"
export const BOSS_LV = "BOSS_LV"
export const BOSS_ATTR = "BOSS_ATTR"

export const card_atk = (position, value) => ({
  type: CARD_ATK,
  position: position,
  value: value
})
export const card_name = (position, value) => ({
  type: CARD_NAME,
  position: position,
  value: value
})
export const card_skill = (position, value) => ({
  type: CARD_SKILL,
  position: position,
  value: value
})
export const card_skill_type = (position, value) => ({
  type: CARD_SKILL_TYPE,
  position: position,
  value: value
})
export const card_skill_boss = (position, value) => ({
  type: CARD_SKILL_BOSS,
  position: position,
  value: value
})
export const card_skill_fusion = (position, value) => ({
  type: CARD_SKILL_FUSION,
  position: position,
  value: value
})
export const card_skill_target = (position, value) => ({
  type: CARD_SKILL_TARGET,
  position: position,
  value: value
})
export const card_skill_skill2 = (position, value) => ({
  type: CARD_SKILL_SKILL2,
  position: position,
  value: value
})
export const card_skill_value = (position, value) => ({
  type: CARD_SKILL_VALUE,
  position: position,
  value: value
})
export const card_skill2_value = (position, value) => ({
  type: CARD_SKILL2_VALUE,
  position: position,
  value: value
})
export const card_sample = (position, value) => ({
  type: CARD_SAMPLE,
  position: position,
  value: value
})
export const card_sample_name = (position, value) => ({
  type: CARD_SAMPLE_NAME,
  position: position,
  value: value
})
export const card_sample_skill = (value) => ({
  type: CARD_SAMPLE_SKILL,
  value: value
})
export const boss_enter = (value) => ({
  type: BOSS_ENTER,
  value: value
})
export const boss_done = (value) => ({
  type: BOSS_DONE,
  value: value
})
export const boss_lv = (value) => ({
  type: BOSS_LV,
  value: value
})
export const boss_attr = (value) => ({
  type: BOSS_ATTR,
  value: value
})
