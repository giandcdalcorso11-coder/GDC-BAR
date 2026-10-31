# Progetto della spillatrice (livello teorico)

> Stato: **progetto preliminare**. I valori sono ordini di grandezza da confermare con fornitori, un frigorista/impiantista e un prototipo. Prezzi nella distinta (`distinta-materiali.xlsx`) = stime indicative, non preventivi.

Figure: `img/spillatrice-schema.svg` (idraulica, gas, segnali) e `img/spillatrice-modulo.svg` (vista laterale con quote).

## 1. Requisiti di progetto

| # | Requisito | Valore di partenza |
|---|---|---|
| R1 | Erogazione per bicchiere da 0,3-1 L | Portata utile 2-4 L/min, picco 5 L/min |
| R2 | Errore di misura sul totale spillata | Obiettivo **≤ ±2 %** sul litro (da verificare vs. normativa metrica, vedi §8) |
| R3 | Sicurezza di default | Valvola normalmente chiusa; chiude da sola in caso di errore |
| R4 | Birra servita a temperatura corretta | 3-6 °C all'uscita del becco |
| R5 | Utilizzo da persone non addestrate | Un solo gesto: avvicinare il braccialetto, spillare, riavvicinare |
| R6 | Igiene | Materiali alimentari, lavabile a ricircolo, tracciabilità dei lavaggi |
| R7 | Continuità di servizio | Funziona anche senza Internet; guasto di una via non ferma le altre |
| R8 | Modularità | Stessa elettronica per colonna da isola e per modulo da tavolo |
| R9 | Manutenzione | Componenti a contatto con la birra sostituibili in meno di 15 minuti |

## 2. Architettura generale

Un impianto è composto da tre blocchi collegati da linee birra:

1. **Zona fredda (retro):** cella frigo con fusti, gas, valvole di gruppo.
2. **Colonna di erogazione (sala):** raffreddamento della linea, flussimetro, elettrovalvola, rubinetto, display, NFC.
3. **Sistema di controllo:** un controller per via, rete PoE, server nel bar.

Scelta di partenza: **fusti in cella, colonne in sala** (layout isola). Per il layout a tavolo vedi §7.

## 3. Circuito birra (idraulica)

**Percorso:** fusto → coupler → valvola di gruppo → linea alimentare → raffreddamento → flussimetro → elettrovalvola → rubinetto.

### 3.1 Fusto e gas
- Fusti metallici da 20 o 30 L con coupler adeguato al sistema del birrificio (i sistemi di attacco sono diversi: serve verificarli con i fornitori).
- **Alternativa:** fusti monouso a sacca (tipo "KeyKeg") spinti con aria/azoto: niente contatto birra-gas e minor consumo di CO₂, ma costo per litro maggiore.
- Gas: CO₂ (o miscela CO₂/azoto per stout). **Riduttore per via** o per gruppo di vie, con manometro e valvola di sicurezza. Pressione tipica nell'ordine di **1-2 bar**, ma va calcolata per birra e temperatura (tabella carbonazione).
- **Sicurezza CO₂:** nella cella frigo serve un **rilevatore di CO₂** con allarme: il gas è asfissiante in ambienti chiusi.

### 3.2 Linea birra e bilanciamento
La pressione del gas deve bilanciare:

> P_gas ≈ resistenza_linea × lunghezza + dislivello × 0,1 bar/m + pressione residua al becco

- Tubo alimentare con barriera all'ossigeno, diametro interno orientativo 5/16"-3/8" (8-10 mm).
- Se la linea è troppo corta o troppo larga la birra esce troppo veloce e fa schiuma: si aggiunge una **sezione di resistenza** (tratto di tubo più stretto) oppure si usa un **rubinetto compensatore** (regolazione della portata).
- Obiettivo: portata di 2-3 L/min con poca schiuma.

### 3.3 Raffreddamento
| Soluzione | Quando ha senso |
|---|---|
| **Cella frigo con colonna raffreddata** | Isola: linee brevi, fusti vicini |
| **"Python" a glicole** (fascio tubi con acqua/glicole raffreddato) | Fusti lontani dalla sala, linee lunghe |
| Raffreddatore ad acqua ghiacciata o a piastre | Piccoli impianti |

Parametro chiave: **birra a 3-6 °C all'uscita**. Una sonda di temperatura in colonna segnala le deviazioni al gestionale.

### 3.4 Flussimetro (componente critico)
La misura del volume è il cuore del modello di business.

