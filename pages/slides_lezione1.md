---
layout: two-cols
transition: slide-left
---

# Rispondi al sondaggio

Scansiona il QR code con il telefono

oppure

vai su slido.com e inserisci il codice:

## 1468 331

::right::

![QR Code](/images/qr-code-its-1.png)

<!-- https://wall.sli.do/event/4JqN2FQ25AgprK61sixSzx?section=935314ea-1825-4ca1-bd24-50111172a8c6&integration=shared-present-mode&utm_source=slidoadmin -->

---

# Terminologia

Quale è il significato di questi termini?

| Termine | Definizione |
| --- | --- |
| Modello | ? |
| Contesto | ? |
| Prompt | ? |
| Agent | ? |

---

# Terminologia — Tabella completa

| Termine | Definizione |
| --- | --- |
| Modello | Rete neurale addestrata a prevedere il token successivo. |
| Contesto | Finestra limitata di testo che guida la risposta del modello. |
| Prompt | Istruzioni testuali usate per ottenere un comportamento desiderato. |
| Agent | Sistema che combina il modello con strumenti esterni e loop di ragionamento. |

---
layout: figure
figureUrl: /images/AI_venn.png
figureCaption: "Source: Wikipedia - AI, ML, DL, LLM relationship"

---

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
layout: two-cols

---

# LLM come strumenti probabilistici

## Esempio

Input: `"Il sole sorge a..."`

- `"est"` → 85%
- `"oriente"` → 10%
- `"ovest"` → 2%

::right::

## Concetto fondamentale

Gli LLM **non comprendono** il linguaggio come gli umani.

Sono modelli statistici che predicono la sequenza di parole più probabile.

## Come funziona la predizione

- Dato un contesto (prompt), il modello calcola la probabilità di ogni possibile token successivo
- Sceglie il token con probabilità più alta (o campiona dalla distribuzione)
- Ripete il processo per generare testo completo

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

## Regola d'oro

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

# Temperature: effetto sulla distribuzione

Prompt: `"Il sole sorge a..."` — come cambia la distribuzione dei token al variare della temperature.

| Token | Temp 0.1 | Temp 0.7 | Temp 1.2 |
| ------- | ---------- | ---------- | ---------- |
| est | 95 % | 55 % | 30 % |
| oriente | 4 % | 20 % | 22 % |
| mattina | 1 % | 12 % | 18 % |
| ovest | 0 % | 8 % | 16 % |
| alba | 0 % | 5 % | 14 % |

- **Bassa**: distribuzione concentrata, scelta quasi deterministica
- **Alta**: distribuzione più uniforme, maggiore variabilità

---

# Cos'è un Token?

Un **token** è l'unità minima di testo che un LLM elabora: non una lettera, non sempre una parola intera.

```mermaid
flowchart LR
    A["printf(&quot;Hello&quot;);"] --> B["printf"]
    A --> C["(&quot;"]
    A --> D["Hello"]
    A --> E["&quot;);"]
    style A fill:#fff,stroke:#000,color:#000
    style B fill:#e8f4fd,stroke:#000,color:#000
    style C fill:#fde8e8,stroke:#000,color:#000
    style D fill:#e8fde8,stroke:#000,color:#000
    style E fill:#fdf4e8,stroke:#000,color:#000
```

- Il **tokenizer** divide il testo in pezzi chiamati token
- Una parola comune = 1 token; una parola rara = più token
- I numeri, la punteggiatura e il codice vengono tokenizzati in modo specifico

---
layout: two-cols

---

# Token: esempi pratici

## Frase in italiano

`"Il gatto dorme"` → 3-4 token

| Pezzo | Token |
| --- | --- |
| Il | 1 |
| gatto | 1 |
| dorme | 1 |

::right::

## Codice C

`"int x = 5;"` → 5 token

| Pezzo | Token |
| --- | --- |
| int | 1 |
| x | 1 |
| = | 1 |
| 5 | 1 |
| ; | 1 |

---

# Token: esempi pratici

## Ordini di grandezza

- 1 token ≈ 0.75 parole (inglese)
- 1 token ≈ 0.5-0.7 parole (italiano)
- 100 token ≈ 75 parole ≈ mezza pagina

## Perché è importante?

