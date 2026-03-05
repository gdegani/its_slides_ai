---
theme: academic
coverDate: "2026"
title: Programmazione assistita dall'Intelligenza Artificiale - Lezioni 2-3

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

## Lezioni 2 - 3: Pratica con GitHub Copilot

Ing. Giancarlo Degani

---

# Configurare CLion con GitHub Copilot

- CLion > Settings/Preferences > Plugins > Marketplace: installa "GitHub Copilot" e "GitHub Copilot Chat"
- Riavvia CLion, poi login GitHub quando richiesto (Authorize nel browser)
- Settings > Tools > GitHub Copilot: abilita completamenti inline e scegli la keymap preferita
- Settings > Tools > GitHub Copilot Chat: abilita la chat e assegna uno shortcut
- Facoltativo: limita telemetria e riduci suggerimenti per file di grandi dimensioni

---

# Copilot in CLion: uso quotidiano

- Inline: scrivi il commento della funzione, attendi il suggerimento grigio, accetta o rigenera
- Chat: seleziona un blocco e chiedi refactoring, test, spiegazione warning
- Code actions: tasto destro > Copilot per documentazione o correzioni
- Mantieni le richieste brevi e locali: un file o una funzione alla volta

---

# Prompt efficaci per agent e Copilot

- Specifica standard e vincoli: "usa C99, niente librerie esterne, input validato"
- Fornisci interfacce: firme funzioni, strutture dati attese, range input
- Chiedi output in un formato: "solo codice", "spiega in 3 bullet", "mostra patch"
- Includi esempi minimi: input atteso, comportamento edge

---

# Strategie di verifica

- Compila sempre dopo ogni suggerimento accettato
- Aggiungi assert e controlli su input/null pointer prima di fidarti
- Confronta la patch proposta con un diff piccolo e leggibile
- Esegui test su casi limite (array vuoti, overflow, indici out-of-range)

---

# Esempi di richieste veloci

- "Scrivi una funzione C99 che normalizza un valore int in [0,1], senza float"
- "Spiega questo warning di clang e proponi fix minimale"
- "Genera test per questa funzione che calcola mediana, includi casi dispari/pari"
- "Separa questo file in .h/.c mantenendo le firme"

---

# Debug assistito

- Fornisci messaggi di errore completi (compilatore o runtime)
- Invia solo la funzione o il file minimo riproducibile
- Chiedi spiegazioni passo-passo: cosa significa l'errore, dove guardare

Esempio di prompt per un `segmentation fault`:

```text
Ho un segmentation fault in questa funzione C. Ecco la funzione e l'input che lo causa.
Spiega la causa probabile e proponi una correzione minimale.
```

---

# Snippet per il debug

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

# Snippet: clamp e normalizza

```c
#include <stddef.h>

int clamp_int(int value, int min, int max) {
    if (min > max) {
        return value; // invalid bounds, return as-is
    }
    if (value < min) {
        return min;
    }
    if (value > max) {
        return max;
    }
    return value;
}

double normalize_int(int value, int min, int max) {
    if (min >= max) {
        return 0.0; // avoid divide-by-zero
    }

    int clamped = clamp_int(value, min, max);
    return (double)(clamped - min) / (double)(max - min);
}
```

- Usabile come esempio di output generato, con controlli minimi
- Valuta con l'assistente varianti senza double se richiesto

---

# Refactoring con AI

- Chiedi di rinominare funzioni/variabili mantenendo l'API
- Richiedi separazione in file `.c` e `.h` indicando le firme
- Domanda tipica: "Proponi un refactoring che migliori la leggibilità senza cambiare il comportamento"
- Verifica con diff ridotti e compilazione

---

# Documentazione e commenti

- Domanda tipica: "Aggiungi commenti essenziali e brevi a questo file"
- Mantieni commenti in inglese per il codice C del corso
- Evita commenti ridondanti; privilegia il perché rispetto al cosa

---

# Testing e validazione

- Genera casi di test piccoli e mirati (input validi e edge case)
- Automatizza dove possibile con script di build/test
- Confronta l'output atteso con quello osservato; condividi le differenze nell'IDE

---

# Ora 4 - Generazione C: I/O di base

```c
#include <stdio.h>

int read_int_safe(void) {
    int value = 0;
    if (scanf("%d", &value) != 1) {
        return 0; // fallback if input fails
    }
    return value;
}
```

- Esercizio: chiedi all'assistente di aggiungere controllo su range

---

# Ora 4 - Generazione C: ricerca lineare

```c
#include <stddef.h>

int find_value(const int *values, size_t count, int target) {
    if (values == NULL) {
        return -1; // invalid input
    }
    for (size_t i = 0; i < count; ++i) {
        if (values[i] == target) {
            return (int)i;
        }
    }
    return -1; // not found
}
```

- Prompt l'assistente per varianti con early exit

---

# Ora 4 - Generazione C: min/max in una passata

