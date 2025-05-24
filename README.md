# Kursbuchungsportal

Ein einfaches Kursbuchungsportal mit React, welches Nutzern die Anmeldung und Buchung von Informatik-Kursen ermöglicht.

## 🛠 Projektübersicht

- ✅ Zwei Seiten mit React Router (`react-router-dom`)
- ✅ Eigene Komponentenstruktur (`HomePage`, `BookingPage`)
- ✅ Nutzung von `useState` und Eventhandlern (`onChange`, `onSubmit`, `onClick`)
- ✅ Dynamische Formularverarbeitung und Kursbuchung
- ✅ Responsives Design über einfache CSS-Styling
- ✅ Projektbeschreibung in dieser `README.md`

## 🔧 Technologien

- React
- React Router
- CSS
- JavaScript

## 🧭 Seitenübersicht

### 1. HomePage
- Formular mit Feldern: Vorname, Nachname, E-Mail
- Nach dem Absenden erfolgt die Navigation zur Buchungsseite (`/booking`)

### 2. BookingPage
- Liste von Softwareentwicklungskursen
- Jeder Kurs kann über einen **Button** gebucht werden
- Bereits gebuchte Kurse werden als **„Gebucht“** angezeigt und sind nicht mehr klickbar
- Gebuchte Kurse werden unterhalb der Liste nochmals dargestellt

## 🔨 In Arbeit

- Interaktive Kursdetails mit Informationen zu Inhalten und Veranstaltungszeiten durch Anklicken der Kursnamen  
- Mehrstufiger Buchungsprozess mit Bestätigung und Überprüfung der ausgewählten Kurse  
- Benutzerprofilseite zur Übersicht und Verwaltung der gebuchten Kurse  
- Persistente Speicherung der Nutzerdaten und Buchungen über `localStorage`  
  
## 🚀 Projekt starten

```bash
npm install
npm start
```

