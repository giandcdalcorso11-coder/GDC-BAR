# Spillatrice: composizione meccanica ed elettronica

> Documento di progetto preliminare. Componenti e specifiche sono **indicativi** e vanno validati con fornitori e con un prototipo.

## 1. Schema di principio (una via)

```
 [Fusto] -- CO2/miscela --> [Riduttore] 
    |
 [Raccordo fusto] --> [Linea birra refrigerata] --> [Flussimetro] --> [Elettrovalvola] --> [Rubinetto]
                                                          |                 |
                                                     impulsi            comando
                                                          \               /
                                               [Controller] -- [Lettore NFC] -- [Display + LED]
                                                     |
                                                Rete (Ethernet PoE)
```

## 2. Parte meccanica / idraulica

| Componente | Funzione | Note |
|---|---|---|
| Fusto (keg) 20-30 L | Contiene la birra | Raccordo a seconda del tipo (es. tipo A/G/S) |
| Gas e riduttore | Spinge la birra (CO2 o miscela) | Pressione regolata per birra e temperatura |
| Linea birra alimentare | Trasporto della birra | Materiali per uso alimentare, il più corta possibile |
| Raffreddamento | Mantiene 2-4 °C in linea | Cella frigo con colonna raffreddata, oppure glicole |
| Flussimetro | Misura i volumi | Deve essere adatto al liquido e, se serve per il prezzo, omologato (vedi normativa) |
| Elettrovalvola alimentare | Apre/chiude il flusso | Normalmente chiusa (si apre solo se abilitata), tempo di chiusura rapido per limitare l'errore di misura |
| Rubinetto | Erogazione | Preferibile un rubinetto compensatore; lo scarico delle gocce va previsto |
| Vaschetta gocciolatoio | Raccoglie perdite | Con sensore di troppo pieno opzionale |
| Sensore presenza bicchiere | Evita erogazioni a vuoto | Opzionale (IR / capacitivo) |
| Sensore livello fusto | Segnala fusto quasi vuoto | Sensore di schiuma/vuoto sulla linea, oppure conteggio dei litri erogati (il software lo calcola già) |
| Sanificazione | Cicli di lavaggio | Connettore per lavaggio automatico, con tracciamento nel software |

**Schiuma:** la schiuma passa dal flussimetro e viene contata come volume. Si mitiga con una buona regolazione di temperatura e pressione e con un rubinetto adatto; può servire un fattore di correzione (da misurare sul prototipo).

## 3. Parte elettronica

| Componente | Funzione | Opzioni indicative |
|---|---|---|
| Controller di via | Logica locale | Microcontrollore con Ethernet (es. ESP32 con PoE) oppure mini computer (es. Raspberry Pi) |
| Lettore NFC | Legge il braccialetto | Modulo NFC 13,56 MHz (es. basato su PN532 o ST25R); tag con cifratura (es. MIFARE DESFire / NTAG 424) |
| Display | Interfaccia cliente | 7" 800×480 oppure display più piccolo, vedi `ui/spillatrice.html` |
| LED di stato | Feedback a distanza | Verde (pronto), ambra (sta erogando), rosso (errore/bloccato) |
| Driver della valvola | Comanda l'elettrovalvola | Relè o MOSFET con protezione, alimentazione 12/24 V |
| Alimentazione | | PoE per il controller, alimentatore dedicato per le valvole |
| Pulsante/leva | Richiesta di erogazione | Apertura valvola solo se autorizzata |
| Memoria locale | Funzionamento offline | Coda degli eventi non inviati |

## 4. Logica di sicurezza (a livello hardware)
- Valvola **normalmente chiusa**: senza alimentazione non eroga.
- **Timeout** di sicurezza: se la spillata dura oltre X minuti o oltre Y litri senza nuovo contatto, la valvola si chiude e l'evento viene segnalato.
- **Erogazione massima per singola spillata** (es. 1 L, parametro).
- **Fine spillata anche per assenza di bicchiere** (se c'è il sensore) o per mancata lettura entro il tempo.
- Misure di flusso senza valvola aperta (gocciolamento/perdita) generano un allarme.

## 5. Gestione dei casi limite
| Caso | Comportamento |
|---|---|
| Rete assente | La via continua con una lista locale dei braccialetti attivi, registra gli eventi e li sincronizza al ritorno della rete |
| Braccialetto bloccato | Nessuna apertura; messaggio al cliente |
| Due clienti vicini | Una sola sessione attiva per via; la seconda richiesta attende |
| Cliente lascia il bicchiere | Chiusura per timeout |
| Fusto finito | Via in "fuori servizio" automatica |

## 6. Dimensionamento per l'isola (indicativo)
- 8-16 vie, un controller per via (o un controller per gruppo di vie).
- Cella frigo dietro l'isola con fusti e gas.
- Switch PoE e un piccolo server locale (può coincidere con il PC di cassa).