```c
#include <stddef.h>

int range_min_max(const int *values, size_t count, int *out_min, int *out_max) {
    if (values == NULL || out_min == NULL || out_max == NULL || count == 0) {
        return -1; // invalid input
    }
    int min_v = values[0];
    int max_v = values[0];
    for (size_t i = 1; i < count; ++i) {
        if (values[i] < min_v) min_v = values[i];
        if (values[i] > max_v) max_v = values[i];
    }
    *out_min = min_v;
    *out_max = max_v;
    return 0;
}
```

- Esercizio: chiedi test per array vuoti e valori ripetuti

---

# Ora 4 - Generazione C: strutture semplici

```c
#include <stddef.h>

typedef struct {
    const char *name;
    int value;
} Item;

int find_item(const Item *items, size_t count, const char *name) {
    if (items == NULL || name == NULL) {
        return -1;
    }
    for (size_t i = 0; i < count; ++i) {
        const char *n = items[i].name;
        if (n != NULL && n[0] == name[0]) {
            return (int)i; // naive match on first char
        }
    }
    return -1;
}
```

- Chiedi all'assistente di migliorare il confronto stringhe

---

# Ora 4 - Gestione errori

- Sempre controllare puntatori null
- Restituire codici di errore chiari (0, -1)
- Commentare i casi eccezionali in inglese

---

# Ora 5 - Warning comuni

- Implicit conversion: perdita di precisione
- Signed/unsigned mismatch in confronti
- Variabili non inizializzate

---

# Ora 5 - Debug: ordine di lettura

- Leggi l'errore intero, non solo la prima riga
- Identifica file e riga coinvolta
- Chiedi all'assistente spiegazione del warning esatto

---

# Ora 5 - Debug: schema di prompt

```text
Ho questo warning: ...
Ecco la funzione minima: ...
Che cosa significa e come correggerlo con minima modifica?
Restituisci solo la funzione corretta.
```

---

# Ora 5 - Esempio di correzione

```c
int divide(int num, int den) {
    if (den == 0) {
        return 0; // avoid divide-by-zero
    }
    return num / den;
}
```

- Prompt: chiedi all'assistente di gestire overflow e remainder

---

# Ora 5 - Tracciare gli input

- Riproduci il bug con un input minimo
- Aggiungi printf o log temporanei
- Rimuovi il logging dopo la fix

---

# Ora 5 - Domande utili da fare

- "Che cosa succede se den è zero?"
- "Ci sono indici fuori limite?"
- "Serve cast esplicito qui?"

---

# Ora 6 - Refactoring: obiettivi

- Leggibilità senza cambiare comportamento
- Ridurre duplicazione
- Separare interfaccia (.h) da implementazione (.c)

---

# Ora 6 - Separare header e sorgente

```c
// math_utils.h
#ifndef MATH_UTILS_H
#define MATH_UTILS_H

int clamp_int(int value, int min, int max);

#endif
```

```c
// math_utils.c
#include "math_utils.h"

int clamp_int(int value, int min, int max) {
    if (min > max) {
        return value;
    }
    if (value < min) return min;
    if (value > max) return max;
    return value;
}
```

- Chiedi all'assistente di creare test separati

---

# Ora 6 - Rinominare in sicurezza

- Chiedi una lista di nomi alternativi
- Sostituisci manualmente o con assistente
- Ricompila dopo ogni rinomina

---

# Ora 6 - Commenti essenziali

- Spiega il perché, non il cosa
- Mantieni commenti brevi in inglese
- Rimuovi commenti obsoleti dopo il refactoring

---

# Ora 6 - Esercizio

- Prendi la funzione `find_value`
- Chiedi all'assistente di estrarre controlli in funzione dedicata
- Verifica che il comportamento resti invariato

---

# Ora 7 - Test: checklist

- Casi nominali e casi limite
- Input null, array vuoti, indici oltre range
- Confronto output atteso vs ottenuto

---

# Ora 7 - Test manuali con assert

```c
#include <assert.h>

void test_find_value(void) {
    int data[] = {1, 2, 3};
    assert(find_value(data, 3, 2) == 1);
    assert(find_value(data, 3, 5) == -1);
}

int main(void) {
    test_find_value();
    return 0;
}
```

- Esegui e correggi se un assert fallisce

---

# Ora 7 - Test tabellari

- Prepara tabella input/output attesi
- Chiedi all'assistente di generare codice di test
- Verifica ogni riga della tabella

---

# Ora 7 - Gestione degli errori

- Testare percorsi negativi (null pointer, count zero)
- Verificare codici di ritorno coerenti
- Documentare cosa succede su input non valido

---

# Ora 7 - Valutare la copertura

- Non serve misurare numericamente, ma copri rami principali
- Usa input piccoli e riproducibili
- Aggiorna i test dopo refactoring

---

# Ora 7 - Esercizio

- Scrivi test per `range_min_max`
- Includi array con tutti valori uguali
- Confronta con una versione proposta dall'assistente

---

# Ora 8 - Workflow in team con AI

