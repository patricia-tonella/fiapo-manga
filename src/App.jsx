import React, { useState } from 'react';
import './App.css'; 

// Banco de dados simulado com textos amigáveis (User-Friendly)
const scenarios = [
  {
    id: 1,
    imageUrl: 'https://images.unsplash.com/photo-1544568100-847a948585b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    mood: 'Feliz e relaxado',
    moodSub: 'Tudo ótimo por aqui!',
    physical: 'Confortável',
    physicalSub: 'Nenhum sinal de dor facial',
    color: '#34d399',
    isThermal: false,
    targetLabel: 'LEITURA CONCLUÍDA'
  },
  {
    id: 2,
    imageUrl: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    mood: 'Com Medo',
    moodSub: 'Precisa de acolhimento',
    physical: 'Desconforto Leve',
    physicalSub: 'Sinais sutis de estresse',
    color: '#facc15', 
    isThermal: false,
    targetLabel: 'LEITURA CONCLUÍDA'
  },
  {
    id: 3,
    imageUrl: 'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    mood: 'Assustado',
    moodSub: 'Verifique o ambiente',
    physical: 'Tenso',
    physicalSub: 'Músculos faciais contraídos',
    color: '#f97316', 
    isThermal: false,
    targetLabel: 'LEITURA CONCLUÍDA'
  },
  {
    id: 4,
    imageUrl: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    mood: 'Ansioso',
    moodSub: 'Possível tédio ou saudade',
    physical: 'Incomodado',
    physicalSub: 'Sinais de aperto nos olhos',
    color: '#fb923c', 
    isThermal: false,
    targetLabel: 'LEITURA CONCLUÍDA'
  },
  {
    id: 5,
    imageUrl: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    mood: 'Apático',
    moodSub: 'Atenção veterinária recomendada',
    physical: 'Alerta de Febre',
    physicalSub: 'Aquecimento detectado nos olhos/orelhas',
    color: '#ef4444', 
    isThermal: true,
    targetLabel: 'VISÃO TÉRMICA ATIVA'
  }
];

