// Genera pitch/SelfTap_Pitch_Deck.pptx
// Uso: NODE_PATH=<cartella con pptxgenjs, react-icons, react, react-dom, sharp> node build_deck.js
const pptxgen = require("pptxgenjs");
const React = require("react");
const ReactDOMServer = require("react-dom/server");
const sharp = require("sharp");
const fa = require("react-icons/fa");
const path = require("path");

const APPLY_THEME = process.env.APPLY_THEME_JS; // percorso di apply_theme.js
const OUT = path.join(__dirname, "SelfTap_Pitch_Deck.pptx");

const THEME = {
  name: "SelfTap",
  headFontFace: "Cambria",
  bodyFontFace: "Calibri",
  colors: {
    dk1: "1B1410", lt1: "FFFFFF", dk2: "2E231B", lt2: "F3E7D0",
    accent1: "F2A900", accent2: "C8791A", accent3: "7FB069",
    accent4: "D9534F", accent5: "6BA3BE", accent6: "8A7A6B",
    hlink: "F2A900", folHlink: "C8791A",
  },
};

async function icon(Comp, color = "#1B1410", size = 256) {
  const svg = ReactDOMServer.renderToStaticMarkup(React.createElement(Comp, { color, size: String(size) }));
  const buf = await sharp(Buffer.from(svg)).png().toBuffer();
  return "image/png;base64," + buf.toString("base64");
}