- I modelli hanno un **limite massimo di token** (context window)
- Ogni token ha un **costo** nei servizi cloud
- Prompt più lunghi = meno spazio per la risposta

---

# Dal testo al numero: la tokenizzazione

Un LLM non legge lettere: converte ogni token in un **numero intero** (ID) tramite un vocabolario fisso.

```mermaid
flowchart LR
    A["Testo"] -->|Tokenizer| B["Token"]
    B -->|Vocabolario| C["ID numerico"]
    A2["&quot;Il gatto dorme&quot;"] -->|split| B2["Il | gatto | dorme"]
    B2 -->|lookup| C2["1529 | 38201 | 9847"]
    style A fill:#fff,stroke:#000,color:#000
    style B fill:#e8f4fd,stroke:#000,color:#000
    style C fill:#e8fde8,stroke:#000,color:#000
    style A2 fill:#fff,stroke:#000,color:#000
    style B2 fill:#e8f4fd,stroke:#000,color:#000
    style C2 fill:#e8fde8,stroke:#000,color:#000
```

- Il vocabolario è fisso (es. GPT-4 ha circa 100.000 token)
- Parole fuori vocabolario vengono spezzate in sotto-token
- Esempio: `"programmazione"` potrebbe diventare `"programm"` + `"azione"`

---
layout: two-cols

---

# Cos'è un Embedding?

Un **embedding** è la rappresentazione di un token come **vettore di numeri reali** in uno spazio multidimensionale.

```mermaid
flowchart TD
    A["Token ID: 1529"] -->|Matrice embedding| B["Vettore:\n[0.12, -0.45, 0.78, ...]"]
    style A fill:#e8f4fd,stroke:#000,color:#000
    style B fill:#e8fde8,stroke:#000,color:#000
```

- Ogni token diventa un punto nello spazio
- Vettori con centinaia di dimensioni (es. 768 o 4096)
- Parole simili → vettori vicini

::right::

## Analogia visiva (2D)

```mermaid
quadrantChart
    title Spazio embedding semplificato
    x-axis Concreto --> Astratto
    y-axis Statico --> Dinamico
    quadrant-1 Azioni astratte
    quadrant-2 Azioni concrete
    quadrant-3 Oggetti concreti
    quadrant-4 Concetti astratti
    gatto: [0.25, 0.40]
    cane: [0.30, 0.45]
    correre: [0.20, 0.80]
    saltare: [0.25, 0.85]
    idea: [0.75, 0.35]
    tavolo: [0.15, 0.15]
```

Parole con significato simile sono **vicine** nello spazio.

---

# Embedding: perché sono importanti

Gli embedding permettono al modello di "capire" le **relazioni semantiche** tra parole.

```mermaid
flowchart LR
    subgraph Relazioni catturate
        A["re - uomo + donna ≈ regina"]
        B["Roma - Italia + Francia ≈ Parigi"]
        C["int - C + Python ≈ int"]
    end
    style A fill:#fff,stroke:#000,color:#000
    style B fill:#fff,stroke:#000,color:#000
    style C fill:#fff,stroke:#000,color:#000
```

## Pipeline completa: dal testo alla predizione

```mermaid
flowchart LR
    A["Testo\ninput"] --> B["Tokenizzazione"]
    B --> C["Embedding\n(vettori)"]
    C --> D["Rete neurale\n(trasformazioni)"]
    D --> E["Predizione\ntoken successivo"]
    style A fill:#fff,stroke:#000,color:#000
    style B fill:#e8f4fd,stroke:#000,color:#000
    style C fill:#e8fde8,stroke:#000,color:#000
    style D fill:#fdf4e8,stroke:#000,color:#000
    style E fill:#fde8e8,stroke:#000,color:#000
```

Ogni volta che un LLM genera una parola, attraversa tutta questa pipeline.

---

# Context window: concetti base

## Cos'è il Context Window

Quantità massima di testo che un LLM può "vedere" contemporaneamente (input + output).

È come la **memoria a breve termine** del modello.

Si misura in token

Esempio: `"printf(\"Hello\");"` = circa 5-6 token

---

# Context window: limiti pratici

## Implicazioni pratiche per lo sviluppo

- **Conversazioni lunghe** "dimenticano" l'inizio
- **Documenti troppo lunghi** vanno divisi in parti
- **Necessità di riassumere** periodicamente il contesto
- **File di codice grandi** potrebbero non entrare completamente
- Strategia: fornire solo il codice rilevante al task corrente

