// FAQ-Inhalt: Kapitalanlage-Vertrieb
// Wird direkt in index.html eingebettet

const FAQ_SECTIONS = [
  {
    title: "Grundlagen der Kapitalanlage",
    icon: "🏠",
    items: [
      {
        q: "Was ist eine Kapitalanlage-Wohnung?",
        a: `Eine Kapitalanlage-Wohnung ist eine Immobilie, die nicht selbst bewohnt, sondern vermietet wird – mit dem Ziel, Mieteinnahmen zu erzielen und langfristig Vermögen aufzubauen. Der Käufer ist Investor, nicht Selbstnutzer.<br><br>
Im Gegensatz zur selbstgenutzten Wohnung entscheidet hier nicht der Geschmack, sondern die <strong>Rendite, Lage und Vermietbarkeit</strong>. Der Investor fragt: „Was bringt mir das?" – nicht „Gefällt mir die Küche?"`
      },
      {
        q: "Warum kaufen Menschen Wohnungen als Kapitalanlage?",
        a: `Es gibt vier Hauptmotive – gute Vertriebspartner kennen alle vier und sprechen den passenden Motivtyp gezielt an:<br><br>
<strong>① Inflationsschutz</strong> – Sachwerte (Immobilien) behalten ihren Wert, wenn das Geld auf dem Konto real weniger wert wird.<br>
<strong>② Altersvorsorge</strong> – Mieteinnahmen als zweite Rente. „Statt 1.200€ gesetzliche Rente zusätzlich 600€ Mieteinnahmen netto."<br>
<strong>③ Steueroptimierung</strong> – Besonders für gut verdienende Angestellte (42% Steuersatz) ist die steuerliche Ersparnis ein starkes Argument.<br>
<strong>④ Vermögensaufbau mit Fremdkapital</strong> – Die Bank finanziert 80–90%, der Mieter zahlt die Rate. Hebelwirkung durch Fremdkapital (Leverage-Effekt).`
      },
      {
        q: "Wer ist der typische Käufer einer Kapitalanlage-Wohnung?",
        a: `Der ideale Käufer hat folgendes Profil:<br><br>
• <strong>Einkommen:</strong> Brutto über 50.000€/Jahr (besser 70.000€+) – damit die Steuerersparnis spürbar ist<br>
• <strong>Eigenkapital:</strong> Mindestens 20.000–40.000€ für Kaufnebenkosten (Notar, Grunderwerbsteuer, Makler)<br>
• <strong>Anlagehorizont:</strong> Mindestens 10 Jahre – Immobilien sind keine kurzfristige Anlage<br>
• <strong>Risikoprofil:</strong> Sicherheitsorientiert – Immobilien gelten als „solide" Anlage<br><br>
<strong>Häufige Zielgruppen:</strong> Ingenieure, Ärzte, IT-Fachkräfte, Beamte, gut verdienende Angestellte zwischen 35–55 Jahren.`
      }
    ]
  },
  {
    title: "Die wichtigsten Kennzahlen",
    icon: "📊",
    items: [
      {
        q: "Was ist die Bruttorendite und wie erkläre ich sie dem Kunden?",
        a: `Die Bruttorendite zeigt, wie viel Prozent des Kaufpreises jährlich als Mieteinnahme zurückfließen – <em>vor</em> Abzug von Kosten und Steuern.<br><br>
<strong>Formel:</strong> Jahresmiete ÷ Kaufpreis × 100<br><br>
<strong>Beispiel:</strong> Kaufpreis 300.000€, Kaltmiete 900€/Monat (= 10.800€/Jahr)<br>
→ 10.800 ÷ 300.000 × 100 = <strong>3,6% Bruttorendite</strong><br><br>
<strong>Im Gespräch:</strong> „Diese Wohnung bringt Ihnen 3,6% Bruttorendite – das ist mehr als jedes Tagesgeldkonto und dazu noch inflationsgeschützt."<br><br>
<strong>Orientierung:</strong> 3,5–5% gelten in deutschen Großstädten als marktüblich. Unter 3% ist kritisch zu hinterfragen.`
      },
      {
        q: "Was ist der Kaufpreisfaktor (Vervielfältiger)?",
        a: `Der Kaufpreisfaktor (auch: Vervielfältiger) ist der Kehrwert der Rendite und zeigt, nach wie vielen Jahren man den Kaufpreis durch Mieteinnahmen theoretisch zurückverdient hat.<br><br>
<strong>Formel:</strong> Kaufpreis ÷ Jahresnettomiete<br><br>
<strong>Beispiel:</strong> Kaufpreis 300.000€, Jahresmiete 10.800€ → Faktor <strong>27,8</strong><br><br>
<strong>Orientierung:</strong><br>
• Faktor 20–25: Sehr gut (v.a. B-Städte)<br>
• Faktor 25–30: Marktüblich in attraktiven Lagen<br>
• Faktor 30+: Teuer – nur mit starker Wertsteigerungserwartung<br><br>
<strong>Tipp:</strong> Manche Kunden verstehen den Faktor intuitiver als Prozent. Verwende beide Darstellungen.`
      },
      {
        q: "Was ist Cashflow und warum ist er entscheidend?",
        a: `Cashflow ist das, was dem Investor nach Abzug aller Kosten monatlich tatsächlich <em>im Portemonnaie bleibt</em> (oder was er drauflegen muss).<br><br>
<strong>Vereinfachte Rechnung:</strong><br>
Kaltmiete 900€<br>
– Finanzierungsrate 750€<br>
– Hausgeld (nicht umlagefähig) 80€<br>
– Instandhaltungsrücklage 30€<br>
= <strong>Cashflow: +40€/Monat (positiv)</strong><br><br>
<strong>Negativer Cashflow</strong> bedeutet: Der Investor legt monatlich drauf. Das ist bei Neubauten oft der Fall – hier muss die <strong>Steuerersparnis</strong> den negativen Cashflow ausgleichen oder übertreffen.<br><br>
<strong>Im Gespräch:</strong> „Unter dem Strich zahlen Sie nach Steuer und Mieteinnahmen noch ca. 150€ im Monat dazu – dafür bauen Sie monatlich Eigenkapital auf und profitieren von der Wertsteigerung."`
      },
      {
        q: "Was ist der Unterschied zwischen Brutto- und Nettorendite?",
        a: `<strong>Bruttorendite:</strong> Mieteinnahmen ÷ Kaufpreis – ohne Kosten<br>
<strong>Nettorendite:</strong> Mieteinnahmen abzüglich Bewirtschaftungskosten ÷ Gesamtinvestition inkl. Kaufnebenkosten<br><br>
Faustregel: Die Nettorendite liegt ca. 0,5–1% unter der Bruttorendite.<br><br>
<strong>Praxis-Tipp:</strong> Im Erstgespräch mit der Bruttorendite arbeiten – sie ist einfacher zu erklären. Im Kalkulator dann die vollständige Rechnung zeigen.`
      }
    ]
  },
  {
    title: "Finanzierung & Eigenkapital",
    icon: "🏦",
    items: [
      {
        q: "Wie finanzieren Kapitalanleger typischerweise?",
        a: `Anders als beim Eigenheim versuchen Kapitalanleger, möglichst <strong>wenig Eigenkapital einzusetzen</strong> – das maximiert die Eigenkapitalrendite (Leverage-Effekt).<br><br>
<strong>Typische Struktur:</strong><br>
• Kaufpreis: 300.000€<br>
• Kaufnebenkosten (ca. 10–12%): 33.000€ → <em>meist aus Eigenkapital</em><br>
• Bankfinanzierung: 100% des Kaufpreises möglich bei guter Bonität<br>
• Eigenkapital nötig: Mindestens die Nebenkosten (ca. 30.000–40.000€)<br><br>
<strong>Merksatz für den Kunden:</strong> „Sie setzen ca. 30.000€ Eigenkapital ein, die Bank finanziert 300.000€ – der Mieter zahlt die Rate. Das ist der Hebel."`
      },
      {
        q: "Was ist KfW-Förderung und wann lohnt sie sich?",
        a: `Die KfW (Kreditanstalt für Wiederaufbau) bietet zinsgünstige Darlehen für energieeffiziente Neubauten (Programm 297/298).<br><br>
<strong>Vorteil:</strong> Zinssatz deutlich unter Markt, Tilgungszuschuss bei besonders effizienten Gebäuden<br>
<strong>Voraussetzung:</strong> Objekt muss KfW-40-Standard oder besser erfüllen<br>
<strong>Grenze:</strong> Aktuell bis 100.000€ förderfähige Kosten pro Wohneinheit<br><br>
<strong>Im Gespräch:</strong> „Durch die KfW-Förderung liegt Ihr Finanzierungszins ca. 0,3–0,5% unter dem Marktdurchschnitt – das spart über 20 Jahre mehrere tausend Euro."<br><br>
<strong>Wichtig:</strong> KfW-Antrag muss <em>vor</em> Notartermin gestellt werden. Euer Finanzierungspartner Zinsboutique übernimmt das.`
      },
      {
        q: "Was passiert wenn der Mieter nicht zahlt oder die Wohnung leer steht?",
        a: `Das ist der häufigste Einwand – hier brauchst du eine klare Antwort:<br><br>
<strong>Leerstandsrisiko:</strong> In unserem Kalkulator ist standardmäßig 1 Monat Leerstand pro Jahr einkalkuliert. In gefragten Lagen (Augsburg, München) liegt der tatsächliche Leerstand bei WG-Wohnungen unter 2%.<br><br>
<strong>Mietausfall:</strong> Bei professioneller Verwaltung (z.B. Coliviq) wird bei Auszug sofort weitervermietet. Mietausfallversicherungen sind für ca. 1–2% der Jahresmiete erhältlich.<br><br>
<strong>Antwort im Gespräch:</strong> „Das ist ein berechtigter Gedanke. Wir kalkulieren das bewusst konservativ ein. Und: Sie zahlen die Rate im Notfall 1–2 Monate selbst – das ist kein Totalverlust, sondern ein vorübergehender Engpass."`
      }
    ]
  },
  {
    title: "Steuerliche Vorteile",
    icon: "💰",
    items: [
      {
        q: "Was ist AfA und wie erkläre ich sie verständlich?",
        a: `AfA = Absetzung für Abnutzung. Das Finanzamt erkennt an, dass ein Gebäude über Zeit „verbraucht" wird – und erlaubt dem Eigentümer, diesen Wertverlust jährlich als Kosten abzuziehen.<br><br>
<strong>Sätze:</strong><br>
• Bestandsgebäude (vor 2023): 2% des Gebäudewertes/Jahr (linear)<br>
• Neubau ab 2023: 3% linear<br>
• Neubau Baubeginn Okt. 2023 – Sep. 2029: 5% degressiv (sehr attraktiv!)<br><br>
<strong>Beispiel (Neubau 5% degressiv):</strong><br>
Kaufpreis 300.000€, Gebäudewert 80% = 240.000€<br>
AfA im 1. Jahr: 5% × 240.000€ = <strong>12.000€ steuerlicher Abzug</strong><br>
Bei 42% Steuersatz → <strong>5.040€ Steuererstattung allein durch AfA</strong><br><br>
<strong>Einfache Erklärung:</strong> „Das Finanzamt schenkt Ihnen jedes Jahr einen Teil der Gebäudekosten als Steuerersparnis zurück – ohne dass Sie dieses Geld tatsächlich ausgegeben haben."`
      },
      {
        q: "Was sind Werbungskosten bei Vermietung?",
        a: `Alle Kosten, die im Zusammenhang mit der Vermietung entstehen, können als Werbungskosten von den Mieteinnahmen abgezogen werden:<br><br>
• Zinsen aus der Finanzierung (größter Posten!)<br>
• Hausgeld (nicht umlagefähiger Teil)<br>
• Instandhaltungsrücklagen<br>
• Verwaltungskosten<br>
• Abschreibung (AfA)<br>
• Fahrtkosten zur Wohnung<br>
• Steuerberaterkosten anteilig<br><br>
<strong>Effekt:</strong> In den ersten Jahren übersteigen die Kosten oft die Mieteinnahmen → <strong>steuerlicher Verlust</strong> der mit anderen Einkünften (Gehalt) verrechnet wird → Lohnsteuererstattung.<br><br>
<strong>Im Gespräch:</strong> „Die Wohnung „kostet" Sie steuerlich nichts – im Gegenteil, sie reduziert Ihre Steuerlast aktiv."`
      },
      {
        q: "Was ist die Lohnsteuerermäßigung und wie funktioniert sie?",
        a: `Statt am Jahresende eine Steuererstattung zu warten, kann der Investor beim Finanzamt eine <strong>Lohnsteuerermäßigung</strong> beantragen – dann wird der Steuervorteil direkt monatlich ausgezahlt (mehr Netto-Gehalt).<br><br>
<strong>Beispiel:</strong><br>
Jährliche steuerliche Ersparnis: 4.000€<br>
→ Monatlich ca. 333€ mehr auf dem Gehaltskonto<br><br>
<strong>Das ist ein starkes Verkaufsargument:</strong> „Sie kaufen die Wohnung, und das Finanzamt zahlt Ihnen ab nächstem Monat 300€ mehr Netto-Gehalt – damit finanzieren Sie einen Teil der Rate selbst."<br><br>
<strong>Hinweis:</strong> Antrag einmal jährlich beim zuständigen Finanzamt stellen (Formular: Antrag auf Lohnsteuerermäßigung).`
      },
      {
        q: "Wie \"finanziert sich die Wohnung von selbst\" – was steckt dahinter?",
        a: `Das ist kein Marketing-Slogan, sondern eine nachvollziehbare Rechnung:<br><br>
<strong>Monatliche Belastung (Beispiel):</strong><br>
Finanzierungsrate: -850€<br>
Hausgeld (nicht umlagefähig): -100€<br>
Instandhaltung: -30€<br>
<strong>Gesamt Kosten: -980€</strong><br><br>
<strong>Monatliche Einnahmen & Entlastungen:</strong><br>
Kaltmiete: +900€<br>
Steuerersparnis (Lohnsteuerermäßigung): +280€<br>
<strong>Gesamt Einnahmen: +1.180€</strong><br><br>
<strong>Monatlicher Überschuss: +200€</strong><br><br>
<em>Diese Zahlen variieren je nach Objekt und Steuersatz – nutze immer den Kalkulator für die individuelle Rechnung des Kunden.</em>`
      }
    ]
  },
  {
    title: "Der Verkaufsprozess",
    icon: "📋",
    items: [
      {
        q: "Wie läuft ein Verkauf von Erstgespräch bis Notartermin ab?",
        a: `<strong>1. Erstgespräch / Präsentation</strong><br>
Objekt vorstellen, Kalkulation zeigen, Interesse wecken. Ziel: Soft-Reservierung.<br><br>
<strong>2. Soft-Reservierung (72 Stunden)</strong><br>
Die Einheit wird für den Interessenten geblockt. Reservierungsgebühr: 1.000€. Der Käufer hat Zeit, Finanzierung zu prüfen und Familie zu konsultieren.<br><br>
<strong>3. Finanzierungsberatung</strong><br>
Zinsboutique kontaktiert den Kunden und prüft die Finanzierung. Selbstauskunft ausfüllen (im Portal).<br><br>
<strong>4. Hard-Reservierung (21 Tage)</strong><br>
Nach Finanzierungsbestätigung: Einheit ist 21 Tage fest reserviert für den Käufer.<br><br>
<strong>5. KVE-Anfrage (Kaufvertragsentwurf)</strong><br>
Notardaten des Käufers werden erfasst (KVE-Formular im Portal). Notar erstellt den Entwurf.<br><br>
<strong>6. Beurkundung beim Notar</strong><br>
Käufer und Verkäufer unterzeichnen – Kauf ist rechtlich bindend abgeschlossen.`
      },
      {
        q: "Was ist die Soft-Reservierung genau?",
        a: `Die Soft-Reservierung ist die erste verbindliche Absichtserklärung des Käufers. Mit Zahlung der <strong>1.000€ Reservierungsgebühr</strong> wird die Einheit für 72 Stunden exklusiv für ihn blockiert – kein anderer Interessent kann sie in dieser Zeit kaufen.<br><br>
<strong>Wichtige Details:</strong><br>
• Rückerstattung bei Beurkundung (wird auf den Kaufpreis angerechnet)<br>
• Keine Rückerstattung bei Rücktritt des Käufers<br>
• Rückerstattung wenn Finanzierung trotz vollständiger Unterlagen scheitert<br><br>
<strong>Im Gespräch:</strong> „Mit 1.000€ sichern Sie sich die Wohnung für 72 Stunden – dieser Betrag wird beim Kauf auf den Kaufpreis angerechnet, also kostenfrei."`
      },
      {
        q: "Was ist der KVE und wann wird er beantragt?",
        a: `KVE = Kaufvertragsentwurf. Das ist das Dokument, das der Notar erstellt bevor die Beurkundung stattfindet.<br><br>
<strong>Wann:</strong> Nach bestätigter Finanzierung, während der Hard-Reservierung.<br><br>
<strong>Was gebraucht wird:</strong> Vollständige Personalien des Käufers (Name, Adresse, Geburtsdatum, Ausweisnummer, Steuer-ID, ggf. Güterstand bei Verheirateten).<br><br>
<strong>Dein Job als VP:</strong> KVE-Formular im Portal ausfüllen → Daten gehen direkt an BCM weiter → Notar wird beauftragt.<br><br>
<strong>Zeitrahmen:</strong> Notar schickt den Entwurf ca. 2 Wochen vor Beurkundung – Käufer hat Zeit zu prüfen.`
      },
      {
        q: "Was passiert wenn der Kunde nach der Reservierung abspringt?",
        a: `Das passiert – und das ist nicht das Ende der Welt. Wichtig: Ruhig bleiben und professionell reagieren.<br><br>
<strong>Häufige Gründe:</strong><br>
• Partner/Familie ist dagegen → Lösung: Gemeinsames Gespräch anbieten<br>
• Finanzierung klappt nicht → Lösung: Zinsboutique früher einschalten<br>
• Kalte Füße / Angst → Lösung: Einwandbehandlung (siehe nächster Abschnitt)<br><br>
<strong>Prozess:</strong> Reservierung wird storniert, Einheit wird wieder freigegeben. 1.000€ Reservierungsgebühr verfällt (außer Finanzierung scheitert trotz vollständiger Unterlagen).<br><br>
<strong>Wichtig:</strong> Stornierung immer über BCM koordinieren – nicht eigenständig zusagen.`
      }
    ]
  },
  {
    title: "Einwandbehandlung",
    icon: "💬",
    items: [
      {
        q: "\"Das ist mir zu teuer\" – wie reagiere ich?",
        a: `Dieser Einwand bedeutet meistens nicht „zu teuer" sondern „ich sehe den Wert noch nicht". Niemals sofort nachgeben oder Preis rechtfertigen.<br><br>
<strong>Technik: Gegenfrage + Relativierung</strong><br><br>
<em>„Im Vergleich zu was zu teuer? Zu einem Tagesgeldkonto das 3% bringt – und der Inflation nicht standhält? Oder im Vergleich zu ETFs die 20% fallen können?"</em><br><br>
<em>„Teuer ist relativ. Diese Wohnung kostet Sie nach Steuer und Mieteinnahmen ca. 200€ im Monat – dafür bauen Sie monatlich Eigenkapital auf. Ist das teuer für eine Altersvorsorge die sich nahezu selbst trägt?"</em><br><br>
<strong>Dann:</strong> Kalkulator öffnen, echte Zahlen zeigen.`
      },
      {
        q: "\"Ich warte noch – Preise fallen doch gerade\" – wie reagiere ich?",
        a: `Einer der häufigsten Einwände. Faktenbasiert kontern:<br><br>
<strong>Antwort:</strong> <em>„Das stimmt, die Preise haben korrigiert. Aber schauen wir uns die Mieten an: Die sind in den letzten 2 Jahren um 15–20% gestiegen – die Renditen sind also besser als je zuvor. Wer auf den perfekten Kaufzeitpunkt wartet, verpasst oft Jahre an Mieteinnahmen."</em><br><br>
<em>„Wenn die Preise nochmal 10% fallen und Ihr Kaufpreis von 300.000€ auf 270.000€ sinkt – das sind 30.000€. Aber 2 Jahre Mieteinnahmen entgangener Altersvorsorge? Das holt man nicht zurück."</em><br><br>
<strong>Wichtig:</strong> Keine Preisprognosen machen. Auf Vermietbarkeit und Cashflow fokussieren.`
      },
      {
        q: "\"Immobilien sind zu riskant / unflexibel\" – wie reagiere ich?",
        a: `<strong>Auf „zu riskant":</strong><br>
<em>„Welches Investment ist risikofrei? ETFs können 50% fallen. Tagesgeld verliert real an Wert. Immobilien in gefragten Lagen hatten in 30 Jahren noch nie einen dauerhaften Wertverlust. Das Risiko ist da – aber kalkulierbar."</em><br><br>
<strong>Auf „unflexibel":</strong><br>
<em>„Stimmt – Immobilien sind kein Tagesgeld. Aber genau das ist der Vorteil: Sie können nicht in Panik verkaufen. Die besten Immobilienergebnisse entstehen bei denen, die einfach halten."</em><br><br>
<strong>Dann fragen:</strong> „Was genau meinen Sie mit Risiko – Leerstand? Finanzierung? Wertverlust?" – den spezifischen Einwand herausarbeiten und gezielt antworten.`
      },
      {
        q: "\"Ich habe kein/wenig Eigenkapital\" – wie reagiere ich?",
        a: `Erstmal prüfen: Wie viel ist „wenig"? Oft unterschätzen Kunden was sie haben.<br><br>
<strong>Antwort:</strong> <em>„Wie viel haben Sie aktuell liquide verfügbar? – Für eine Wohnung um 300.000€ brauchen wir ca. 30.000–35.000€ für Kaufnebenkosten. Den Rest finanziert die Bank. Haben Sie das nicht jetzt, aber in 6–12 Monaten? Dann schauen wir uns an, welche Objekte zu Ihrer Timeline passen."</em><br><br>
<strong>Wenn wirklich zu wenig:</strong> Ehrlich sein. Lieber keinen schlechten Abschluss machen als einen Kunden überfordern. Kontakt halten und in 12 Monaten reaktivieren.`
      },
      {
        q: "\"Die Zinsen sind zu hoch\" – wie reagiere ich?",
        a: `Aktuell ein sehr häufiger Einwand. Zwei Strategien:<br><br>
<strong>Strategie 1: Zinsen relativieren</strong><br>
<em>„Bei 4% Zins und 80% Finanzierung zahlen Sie ca. 800€ Zinsen im Monat – aber davon sind 80% steuerlich absetzbar. Effektiv zahlen Sie bei 42% Steuersatz nur ca. 464€ Zinsen netto. Dazu trägt der Mieter die Rate mit."</em><br><br>
<strong>Strategie 2: Kaufpreisfaktor-Argument</strong><br>
<em>„Die Kaufpreise sind seit 2022 um 10–15% gefallen. Das gleicht die Zinssteigerung fast vollständig aus – die monatliche Rate ist nicht viel höher als 2021."</em><br><br>
<strong>Dann:</strong> Im Kalkulator konkret durchrechnen.`
      }
    ]
  },
  {
    title: "Do's & Don'ts im Gespräch",
    icon: "✅",
    items: [
      {
        q: "Was sollte ich im Kundengespräch immer tun?",
        a: `<strong>✅ Immer mit konkreten Zahlen arbeiten</strong><br>
Zeig den Kalkulator. Abstrakte Versprechen überzeugen nicht – eine Zeile „Ihre monatliche Belastung nach Steuer: 180€" schon.<br><br>
<strong>✅ Fragen stellen, bevor du verkaufst</strong><br>
„Was ist Ihr Ziel – Altersvorsorge, Steueroptimierung oder Vermögensaufbau?" – dann auf dieses Ziel einzahlen.<br><br>
<strong>✅ Einwände ausreden lassen</strong><br>
Nicht sofort unterbrechen. Vollständig zuhören, dann erst antworten.<br><br>
<strong>✅ Nächsten Schritt immer klar benennen</strong><br>
„Was passiert als nächstes?" – am Ende jedes Gesprächs. Kein offenes Ende.<br><br>
<strong>✅ Zinsboutique früh einschalten</strong><br>
Je früher die Finanzierbarkeit geprüft wird, desto weniger Überraschungen später.`
      },
      {
        q: "Was sollte ich unbedingt vermeiden?",
        a: `<strong>❌ Renditeversprechen machen</strong><br>
Nie sagen: „Diese Wohnung bringt garantiert X%." Immer: „Nach unserer Kalkulation mit konservativen Annahmen." Rechtliches Risiko.<br><br>
<strong>❌ Steuerberatung ersetzen wollen</strong><br>
Du erklärst das Konzept – der Steuerberater berechnet den individuellen Vorteil. Immer empfehlen: „Das sollten Sie mit Ihrem Steuerberater abstimmen."<br><br>
<strong>❌ Druck machen</strong><br>
„Nur noch 1 Wohnung verfügbar!" als Lüge. Wenn es stimmt – sag es. Wenn nicht – lass es. Vertrauen ist dein wichtigstes Asset.<br><br>
<strong>❌ Objekte verkaufen, die du nicht kennst</strong><br>
Nutze den Standort-Tab im Portal. Kenne die Lage, den Verwalter, die Mietstruktur. Kunden merken sofort wenn du oberflächlich bist.<br><br>
<strong>❌ Reservierung zu früh pushen</strong><br>
Erst Einwände vollständig behandeln, dann Reservierung ansprechen. Wer zu früh zur Kasse bittet, verliert Vertrauen.`
      }
    ]
  },
  {
    title: "Wichtige Begriffe – Glossar",
    icon: "📖",
    items: [
      {
        q: "Die wichtigsten Fachbegriffe kurz erklärt",
        a: `<div style="display:grid;gap:8px">
<div><strong>AfA</strong> – Absetzung für Abnutzung. Jährliche steuerliche Abschreibung des Gebäudewertes.</div>
<div><strong>Beurkundung</strong> – Notariell beglaubigter Vertragsabschluss. Ab hier ist der Kauf rechtlich bindend.</div>
<div><strong>Bruttorendite</strong> – Jahresmiete ÷ Kaufpreis × 100. Ohne Kostenabzug.</div>
<div><strong>Cashflow</strong> – Monatlicher Überschuss oder Fehlbetrag nach allen Kosten und Einnahmen.</div>
<div><strong>Eigenkapital</strong> – Eigene Mittel des Käufers (nicht finanzierter Teil).</div>
<div><strong>Hausgeld</strong> – Monatliche Zahlung an die Eigentümergemeinschaft (Verwaltung, Rücklagen, Betriebskosten).</div>
<div><strong>Hard-Reservierung</strong> – 21-tägige feste Reservierung nach Finanzierungsbestätigung.</div>
<div><strong>Instandhaltungsrücklage</strong> – Rücklage für Reparaturen und Modernisierungen.</div>
<div><strong>KfW</strong> – Kreditanstalt für Wiederaufbau. Staatliche Bank mit Förderprogrammen für Energieeffizienz.</div>
<div><strong>Kaufpreisfaktor</strong> – Kaufpreis ÷ Jahresnettomiete. Gibt an, nach wie vielen Jahren sich die Investition amortisiert.</div>
<div><strong>KVE</strong> – Kaufvertragsentwurf. Notariell ausgearbeiteter Vertragsentwurf vor Beurkundung.</div>
<div><strong>Leverage-Effekt</strong> – Hebel: Mit wenig Eigenkapital eine große Investition steuern. Mietrendite auf das eingesetzte Eigenkapital kann sehr hoch sein.</div>
<div><strong>Lohnsteuerermäßigung</strong> – Antrag beim Finanzamt: Steuervorteil wird monatlich auf dem Gehaltszettel gutgeschrieben statt erst im Jahresausgleich.</div>
<div><strong>Nettorendite</strong> – Rendite nach Abzug aller Kosten. Realistischere Kennzahl als Bruttorendite.</div>
<div><strong>Soft-Reservierung</strong> – 72-stündige Reservierung nach Zahlung der 1.000€ Reservierungsgebühr.</div>
<div><strong>Vervielfältiger</strong> – Anderer Begriff für Kaufpreisfaktor.</div>
<div><strong>Werbungskosten</strong> – Alle Kosten im Zusammenhang mit Vermietung, steuerlich absetzbar.</div>
<div><strong>Zinsboutique</strong> – Unser Finanzierungspartner. Kümmert sich um Finanzierungsberatung und KfW-Anträge.</div>
</div>`
      }
    ]
  }
];
