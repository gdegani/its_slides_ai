# Agenda Lezione 3

## Parte 1 — Ripasso e consolidamento (~30 min)

- Riepilogo del corso (Lezione 1 + Lezione 2)
- Teach-back in coppia
- FAQ e suggerimenti finali

## Parte 2 — Preparazione e test finale (~30 min + 60 min)

- Regole e rubrica di valutazione
- Test finale (60 minuti)

---
layout: section

---

# Parte 1 — Ripasso e consolidamento

---

# Riepilogo del corso

## Lezione 1 — Fondamenti

- AI, ML, Deep Learning: relazione e differenze
- LLM: modelli probabilistici, token, embedding, context window
- Temperature: controllo della casualità nell'output
- Chat AI vs AI Agent
- Prompt efficaci: chiarezza, specificità, contesto

## Lezione 2 — Pratica

- Framework CRISPE e CO-STAR per prompt strutturati
- System prompt: ruolo, vincoli, formato
- Setup: LM Studio + GitHub Copilot + AI Assistant in CLion
- Generazione codice C con AI, debug assistito
- Refactoring (.h/.c) e testing con assert

---
layout: two-cols

---

# Mappa concettuale del corso

```mermaid
mindmap
  root((AI + C))
    Fondamenti
      LLM probabilistici
      Token e context window
      Temperature
    Prompt
      Chiarezza
      CRISPE / CO-STAR
      System prompt
    Strumenti
      LM Studio locale
      GitHub Copilot
      AI Assistant CLion
    Pratica C
      Generazione codice
      Debug assistito
      Refactoring .h/.c
      Testing con assert
```

::right::

## Concetti chiave da ricordare

- L'AI **non comprende**: predice il token successivo
- Prompt migliore = risposta migliore
- **Sempre verificare**: compilare, testare, leggere il codice
- Privacy: LLM locale vs cloud
- Il system prompt guida il comportamento dell'AI

---

# Teach-back

Consolidamento in coppia:

1. **Insegna al compagno** un concetto chiave del corso (2 min ciascuno)
2. Discutete i **3 comandi/pattern più utili** che avete scoperto
3. Raccogliete i prompt e snippet riutilizzabili

⏱️ 15 minuti

---

# FAQ - L'assistente sbaglia

- Prova un prompt più breve e specifico
- Chiedi di spiegare passo-passo
- Cambia vincoli (es. rimuovi malloc) e rigenera
- Non fidarti: verifica sempre compilando e testando

---

# FAQ - Output troppo lungo

- Chiedi "solo codice"
- Specifica numero di righe o blocchi
- Separa la richiesta in due prompt più piccoli

---

# FAQ - Codice non compila

- Incolla l'errore preciso nel prompt
- Chiedi una patch minima, non una riscrittura
- Verifica include e tipi mancanti

---

# Risorse consigliate

- Documentazione CLion per C
- Linee guida Copilot per uso sicuro
- I prompt e snippet salvati durante il corso
- JetBrains AI Assistant: [jetbrains.com/help/ai-assistant](https://www.jetbrains.com/help/ai-assistant/)
- GitHub Copilot Docs: [docs.github.com/copilot](https://docs.github.com/en/copilot)

---

# Suggerimenti finali

- Pochi prompt, mirati e brevi
- Compila spesso, testa casi limite
- Mantieni traccia di cosa hai accettato dall'assistente
- Il system prompt rende le risposte più coerenti
- Separa sempre .h e .c nei progetti reali

---
layout: section

---

# Parte 2 — Test finale

---

# Test finale

## Regole

- Durata: **60 minuti**, individuale
- Il test è un questionario Google Form a risposta multipla
- Copre tutti gli argomenti delle Lezioni 1, 2 e 3
- Non è consentito l'uso di AI durante il test

## Strategia consigliata

- Leggi tutte le domande prima di rispondere
- Rispondi prima alle domande di cui sei sicuro
- Ricontrolla le risposte nei minuti finali

---

# Rubrica di valutazione

| Criterio | Peso |
| --- | --- |
| Risposte corrette al questionario | ⭐⭐⭐⭐ |
| Comprensione dei concetti fondamentali | ⭐⭐⭐ |
| Conoscenza degli strumenti (Copilot, LM Studio) | ⭐⭐ |

## Argomenti coperti

- Fondamenti AI/ML/LLM, token, context window, temperature
- Prompt engineering: CRISPE, CO-STAR, system prompt
- Setup e uso degli strumenti (LM Studio, Copilot, AI Assistant)
- Codice C: generazione, debug, refactoring, testing

---

# Biglietto d'uscita finale

Rispondete a voce o su un foglio:

- **La cosa più utile che ho imparato nel corso**
- **Come userò l'AI nel prossimo progetto**
- **Un consiglio per chi inizia**