---
layout: figure-side
figureUrl: /images/context-window-llm.svg
figureCaption: "Schema semplificato del context window di un LLM"
zoom: 0.9

---

# Context window di un LLM

La **context window** e la memoria a breve termine del modello:

- Contiene prompt, cronologia recente e risposta in generazione
- Ha una capienza massima misurata in token
- Quando il limite e superato, le parti piu vecchie escono dalla finestra

## Impatto pratico

- Prompt lunghi riducono lo spazio per l'output
- Meglio inviare solo il codice rilevante
- Utile riassumere periodicamente il contesto

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
    A["Pianifica"] --> B["Agisci"]
    B --> C["Osserva"]
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

| **Componente** | **Chat AI** | **AI Agent** |
| --- | --- | --- |
| Interazione | Risponde a domande | Esegue azioni |
| Autonomia | Limitata | Elevata |
| Strumenti | Solo LLM | LLM + tool esterni |
| Complessità | Singolo scambio | Multi-step planning |

## Quando usare cosa

- **Chat AI**: per spiegazioni, suggerimenti, completamento codice
- **AI Agent**: per task complessi che richiedono più passi e uso di strumenti

---
layout: figure-side
figureUrl: /images/lmstudio1.png
figureCaption: "LM Studio: eseguire LLM in locale"

---

# LM Studio: eseguire LLM in locale (DEMO)

LM Studio permette di scaricare ed eseguire modelli LLM sul proprio computer.

**Vantaggi**: privacy, nessun costo API, lavoro offline

## Come provarlo

1. Scarica da lmstudio.ai
2. Cerca un modello (es. Llama, Mistral)
3. Scarica e avvia una chat locale

---

# Installazione di LM Studio

## Requisiti minimi

- Sistema operativo: Windows 10+, macOS 13+, Linux (Ubuntu 22.04+)
- RAM: almeno 8 GB (16 GB consigliati)
- Spazio disco: almeno 10 GB liberi per il software + modello

## Procedura

1. Vai su **lmstudio.ai** e scarica il programma per il tuo sistema operativo
2. Apri il file scaricato e segui l'installazione guidata
3. Al primo avvio LM Studio mostra la schermata **Home**

---

# Scaricare il modello Llama 3.1 8B

## Trovare il modello

1. Apri LM Studio e vai nella sezione **Discover** (icona lente/bussola)
2. Nella barra di ricerca digita: **Llama 3.1 8B Instruct**
3. Cerca la versione **Q4_K_M** (buon compromesso qualità/dimensione, circa 4.9 GB)

## Avviare il download

4. Clicca il pulsante **Download** accanto alla variante Q4
5. Attendi il completamento (dipende dalla velocità della connessione)
6. A download finito il modello appare nella sezione **My Models**

> **Q4** indica una quantizzazione a 4 bit: riduce la dimensione del modello mantenendo buona qualità nelle risposte.

---

# Primo test: chat con il modello locale

## Avviare una conversazione

1. Vai nella sezione **Chat** (icona fumetto)
2. In alto seleziona il modello scaricato: **Llama-3.1-8B-Instruct-Q4_K_M**
3. Scrivi un messaggio di prova nella chat:

> "Elenca 3 vantaggi del linguaggio C in modo conciso"

4. Verifica che la risposta arrivi in pochi secondi

## Cosa osservare

- La velocità dipende dal tuo hardware (CPU o GPU)
- Tutto gira offline: puoi scollegare la rete e continuare a usarlo
- Se il modello è troppo lento, prova a chiudere altre applicazioni pesanti

---

# Cos'è un Prompt?

Un **prompt** è l'istruzione testuale che dai a un LLM per ottenere una risposta.

- È l'unico modo per comunicare con il modello
- La qualità del prompt influenza direttamente la qualità dell'output
- Scrivere prompt efficaci è una competenza fondamentale nell'era AI

## Esempio minimo

> "Elenca 3 vantaggi del linguaggio C"

Provalo su qualsiasi chatbot: la risposta sarà immediata e coerente.

---

# Perché il Prompt è Importante?

Lo stesso obiettivo con prompt diversi produce risultati molto diversi.

## Prompt vago

> "Parlami del C"