| Tecnologia | Pro | Contro | Uso |
|---|---|---|---|
| **Turbina / ruota a effetto Hall** (tipo sensori per bevande) | Economica, già diffusa nelle spillatrici, buon segnale | Sensibile a bolle e schiuma; va calibrata | **Prototipo** |
| **Ingranaggi ovali (volumetrico)** | Molto preciso anche con liquidi viscosi | Più caro, più perdite di carico, pulizia | Candidato alla versione finale |
| **Elettromagnetico** | Nessuna parte mobile | Costo alto; la birra deve essere conduttiva (lo è); bolle d'aria disturbano | Opzione premium |
| **Ultrasuoni** | Nessuna parte mobile | Costo, sensibile alle bolle | Da valutare |

Raccomandazione: **prototipare con turbina Hall**, misurare l'errore con bilancia di precisione su 100 prove, poi confrontare con un misuratore volumetrico. Se il prezzo deve essere legalmente vincolante, il misuratore deve essere **conforme alla normativa metrologica** (§8): potrebbe cambiare la scelta.

Calcolo base: con un sensore da ~500 impulsi/litro, 1 impulso ≈ 2 mL. Il controller conta gli impulsi con interrupt; il fattore (impulsi/L) si **calibra** per ogni sensore.

### 3.5 Elettrovalvola
- **Normalmente chiusa**, 24 V DC, corpo in acciaio inox o plastica alimentare, guarnizioni EPDM/FKM.
- Diametro passaggio 8-10 mm, tempo di chiusura **< 50 ms**.
- **Errore dovuto alla chiusura:** a 4 L/min (0,067 L/s) un ritardo di 30 ms lascia passare ≈ 2 mL. Va compensato nel software (la valvola si chiude *prima* del limite).
- **Colpo d'ariete:** si attenua con tratto elastico a monte e chiusura graduale se serve.
- **Sicurezza ridondante:** valvola di gruppo (stesso comando) a monte, così se la valvola di via resta aperta il software chiude il gruppo.

### 3.6 Rubinetto e becco
- Rubinetto in acciaio inox con **regolazione portata** e uscita antischiuma; **becco lungo** per versare lungo la parete del bicchiere.
- Un **tappo di lavaggio** si innesta al becco per i cicli di pulizia.
- **Sensore bicchiere** (ToF o IR) sotto il becco: consente l'erogazione solo con bicchiere presente.

## 4. Elettronica e controllo

### 4.1 Elenco funzionale per via
| Blocco | Componente indicativo | Segnali |
|---|---|---|
| Controller | Microcontrollore con Ethernet/PoE (famiglia ESP32) oppure mini PC (Raspberry Pi) | 3,3 V |
| NFC | Modulo 13,56 MHz con cifratura (PN532/ST25R); tag MIFARE DESFire o NTAG 424 | SPI/I²C |
| Display | 7" 800×480 (o 4,3") | HDMI/SPI |
| LED | Striscia RGB | PWM |
| Flussimetro | Uscita a impulsi | Ingresso interrupt |
| Valvola | Driver MOSFET/relè + diodo di ricircolo | 24 V |
| Sensore bicchiere | ToF/IR | I²C/analogico |
| Sonda temperatura | NTC/DS18B20 | 1-Wire |
| Alimentazione | PoE per controller, alimentatore 24 V per valvole | |
| Pulsante/leva | Micro-interruttore | Ingresso |

### 4.2 Sequenza di una spillata (hardware)
1. Il lettore NFC rileva il braccialetto → il controller chiede l'autorizzazione al server (o usa la lista locale se offline).
2. Se autorizzato: LED verde, display "Pronto". Valvola ancora chiusa.
3. Il cliente appoggia il bicchiere e preme la leva → **valvola si apre**.
4. Si contano gli impulsi; il display mostra i litri.
5. Fine per: nuovo tap del braccialetto, rilascio della leva oltre il tempo limite, bicchiere rimosso, timeout o limite per spillata.
6. **Valvola si chiude**, il controller calcola i mL, aggiunge la correzione, invia l'evento.

### 4.3 Sicurezze
- **Watchdog:** se il controller si blocca, la valvola torna chiusa (NC).
- **Limite per spillata** (es. 1 L) e **durata massima** (es. 90 s).
- **Perdita:** impulsi del flussimetro con valvola chiusa → allarme e chiusura valvola di gruppo.
- **Tamper:** microinterruttore sul vano tecnico.
- Tensioni basse (24 V DC) nella colonna; l'unica 230 V sta nell'alimentatore protetto.

## 5. Meccanica della colonna

Dimensioni orientative (vedi `img/spillatrice-modulo.svg`):

| Elemento | Quota da terra |
|---|---|
| Piano di appoggio con griglia/vaschetta | 950 mm |
| Becco | 1200 mm (≈ 250 mm liberi sotto, per un bicchiere da 0,5-1 L) |
| Zona NFC | 1300 mm |
| Display | 1400 mm (inclinato 15-25°) |
| Sommità colonna / LED di stato | 1500-1550 mm |

