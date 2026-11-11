# Guida: consulenza sul brevetto (e sulla proprietà industriale)

> Ricerca web del 11/11/2026, non consulenza legale. Tariffe e bandi cambiano: i dati vanno verificati. **[F]** = riportato da una fonte; **[D]** = deduzione mia; **[?]** = non trovato.

## 1. Premessa onesta
Dalla ricerca (`08-fattibilita-leggi-e-brevetti.md`) l'idea di base (identificazione RFID + misuratore + valvola) è **già nota** in brevetti americani ed europei, alcuni scaduti e altri da verificare. Quindi la prima domanda al professionista non è "come brevetto l'idea?" ma:

1. **Esiste una parte tecnica nuova** nel nostro kit (non nell'idea in sé) che possa essere brevettata?
2. **Possiamo realizzare il kit senza violare diritti di altri** (libertà di operare)?
3. Se non c'è nulla di brevettabile, **come proteggiamo il valore**: marchio, software, know-how, velocità di esecuzione e rapporti con i bar?

Mettere in conto che il risultato potrebbe essere "il brevetto non conviene, il marchio e il know-how sì". È comunque un buon risultato: evita di spendere cifre importanti su un titolo debole.

## 2. Chi contattare

### 2.1 Il professionista giusto
| Figura | A cosa serve | Note |
|---|---|---|
| **Consulente in proprietà industriale (sezione brevetti)** | Ricerca di anteriorità, valutazione di brevettabilità, redazione e deposito della domanda, strategia, estensione estera | Iscritto all'Albo; la rappresentanza davanti all'UIBM è riservata agli iscritti all'Albo e agli avvocati [F: [Filodiritto, CPI art. 202](https://www.filodiritto.com/codici/codice-della-proprieta-industriale/capo-vi-ordinamento-professionale/art-202)]. Chi è iscritto a una sola sezione usa il titolo "consulente in brevetti" o "in marchi" [F: [Brocardi](https://brocardi.it/codice-della-proprieta-industriale/capo-vi/art202.html)] |
| **Avvocato (proprietà intellettuale / franchising)** | Contratti con i bar, NDA, franchising (L. 129/2004), contenzioso, alcol (vedi punti 1 e 2 di `08`) | Può anche rappresentare davanti all'UIBM [F] |
| **Commercialista** | Forma societaria, startup innovativa, agevolazioni | Serve prima di richiedere contributi |

Per ora il primo contatto è il **consulente in brevetti**, con competenze di meccanica/elettronica/software e, se possibile, esperienza su dispositivi per bevande o IoT.

### 2.2 Dove trovarlo
- **Albo dei consulenti in proprietà industriale**: pubblicato dal Ministero/UIBM; l'Ordine è nazionale, senza sezioni regionali [F: [Certifico](https://www.certifico.com/news/albo-consulenti-in-proprieta-industriale-abilitati), [Unive](https://www.unive.it/data/7430/?cod=145)]. **Verifica sempre l'iscrizione** prima di firmare.
- **Camera di Commercio Chieti-Pescara, Ufficio Brevetti** (sede di Chieti Scalo): offriva un Punto di informazione brevettuale con servizio gratuito di orientamento [F: [CCIAA Chieti](https://www.ch.camcom.it/PDF/L-ESPERTO-RISPONDE--P-I-P--Punto-di-informazione-brevettuale_230.htm)]. Le pagine sono **datate (2010-2017)**: telefona per confermare cosa è attivo oggi. Alcune Camere di altre province offrono un primo orientamento gratuito con un consulente [F: Firenze]; **non ho trovato lo stesso per Pescara**.
- **Confindustria Abruzzo Medio Adriatico**: ha ospitato eventi sui brevetti a Pescara; può dare nominativi [F: [comunicato roadshow](https://www.confindustriasi.it/wp-content/uploads/2025/09/20250923_Comunicato_Stampa_BREVETTI_ROADSHOW.pdf)].
- **Non ho trovato studi di consulenza brevetti con sede a Pescara** nei risultati. Gli studi si lavorano comunque anche a distanza: puoi sentire anche studi di Bologna, Milano o Roma. Se vuoi, nel prossimo passo faccio una ricerca di candidati (nomi, specializzazione) senza raccomandarli.

### 2.3 Quanti ne sentire
**Tre** per un primo confronto: uno vicino a te, uno grande con esperienza su dispositivi, uno specializzato in startup. Chiedi a tutti lo stesso materiale e confronta le risposte, non solo il prezzo.

## 3. Prerequisiti (da fare prima di parlare)

### 3.1 Non divulgare
- La novità si valuta rispetto a **tutto ciò che è accessibile al pubblico, in Italia o all'estero, prima del deposito**; anche una conferenza, un catalogo o una pubblicazione possono farla perdere [F: [UIBM](https://uibm.mise.gov.it/index.php/it/brevetti/brevetto-per-invenzione-industriale/requisiti-di-brevettabilita)].
- **Non ho trovato una fonte sul periodo di grazia** per divulgazioni precedenti il deposito [?]: non contarci. Il repository su GitHub è privato? Se è pubblico o condiviso, va controllato subito.
- Il consulente è vincolato al **segreto professionale** (art. 206 CPI) [F: [guida CCIAA Emilia-Romagna](https://www.ucer.camcom.it/progetto-network/aree-gruppi/brevetti-e-marchi/guida-brevetto-invenzione-uffici-brevetti-1/@@download/file)]. Per terzi (bar, fornitori, sviluppatori, investitori) serve un **NDA firmato prima** [F: presentazione Jacobacci].
- Il pitch deck, i prototipi e i documenti nel repository **non vanno mostrati a nessuno** prima della decisione sulla strategia di protezione.

### 3.2 Preparare la "scheda dell'invenzione"
Un documento di 2-4 pagine, senza gergo di marketing:
1. **Problema tecnico** che il kit risolve (non "fare self-service", ma ad esempio: misurare con precisione, evitare erogazioni abusive, funzionare offline, applicarsi a spine esistenti senza modificarle).
2. **Soluzione**: componenti, come sono collegati, sequenza di funzionamento (tre schemi bastano: `06-progetto-spillatrice.md`, `img/spillatrice-schema.svg`).
3. **Cosa pensi sia diverso** rispetto a ciò che esiste (anche se sei insicuro: sarà il consulente a giudicare).
4. **Varianti** possibili (flussimetri diversi, tag diversi, kit retrofit o rubinetto sostitutivo).
5. **Stato di sviluppo**: solo idea, nessun prototipo, nessuna prova.
6. **Cronologia delle divulgazioni**: a chi hai già mostrato cosa e quando (anche solo a parole).

### 3.3 Fare una prima ricerca per conto tuo
- **Espacenet** (gratuito, copertura internazionale; ricerca per parole chiave limitata al titolo) e **Google Patents** (testo completo, ma limitato a documenti USA e alcuni altri) [F: [CCIAA Bologna](https://www.bo.camcom.gov.it/it/node/1240)].
- Classificazione utile: **CPC B67D 1/00** (erogazione di bevande) e sottogruppi su valvole e contenitori in pressione [F: [USPTO](https://www.uspto.gov/web/patents/classification/cpc/pdf/defB67D.pdf)].
- Parti dai documenti già elencati in `08` e annota i **10 più vicini**, con una frase su cosa dicono. Non sostituisce una ricerca professionale, ma abbassa i costi.

### 3.4 Chiarire titolarità e persone
- **Chi sono gli inventori?** Solo tu? Chi ha contribuito alle idee tecniche (anche me/uno strumento software non è inventore: lo è chi ha concepito l'idea; da chiedere al consulente come trattare il contributo di strumenti di IA).
- **Chi sarà il titolare del brevetto**: tu come persona o una società? Il passaggio successivo costa e complica. Chiedi al commercialista se conviene costituire prima una società.
- Se qualcuno (sviluppatore, partner, socio) lavorerà su kit o software, servono **contratti di cessione dei diritti** fin dall'inizio.

### 3.5 Obiettivo e budget
Decidi prima: vuoi proteggere solo l'Italia o anche l'estero? Quanto puoi spendere e in quanto tempo? Un numero indicativo aiuta il consulente a proporre una strategia realistica.

## 4. Percorso consigliato, passo per passo

| Passo | Cosa | Output | Tempi |
|---|---|---|---|
| 0 | Stop alle divulgazioni, scheda invenzione, ricerca preliminare personale | Scheda + 10 documenti vicini | 1-2 settimane |
| 1 | Primi contatti con 3 consulenti (chiedi se la prima call è gratuita) | Preventivi scritti | 1-2 settimane |
| 2 | Scelta del consulente, lettera d'incarico, NDA | Incarico firmato | pochi giorni |
| 3 | **Ricerca di anteriorità + parere di brevettabilità** + prima valutazione di libertà di operare | Relazione scritta | da definire con il consulente |
| 4 | **Decisione di strategia**: brevetto, modello di utilità, solo marchio/know-how | Decisione scritta | |
| 5 | Se brevetto: redazione e deposito (domanda italiana) | Domanda depositata, data di deposito | |
| 6 | **Marchio**: ricerca di anteriorità e deposito, in parallelo | Domanda di marchio | |
| 7 | Entro 12 mesi dal primo deposito: decidere estensione all'estero (priorità) [F: UIBM] | Strategia estera | |

**Dettagli procedurali [F: [UIBM](https://uibm.mise.gov.it/index.php/it/brevetti/brevetto-per-invenzione-industriale/requisiti-di-brevettabilita)]:** requisiti di validità: novità, attività inventiva, industrialità; ricerca e parere sul deposito italiano svolti dall'EPO; priorità di 12 mesi; durata 20 anni dal deposito; deposito telematico a 50 € (tariffe da verificare).

## 5. Costi indicativi (da verificare con preventivi)
| Voce | Stima | Fonte |
|---|---|---|
| Consulenza iniziale + ricerca di anteriorità | 500-2.500 € + IVA | Un solo studio legale [F: [Dequo](https://www.dequo.it/articoli/avvocato-proprieta-intellettuale)]: **non è una tariffa standard** |
| Brevetto italiano, completo di redazione | 4.000-12.000 € + IVA | Stessa fonte |
| Marchio nazionale | 1.500-4.500 € + IVA | Stessa fonte |
| Tasse UIBM deposito telematico | 50 € (più eventuali extra per rivendicazioni e traduzioni) | [UIBM](https://uibm.mise.gov.it/index.php/it/tasse-e-tariffe/costi-brevetti-per-invenzione-industriali) |
| Estensione all'estero | Non ho trovato dati; di norma è la voce più alta | [?] |

Se non concordi il compenso per iscritto, si applicano i parametri del regolamento 2024 in vigore dal 1° gennaio 2025 [F: [certifico](https://www.certifico.com/id/18997)]: quindi **fai sempre un preventivo scritto**.

## 6. Contributi: Brevetti+ 2026
- Bando gestito da Invitalia, con 20 milioni su 32 per le tre misure (Brevetti+, Marchi+, Disegni+); **domande dal 25 novembre 2026 (ore 12:00)** a sportello fino a esaurimento fondi [F: [ecnews](https://www.ecnews.it/fiscale/?p=156258), [Informazione Fiscale](https://www.informazionefiscale.it/Brevetti-Disegni-Marchi-bando-2026-incentivi-mimit)]. **L'edizione 2025 si è chiusa in anticipo per esaurimento fondi** [F].
- Contributi a fondo perduto da 6.000 a 140.000 € per servizi specialistici di valorizzazione del brevetto; intensità fino all'85% per imprese con certificazione di parità di genere [F].
- Beneficiari: **PMI** (anche di nuova costituzione) con sede in Italia, **titolari di brevetti o domande che rispettino requisiti** (tra questi, un rapporto di ricerca con esito non negativo) [F: ecnews].
- **Cosa significa per noi [D]:** serve già una società e un brevetto/domanda con rapporto di ricerca. Con la finestra che apre fra pochi giorni **non è realistico**. Teniamolo come obiettivo per un'eventuale edizione successiva, e chiediamo al consulente e al commercialista di tenerne conto nella strategia. Le fonti discordano su alcune date: verifica su Invitalia/MIMIT.

## 7. Cosa chiedere al consulente
**Sull'invenzione**
1. Alla luce dei brevetti che ti mostro, c'è un aspetto tecnico del kit che può essere brevettato? Con quali probabilità e su quali rivendicazioni?
2. Esiste il rischio che il kit violi brevetti in vigore in Italia/UE? Come si fa la ricerca di libertà di operare e quanto costa?
3. Brevetto o modello di utilità: differenze per il nostro caso?
4. Come tratta il contributo di software e di strumenti di IA nello sviluppo dell'idea (inventore e titolarità)?

**Sulla strategia**
5. Se il brevetto è debole, come tuteli il valore: marchio, know-how, segreto, contratti? (Il franchising richiede un marchio registrato e know-how [F: studio Cataldi]).
6. Cosa depositare per primo, e in quale ordine rispetto agli incontri con i bar?
7. Quando servono gli NDA e quale formula consigli?
8. Conviene estendere all'estero e quando decidere (12 mesi)?

**Sul rapporto di lavoro**
9. Preventivo scritto: cosa include? Ricerca, redazione, deposito, risposte agli esami, traduzioni? Costi annuali di mantenimento?
10. Chi seguirà il lavoro? Esperienza con dispositivi per bevande/IoT/software?
11. **Conflitti di interesse:** rappresenta o ha rappresentato iPourIt, PourMyBeer, Micro Matic o altri fornitori di impianti?
12. Tempi per ciascuna fase e modalità di aggiornamento.
13. Assicurazione professionale e riservatezza (art. 206 CPI) [F].

## 8. Segnali di allarme
- Promette "brevetto garantito" o non parla di rischi e anteriorità.
- Non vuole fare una ricerca prima di depositare.
- Non mostra l'iscrizione all'Albo.
- Rifiuta preventivi scritti o li lascia vaghi.
- Propone di depositare subito all'estero senza avere guardato l'Italia/UE.
- Ti chiede di divulgare il progetto a terzi senza NDA.

## 9. Prossime azioni concrete
1. **Subito:** nessuna condivisione di documenti, deck e prototipi con esterni. Controllare se il repository e le cartelle condivise sono privati.
2. **Questa settimana:** scheda dell'invenzione (posso prepararla con te) e lista dei 10 documenti più vicini.
3. **Entro 2 settimane:** contattare la Camera di Commercio Chieti-Pescara (Ufficio Brevetti), Confindustria Abruzzo Medio Adriatico e almeno due consulenti.
4. **In parallelo:** avviare con un avvocato la questione NDA/contratti e le domande di `08`.
5. **Decisione:** dopo la relazione di brevettabilità e libertà di operare, scegliere la strategia.