## Prompt mirato

> "Elenca 5 differenze tra C e Python, in formato tabella"

- Il primo genera una risposta generica e lunga
- Il secondo produce una tabella precisa e confrontabile

**Regola pratica**: più sei preciso nella domanda, più utile sarà la risposta.

---

# Anatomia di un Prompt Efficace

Un buon prompt contiene quattro elementi:

- Contesto: informazioni di background per guidare la risposta
- Obiettivo: cosa vuoi ottenere
- Vincoli: limitazioni e requisiti
- Formato: struttura dell'output

Non tutti servono sempre, ma più ne includi più la risposta sarà precisa.

---

# Principio 1: Chiarezza

Usa linguaggio preciso e senza ambiguità.

## Confronto

| | Prompt | Problema |
| --- | --- | --- |
| ❌ | "Spiega il sort" | Quale sort? In che linguaggio? |
| ✅ | "Spiega come funziona il bubble sort su un array di interi, passo per passo" | Chiaro e verificabile |

## Prova tu

> "Spiega il concetto di variabile come se parlassi a uno studente delle superiori"

Testa questo prompt su un chatbot locale: la risposta deve essere semplice e comprensibile.

---

# Principio 2: Specificità

Fornisci dettagli concreti su cosa vuoi.

## Confronto

| | Prompt |
| --- | --- |
| ❌ | "Scrivi una funzione" |
| ✅ | "Scrivi una funzione C che calcola la media di un array di 10 interi e restituisce il risultato come double" |

## Checklist di specificità

- Linguaggio? (C, Python, ...)
- Tipo di dato? (interi, stringhe, ...)
- Cosa deve restituire?
- Come gestire errori o casi particolari?

---

# Principio 3: Contesto

Dai all'LLM le informazioni di background necessarie.

## Senza contesto

> "Come leggo un file?"

## Con contesto

> "In un programma C che gira su Linux, come posso leggere un file di testo riga per riga usando solo la libreria standard?"

Il contesto guida il modello verso la soluzione più adatta alla tua situazione reale.

## Prova tu

> "Sono uno studente che sta imparando il C. Spiegami cosa fa l'operatore % con un esempio numerico"

---
layout: two-cols

---

# Tecnica: Ragionamento Passo-Passo

Chiedi all'LLM di ragionare **step-by-step** prima di rispondere.

## Senza step-by-step

> "Quanto fa 17 × 23 + 45?"

## Con step-by-step

> "Calcola 17 × 23 + 45. Mostra ogni passaggio del calcolo"

Il modello commette meno errori quando "ragiona ad alta voce".

::right::

## Prova tu con codice

> "Spiega passo dopo passo cosa stampa questo codice C:"
>
> ```c
> int x = 5;
> x = x + 3;
> printf("%d\n", x * 2);
> ```

Confronta la risposta con e senza "passo dopo passo".

---

# Tecnica: Fornire Esempi (Few-Shot)

Mostra al modello **il formato che vuoi** tramite un esempio.

## Prompt senza esempio

> "Converti queste temperature da Celsius a Fahrenheit: 0, 25, 100"

## Prompt con esempio (few-shot)

> "Converti temperature da Celsius a Fahrenheit.
> Esempio: 0°C → 32°F.
> Converti: 25°C, 100°C"

Il modello capisce lo stile e il formato desiderato dall'esempio fornito.

## Prova tu

> "Traduci in inglese le seguenti frasi.
> Esempio: 'Il gatto dorme' → 'The cat sleeps'.
> Traduci: 'La macchina è rossa', 'Il libro è sul tavolo'"

---

# Errori Comuni nei Prompt

| Errore | Esempio | Correzione |
| --- | --- | --- |
| Troppo vago | "Aiutami col codice" | "Correggi l'errore in questa funzione C: ..." |
| Troppo lungo | Un prompt di 20 righe con 5 richieste diverse | Una richiesta per prompt |
| Nessun contesto | "Perché non funziona?" | "Questa funzione C restituisce -1 invece di 0 quando..." |
| Aspettative irrealistiche | "Scrivi un intero gestionale" | Scomponere in sotto-task piccoli |

## Regola d'oro

> Un **buon prompt** = una richiesta chiara + contesto sufficiente + formato desiderato

---

# Esercizio: Costruisci il Tuo Prompt

