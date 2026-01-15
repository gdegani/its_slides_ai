---
theme: academic
coverDate: "2026"
# some information about your slides (markdown enabled)
title: Programmazione assistita dall'Intelligenza Artificiale

class: text-center
download: false
drawings:
  persist: true
  enabled: dev
  syncAll: false
transition: slide-left
mdc: true
themeConfig:
  paginationX: r
  paginationY: b
  paginationPagesDisabled: "1"
lineNumbers: true

---

# Programmazione assistita dall'Intelligenza Artificiale

Ing. Giancarlo Degani

---

## Programma e tempi (10 ore)

- 1: Introduzione, obiettivi, configurazione ambiente
- 2: Assistenti di sviluppo e casi d'uso
- 3: Prompt design di base
- 4: Generazione di codice C guidata
- 5: Debug assistito e lettura errori
- 6: Refactoring e documentazione
- 7: Test e validazione dei risultati
- 8: Workflow in team con Git e AI
- 9: Laboratorio guidato in CLion
- 10: Test finale (60 minuti)

---

## Obiettivi del corso

- Integrare un assistente AI nel ciclo di sviluppo C
- Scrivere prompt efficaci e controllare gli output
- Usare CLion con AI per generazione, debug e refactoring
- Validare e testare il codice generato
- Operare in team mantenendo qualità e tracciabilità

---

## Concetti base

- Modello: rete neurale addestrata a prevedere la parola/token successivo
- Contesto: finestra limitata di testo che guida la risposta
- Prompt: istruzioni testuali usate per ottenere un comportamento desiderato
- Agent: sistema che combina il modello con strumenti esterni e loop di ragionamento

---

## Cos'è un LLM

- Rete neurale generativa addestrata su testi eterogenei
- Produce testo token per token in base al prompt e al contesto
- Limiti: allucinazioni, sensibilità alla formulazione, finestra di contesto finita
- Buone pratiche: specificare vincoli, chiedere output brevi e verificabili, iterare

---

## Prompt: come formularlo

- Dichiarare ruolo e obiettivo: cosa deve produrre il modello
- Fornire contesto minimo sufficiente (linguaggio C, standard, file coinvolti)
- Definire vincoli: formato output, lunghezza, evitare librerie non permesse
- Chiedere passi espliciti se serve ragionamento, altrimenti solo il codice

---

## Agent: modello + strumenti

- Il modello decide quali azioni compiere (es. chiamare un comando, leggere un file)
- Usa loop osserva→decide→agisci con feedback dal contesto
- Utile per: generare patch, eseguire test, riassumere log
- Richiede istruzioni chiare su strumenti disponibili e limiti di sicurezza

---

## Perché usare agent AI nello sviluppo C

- Ridurre tempo di boilerplate (init, parsing, test) mantenendo focus sulla logica
- Ottenere spiegazioni rapide di warning e bug prima del debug manuale
- Esplorare alternative di design senza riscrivere tutto a mano
- Mantenere coerenza di stile e naming in team

---

## GitHub Copilot in breve

- Suggerimenti inline mentre si scrive in CLion (C, CMake, markdown)
- Copilot Chat per spiegazioni, refactoring, generazione test e fix mirati
- Non esegue il codice: serve sempre compilare/testare e fare review umana
- Può proporre codice non sicuro o incompleto: verificare input, error handling, limiti

---

## Configurare CLion con GitHub Copilot

- CLion > Settings/Preferences > Plugins > Marketplace: installa "GitHub Copilot" e "GitHub Copilot Chat"
- Riavvia CLion, poi login GitHub quando richiesto (Authorize nel browser)
- Settings > Tools > GitHub Copilot: abilita completamenti inline e scegli la keymap preferita
- Settings > Tools > GitHub Copilot Chat: abilita la chat e assegna uno shortcut
- Facoltativo: limita telemetria e riduci suggerimenti per file di grandi dimensioni

---

## Copilot in CLion: uso quotidiano

- Inline: scrivi il commento della funzione, attendi il suggerimento grigio, accetta o rigenera
- Chat: seleziona un blocco e chiedi refactoring, test, spiegazione warning
- Code actions: tasto destro > Copilot per documentazione o correzioni
- Mantieni le richieste brevi e locali: un file o una funzione alla volta

---

## Prompt efficaci per agent e Copilot

- Specifica standard e vincoli: "usa C99, niente librerie esterne, input validato"
- Fornisci interfacce: firme funzioni, strutture dati attese, range input
- Chiedi output in un formato: "solo codice", "spiega in 3 bullet", "mostra patch"
- Includi esempi minimi: input atteso, comportamento edge

---

## Strategie di verifica

- Compila sempre dopo ogni suggerimento accettato
- Aggiungi assert e controlli su input/null pointer prima di fidarti
- Confronta la patch proposta con un diff piccolo e leggibile
- Esegui test su casi limite (array vuoti, overflow, indici out-of-range)

---

## Esempi di richieste veloci

- "Scrivi una funzione C99 che normalizza un valore int in [0,1], senza float"
- "Spiega questo warning di clang e proponi fix minimale"
- "Genera test per questa funzione che calcola mediana, includi casi dispari/paria"
- "Separa questo file in .h/.c mantenendo le firme"

