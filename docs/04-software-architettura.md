# Architettura software

## 1. Componenti

```
 ┌──────────────┐   MQTT/HTTPS    ┌─────────────────────────┐   ┌───────────────┐
 │ Controller   │ ──────────────► │ Backend (server locale) │◄──│ Gestionale    │
 │ di via (x N) │ ◄────────────── │  - API                  │   │ (browser)     │
 │ firmware     │  autorizzazioni │  - Database             │   └───────────────┘
 └──────────────┘                 │  - Motore regole        │   ┌───────────────┐
        ▲ NFC                     └─────────────────────────┘◄──│ Cassa + POS   │
   braccialetto                                                 └───────────────┘
```

- **Firmware di via:** gestisce NFC, valvola, flussimetro, display; funziona offline.
- **Backend:** unica fonte di verità per braccialetti, conti, listino, eventi. Gira in locale nel bar (resiste a cadute di Internet), con backup in cloud.
- **Gestionale:** web app (vedi `ui/gestionale.html`) per sala, cassa, nuovi clienti, spillatrici e listino.
- **Integrazione pagamenti:** POS fisico o provider di pagamento; la preautorizzazione è gestita dal POS/provider.

## 2. Macchina a stati della via

```
RIPOSO ──tap valido──► PRONTA ──leva──► EROGAZIONE ──tap / timeout / max litri──► CHIUSURA ──► RIPOSO
   │                      │                                                  
   └─ tap non valido ─► ERRORE (messaggio) ─► RIPOSO        FUORI SERVIZIO (fusto finito / guasto / manutenzione)
```

Regole:
1. **Tap valido** = braccialetto noto, attivo, non bloccato, via in servizio, nessuna sessione aperta.
2. In **PRONTA** la valvola resta chiusa finché il cliente non preme la leva (evita erogazioni accidentali).
3. In **EROGAZIONE** si contano gli impulsi del flussimetro; ogni N ml viene inviato un aggiornamento al backend.
4. **CHIUSURA**: il firmware crea l'evento `pour.completed` (id univoco, braccialetto, via, millilitri, inizio, fine) e lo invia; se non c'è rete lo mette in coda.

## 3. Modello dati (semplificato)

| Tabella | Campi principali |
|---|---|
| `customers_tabs` (conti) | id, nome, braccialetto_id, stato (aperto/chiuso/bloccato), aperto_il, chiuso_il, controllo_eta_ok, garanzia_tipo, garanzia_importo, controllo_condizioni_ok |
| `wristbands` | id, uid_nfc (hash), stato, conto_corrente |
| `taps` | id, nome_via, birra_id, stato, fusto_id |
| `beers` | id, nome, stile, abv, prezzo_litro |
| `kegs` | id, birra_id, capacità_l, residuo_l, installato_il |
| `pours` | id (uuid), conto_id, via_id, birra_id, ml, prezzo_litro_applicato, inizio, fine, sorgente (online/offline) |
| `payments` | id, conto_id, importo, metodo, esito, data |
| `alerts` | id, tipo, riferimento, creato_il, risolto_il |
| `audit_log` | chi, cosa, quando (blocchi, sblocchi, modifiche listino) |

Il prezzo al litro viene **copiato nella spillata** al momento dell'erogazione, così un cambio di listino non altera i conti già in corso.

## 4. API principali (bozza)

| Metodo | Percorso | Uso |
|---|---|---|
| POST | `/tabs` | Apre un conto e attiva un braccialetto |
| POST | `/tabs/{id}/block` · `/unblock` | Blocco/sblocco |
| GET | `/tabs/{id}` | Dettaglio con spillate e totale |
| POST | `/tabs/{id}/close` | Chiusura e registrazione pagamento |
| POST | `/pours` | Il controller registra una spillata (idempotente tramite uuid) |
| GET | `/taps` · PATCH `/taps/{id}` | Stato e attivazione delle vie |
| GET/PUT | `/beers` | Listino |
| GET | `/alerts` | Allerte aperte |
| MQTT | `taps/{id}/authorize` | Autorizzazione in tempo reale (richiesta/risposta) |

## 5. Sicurezza
- Il braccialetto contiene solo un ID cifrato; nessun dato personale.
- Comunicazioni cifrate (TLS); i controller si autenticano con certificato.
- Ruoli: **cassiere**, **addetto di sala**, **gestore**; le modifiche sensibili vanno nell'audit log.
- Dati personali ridotti al minimo: nome o soprannome, nessuna copia del documento.

## 6. Regole sul consumo responsabile
- Soglia di ritmo (L/h) configurabile → allerta al personale.
- Blocco immediato del braccialetto dal gestionale; il controller riceve l'aggiornamento entro pochi secondi.
- In cassa, spunta obbligatoria sulle condizioni del cliente alla chiusura.
- Tutto resta registrato per eventuali verifiche.

## 7. Stack suggerito (modificabile)
- Firmware: C/C++ (Arduino/ESP-IDF) o Python su Raspberry Pi.
- Backend: Node.js o Python con API REST, database PostgreSQL (es. Supabase per il prototipo), broker MQTT.
- Gestionale: web app (HTML/JS, poi React se serve).
- Sviluppo a tappe: simulatore di via → prototipo con una vera spillatrice → pilota.

## 8. Tappe di sviluppo
1. **Simulatore software** di una via (già abbozzato in `ui/`).
2. Backend minimo con conti, spillate, cassa.
3. Firmware di una via con flussimetro e valvola su banco di prova.
4. Integrazione NFC e display.
5. Test con birra vera e calibrazione.
6. Pilota con più vie.