Prova questi esercizi su un chatbot (locale o online):

## Livello 1 – Base

> Scrivi un prompt che chieda di spiegare la differenza tra `=` e `==` in C

## Livello 2 – Specifico

> Scrivi un prompt che chieda di generare una funzione C per contare quante volte un carattere appare in una stringa

## Livello 3 – Avanzato

> Riscrivi questo prompt vago in modo efficace:
> "Fai una cosa con gli array in C"

**Suggerimento**: applica i tre principi (chiarezza, specificità, contesto) e specifica il formato di output.

---
layout: two-cols

---

# Cos'è il System Prompt?

Il **system prompt** è un'istruzione nascosta che definisce il **comportamento** dell'assistente AI prima ancora che l'utente scriva qualcosa.

- Viene inviato **prima** del messaggio dell'utente
- Stabilisce ruolo, tono, vincoli e regole
- L'utente finale di solito non lo vede

::right::

```mermaid
flowchart TD
    A["System Prompt\n(invisibile all'utente)"] --> B["LLM"]
    C["Prompt utente"] --> B
    B --> D["Risposta"]
    style A fill:#e8f4fd,stroke:#000,color:#000
    style C fill:#fff,stroke:#000,color:#000
    style B fill:#fdf4e8,stroke:#000,color:#000
    style D fill:#e8fde8,stroke:#000,color:#000
```

---

# System Prompt: a cosa serve

## Utilità principali

- **Definire il ruolo**: "Sei un tutor di programmazione C per principianti"
- **Impostare il tono**: formale, informale, tecnico, didattico
- **Aggiungere vincoli**: "Rispondi solo in italiano", "Usa solo C99"
- **Guidare il formato**: "Rispondi con bullet point", "Includi sempre un esempio"
- **Limitare il perimetro**: "Non rispondere a domande fuori tema"

## Perché è importante

Senza system prompt, il modello risponde in modo generico. Con un system prompt ben scritto, le risposte diventano **coerenti**, **mirate** e **riutilizzabili**.

---
layout: two-cols

---

# Esempi di System Prompt

## Esempio 1: Tutor C

```text
Sei un tutor di programmazione C
per studenti principianti.
Rispondi sempre in italiano.
Usa solo C99 senza librerie esterne.
Ogni risposta deve includere
un esempio di codice compilabile.
Spiega il codice riga per riga.
```

## Esempio 2: Code reviewer

```text
Sei un revisore di codice C esperto.
Analizza il codice fornito e segnala:
- errori logici
- problemi di memoria
- violazioni dello standard C99
Rispondi in italiano con suggerimenti
concreti di correzione.
```

::right::

## Esempio 3: Assistente minimal

```text
Rispondi solo con codice C.
Nessuna spiegazione.
Nessun commento nel codice.
Se la richiesta non riguarda
il C, rispondi "Fuori tema".
```

## Esempio 4: Generatore di esercizi

```text
Sei un docente di programmazione C.
Genera esercizi di difficoltà
crescente per studenti ITS.
Ogni esercizio deve avere:
- descrizione del problema
- input e output attesi
- suggerimento (nascosto)
Usa solo concetti base del C.
```

---

# System Prompt: prova pratica

## Prova su LM Studio o qualsiasi chatbot

La maggior parte dei chatbot permette di impostare un system prompt nelle impostazioni della chat.

## Esercizio guidato

1. Apri un chatbot (LM Studio, ChatGPT, Claude...)
2. Imposta questo system prompt:

> "Sei un tutor di C per principianti. Rispondi in italiano. Ogni risposta include un esempio compilabile e una spiegazione passo-passo."

3. Chiedi: *"Come funziona un ciclo for?"*
4. Ora rimuovi il system prompt e rifai la stessa domanda
5. Confronta le due risposte: quale è più utile?

**Osservazione**: il system prompt rende le risposte più coerenti e adatte al contesto didattico.

---

# Avviare il server locale per CLion

## Perché serve il server

CLion si collega a LM Studio tramite un'API locale compatibile con OpenAI. Serve attivare il server integrato.

## Procedura

1. In LM Studio vai nella sezione **Developer** (icona `</>`)
2. Seleziona il modello **Llama-3.1-8B-Instruct-Q4_K_M** se non è già caricato
3. Clicca **Start Server** — di default parte su `http://localhost:1234`
4. Verifica dal terminale:

```bash
curl http://localhost:1234/v1/models
```

5. La risposta JSON deve elencare il modello caricato

> Annota la porta (1234) — servirà nella configurazione di CLion.

---

# Privacy: perché un LLM locale è vantaggioso

- Prompt e codice restano sul tuo computer: minore rischio di esposizione di dati sensibili
- Nessun invio obbligato a servizi cloud di terze parti
- Maggior controllo su log, conservazione dati e accessi in laboratorio o in azienda
- Più facile rispettare policy interne e vincoli di conformità

## Nota pratica

- Locale non significa "sicuro di default": servono comunque backup, cifratura disco e controllo accessi

---

# Perché usare agent AI nello sviluppo C

- Ridurre tempo di boilerplate (init, parsing, test) mantenendo focus sulla logica
- Ottenere spiegazioni rapide di warning e bug prima del debug manuale
- Esplorare alternative di design senza riscrivere tutto a mano
- Mantenere coerenza di stile e naming in team

---

# Creare un account GitHub

Per usare **GitHub Copilot** serve un account GitHub attivo.

## Passaggi

1. Vai su **github.com** e clicca **Sign up**
2. Inserisci email, password e username
3. Conferma l'email ricevuta
4. Attiva il piano **GitHub Copilot**:
   - Gratuito per studenti tramite **GitHub Education** (github.com/education)
   - Oppure prova gratuita 30 giorni con piano Pro

## GitHub Education (consigliato)

- Vai su **github.com/education** → **Join Global Campus**
- Usa la tua email istituzionale (es. @its...)
- Dopo l'approvazione, Copilot è incluso gratuitamente

---

# Installare GitHub Copilot in CLion

## Passaggi

1. Apri CLion → **Settings** (`Cmd+,` su Mac, `Ctrl+Alt+S` su Windows/Linux)
2. Vai su **Plugins** → tab **Marketplace**
3. Cerca **"GitHub Copilot"**
4. Clicca **Install** → **Restart IDE**

## Primo accesso

1. Dopo il riavvio, compare la notifica **"Sign in to GitHub"**
2. Clicca **Sign in** → si apre il browser
3. Autorizza l'accesso con il tuo account GitHub
4. Torna in CLion: compare il messaggio **"Copilot is ready"**

## Verifica

- Apri un file `.c` e inizia a scrivere: i suggerimenti appaiono in grigio
- Premi `Tab` per accettare, `Esc` per rifiutare

---

# Installare JetBrains AI Assistant in CLion

## Passaggi

1. Apri CLion → **Settings** → **Plugins** → **Marketplace**
2. Cerca **"AI Assistant"** (di JetBrains)
3. Clicca **Install** → **Restart IDE**

## Primo accesso

1. Dopo il riavvio, clicca sull'icona **AI** nella sidebar a destra
2. Effettua il login con il tuo account **JetBrains**
3. Se non hai un account, crealo su **account.jetbrains.com**

## Licenza

- Prova gratuita di **30 giorni** inclusa
- Studenti: verifica se il tuo **JetBrains Student Pack** include AI Assistant
- Dopo la prova, necessario un abbonamento a pagamento

---
layout: two-cols
---

# Copilot vs AI Assistant: quale usare?

| | **GitHub Copilot** | **AI Assistant** |
| --- | --- | --- |
| Produttore | GitHub/Microsoft | JetBrains |
| Completamento inline | Sì | Sì |
| Chat integrata | Sì | Sì |
| Modelli locali (LM Studio) | No | Sì |
| Costo studenti | Gratuito (Education) | Prova 30 gg |

::right::

## Consiglio pratico

- **Copilot**: ottimo per completamento e chat, gratis con GitHub Education
- **AI Assistant**: necessario per collegare **LM Studio** e modelli locali
- Si possono installare **entrambi** senza conflitti
- Nel corso useremo entrambi a seconda del contesto

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

- **Modello consigliato**: formato GGUF con quantizzazione Q4/Q5, 7–13B parametri (4–8 GB di VRAM)
- **GPU**: abilita `nGPU layers` in LM Studio al massimo per il tuo hardware