- **Larghezza per via** 250-300 mm; isola da 8 vie ≈ 2,4 m.
- **Struttura:** acciaio inox AISI 304 (316 nelle zone umide) con pannello frontale rimovibile.
- **Vano tecnico** separato dall'idraulica, con aperture per cavi e guarnizioni (grado IP minimo IP54 sul frontale; display e NFC protetti da schizzi).
- **Vaschetta di scarico** con griglia, collegata allo scarico; pavimento antiscivolo.
- Accesso frontale agli sganci rapidi dei tubi per sostituire flussimetro e valvola senza smontare la colonna.
- **Estetica:** coperture in legno/metallo a tema, tap-handle personalizzate per birra.

## 6. Cella frigo e impianto

| Elemento | Note |
|---|---|
| Cella | Pannelli modulari, ≈ 2×2 m per 8-16 fusti (da dimensionare) |
| Gruppo frigorifero | Dimensionato sul carico termico (fusti + passaggi di linea) |
| Mensole per fusti | Con **sensore di peso** opzionale per sapere il residuo |
| Gas | Bombole fuori dalla cella o in vano dedicato, fissate, con riduttori accessibili |
| Allarme CO₂ | Obbligatorio nel progetto di sicurezza |
| Passaggi parete | Foro per fascio di tubi isolato |
| Scarico | Pavimento con pendenza o sifone |

## 7. Variante: modulo da tavolo (fase 2)
Un modulo compatto con:
- fusto da 5-10 L o sacca in vano refrigerato nel tavolo,
- rubinetto, flussimetro, valvola e NFC integrati,
- elettronica identica, collegata via Ethernet o Wi-Fi.

Criticità: spazio per raffreddare i fusti, pulizia, rumore del compressore, costo per tavolo. Si decide dopo il test dell'isola.

## 8. Normativa di misura (da verificare)
Se il prezzo dipende da un volume misurato dallo strumento, in Italia/UE il misuratore potrebbe dover essere **omologato e sottoposto a verifica periodica** (normativa sugli strumenti di misura). Da chiarire con un ente competente:
- quali misuratori sono ammessi per erogazione di bevande,
- se serve un sigillo/piombatura e quale verifica periodica,
- se il metodo di calcolo sul totale in cassa è accettabile.

Finché non è chiarito, il prototipo va considerato uno strumento sperimentale.

## 9. Pulizia e manutenzione
| Operazione | Frequenza orientativa |
|---|---|
| Lavaggio linee a ricircolo (detergente alcalino) | Ogni 7-14 giorni, o a ogni cambio birra |
| Sanificazione e risciacquo | Dopo ogni lavaggio |
| Pulizia becco e vaschetta | A fine serata |
| Controllo guarnizioni e taratura flussimetro | Ogni 3-6 mesi |
| Controllo pressioni e perdite | Settimanale |

Il software **registra** ogni lavaggio (chi, quando, tipo) e può **bloccare** la via se il lavaggio è scaduto.

## 10. Piano di prova del prototipo
1. **Banco idraulico:** una via con acqua, poi birra; misura di portata e schiuma.
2. **Taratura flussimetro:** 100 spillate con bilancia; calcolo di errore medio e dispersione.
3. **Test valvola:** tempo di chiusura, errore per colpo d'ariete.
4. **Test NFC:** letture a diverse distanze, tag diversi, mano bagnata.
5. **Test di stress:** 1000 cicli di apertura e chiusura, nessuna perdita.
6. **Test offline:** scollegare la rete e verificare coda e sincronizzazione.
7. **Prova di pulizia:** ciclo completo di lavaggio e verifica residui.
8. **Prova utente:** 10-20 persone senza istruzioni, osservando difficoltà.

Criteri di accettazione: errore ≤ ±2 %, nessuna perdita, spillata completata in < 15 s per 0,5 L, 95 % delle persone completano il ciclo senza aiuto.

## 11. Rischi tecnici
| Rischio | Mitigazione |
|---|---|
| Schiuma falsa la misura | Taratura, rubinetto compensatore, fattore correttivo, prove |
| Flussimetro non omologato | Individuare presto un modello conforme e testarlo |
| Valvola si blocca aperta | Valvola di gruppo ridondante, allarme da perdita |
| Bicchieri sporchi o bagnati sull'NFC | Zona NFC separata dal becco, protezioni |
| Costo per via troppo alto | Elettronica unica, moduli comuni, prezzi a volume |
| Contaminazione di linea | Procedure di lavaggio e tracciamento |

## 12. Prossimi passi tecnici
1. Scegliere 2-3 flussimetri da confrontare e richiedere preventivi.
2. Contattare un frigorista per dimensionare cella e raffreddamento.
3. Costruire un **banco di prova** a una via.
4. Scrivere il firmware di base (macchina a stati in `04-software-architettura.md`).
5. Aggiornare la distinta con prezzi reali.
