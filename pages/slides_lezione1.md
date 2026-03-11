
# 🎯 Attività di apertura (Miro)

Prima di iniziare, rispondi su Miro con un post-it:

- **Cosa sai già dell'AI?** (giallo)
- **Dove l'hai usata?** (verde)
- **Cosa speri di imparare oggi?** (blu)

⏱️ 5 minuti — poi confronto rapido con il gruppo

---

# Argomenti del corso

- Introduzione alla Programmazione Assistita da AI
- Il Ruolo dell'Al come Assistente Intelligente
- L'Arte del Prompt Efficace
- Iterazione e Ottimizzazione dei Prompt

---

# Terminologia — Matching Game (Miro)

Collega ogni termine alla sua definizione su Miro:

| Termine | Definizione |
|---------|-------------|
| Modello | ? |
| Contesto | ? |
| Prompt | ? |
| Agent | ? |

⏱️ 3 minuti in coppia, poi verifica insieme

---

# Terminologia — Soluzioni

- **Modello**: rete neurale addestrata a prevedere la parola/token successivo
- **Contesto**: finestra limitata di testo che guida la risposta
- **Prompt**: istruzioni testuali usate per ottenere un comportamento desiderato
- **Agent**: sistema che combina il modello con strumenti esterni e loop di ragionamento

---
layout: two-cols
---

# Machine Learning e Deep Learning

::left::

## Machine Learning (ML)

Sottocampo dell'AI dove i sistemi **imparano dai dati** senza essere programmati esplicitamente.

## Deep Learning (DL)

Sottocampo del ML che usa **reti neurali artificiali profonde** (molti livelli) per apprendere rappresentazioni complesse.

::right::

## Relazione gerarchica

<div class="flex items-center justify-center mt-4">
  <div class="relative flex items-center justify-center rounded-full border-2 border-blue-400 bg-blue-50" style="width:260px;height:260px">
    <span class="absolute top-3 text-blue-600 font-semibold text-xs">🧠 Intelligenza Artificiale</span>
    <div class="relative flex items-center justify-center rounded-full border-2 border-green-400 bg-green-50" style="width:190px;height:190px">
      <span class="absolute top-3 text-green-600 font-semibold text-xs">📊 Machine Learning</span>
      <div class="relative flex items-center justify-center rounded-full border-2 border-yellow-400 bg-yellow-50" style="width:128px;height:128px">
        <span class="absolute top-2 text-yellow-600 font-semibold text-xs">🔬 Deep Learning</span>
        <div class="flex items-center justify-center rounded-full border-2 border-red-400 bg-red-50" style="width:72px;height:72px">
          <span class="text-red-600 font-semibold text-center leading-tight" style="font-size:0.6rem">📝 LLM</span>
        </div>
      </div>
    </div>
  </div>
</div>

---

# Cos'è un LLM

**Large Language Model** (LLM): modello linguistico di grandi dimensioni basato su reti neurali.

## Caratteristiche principali

- Miliardi di parametri (pesi neurali)
- Addestrato su enormi quantità di testo da Internet
- Capace di comprendere e generare linguaggio naturale
- Capace di generare codice in molti linguaggi di programmazione

## Esempi

GPT-4, Claude, Gemini, Llama, DeepSeek

---

# Architettura Transformer

Gli LLM moderni si basano sull'architettura **Transformer** (2017), che usa meccanismi di **attenzione** per elaborare il linguaggio.

## Meccanismo di attenzione

Permette al modello di "concentrarsi" su parti rilevanti del contesto quando genera ogni token.

## Vantaggi rispetto a architetture precedenti

- Elaborazione parallela (più veloce)
- Cattura relazioni a lungo raggio nel testo
- Scala efficacemente con dati e potenza di calcolo

---

# Come funzionano gli LLM: processo di generazione

```mermaid
flowchart LR
    A["📝 Testo"] --> B["🔤 Token"]
    B --> C["🔢 Embedding"]
    C --> D["⚙️ Transformer"]
    D --> E["🎯 Predizione"]
    E -->|"ripeti"| B
```