> **GGUF**: formato compatto per modelli quantizzati, eseguibili su hardware consumer.  
> **VRAM**: memoria dedicata della GPU, necessaria per caricare il modello.

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
    A["Definisci\ncontesto"] --> B["Chiedi\noutput piccolo"]
    B --> C["Compila\ne testa"]
    C --> D["Verifica\nrisultato"]
    D -->|"OK"| E["Accetta"]
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

# Panoramica e primo contatto

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

# Mini esercizio (CLion)

1. Apri Copilot Chat in CLion
2. Chiedi: *"Spiega in 3 bullet cosa fa un compilatore C"*
3. Verifica sintesi e chiarezza
4. Nota come risponde a prompt brevi

---

# Connection: Teach-back

In coppia, spiega al compagno in 30 secondi:

- **Cosè un token?**
- **Cos cambia tra temperature 0.1 e 0.9?**

⏱️ 2 minuti totali, poi confronto rapido

---

# Tipi di assistenti AI

| Tipo | Come funziona | Esempio |
| ------ | -------------- | ---------- |
| Inline | Completa token mentre scrivi | Suggerimento grigio in CLion |
| Chat | Rispondi a domande su selezione di codice | Copilot Chat |
| Agent | Legge file, esegue test, propone patch | Copilot Agent mode |

## Quando **non** usarlo

- Codice con dati sensibili
- Parti del progetto non comprese a fondo
- Urgenze senza tempo per verifiche

---

# Mini workflow (CLion)

1. Scrivi un commento che descrive la funzione desiderata
2. Genera con Copilot, accetta o rigenera
3. Compila subito e osserva warning
4. Salva i prompt efficaci in un file riutilizzabile

---

# Esercizio (CLion)

1. Chiedi a Copilot: *"Genera funzione C che somma array di int e gestisce null"*
2. Compila e misura quanto devi correggere
3. Aggiorna il prompt per ridurre le correzioni
4. Confronta il tuo risultato con il compagno

⏱️ 15 minuti

---

# Connection: Prompt Buono vs Cattivo (Miro)

Guarda questi 2 prompt. Quale funziona meglio? Vota su Miro!

**Prompt A**: *"Scrivi codice C"*

**Prompt B**: *"Scrivi funzione C99 che trova il massimo in un array di int. Gestisci array vuoto. Solo codice con breve commento."*

⏱️ 3 minuti — poi discussione

---

# Antipattern di prompt

- ❌ Troppo generici → output inutilizzabile
- ❌ Richieste doppie o contraddittorie
- ❌ Incollare troppo codice irrilevante

## Refinement iterativo

1. Chiedi versione breve
2. Aggiungi vincoli (C99, niente allocazioni dinamiche)
3. Chiedi solo codice finale

---

# Template pronti

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

# Esercizio: Prompt Duel (CLion)

In coppia, stesso task: *"funzione C che conta le occorrenze di un valore in un array"*

1. Ognuno scrive il proprio prompt
2. Genera con Copilot
3. Confrontate: chi ha ottenuto codice migliore?
4. Discutete le differenze nei prompt

⏱️ 15 minuti

---

# Connection: Quiz veloce (Miro)

Rispondi su Miro — quale template useresti per:

1. Generare una funzione di ordinamento? → **Template ___**
2. Capire un warning di clang? → **Template ___**
3. Ottenere test per una funzione? → **Template ___**

⏱️ 3 minuti

---

# Checklist prima di chiedere all'AI

```mermaid
flowchart TD
    A["Qual è il file/funzione?"] --> B["Incolla solo il necessario"]
    B --> C["Dichiara vincoli:\nC99, no librerie, limiti input"]
    C --> D["Scegli formato output:\nsolo codice / patch / 3 bullet"]
    D --> E["Hai un test o input\ndi esempio?"]
    E --> F["Pronto per chiedere"]
```

---

# Esercizio pratico (CLion)

Metti in pratica la checklist:

1. Scegli un task: *"funzione C che inverte un array in-place"*
2. Compila la checklist mentalmente
3. Scrivi il prompt e genera con Copilot
4. Compila, testa, correggi

⏱️ 15 minuti

---

# Riepilogo Lezione 1

- Fondamenti di AI, ML, Deep Learning
- Architettura Transformer e LLM moderni
- Natura probabilistica degli LLM e relative implicazioni
- Differenza tra Chat AI e AI Agent
- Basi per strutturare prompt efficaci
