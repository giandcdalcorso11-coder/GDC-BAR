# Titolarità, contributi e posizione del fondatore

> Ricerca web del 11/11/2026, **non consulenza legale**. Le pagine ufficiali della Difesa (circolare 2016 sulle invenzioni dei dipendenti, FAQ sulle attività extraprofessionali) **non erano leggibili da questo ambiente**: sono riassunte solo da snippet di ricerca. **[F]** = riportato da una fonte; **[D]** = deduzione mia; **[?]** = non trovato.

## 1. "L'ho inventato io" contro "è mio": tre domande diverse

| Domanda | Significa | Come si risponde | Serve una ricerca? |
|---|---|---|---|
| **Chi l'ha concepito?** (inventore/autore) | Chi ha avuto l'idea tecnica o creativa | Con la ricostruzione dei fatti: cosa hai pensato, quando, con chi | **No**: la sai tu e si documenta |
| **È nuovo?** (novità e attività inventiva) | Nessuno l'ha già reso pubblico, in Italia o all'estero; per un tecnico del settore non è ovvio [F: [UIBM](https://uibm.mise.gov.it/index.php/it/brevetti/brevetto-per-invenzione-industriale/requisiti-di-brevettabilita)] | Solo con ricerca di anteriorità | **Sì**: non puoi dirlo tu, e non posso dirlo io |
| **A chi appartiene?** (titolarità) | Chi ha il diritto di depositare e sfruttare | Per legge e per contratto (dipendente? società? uso di mezzi altrui?) | **No**, ma serve un legale |

Quindi non devi dire "è nuovo". Devi solo dichiarare **cosa hai pensato e quando**, e lasciare al consulente stabilire novità e brevettabilità. La distinzione per te è questa: **"l'ho concepito io"** è un fatto che puoi documentare; **"è mio"** dipende anche dalla tua posizione di militare (vedi §4).

## 2. Registro dei contributi (bozza, da confermare)
Ricostruito dalla nostra conversazione. Serve per essere onesti con il consulente su cosa viene da te e cosa è stato suggerito.

| Data | Elemento | Origine | Nota |
|---|---|---|---|
| 31/10/2026 | Birreria con spillatrici in self-service, senza bancone e senza barista | **Tua** | Concept commerciale |
| 31/10/2026 | Prezzo calcolato sui litri erogati, espresso in €/litro, con spillatrici elettroniche | **Tua** | Probabilmente già noto altrove (vedi `08`) |
| 31/10/2026 | Due layout: tavolo lungo con spillatrici o spillatrice per tavolo | **Tua** | |
| 31/10/2026 | Attivazione con tag NFC/tessera tipo hotel avvicinata alla spillatrice; riavvicinata per chiudere | **Tua** | Meccanismo simile a sistemi noti |
| 31/10/2026 | Nessun limite di spillate; conto pagato solo in cassa a fine serata | **Tua** | Rispetto ai sistemi noti (pre-pagati e con limiti) può essere un tratto distintivo: da valutare |
| 31/10/2026 | Interfaccia del gestionale e dello schermo della spillatrice | Tua richiesta, **bozza dell'assistente** | Prototipi in `ui/` |
| 31/10/2026 | Braccialetto invece di tessera, preautorizzazione, litri visibili e importo a richiesta, avvisi e blocco da remoto, funzionamento offline, cella frigo, valvola di gruppo, schema tecnico | **Suggeriti dall'assistente** | Soluzioni in gran parte standard del settore |
| 11/11/2026 | Kit da applicare a spillatrici già in uso con firmware e gestionale | **Tua** | Idea retrofit già esistente sul mercato (vedi `08`) |
| 11/11/2026 | Obiettivo di vendere il **format** ai bar, partendo da Pescara | **Tua** | Strategia commerciale |
| 11/11/2026 | Proposta di tre livelli (erogazione standard, kit, software) | Assistente | Architettura generica |

**Lettura onesta [D]:** il contributo tuo è soprattutto **concept e modello commerciale**; la parte tecnica è in gran parte combinazione di soluzioni note. Questo non toglie valore al progetto, ma riduce la probabilità di un brevetto forte. Sull'uso di strumenti di IA, in ambito europeo ha avuto grande eco il principio che l'**inventore deve essere una persona fisica** (caso DABUS all'EPO): **[D]** da confermare con il consulente per l'Italia e per il tuo caso.

## 3. La tua proposta: design/marketing, kit, firmware
Dici di voler portare tre cose: (a) tipologia e vision di **design e marketing** del servizio, (b) **progettazione del kit** di montaggio, (c) **firmware/gestionale**. È un'impostazione sensata, e ciascuna ha un tipo di protezione diverso:

| Elemento | Come si tutela [D, da confermare] | Limiti |
|---|---|---|
| **Design e marketing del servizio** (nome, logo, identità, materiali, esperienza di sala) | **Marchio** (UIBM/EUIPO) per nome e logo; **disegno/modello registrato** per l'aspetto di colonne e interfacce; **diritto d'autore** su grafica e testi; **know-how** (manuale operativo) | Una "vision" o un'idea di servizio non è protetta di per sé: lo è la sua forma concreta |
| **Progettazione del kit** | **Brevetto o modello di utilità** solo se c'è un contributo tecnico nuovo; altrimenti segreto industriale/know-how e velocità; disegno registrato per l'aspetto | Da ricerca di anteriorità: il rischio di anteriorità è alto (vedi `08`) |
| **Firmware e gestionale** | **Diritto d'autore** (automatico), riservatezza del codice sorgente; opzionale registrazione presso il Registro pubblico del software della SIAE [F: [Pillitteri](https://pasqualepillitteri.it/news/19513/come-registrare-software-siae)] | Il software "in quanto tale" non si brevetta (art. 45 CPI; art. 52 CBE) [F: [CCIAA Ravenna](https://ra.camcom.gov.it/eurosportello/allegati-giuseppe/relazioni-seminario-la-brevettazione-del-software-internet-e-la-proprieta-industriale/la-brevettazione-del-software)]. Se si usa codice open source (es. RaspberryPints) la licenza va letta |

Questa è la tripartizione da portare a consulente e avvocato: "ci aiuta a capire se proteggiamo bene queste tre cose?".

## 4. La posizione nell'Aeronautica: è il punto più importante

### 4.1 Cosa dicono le fonti
- **Art. 894 del Codice dell'ordinamento militare:** incompatibilità con altre professioni; vieta anche l'esercizio di mestiere, industria o commercio e le cariche di amministratore o sindaco in società a scopo di lucro; le attività consentite devono comunque svolgersi fuori dall'orario di servizio e non compromettere i doveri [F: [Gazzetta Ufficiale](https://www.gazzettaufficiale.it/atto/serie_generale/caricaArticolo?art.versione=2&art.idGruppo=175&art.flagTipoArticolo=0&art.codiceRedazionale=010G0089&art.idArticolo=894&art.idSottoArticolo=1&art.idSottoArticolo1=10&art.dataPubblicazioneGazzetta=2010-05-08&art.progressivo=0), [Trovalegge](https://trovalegge.it/c-o-m/art-894-codice-ordinamento-militare-incompatibilit%C3%A0-professionali)].
- **Giurisprudenza:** il Consiglio di Stato (n. 1317/2017) ha parlato di divieto assoluto di commercio e industria per i militari; il TAR Veneto ha precisato che conta se l'attività è prevalente, continuativa e rivolta all'impresa [F: [avvocatomilitare.it](https://www.avvocatomilitare.it/contenuto.php?id=17041), [ASPMI](https://www.aspmilitari.it/partita-iva-militari-aspmi-chiarisce-la-sentenza/)].
- **Art. 895:** elenca attività consentite, con o senza compenso [F: FAQ Difesa, non letta].
- **Incarichi retribuiti:** una circolare 2024 indica autorizzazione della Direzione Generale oltre una soglia di 5.000 € di compensi cumulati; le attività gratuite vanno comunque comunicate al Comandante di Corpo [F: [difesa.it](https://www.difesa.it/assets/allegati/3918/circolare_attivita_extra_sportiva_13giu2024.2024.06.18.11.42.25.015.pdf), non letta integralmente].
- **Invenzioni dei dipendenti:** l'art. 64 CPI distingue invenzioni di servizio, d'azienda e **occasionali**; per quelle occasionali nel campo dell'attività del datore, quest'ultimo può avere un diritto di opzione [F: [Consulenza Legale Italia](https://www.consulenzalegaleitalia.it/invenzioni-del-lavoratore/)]. La Difesa ha una **procedura interna** per le invenzioni dei dipendenti, con istanza che passa per la gerarchia fino al Servizio Brevetti e proprietà intellettuale del Segretariato Generale della Difesa [F: snippet su [difesa.it](https://www.difesa.it/assets/allegati/3145/invenzioni_dipendenti_md_2016.pdf), non letto; il documento è del 2016].
- **Art. 198 CPI:** entro 60 giorni dal deposito il Ministero della Difesa può chiedere il differimento della concessione per invenzioni utili alla difesa del Paese [F: [Brocardi](https://www.brocardi.it/codice-della-proprieta-industriale/capo-v/art198.html)].
- **Non trovato [?]:** regole su quote societarie di militari, su royalties e licenze di diritti di proprietà industriale, e se l'art. 65 CPI (deroga per ricercatori pubblici) valga anche per il personale militare.

### 4.2 Cosa significa per noi [D]
- **Tu non puoi essere il venditore** del kit e del format, né amministratore di una società: è coerente con ciò che dici. Vendere ai bar è un'attività commerciale e continuativa.
- **Cosa resta da chiarire:** se puoi (a) essere titolare di brevetto/marchio, (b) concedere licenze a un'altra società e percepire compensi, (c) essere socio non amministratore, (d) percepire diritti d'autore. Non ho trovato fonti chiare; sono le domande da fare, nel modo giusto (vedi §6).
- **Invenzione occasionale:** il progetto nasce fuori dal servizio e fuori dal campo di attività dell'Aeronautica, quindi plausibilmente è "occasionale", ma **lo deve confermare un legale**. Per ridurre i rischi: lavorare solo nel tempo libero, con dispositivi e rete personali; non usare informazioni, contatti, mezzi o tempo dell'Aeronautica.
- **Struttura possibile (ipotesi da verificare con l'avvocato):** una società di terzi (un socio o un imprenditore partner) che vende kit e format su licenza; tu come autore/inventore con compensi solo se e come consentito. Oppure rimandare la parte commerciale.

### 4.3 L'idea di coinvolgere l'Aeronautica
Valuto due usi diversi:

**Sì, per chiedere le regole.** Il tuo referente può indirizzarti all'ufficio personale/legale competente per sapere: cosa è consentito, come si chiede l'autorizzazione, come si gestiscono invenzioni e diritti d'autore. Si può fare con **domande ipotetiche** e senza raccontare il progetto, almeno al primo passo.

**Con cautela, per i consulenti.** Non ho trovato che la Difesa offra consulenza brevettuale o legale **per attività imprenditoriali private** del personale [?]. L'esistenza di una procedura interna per le invenzioni mostra che l'istituzione può avere interesse o diritti. Rischi da considerare [D]:
- una comunicazione formale può **attivare obblighi** (comunicazione dell'invenzione, opzione, segretazione) prima che tu abbia capito la tua posizione;
- coinvolgere l'Aeronautica "nel progetto" può creare confusione su **chi detiene i diritti**;
- il tuo referente non è un consulente: **nessun segreto professionale** lo lega;
- **nome, stemmi e immagine** dell'Aeronautica non vanno usati nel marketing senza autorizzazione formale; **non l'ho verificato**, ma conviene non farlo.

**Proposta:** non presentare il progetto come "nostro". Prima si raccolgono le regole con domande generiche; poi un **avvocato esperto di impiego pubblico/militare** (a tue spese) ti consiglia come procedere. Esistono anche associazioni e sindacati militari che offrono assistenza legale ai soci [D: da verificare se ne fai parte].

## 5. Dimostrare quando hai avuto l'idea (data certa)
- **Marca temporale qualificata:** il mezzo più diretto per dare data certa a un file (in UE crea una presunzione di esistenza e integrità a quella data) [F: [TrueScreen](https://truescreen.io/it/articoli/data-certa-documento-digitale/), fonte di un fornitore: possibile interesse commerciale].
- **PEC:** prova l'invio ma non l'integrità del contenuto: da sola è più debole [F].
- **Registro SIAE per il software:** dà una data certa alla creazione del programma; è tutela d'autore, non brevetto [F: [Pillitteri](https://pasqualepillitteri.it/news/19513/come-registrare-software-siae)]. Costi da verificare sul sito SIAE.
- **Cronologia del repository:** utile come traccia ma **non come prova** [D]: i commit possono essere modificati.
- **Cosa fare adesso [D]:** creare un archivio (zip) del repository com'è oggi, applicare una marca temporale qualificata tramite un prestatore di servizi fiduciari, e conservare file e ricevuta. Non divulga nulla (si marca il file, non lo si pubblica).
- **Attenzione:** l'art. 2704 c.c. lascia al giudice la valutazione se la marca temporale basti a provare l'anteriorità [F: TrueScreen]. Chiedi conferma al consulente.

## 6. Domande per il legale esperto di impiego militare/pubblico
(Si possono porre in forma ipotetica.)
1. Un militare può essere titolare di un brevetto o di un marchio? Può concedere licenze a una società e ricevere compensi? Serve autorizzazione, e da chi?
2. Può essere socio (non amministratore) di una società a scopo di lucro? Entro quali limiti?
3. Un'invenzione realizzata nel tempo libero, in un settore estraneo a quello dell'Aeronautica, è "occasionale" (art. 64 c.3)? Ci sono obblighi di comunicazione o diritti di opzione?
4. Esiste una procedura della Difesa che mi obbliga a comunicare invenzioni e opere? Cosa succede se non la attivo e cosa se la attivo?
5. Posso percepire diritti d'autore o royalties? Sono soggetti a limiti o autorizzazione?
6. Uso di nome, grado, stemmi o riferimenti all'Aeronautica nel progetto: è vietato? In che forma?
7. Un partner imprenditore può vendere il kit e il format e riconoscermi compensi? Con quali cautele per evitare conflitti?
8. Quali conseguenze disciplinari rischierei, e come mi tutelo se chiedo chiarimenti per iscritto?

## 7. Ordine di lavoro aggiornato (rispetto a `09`)
1. **Subito:** nessuna divulgazione; marca temporale dell'archivio; registro dei contributi (questo documento) da rivedere insieme.
2. **Chiarire lo status:** raccolta delle regole con domande ipotetiche + avvocato esperto di impiego militare/pubblico.
3. **Dopo:** consulente in brevetti e marchi (`09`), con le risposte sullo status in mano.
4. **Poi:** avvocato franchising/alcol (`08`) e struttura societaria con un partner, se la strada è praticabile.