1. **Tokenizzazione**: il testo viene diviso in token — es. `"printf"` → `["print", "f"]`
2. **Embedding**: ogni token diventa un vettore numerico
3. **Elaborazione**: passaggio attraverso molti layer Transformer
4. **Predizione**: il modello predice il token successivo più probabile

Il processo si ripete token per token fino a generare la risposta completa.

---

# LLM come strumenti probabilistici

## Concetto fondamentale ⚠️

Gli LLM **non comprendono** il linguaggio come gli umani.

Sono modelli statistici che predicono la sequenza di parole più probabile.

## Come funziona la predizione

- Dato un contesto (prompt), il modello calcola la probabilità di ogni possibile token successivo
- Sceglie il token con probabilità più alta (o campiona dalla distribuzione)
- Ripete il processo per generare testo completo

## Esempio

Input: `"Il sole sorge a..."`

- `"est"` → 85%
- `"oriente"` → 10%
- `"ovest"` → 2%

---

# Implicazioni della natura probabilistica

## Vantaggi

- Output fluido e naturale
- Creatività e variabilità nelle risposte
- Capacità di gestire input imperfetti

## Limiti

- **Allucinazioni**: generazione di informazioni false ma plausibili
- **Inconsistenza**: output diversi per stesso input
- **Mancanza di ragionamento logico** vero
- **Nessuna garanzia** di correttezza

## Regola d'oro ⚠️

**Valida sempre l'output** - compila, testa, verifica la logica del codice generato

---

# Temperature e casualità

Gli LLM permettono di controllare la casualità dell'output tramite il parametro **temperature**.

## Temperature bassa (0.0 - 0.3)

- Output deterministico e prevedibile
- Sceglie sempre il token più probabile
- **Uso**: codice, traduzioni, task tecnici

## Temperature media (0.5 - 0.7)

- Bilanciamento tra prevedibilità e creatività
- **Uso**: scrittura generale, assistenza

## Temperature alta (0.8 - 1.0+)

- Output creativo e vario
- Maggiore casualità nella selezione
- **Uso**: brainstorming, scrittura creativa

---

# Context window: concetti base

## Cos'è il Context Window

Quantità massima di testo che un LLM può "vedere" contemporaneamente (input + output).

È come la **memoria a breve termine** del modello.

## Misurazione in token

Il context window si misura in **token**, non in parole:

- 1 token ≈ 0.75 parole in inglese
- 1 token ≈ 0.5-0.7 parole in italiano

Esempio: `"printf(\"Hello\");"` = circa 5-6 token

---

# Context window: limiti pratici

## Esempi di limiti nei modelli attuali

- **GPT-3.5**: 4K-16K token (~3K-12K parole)
- **GPT-4**: 8K-128K token (~6K-96K parole)
- **Claude 3**: fino a 200K token (~150K parole)

## Implicazioni pratiche per lo sviluppo

- **Conversazioni lunghe** "dimenticano" l'inizio
- **Documenti troppo lunghi** vanno divisi in parti
- **Necessità di riassumere** periodicamente il contesto
- **File di codice grandi** potrebbero non entrare completamente
- Strategia: fornire solo il codice rilevante al task corrente

---

# Cos'è una Chat AI

Una **Chat AI** (o chatbot AI) è un'interfaccia conversazionale che permette di interagire con un LLM tramite dialogo in linguaggio naturale.

## Componenti principali

- **LLM sottostante**: il modello che genera risposte
- **Interfaccia utente**: dove si scrive e si legge
- **Memoria conversazionale**: mantiene il contesto del dialogo
- **System prompt**: istruzioni che definiscono il comportamento

## Esempi

ChatGPT, Claude, Gemini, Perplexity, GitHub Copilot Chat

---

# Cos'è un AI Agent

Un **AI Agent** è un sistema AI più avanzato che può pianificare, agire e osservare in un loop continuo:

```mermaid
flowchart LR
    A["🤔 Pianifica"] --> B["🔧 Agisci"]
    B --> C["👀 Osserva"]
    C --> A
```

- Usare strumenti esterni (API, database, esecuzione codice)
- Prendere decisioni autonome
- Eseguire task complessi multi-step

## Esempio pratico

Sistema che cerca informazioni su web, legge documenti, scrive un report e lo invia via email.

