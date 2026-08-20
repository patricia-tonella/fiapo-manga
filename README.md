# 🥭 Fiapo de Manga.AI - MVP Prototype

Este repositório contém a Prova de Conceito (PoC) da interface do aplicativo **Fiapo de Manga.AI**, um projeto de HealthTech e AIoT focado em saúde preditiva canina (ênfase em cães SRD).

## 🧠 Arquitetura Teórica (Edge AI)

Conforme detalhado no Business Plan, este frontend foi desenhado para interagir com um pipeline de Visão Computacional que roda via **Edge Computing**:

* **Detecção (YOLOv10):** Segmentação facial e bounding boxes focados na diversidade fenotípica de cães brasileiros.
* **Mapeamento (DogFACS):** Extração de 46 marcos faciais anatômicos.
* **Termografia (IRT):** Fusão de dados RGB-Térmicos (Hipertermia Induzida por Estresse) via câmera AIoT.

## 🛠️ Tecnologias Utilizadas no Protótipo

* React.js + Vite
* Glassmorphism UI (CSS Nativo)
* Renderização Condicional Dinâmica (Simulação de predições do modelo multitarefa)

## 🚀 Como rodar localmente

1. \`npm install\`
2. \`npm run dev\`
3. Acesse \`<http://localhost:5173\`>