---

## Prerequisiti

- Conoscenze di base del C (tipi, funzioni, array, puntatori semplici)
- Esperienza iniziale con CLion: creazione progetto, build, run, debugger
- Uso elementare di Git (clone, commit, push)
- Ambiente pronto con compilatore C (gcc/clang) e CLion installato

---

## Strumenti di lavoro

- CLion con toolchain C configurata
- Terminale e Git per controllo versione
- Assistente AI testuale (es. Copilot Chat) integrato nell'IDE o nel browser
- Risorse progetto: repository, task tracker, documentazione

---

## Uso responsabile e limiti

- Verificare sempre il codice generato: compilazione, test, lettura manuale
- Non condividere dati sensibili nei prompt
- Citare la fonte AI quando si riutilizzano frammenti significativi
- Preferire piccoli passi iterativi per mantenere il controllo
- Conservare decisioni e motivazioni nei messaggi di commit

---

## Flusso di lavoro assistito (pattern)

- Definisci il contesto: obiettivo, vincoli, file coinvolti
- Chiedi un output piccolo e verificabile
- Esegui e osserva errori o warning
- Condividi log e snippet minimi nell'IDE/chat
- Itera fino a un risultato compilabile e leggibile

---

## Strutturare i prompt

- Contesto: cosa fa il programma, vincoli (C99, senza librerie extra)
- Compito: cosa vuoi ottenere (funzione, test, refactoring)
- Vincoli: lunghezza, stile, interfacce esistenti
- Output: formato atteso (solo codice, spiegazione breve, passi)

---

## Prompt di esempio (generazione)

Testo da dare all'assistente:

```
Ho un programma C su CLion. Scrivi una funzione C99 che calcola la media di un array di int.
Non usare librerie extra. Mantieni i parametri const ove possibile. Aggiungi un breve commento.
Restituisci solo il codice della funzione.
```

---

## Esempio di codice generato

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

## Debug assistito

- Fornisci messaggi di errore completi (compilatore o runtime)
- Invia solo la funzione o il file minimo riproducibile
- Chiedi spiegazioni passo-passo: cosa significa l'errore, dove guardare

Esempio di prompt per un `segmentation fault`:

```
Ho un segmentation fault in questa funzione C. Ecco la funzione e l'input che lo causa.
Spiega la causa probabile e proponi una correzione minimale.
```

---

## Snippet per il debug

```c
#include <stdio.h>

int read_value(const int *buffer, size_t length, size_t index) {
    if (buffer == NULL || index >= length) {
        return -1; // invalid access avoided
    }
    return buffer[index];
}

int main(void) {
    int data[] = {3, 5, 7};
    printf("%d\n", read_value(data, 3, 5));
    return 0;
}
```

- L'assistente può evidenziare l'accesso fuori limite (`index >= length`)
- Dopo la correzione, ricompila e riesegui il test

---

## Refactoring con AI

- Chiedi di rinominare funzioni/variabili mantenendo l'API
- Richiedi separazione in file `.c` e `.h` indicando le firme
- Domanda tipica: "Proponi un refactoring che migliori la leggibilità senza cambiare il comportamento"
- Verifica con diff ridotti e compilazione

---

## Documentazione e commenti

- Domanda tipica: "Aggiungi commenti essenziali e brevi a questo file"
- Mantieni commenti in inglese per il codice C del corso
- Evita commenti ridondanti; privilegia il perché rispetto al cosa

---

## Testing e validazione

- Genera casi di test piccoli e mirati (input validi e edge case)
- Automatizza dove possibile con script di build/test
- Confronta l'output atteso con quello osservato; condividi le differenze nell'IDE

---

## CLion + AI: flusso pratico

- Crea un nuovo progetto C eseguibile
- Scrivi la funzione con l'assistente in un file `.c`
- Usa il debugger per ispezionare variabili e stack
- Chiedi all'assistente di interpretare un backtrace o un warning
- Integra correzioni e ripeti il ciclo build-run-debug

---

## Git e collaborazione con AI

- Usa branch dedicati per le iterazioni assistite
- Chiedi suggerimenti per messaggi di commit chiari
- Fai review del codice AI come se fosse di un collega
- Conserva le decisioni nel README o nei commenti dei commit

---

## Esercitazioni proposte (ore 8-9)

- Usa Copilot per generare una funzione che normalizza un int in [0,1] senza float; poi aggiungi a mano controlli su overflow e input negativi
- Chiedi a Copilot di separare un file unico in .h/.c mantenendo le firme; verifica con clang che non ci siano warning
- Fornisci a Copilot un warning reale di clang e chiedi spiegazione + patch; applica solo se il diff è minimo e leggibile
- Genera con Copilot test per edge case (array vuoti, indici fuori limite) per una funzione di lettura da array, poi esegui e valida l'output
- Bonus: chiedi a Copilot di scrivere un CMakeLists.txt minimale per buildare i file creati e integrare i test

---

## Test finale (ora 10)

- Durata: 60 minuti, individuale
- Consegna: repository o archivio con codice e breve README
- Valutazione: correttezza, chiarezza del codice, capacità di usare l'AI in modo controllato
- Suggerimento: preparare snippet e prompt riutilizzabili durante il corso
