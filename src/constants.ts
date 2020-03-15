export enum PROGRESS_BAR_SECTION_UI {
  CURRENT_TIME = 'CURRENT_TIME',
  PROGRESS_BAR = 'PROGRESS_BAR',
  DURATION = 'DURATION',
}

export enum CONTROLS_SECTION_UI {
  ADDITIONAL_CONTROLS = 'ADDITIONAL_CONTROLS',
  MAIN_CONTROLS = 'MAIN_CONTROLS',
  VOLUME_CONTROLS = 'VOLUME_CONTROLS',
}

export enum ADDITIONAL_CONTROLS_UI {
  LOOP = 'LOOP',
}

export enum VOLUME_CONTROLS_UI {
  VOLUME = 'VOLUME',
}

export const RHAP_UI = {
  ...PROGRESS_BAR_SECTION_UI,
  ...CONTROLS_SECTION_UI,
  ...ADDITIONAL_CONTROLS_UI,
  ...VOLUME_CONTROLS_UI,
}

export type RHAP_UI = typeof RHAP_UI

export type AUDIO_PRELOAD_ATTRIBUTE = 'auto' | 'metadata' | 'none'

export type MAIN_LAYOUT = 'stacked' | 'stack-reverse' | 'horizontal' | 'horizontal-reverse'