(async () => {
  const pres = new pptxgen();
  pres.layout = "LAYOUT_16x9"; // 10 x 5.625
  pres.title = "SelfTap - Pitch deck (bozza v0.1)";
  pres.theme = { headFontFace: THEME.headFontFace, bodyFontFace: THEME.bodyFontFace };
  const C = pres.SchemeColor;

  // ---------- Layout ----------
  pres.defineSlideMaster({
    title: "TITOLO",
    objects: [{ rect: { x: 0, y: 0, w: 10, h: 5.625, fill: { color: C.text1 } } }],
  });
  // placeholder del titolo del layout CONTENUTO
  pres.defineSlideMaster({
    title: "CONTENUTO_T",
    objects: [
      { rect: { x: 0, y: 0, w: 10, h: 5.625, fill: { color: C.text1 } } },
      { text: { text: "SELFTAP  ·  Bozza v0.1", options: { x: 0.5, y: 5.2, w: 4, h: 0.3, fontSize: 10, color: C.accent6, margin: 0 } } },
      {
        placeholder: {
          options: { name: "title", type: "title", x: 0.5, y: 0.35, w: 9, h: 0.8, fontSize: 30, bold: true, color: C.background1, margin: 0, valign: "middle", align: "left" },
          text: "",
        },
      },
    ],
    slideNumber: { x: 9.0, y: 5.2, w: 0.5, h: 0.3, fontSize: 10, color: C.accent6, align: "right" },
  });

  const card = (s, x, y, w, h, name, fill = C.text2) =>
    s.addShape(pres.ShapeType.roundRect, { x, y, w, h, rectRadius: 0.12, fill: { color: fill }, line: { color: fill, width: 0 }, objectName: name });
  const circleIcon = async (s, Comp, x, y, d, name, bg = C.accent1) => {
    s.addShape(pres.ShapeType.ellipse, { x, y, w: d, h: d, fill: { color: bg }, line: { color: bg, width: 0 }, objectName: name + " cerchio" });
    const p = d * 0.26;
    s.addImage({ data: await icon(Comp, "#1B1410"), x: x + p, y: y + p, w: d - 2 * p, h: d - 2 * p, altText: name, objectName: name });
  };
  const T = (s, text, o) => s.addText(text, { isTextBox: true, margin: 0, color: C.background1, ...o });

  // ---------- 1. Titolo ----------
  pres.addSection({ title: "Apertura" });
  let s = pres.addSlide({ masterName: "TITOLO", sectionTitle: "Apertura" });
  T(s, "SELFTAP", { x: 0.7, y: 1.3, w: 5.5, h: 1.1, fontSize: 60, bold: true, color: C.accent1, fontFace: "Cambria", objectName: "Titolo" });
  T(s, "La birreria dove la spilli tu", { x: 0.7, y: 2.45, w: 5.5, h: 0.6, fontSize: 24, objectName: "Sottotitolo" });
  T(s, "Nessun bancone. Nessun barista.\nPaghi solo quello che hai bevuto.", { x: 0.7, y: 3.2, w: 5.5, h: 0.9, fontSize: 16, color: C.background2, objectName: "Tagline" });
  T(s, "Concept per investitori  ·  Bozza v0.1  ·  Ottobre 2026\n(nome di lavoro, da definire)", { x: 0.7, y: 4.7, w: 6, h: 0.5, fontSize: 11, color: C.accent6, objectName: "Nota" });
  // boccale stilizzato
  s.addShape(pres.ShapeType.roundRect, { x: 7.0, y: 1.55, w: 1.7, h: 2.7, rectRadius: 0.15, fill: { color: C.accent1 }, line: { color: C.accent1, width: 0 }, objectName: "Boccale" });
  s.addShape(pres.ShapeType.roundRect, { x: 8.55, y: 1.95, w: 0.7, h: 1.5, rectRadius: 0.3, fill: { color: C.text1 }, line: { color: C.accent1, width: 6 }, objectName: "Manico" });
  [[6.9, 1.15], [7.5, 1.0], [8.05, 1.15]].forEach(([x, y], i) =>
    s.addShape(pres.ShapeType.ellipse, { x, y, w: 0.85, h: 0.7, fill: { color: C.background2 }, line: { color: C.background2, width: 0 }, objectName: "Schiuma " + (i + 1) }));
  s.addNotes("Apertura. Il nome SelfTap è provvisorio. In una frase: una birreria in cui il cliente spilla da solo e paga alla fine in base ai litri effettivi.");

  // ---------- 2. Problema ----------
  pres.addSection({ title: "Perché" });
  s = pres.addSlide({ masterName: "CONTENUTO_T", sectionTitle: "Perché" });
  s.addText("Il bar tradizionale ha tre attriti", { placeholder: "title" });
  const probs = [
    [fa.FaHourglassHalf, "Code e attese", "Il banco è un collo di bottiglia: il cliente aspetta, il barista corre."],
    [fa.FaUserFriends, "Il personale pesa", "Il banconiere è la voce di costo più rigida di un locale."],
    [fa.FaReceipt, "Conti e giri", "Offrire il giro, dividere il conto, pagare ogni birra: tutto è lento."],
  ];
  for (let i = 0; i < 3; i++) {
    const x = 0.5 + i * 3.1;
    card(s, x, 1.55, 2.8, 3.1, "Card problema " + (i + 1));
    await circleIcon(s, probs[i][0], x + 0.3, 1.85, 0.8, "Icona " + probs[i][1]);
    T(s, probs[i][1], { x: x + 0.3, y: 2.85, w: 2.3, h: 0.45, fontSize: 20, bold: true, color: C.accent1, fontFace: "Cambria" });
    T(s, probs[i][2], { x: x + 0.3, y: 3.35, w: 2.3, h: 1.2, fontSize: 14, valign: "top" });
  }
  s.addNotes("Tre attriti dichiarati in forma qualitativa. Prima di presentare agli investitori vanno supportati con dati di mercato (da raccogliere).");

  // ---------- 3. Concept ----------
  s = pres.addSlide({ masterName: "CONTENUTO_T", sectionTitle: "Perché" });
  s.addText("Un open bar in cui paghi solo ciò che bevi", { placeholder: "title" });
  T(s, "Il cliente entra, riceve un braccialetto NFC e si serve da solo alle spillatrici elettroniche. Ogni millilitro viene misurato e tradotto in euro al litro.", { x: 0.5, y: 1.5, w: 4.6, h: 1.4, fontSize: 16, valign: "top" });
  T(s, "Nessun limite alle spillate: il conto si chiude una volta sola, in cassa, a fine serata.", { x: 0.5, y: 3.05, w: 4.6, h: 1.0, fontSize: 16, color: C.accent1, bold: true, valign: "top" });
  const big = [["0", "banconi"], ["0", "baristi"], ["∞", "spillate"]];
  big.forEach((b, i) => {
    const y = 1.5 + i * 1.15;
    card(s, 5.6, y, 3.9, 1.0, "Stat " + b[1]);
    T(s, b[0], { x: 5.85, y: y + 0.05, w: 1.2, h: 0.9, fontSize: 44, bold: true, color: C.accent1, fontFace: "Cambria", valign: "middle" });
    T(s, b[1], { x: 7.1, y: y + 0.05, w: 2.2, h: 0.9, fontSize: 22, valign: "middle" });
  });
  s.addNotes("Il messaggio chiave: sensazione di open bar, ma con pagamento a consumo reale. Questo è ciò che distingue il concept da un open bar a prezzo fisso.");

  // ---------- 4. Come funziona ----------
  pres.addSection({ title: "Il prodotto" });
  s = pres.addSlide({ masterName: "CONTENUTO_T", sectionTitle: "Il prodotto" });
  s.addText("Come funziona: quattro gesti", { placeholder: "title" });
  const steps = [
    [fa.FaIdCard, "1 · Ingresso", "Verifica del documento (maggiore età) e consegna del braccialetto NFC."],
    [fa.FaBeer, "2 · Spilla", "Avvicina il braccialetto alla spillatrice, scegli e spilla."],
    [fa.FaHandPaper, "3 · Chiudi", "Riavvicina il braccialetto: l'erogazione e il conteggio si fermano."],
    [fa.FaCashRegister, "4 · Paga", "A fine serata la cassa legge il braccialetto e addebita i litri bevuti."],
  ];
  for (let i = 0; i < 4; i++) {
    const x = 0.5 + i * 2.28;
    card(s, x, 1.5, 2.1, 3.3, "Passo " + (i + 1));
    await circleIcon(s, steps[i][0], x + 0.65, 1.75, 0.8, "Icona passo " + (i + 1));
    T(s, steps[i][1], { x: x + 0.2, y: 2.75, w: 1.7, h: 0.4, fontSize: 18, bold: true, color: C.accent1, fontFace: "Cambria" });
    T(s, steps[i][2], { x: x + 0.2, y: 3.2, w: 1.75, h: 1.5, fontSize: 14, valign: "top" });
  }

  // ---------- 5. Esperienza cliente ----------
  s = pres.addSlide({ masterName: "CONTENUTO_T", sectionTitle: "Il prodotto" });
  s.addText("L'esperienza alla spillatrice", { placeholder: "title" });
  // schermo simulato
  s.addShape(pres.ShapeType.roundRect, { x: 0.7, y: 1.45, w: 3.6, h: 3.4, rectRadius: 0.2, fill: { color: C.background2 }, line: { color: C.accent6, width: 3 }, objectName: "Schermo spillatrice" });
  T(s, "IPA · Luppolo Rosso", { x: 0.95, y: 1.65, w: 3.1, h: 0.4, fontSize: 16, bold: true, color: C.text1, fontFace: "Cambria" });
  T(s, "0,38 L", { x: 0.95, y: 2.15, w: 3.1, h: 0.9, fontSize: 48, bold: true, color: C.text1, fontFace: "Cambria", align: "center" });
  s.addShape(pres.ShapeType.roundRect, { x: 0.95, y: 3.2, w: 3.1, h: 0.25, rectRadius: 0.12, fill: { color: C.accent6 }, line: { color: C.accent6, width: 0 }, transparency: 60, objectName: "Barra sfondo" });
  s.addShape(pres.ShapeType.roundRect, { x: 0.95, y: 3.2, w: 1.7, h: 0.25, rectRadius: 0.12, fill: { color: C.accent1 }, line: { color: C.accent1, width: 0 }, objectName: "Barra progresso" });
  T(s, "Avvicina il braccialetto per terminare", { x: 0.95, y: 3.75, w: 3.1, h: 0.4, fontSize: 14, color: C.text1, align: "center" });
  T(s, "Giulia · serata in corso", { x: 0.95, y: 4.3, w: 3.1, h: 0.3, fontSize: 11, color: C.accent6, align: "center" });
  const ux = [
    ["Schermo semplice", "Birra, litri erogati, un solo gesto per chiudere."],
    ["Costo discreto", "Si vedono i litri; l'importo si consulta a richiesta, per mantenere la sensazione di open bar."],
    ["Feedback immediato", "LED e display confermano attivazione e chiusura."],
  ];
  ux.forEach((u, i) => {
    const y = 1.45 + i * 1.18;
    T(s, u[0], { x: 5.0, y, w: 4.5, h: 0.4, fontSize: 18, bold: true, color: C.accent1, fontFace: "Cambria" });
    T(s, u[1], { x: 5.0, y: y + 0.42, w: 4.5, h: 0.7, fontSize: 14, valign: "top" });
  });
  s.addNotes("Schermata illustrativa. Il prototipo interattivo è in ui/spillatrice.html.");

  // ---------- 6. Tecnologia ----------
  s = pres.addSlide({ masterName: "CONTENUTO_T", sectionTitle: "Il prodotto" });
  s.addText("Dentro la spillatrice", { placeholder: "title" });
  const parts = [
    [fa.FaTint, "Flussimetro", "Misura i millilitri erogati con precisione alimentare."],
    [fa.FaPowerOff, "Elettrovalvola", "Si apre solo se il braccialetto è autorizzato."],
    [fa.FaWifi, "Lettore NFC", "Attiva e chiude la spillata."],
    [fa.FaTv, "Display + LED", "Mostra birra, litri e stato."],
    [fa.FaMicrochip, "Controller", "Logica locale; funziona anche offline e poi sincronizza."],
    [fa.FaServer, "Server centrale", "Conti, braccialetti, cassa e statistiche in tempo reale."],
  ];
  for (let i = 0; i < 6; i++) {
    const col = i % 3, row = Math.floor(i / 3);
    const x = 0.5 + col * 3.1, y = 1.5 + row * 1.7;
    card(s, x, y, 2.8, 1.5, "Componente " + parts[i][1]);
    await circleIcon(s, parts[i][0], x + 0.2, y + 0.2, 0.6, "Icona " + parts[i][1]);
    T(s, parts[i][1], { x: x + 0.95, y: y + 0.2, w: 1.7, h: 0.6, fontSize: 16, bold: true, color: C.accent1, valign: "middle", fontFace: "Cambria" });
    T(s, parts[i][2], { x: x + 0.2, y: y + 0.9, w: 2.45, h: 0.55, fontSize: 12, valign: "top" });
  }

  // ---------- 7. Layout ----------
  s = pres.addSlide({ masterName: "CONTENUTO_T", sectionTitle: "Il prodotto" });
  s.addText("Due layout, un solo sistema", { placeholder: "title" });
  card(s, 0.5, 1.5, 4.4, 3.4, "Layout isola", C.text2);
  s.addShape(pres.ShapeType.roundRect, { x: 0.8, y: 1.75, w: 1.6, h: 0.35, rectRadius: 0.1, fill: { color: C.accent1 }, line: { color: C.accent1, width: 0 }, objectName: "Etichetta fase 1" });
  T(s, "FASE 1 · PARTENZA", { x: 0.8, y: 1.75, w: 1.6, h: 0.35, fontSize: 11, bold: true, color: C.text1, align: "center", valign: "middle" });
  T(s, "Isola di spillatrici", { x: 0.8, y: 2.25, w: 3.9, h: 0.45, fontSize: 22, bold: true, fontFace: "Cambria" });
  T(s, [
    { text: "Molte birre disponibili (8-16 vie)", options: { bullet: true, breakLine: true } },
    { text: "Impianto e fusti centralizzati", options: { bullet: true, breakLine: true } },
    { text: "Più facile da sorvegliare e pulire", options: { bullet: true, breakLine: true } },
    { text: "Investimento iniziale contenuto", options: { bullet: true } },
  ], { x: 0.8, y: 2.8, w: 3.9, h: 1.9, fontSize: 14, valign: "top", paraSpaceAfter: 6 });
  card(s, 5.1, 1.5, 4.4, 3.4, "Layout tavolo", C.text2);
  s.addShape(pres.ShapeType.roundRect, { x: 5.4, y: 1.75, w: 1.9, h: 0.35, rectRadius: 0.1, fill: { color: C.accent2 }, line: { color: C.accent2, width: 0 }, objectName: "Etichetta fase 2" });
  T(s, "FASE 2 · ESPANSIONE", { x: 5.4, y: 1.75, w: 1.9, h: 0.35, fontSize: 11, bold: true, color: C.background1, align: "center", valign: "middle" });
  T(s, "Spillatrice al tavolo", { x: 5.4, y: 2.25, w: 3.9, h: 0.45, fontSize: 22, bold: true, fontFace: "Cambria" });
  T(s, [
    { text: "Effetto wow massimo per i gruppi", options: { bullet: true, breakLine: true } },
    { text: "Meno scelta, più impianto per tavolo", options: { bullet: true, breakLine: true } },
    { text: "Ideale come tavoli premium", options: { bullet: true, breakLine: true } },
    { text: "Stesso software e stessi braccialetti", options: { bullet: true } },
  ], { x: 5.4, y: 2.8, w: 3.9, h: 1.9, fontSize: 14, valign: "top", paraSpaceAfter: 6 });

  // ---------- 8. Responsabilità ----------
  pres.addSection({ title: "Sostenibilità" });
  s = pres.addSlide({ masterName: "CONTENUTO_T", sectionTitle: "Sostenibilità" });
  s.addText("Servizio responsabile e conforme", { placeholder: "title" });
  const resp = [
    [fa.FaUserShield, "Solo maggiorenni", "Documento verificato prima di consegnare il braccialetto."],
    [fa.FaEye, "Sorveglianza di sala", "Addetti presenti, con blocco immediato del braccialetto da remoto."],
    [fa.FaBalanceScale, "Misura omologata", "Flussimetri conformi alla normativa metrologica (da verificare)."],
    [fa.FaSprayCan, "Igiene HACCP", "Cicli di pulizia delle linee tracciati dal sistema."],
  ];
  for (let i = 0; i < 4; i++) {
    const col = i % 2, row = Math.floor(i / 2);
    const x = 0.5 + col * 4.6, y = 1.5 + row * 1.7;
    card(s, x, y, 4.4, 1.5, "Card " + resp[i][1]);
    await circleIcon(s, resp[i][0], x + 0.25, y + 0.35, 0.8, "Icona " + resp[i][1]);
    T(s, resp[i][1], { x: x + 1.3, y: y + 0.2, w: 3.0, h: 0.4, fontSize: 18, bold: true, color: C.accent1, fontFace: "Cambria" });
    T(s, resp[i][2], { x: x + 1.3, y: y + 0.65, w: 2.95, h: 0.8, fontSize: 13, valign: "top" });
  }
  s.addNotes("Questo è il punto più delicato del concept: il servizio di alcol a minori e a persone ubriache è vietato. Va validato con un consulente legale/normativo prima di qualsiasi apertura.");

  // ---------- 9. Economia ----------
  pres.addSection({ title: "Numeri" });
  s = pres.addSlide({ masterName: "CONTENUTO_T", sectionTitle: "Numeri" });
  s.addText("Economia di un litro (ipotesi)", { placeholder: "title" });
  s.addChart(pres.charts.BAR, [{ name: "€ per litro", labels: ["Prezzo di vendita", "Costo birra", "Margine lordo"], values: [13, 4, 9] }], {
    x: 0.5, y: 1.4, w: 5.2, h: 3.4, barDir: "col", chartColors: [THEME.colors.accent1],
    showTitle: false, showLegend: false, showValue: true, dataLabelPosition: "outEnd", dataLabelColor: "FFFFFF", dataLabelFontSize: 14, dataLabelFontFace: "+mn-lt",
    catAxisLabelColor: "F3E7D0", catAxisLabelFontSize: 12, catAxisLabelFontFace: "+mn-lt",
    valAxisHidden: true, valGridLine: { style: "none" }, catGridLine: { style: "none" }, valAxisMinVal: 0, valAxisMaxVal: 16,
  });
  T(s, "Valori puramente illustrativi, da validare con fornitori e prove sul campo.", { x: 6.0, y: 1.5, w: 3.5, h: 0.9, fontSize: 12, color: C.accent6, italic: true, valign: "top" });
  T(s, [
    { text: "Meno costo del personale al banco", options: { bullet: true, breakLine: true } },
    { text: "Più giri a parità di spazio", options: { bullet: true, breakLine: true } },
    { text: "Dati di consumo per ogni cliente", options: { bullet: true, breakLine: true } },
    { text: "Da compensare: costo hardware e sorveglianza", options: { bullet: true } },
  ], { x: 6.0, y: 2.5, w: 3.5, h: 2.3, fontSize: 14, valign: "top", paraSpaceAfter: 6 });
  s.addNotes("Numeri illustrativi, non reali. Il business plan completo (costi, ricavi, break-even) è da costruire nella fase successiva.");

  // ---------- 10. Roadmap ----------
  s = pres.addSlide({ masterName: "CONTENUTO_T", sectionTitle: "Numeri" });
  s.addText("Roadmap", { placeholder: "title" });
  const road = [
    ["Concept", "Documenti, UI e specifiche"],
    ["Prototipo", "Una spillatrice funzionante"],
    ["Pilota", "Evento o locale temporaneo"],
    ["Apertura", "Primo locale con isola"],
  ];
  s.addShape(pres.ShapeType.line, { x: 1.5, y: 2.45, w: 7.0, h: 0, line: { color: THEME.colors.accent6, width: 2 }, objectName: "Linea del tempo" });
  road.forEach((r, i) => {
    const cx = 1.5 + i * 2.33;
    s.addShape(pres.ShapeType.ellipse, { x: cx - 0.3, y: 2.15, w: 0.6, h: 0.6, fill: { color: i === 0 ? C.accent1 : C.text2 }, line: { color: C.accent1, width: 2 }, objectName: "Tappa " + (i + 1) });
    T(s, String(i + 1), { x: cx - 0.3, y: 2.15, w: 0.6, h: 0.6, fontSize: 18, bold: true, align: "center", valign: "middle", color: i === 0 ? C.text1 : C.accent1 });
    T(s, r[0], { x: cx - 1.1, y: 3.0, w: 2.2, h: 0.4, fontSize: 18, bold: true, color: C.accent1, align: "center", fontFace: "Cambria" });
    T(s, r[1], { x: cx - 1.1, y: 3.45, w: 2.2, h: 0.8, fontSize: 14, align: "center", valign: "top" });
  });
  T(s, "Siamo qui", { x: 0.5, y: 1.6, w: 2.0, h: 0.4, fontSize: 14, bold: true, color: C.accent1, align: "center" });

  // ---------- 11. Chiusura ----------
  s = pres.addSlide({ masterName: "TITOLO", sectionTitle: "Numeri" });
  T(s, "Prossimi passi", { x: 0.7, y: 0.9, w: 8, h: 0.8, fontSize: 40, bold: true, color: C.accent1, fontFace: "Cambria" });
  T(s, [
    { text: "Validare normativa e licenze con un consulente", options: { bullet: true, breakLine: true } },
    { text: "Costruire il prototipo di una spillatrice", options: { bullet: true, breakLine: true } },
    { text: "Completare business plan e budget", options: { bullet: true, breakLine: true } },
    { text: "Cercare partner tecnici e investitori", options: { bullet: true } },
  ], { x: 0.7, y: 2.0, w: 8, h: 2.3, fontSize: 20, valign: "top", paraSpaceAfter: 10 });
  T(s, "SELFTAP  ·  la birreria dove la spilli tu", { x: 0.7, y: 4.8, w: 8, h: 0.4, fontSize: 14, color: C.accent6 });

  await pres.writeFile({ fileName: OUT });
  if (APPLY_THEME) {
    const { applyTheme } = require(APPLY_THEME);
    await applyTheme(OUT, THEME);
  }
  console.log("Creato", OUT);
})();
