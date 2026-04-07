// ./setup/mermaid.ts
import { defineMermaidSetup } from '@slidev/types'

export default defineMermaidSetup(() => {
  return {
    theme: 'base',
    themeVariables: {
      // === COLORI DI BASE ===
      background:          '#ffffff',
      primaryColor:        '#ffffff',  // sfondo nodi principali
      primaryTextColor:    '#000000',  // testo nei nodi
      primaryBorderColor:  '#000000',  // bordi nodi principali
      lineColor:           '#000000',  // frecce e connessioni
      secondaryColor:      '#ffffff',  // sfondo nodi secondari
      tertiaryColor:       '#ffffff',  // sfondo nodi terziari
      mainBkg:             '#ffffff',

      // === TESTO E BORDI ===
      secondaryTextColor:       '#000000',
      secondaryBorderColor:     '#000000',
      tertiaryTextColor:        '#000000',
      tertiaryBorderColor:      '#000000',
      nodeBorder:               '#000000',
      clusterBkg:               '#ffffff',
      clusterBorder:            '#000000',
      titleColor:               '#000000',
      edgeLabelBackground:      '#ffffff',
      labelColor:               '#000000',

      // === NOTE (sequence diagram) ===
      noteBkgColor:        '#ffffff',
      noteTextColor:       '#000000',
      noteBorderColor:     '#000000',

      // === SEQUENCE DIAGRAM ===
      actorBkg:            '#ffffff',
      actorBorder:         '#000000',
      actorTextColor:      '#000000',
      actorLineColor:      '#000000',
      signalColor:         '#000000',
      signalTextColor:     '#000000',
      activationBkgColor:  '#ffffff',
      activationBorderColor: '#000000',

      // === CLASS/ENTITY DIAGRAM ===
      classText:           '#000000',
      fillType0:           '#ffffff',
      fillType1:           '#ffffff',
      fillType2:           '#ffffff',
      fillType3:           '#ffffff',
      fillType4:           '#ffffff',
      fillType5:           '#ffffff',
      fillType6:           '#ffffff',
      fillType7:           '#ffffff',
    }
  }
})