export default function App() {
  const [status, setStatus] = useState('idle');
  const [scanLine, setScanLine] = useState(false);
  const [currentResult, setCurrentResult] = useState(scenarios[0]);

  const handleUpload = () => {
    const randomIndex = Math.floor(Math.random() * scenarios.length);
    setCurrentResult(scenarios[randomIndex]);

    setStatus('analyzing');
    setTimeout(() => {
      setStatus('result');
      setTimeout(() => setScanLine(true), 100);
    }, 3000);
  };

  return (
    <div className="app-container">
      <div className="glow glow-orange"></div>
      <div className="glow glow-green"></div>

      <div className="glass-card">
        
        {/* Cabeçalho */}
        <header className="header">
           <div className="logo-box">
             <svg width="24" height="24" viewBox="0 0 24 24" fill="url(#mango-grad)" stroke="none">
               <defs>
                 <linearGradient id="mango-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                   <stop offset="0%" stopColor="#fb923c" />
                   <stop offset="100%" stopColor="#f59e0b" />
                 </linearGradient>
               </defs>
               <path d="M12 8.5c-1.5 0-2.8.9-3.4 2.2-.4.8-1 1.7-1.9 2.1-1.3.6-2.5 1.6-3.2 2.9-.6 1.1-.9 2.3-.9 3.5 0 3.2 2.6 5.8 5.8 5.8 1.3 0 2.6-.4 3.6-1.2.6-.5 1.4-.5 2 0 1 .8 2.3 1.2 3.6 1.2 3.2 0 5.8-2.6 5.8-5.8 0-1.2-.3-2.4-.9-3.5-.7-1.3-1.9-2.3-3.2-2.9-.9-.4-1.5-1.3-1.9-2.1-.6-1.3-1.9-2.2-3.4-2.2zM7.5 7C8.9 7 10 5.9 10 4.5S8.9 2 7.5 2 5 3.1 5 4.5 6.1 7 7.5 7zm9 0c1.4 0 2.5-1.1 2.5-2.5S17.9 2 16.5 2 14 3.1 14 4.5 15.1 7 16.5 7zM3.5 12C4.9 12 6 10.9 6 9.5S4.9 7 3.5 7 1 8.1 1 9.5 2.1 12 3.5 12zm17 0c1.4 0 2.5-1.1 2.5-2.5S21.9 7 20.5 7 18 8.1 18 9.5 19.1 12 20.5 12z"/>
             </svg>
           </div>
           <div className="titles">
             <h1>Fiapo de Manga</h1>
             <p>SAÚDE PREDITIVA CANINA</p>
           </div>
        </header>

        {/* Barra de Status da Câmera (AIoT) */}
        <div className="cam-status-bar" title="Integração com hardware térmico AIoT em desenvolvimento">
           <div className="cam-status-left">
              <span className="cam-indicator offline"></span>
              <span className="cam-status-text">Fiapo Cam Desconectada</span>
           </div>
           <button 
             className="btn-cam-disabled" 
             disabled 
             aria-label="Integração com a Fiapo Cam estará disponível nas próximas atualizações"
           >
              Em breve
           </button>
        </div>

        {/* Telas */}
        {status === 'idle' && (
          <div className="view fade-in">
            <h2>Como seu pet está hoje?</h2>
            <p className="subtitle">
              Envie uma foto ou video com foco no rostinho dele,  Nossa <span className="highlight">Inteligência Artificial</span> ajuda a traduzir o que ele está sentindo.
            </p>
            <button className="upload-box" onClick={handleUpload}>
               <div className="upload-icon">📷</div>
               <span>Enviar foto ou vídeo do pet</span>
            </button>
          </div>
        )}

        {status === 'analyzing' && (
          <div className="view analyzing fade-in">
            <div className="spinner-container">
               <div className="spinner-ring" style={{ borderTopColor: currentResult.color }}></div>
               <div className="spinner-core">🧠</div>
            </div>
            <h3 style={{ color: currentResult.color }}>Analisando imagem...</h3>
            <p>Lendo microexpressões e sinais vitais</p>
          </div>
        )}

        {status === 'result' && (
          <div className="view fade-in">
             
             {/* Imagem e IA Visual */}
             <div className={`image-container ${currentResult.isThermal ? 'thermal-mode' : ''}`}>
                <img src={currentResult.imageUrl} alt="Dog scan" />
                
                <div 
                  className={`scanner-line ${scanLine ? 'scan-active' : ''}`}
                  style={{ background: currentResult.color, boxShadow: `0 0 15px ${currentResult.color}` }}
                ></div>
                
                <div 
                  className="bounding-box" 
                  style={{ borderColor: currentResult.color, backgroundColor: `${currentResult.color}1A` }}
                >
                   <span className="box-label" style={{ backgroundColor: currentResult.color, color: currentResult.color === '#facc15' || currentResult.color === '#34d399' ? '#000' : '#fff' }}>
                     {currentResult.targetLabel}
                   </span>
                   
                   {currentResult.isThermal ? (
                     <>
                        <div className="thermal-hotspot hotspot-eye-l"></div>
                        <div className="thermal-hotspot hotspot-eye-r"></div>
                        <div className="thermal-hotspot hotspot-ear-l"></div>
                     </>
                   ) : (
                     <>
                        <div className="landmark eye-left" style={{ background: '#facc15', boxShadow: '0 0 0 3px rgba(250, 204, 21, 0.3)' }}></div>
                        <div className="landmark eye-right" style={{ background: '#facc15', boxShadow: '0 0 0 3px rgba(250, 204, 21, 0.3)' }}></div>
                        <div className="landmark nose" style={{ background: '#f97316', boxShadow: '0 0 0 3px rgba(249, 115, 22, 0.3)' }}></div>
                     </>
                   )}
                </div>
             </div>

             {/* Métricas Dinâmicas (User Friendly) */}
             <div className="metrics">
                <div className="metric-card">
                   <span className="metric-title">Estado de Espírito</span>
                   <span className="metric-value" style={{ color: currentResult.color, fontSize: '0.95rem' }}>{currentResult.mood}</span>
                   <span className="metric-sub">{currentResult.moodSub}</span>
                </div>
                <div className="metric-card">
                   <span className="metric-title">Avaliação Física</span>
                   <span className="metric-value" style={{ color: currentResult.color, fontSize: '0.95rem' }}>{currentResult.physical}</span>
                   <span className="metric-sub">{currentResult.physicalSub}</span>
                </div>
             </div>

             <button 
                className="btn-primary" 
                onClick={() => { setStatus('idle'); setScanLine(false); }}
             >
                Fazer nova leitura
             </button>
          </div>
        )}
      </div>
    </div>
  );
}