---

# Chat AI vs AI Agent: differenze

## Confronto delle caratteristiche

| Aspetto | Chat AI | AI Agent |
| --------- | --------- | ---------- |
| Interazione | Risponde a domande | Esegue azioni |
| Autonomia | Limitata | Elevata |
| Strumenti | Solo LLM | LLM + tool esterni |
| Complessità | Singolo scambio | Multi-step planning |

## Quando usare cosa

- **Chat AI**: per spiegazioni, suggerimenti, completamento codice
- **AI Agent**: per task complessi che richiedono più passi e uso di strumenti

---

# LM Studio: eseguire LLM in locale

LM Studio permette di scaricare ed eseguire modelli LLM sul proprio computer.

![LM Studio](/images/lmstudio1.png)

**Vantaggi**: privacy, nessun costo API, lavoro offline

## Come provarlo

1. Scarica da lmstudio.ai
2. Cerca un modello (es. Llama, Mistral)
3. Scarica e avvia una chat locale

---

# Perché usare agent AI nello sviluppo C

- Ridurre tempo di boilerplate (init, parsing, test) mantenendo focus sulla logica
- Ottenere spiegazioni rapide di warning e bug prima del debug manuale
- Esplorare alternative di design senza riscrivere tutto a mano
- Mantenere coerenza di stile e naming in team

---

# GitHub Copilot in breve

- Suggerimenti inline mentre si scrive in CLion (C, CMake, markdown)
- Copilot Chat per spiegazioni, refactoring, generazione test e fix mirati
- Non esegue il codice: serve sempre compilare/testare e fare review umana
- Può proporre codice non sicuro o incompleto: verificare input, error handling, limiti

---

# Prerequisiti

- Conoscenze di base del C (tipi, funzioni, array, puntatori semplici)
- Esperienza iniziale con CLion: creazione progetto, build, run, debugger
- Ambiente pronto con compilatore C (gcc/clang) e CLion installato

---

# Setup dell'ambiente: CLion + LM Studio

Per usare un modello locale con **LM Studio** in CLion, configura **AI Assistant** con l'API OpenAI-compatible esposta dal server locale.

- LM Studio espone modelli locali (es. Llama) come endpoint compatibile OpenAI
- Integrabile nativamente in CLion tramite **AI Assistant**
- Tutto gira in locale: massima privacy, nessun dato inviato al cloud

