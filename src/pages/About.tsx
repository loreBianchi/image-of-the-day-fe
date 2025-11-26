import React from 'react';
import { WorkflowDesc } from '../components/WorflowDesc';

const About: React.FC = () => {
  return (
    <div className="text-white">
      <h1 className="text-4xl font-bold mb-6">Chi Siamo</h1>
      <p className="mb-4">
        Benvenuti su Image of the Day! Siamo appassionati di intelligenza artificiale e arte digitale, e il nostro obiettivo è portare ogni giorno un'immagine unica generata dall'IA direttamente a voi.
      </p>
      <p className="mb-4">
        Il nostro team è composto da sviluppatori, designer e appassionati di tecnologia che credono nel potere dell'IA per ispirare creatività e innovazione. Utilizziamo modelli avanzati di intelligenza artificiale per creare immagini sorprendenti che stimolano l'immaginazione e offrono nuove prospettive artistiche.
      </p>
      <p className="mb-4">
        Grazie per essere parte della nostra comunità. Speriamo che le nostre creazioni vi ispirino tanto quanto ispirano noi!
      </p>
      <p className="mb-4">
        Se avete domande, suggerimenti o volete semplicemente dire ciao, non esitate a contattarci!
      </p>
      <p className="font-semibold">Il Team di Image of the Day</p>

      <WorkflowDesc />
    </div>
  );
};

export default About;