- Condividi prompt efficaci e risultati
- Definisci standard di stile e naming
- Fai review reciproca delle proposte AI

---

# Ora 8 - Senza Git: versioni

- Usa cartelle per versioni datate (es. src_2026-01-16)
- Mantieni un changelog testuale
- Salva patch generate dall'assistente per confronto

---

# Ora 8 - Pair programming con AI

- Scrivi tu la struttura, fai completare dettagli
- Chiedi spiegazioni brevi delle scelte
- Interrompi e riparti se l'output diventa rumoroso

---

# Ora 8 - Limiti di contesto

- L'assistente dimentica se il prompt è lungo
- Riassumi il file o incolla solo la parte rilevante
- Aggiorna il prompt quando cambi obiettivo

---

# Ora 8 - Esercizio di gruppo

- Dividi un problema in funzioni
- Assegna a ciascuno un prompt per generare la propria parte
- Integra e testa insieme in CLion

---

# Ora 8 - Checklist di revisione

- Codice compila?
- Input invalidi gestiti?
- Commenti essenziali e aggiornati?

---

# Ora 9 - Laboratorio guidato: passo 1

- Crea progetto C in CLion
- Aggiungi file `main.c`
- Verifica build senza codice (deve compilare)

---

# Ora 9 - Laboratorio: passo 2

- Implementa `read_int_safe`
- Chiedi all'assistente di generare test manuali
- Esegui e registra output

---

# Ora 9 - Laboratorio: passo 3

- Aggiungi `find_value` e test
- Indica all'assistente i casi limite che vuoi coprire
- Consolida in un file di test unico

---

# Ora 9 - Laboratorio: passo 4

- Refactoring: estrai header `math_utils.h`
- Verifica inclusioni e guardie multiple
- Ricompila dopo ogni spostamento

---

# Ora 9 - Laboratorio: passo 5

- Aggiungi log temporanei per un bug simulato
- Chiedi all'assistente di spiegare un warning generato ad hoc
- Rimuovi log dopo la fix

---

# Ora 9 - Laboratorio: passo 6

- Redigi una breve nota (README) con: funzioni, test eseguiti, problemi aperti
- Chiedi all'assistente di sintetizzare in 3 bullet
- Conserva note per l'ora 10

---

# Ora 10 - Preparazione al test

- Raccogli i prompt che hanno funzionato
- Prepara snippet riutilizzabili (I/O, test, clamp)
- Decidi tempo per generazione vs verifica

---

# Ora 10 - Regole d'uso dell'AI

- Puoi chiedere chiarimenti e snippet
- Devi verificare compilazione e correttezza
- Indica nelle note dove hai usato l'assistente

---

# Ora 10 - Strategia di tempo

- 10' lettura traccia e pianificazione
- 30' implementazione con piccoli test
- 20' verifica e pulizia

---

# Ora 10 - Rubrica di valutazione

- Corretta esecuzione dei requisiti
- Gestione input non validi
- Chiarezza di codice e commenti essenziali
- Uso controllato dell'AI (tracciato nelle note)

---

# Ora 10 - Esempio di nota finale

- "Ho usato l'assistente per generare skeleton di `find_value`"
- "Ho aggiunto io controlli su null e test"
- "Warning risolto: signed/unsigned mismatch"

---

# Ora 10 - Test finale (ore 9-10)

- Durata: 60 minuti (1h), individuale
- Consegna: repository o archivio con codice e breve README
- Valutazione: correttezza, chiarezza del codice, capacità di usare l'AI in modo controllato
- Suggerimento: preparare snippet e prompt riutilizzabili durante il corso

---

# FAQ - L'assistente sbaglia

- Prova un prompt più breve
- Chiedi di spiegare passo-passo
- Cambia vincoli (es. rimuovi malloc) e rigenera

---

# FAQ - Output troppo lungo

- Chiedi "solo codice"
- Specifica numero di righe o blocchi
- Separa la richiesta in due prompt

---

# FAQ - Codice non compila

- Incolla l'errore preciso nel prompt
- Chiedi una patch minima, non una riscrittura
- Verifica include e tipi mancanti

---

# Glossario della Lezione 2-3

- **Patch**: frammento di codice per correggere o migliorare
- **Edge case**: caso limite o condizione eccezionale
- **Refactoring**: ristrutturazione di codice mantenendo il comportamento
- **Assert**: controllo di condizione per verifica durante debug

---

# Riepilogo Lezioni 2-3

- Configurazione pratica di Copilot in CLion
- Strategie di verifica e testing
- Workflow di debug assistito
- Refactoring e separazione header/sorgente
- Laboratorio guidato passo-passo
- Test finale per consolidare apprendimento

---

# Risorse consigliate

- Documentazione CLion per C
- Linee guide Copilot per uso sicuro
- Esempi di prompt salvati durante il corso

---

# Suggerimenti finali

- Pochi prompt, mirati e brevi
- Compila spesso, testa casi limite
- Mantieni traccia di cosa hai accettato dall'assistente