> Ref: [JetBrains AI Assistant – Custom Models](https://www.jetbrains.com/help/ai-assistant/use-custom-models.html)

---

# Setup LM Studio

- Avvia LM Studio > tab **Developer** > carica un modello (**Discover** → Download → Load)
- Clic **Start Server** (default: `http://localhost:1234/v1`; annota la porta se cambia)
- Testa il server dal terminale:

```bash
curl http://localhost:1234/v1/models
```

- La risposta JSON elenca i modelli caricati e pronti

---

# Config CLion AI Assistant

- CLion > **Settings** (`Cmd+,`) > **Tools › AI Assistant**
- **Third-party AI providers** › seleziona **LM Studio**
- **Base URL**: `http://localhost:1234/v1` (aggiungi `/v1` se mancante)
- **Model**: nome del modello dal server (es. `llama-3.1-8b`)
- No API Key richiesta — inserisci `not-needed`
- Clic **Test Connection** › Apply

---

# Uso in CLion con LM Studio

- **Chat AI**: `Alt+Shift+A` oppure sidebar AI → chiedi codice, spiegazioni, debug
- **Completions inline**: scrivi codice, l'AI suggerisce completamenti (accetta con `Tab`)
- **Context-aware**: analizza file e repository per risposte più precise

```text
LM Studio → CLion
├── Load model → Start Server (localhost:1234)
├── Settings > AI > LM Studio > URL + Test Connection
├── Usa: Chat (Alt+Shift+A), suggerimenti inline
└── Verifica: curl http://localhost:1234/v1/models
```

---

# Best Practices (LM Studio locale)

- **Modello consigliato**: GGUF Q4/Q5, 7–13B parametri (4–8 GB VRAM)
- **GPU**: abilita `nGPU layers` in LM Studio al massimo per il tuo hardware
- **Privacy**: tutto locale e offline, nessun dato trasmesso
- **Licenza AI Assistant**: prova gratuita 30 gg; verifica student pack JetBrains
- Punto di partenza consigliato: **Llama 3.1 8B** (equilibrio velocità/qualità)

---

# Strumenti di lavoro

- CLion con toolchain C configurata
- Terminale per compilare ed eseguire
- Assistente AI testuale (es. Copilot Chat) integrato nell'IDE o nel browser
- Risorse progetto: repository, task tracker, documentazione

---

# Uso responsabile e limiti

- Verificare sempre il codice generato: compilazione, test, lettura manuale
- Non condividere dati sensibili nei prompt
- Citare la fonte AI quando si riutilizzano frammenti significativi
- Preferire piccoli passi iterativi per mantenere il controllo
- Conservare decisioni e motivazioni nei messaggi di commit

---

# Flusso di lavoro assistito (pattern)

```mermaid
flowchart LR
    A["📋 Definisci\ncontesto"] --> B["💬 Chiedi\noutput piccolo"]
    B --> C["▶️ Compila\ne testa"]
    C --> D["🔍 Verifica\nrisultato"]
    D -->|"OK"| E["✅ Accetta"]
    D -->|"Errori"| B
```

- Definisci il contesto: obiettivo, vincoli, file coinvolti
- Chiedi un output piccolo e verificabile
- Esegui e osserva errori o warning
- Condividi log e snippet minimi nell'IDE/chat
- Itera fino a un risultato compilabile e leggibile

---

# Strutturare i prompt

- Contesto: cosa fa il programma, vincoli (C99, senza librerie extra)
- Compito: cosa vuoi ottenere (funzione, test, refactoring)
- Vincoli: lunghezza, stile, interfacce esistenti
- Output: formato atteso (solo codice, spiegazione breve, passi)

---

# Prompt di esempio (generazione)

Testo da dare all'assistente:

```text
Ho un programma C su CLion. Scrivi una funzione C99 che calcola la media di un array di int.
Non usare librerie extra. Mantieni i parametri const ove possibile. Aggiungi un breve commento.
Restituisci solo il codice della funzione.
```

---

# Esempio di codice generato

```c
#include <stddef.h>

double mean_ints(const int *values, size_t count) {
    if (values == NULL || count == 0) {
        return 0.0; // defend against invalid input
    }

    long sum = 0;
    for (size_t i = 0; i < count; ++i) {
        sum += values[i];
    }

    return (double)sum / (double)count;
}
```

---

# ⏰ Ora 1 — Panoramica e primo contatto

## Obiettivi

- Ruolo dell'AI nello sviluppo C: suggerimenti, non magia
- Setup: CLion + toolchain C (gcc/clang) + Copilot Chat

## Rischi da conoscere subito

- Accettare codice senza verifiche
- Prompt vaghi → output inutili
- Dipendenza dall'assistente per concetti base

## Metriche di successo

- Compila dopo piccole correzioni — patch piccole e leggibili

---

# ⏰ Ora 1 — Mini esercizio (CLion)

1. Apri Copilot Chat in CLion
2. Chiedi: *"Spiega in 3 bullet cosa fa un compilatore C"*
3. Verifica sintesi e chiarezza
4. Nota come risponde a prompt brevi

---

# ⏰ Ora 2 — Connection: Teach-back

In coppia, spiega al compagno in 30 secondi:

- **Cos'è un token?**
- **Cosa cambia tra temperature 0.1 e 0.9?**

⏱️ 2 minuti totali, poi confronto rapido

---

# ⏰ Ora 2 — Tipi di assistenti AI

| Tipo | Come funziona | Esempio |
|------|--------------|----------|
| Inline | Completa token mentre scrivi | Suggerimento grigio in CLion |
| Chat | Rispondi a domande su selezione di codice | Copilot Chat |
| Agent | Legge file, esegue test, propone patch | Copilot Agent mode |

## Quando **non** usarlo

- Codice con dati sensibili
- Parti del progetto non comprese a fondo
- Urgenze senza tempo per verifiche

---

# ⏰ Ora 2 — Mini workflow (CLion)

1. Scrivi un commento che descrive la funzione desiderata
2. Genera con Copilot, accetta o rigenera
3. Compila subito e osserva warning
4. Salva i prompt efficaci in un file riutilizzabile

---

# ⏰ Ora 2 — Esercizio (CLion)

1. Chiedi a Copilot: *"Genera funzione C che somma array di int e gestisce null"*
2. Compila e misura quanto devi correggere
3. Aggiorna il prompt per ridurre le correzioni
4. Confronta il tuo risultato con il compagno

⏱️ 15 minuti

---

# ⏰ Ora 3 — Connection: Prompt Buono vs Cattivo (Miro)

Guarda questi 2 prompt. Quale funziona meglio? Vota su Miro!

**Prompt A**: *"Scrivi codice C"*

**Prompt B**: *"Scrivi funzione C99 che trova il massimo in un array di int. Gestisci array vuoto. Solo codice con breve commento."*

⏱️ 3 minuti — poi discussione

---

# ⏰ Ora 3 — Antipattern di prompt

- ❌ Troppo generici → output inutilizzabile
- ❌ Richieste doppie o contraddittorie
- ❌ Incollare troppo codice irrilevante

## Refinement iterativo

1. Chiedi versione breve
2. Aggiungi vincoli (C99, niente allocazioni dinamiche)
3. Chiedi solo codice finale

---

# ⏰ Ora 3 — Template pronti

## Generazione funzione

```text
Contesto: programma C per gestione array di int.
Compito: scrivi funzione C99 che trova il massimo.
Vincoli: niente librerie extra, gestisci array vuoto.
Output: solo codice della funzione, con breve commento.
```

## Debug

```text
Ho questo warning di clang: ...
Ecco la funzione minima: ...
Spiega la causa probabile e proponi una patch minima.
Restituisci solo la funzione corretta.
```

---

# ⏰ Ora 3 — Esercizio: Prompt Duel (CLion)

In coppia, stesso task: *"funzione C che conta le occorrenze di un valore in un array"*

1. Ognuno scrive il proprio prompt
2. Genera con Copilot
3. Confrontate: chi ha ottenuto codice migliore?
4. Discutete le differenze nei prompt

⏱️ 15 minuti

---

# ⏰ Ora 4 — Connection: Quiz veloce (Miro)

Rispondi su Miro — quale template useresti per:

1. Generare una funzione di ordinamento? → **Template ___**
2. Capire un warning di clang? → **Template ___**
3. Ottenere test per una funzione? → **Template ___**

⏱️ 3 minuti

---

# ⏰ Ora 4 — Checklist prima di chiedere all'AI

```mermaid
flowchart TD
    A["Qual è il file/funzione?"] --> B["Incolla solo il necessario"]
    B --> C["Dichiara vincoli:\nC99, no librerie, limiti input"]
    C --> D["Scegli formato output:\nsolo codice / patch / 3 bullet"]
    D --> E["Hai un test o input\ndi esempio?"]
    E --> F["✅ Pronto per chiedere"]
```

---

# ⏰ Ora 4 — Esercizio pratico (CLion)

Metti in pratica la checklist:

1. Scegli un task: *"funzione C che inverte un array in-place"*
2. Compila la checklist mentalmente
3. Scrivi il prompt e genera con Copilot
4. Compila, testa, correggi

⏱️ 15 minuti

---

# 📝 Glossario — Costruiscilo tu! (Miro)

Scrivi su Miro la definizione con parole tue per:

- **Prompt**
- **Token**
- **Context window**
- **Hallucination**
- **LLM**

⏱️ 5 minuti — confronta con il compagno

---

# 🎫 Biglietto d'uscita — Lezione 1

Scrivi su Miro un post-it con:

- 🟢 **Una cosa che ho imparato oggi**
- 🔴 **Una domanda che ho ancora**

---

# Riepilogo Lezione 1

- Fondamenti di AI, ML, Deep Learning
- Architettura Transformer e LLM moderni
- Natura probabilistica degli LLM e relative implicazioni
- Differenza tra Chat AI e AI Agent
- Basi per strutturare prompt efficaci
