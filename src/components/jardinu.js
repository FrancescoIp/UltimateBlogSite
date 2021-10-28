import React from 'react'
import { Col, Row, Image } from 'react-bootstrap'
import jardino1 from '../images/jardinu/jardinu-1.jpeg'
import jardino2 from '../images/jardinu/jardinu-prima.jpeg'
import jardino3 from '../images/jardinu/jardinu-dopo.jpeg'
import jardino4 from '../images/jardinu/jardinu-future.jpeg'
import './jardinu.scss'

const Jardinu = () => {
  return (
    <div className="wrapper py-3" id="jardinu-section">
      <div className=" text-bg container">
        <Row className="pt-3">
          <Col xs={12} className="py-3" >
            <h2>Adottiamo l’Annunziata</h2>
            <p>
              Abbiamo scelto di iniziare la nostra attività focalizzandoci su uno dei luoghi simbolo della città di Termini Imerese: la Chiesa Maria Santissima Annunziata. Un’architettura identitaria nonché un landmark, è questo che rappresenta la Chiesa per la città. La sua cupola azzurra rivestita di maioliche lascia a bocca aperta ogni volta che la si osservi.

              Ma la Chiesa ed il suo giardino, incastonati nel centro storico della città, purtroppo sono chiusi al pubblico da alcuni anni e lasciati al degrado del tempo e del vandalismo.

              Il nostro obiettivo è quello di adottare questo luogo, riattivarlo e restituirlo alla comunità. Ma come? Vogliamo ridare nuova vita ai suoi spazi attraverso l’organizzazione di eventi e lo sviluppo di un orto sociale che coinvolga tutta la comunità termitana, dal singolo cittadino alle associazioni. Bello direte voi...ma nella pratica?
            </p>
          </Col>
          <Col xs={12} className="img-fluid">
            <Image src={jardino1} fluid />
          </Col>
          <Col xs={12}>
            <h2>
              Un progetto per far rivivere il  giardino
            </h2>
            <p>
              Ad oggi, i giardini rappresentano una porzione di paesaggio in cui l’individuo può relazionarsi con la natura e con gli altri cittadini. Sono dei luoghi preziosi per le città che negli anni precedenti sono state soggette ad una cementificazione selvaggia.

              Il giardino della Chiesa Maria SS Annunziata rappresenta quindi un luogo di importanza storica ma anche di importanza comunitaria, essendo uno dei pochi giardini che ha resistito alla cementificazione.
            </p>
          </Col>
          <Col xs={12} className="img-fluid">
            <Image src={jardino2} fluid />
          </Col>
          <Col xs={12}>
            <p>
              Il lungo periodo di abbandono ha reso il giardino una vera e propria discarica a cielo aperto, motivo per il quale noi di Himerazione, come primo passo, abbiamo provveduto alla sua pulizia . Ma il nostro scopo non è il semplice mantenimento del bene in uno stato di decoro, ma un impegno sociale che porti l’intera comunità a dialogare per favorire e stimolare le iniziative volontarie dei cittadini con fini di pubblico interesse indirizzati al rispetto ed alla protezione dell’ambiente urbano.
            </p>
          </Col>
          <Col xs={12} className="img-fluid">
            <Image src={jardino3} fluid />
          </Col>
          <Col xs={12}>
            <p>
              revediamo la sistemazione del giardino attuale con l'integrazione di nuove specie arboree ed erbacee e la realizzazione di un teatro all'aperto . Perché  crediamo che uno spazio ben pensato e progettato possa favorire lo svolgimento di differenti attività culturali e stimolare l'incontro con molteplici attori. Perché è solo attraverso il dialogo con altre associazioni e con il resto della comunità che il giardino e la chiesa Maria SS Annunziata possono tornare al centro della vita  comunitaria .

              Le attività che vogliamo organizzare insieme alle altre associazioni  del luogo comprendono la realizzazione di un orto sociale , laboratori artistici e riunioni collettive.</p>
          </Col>
          <Col xs={12} className="img-fluid">
            <Image src={jardino4} fluid />
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Jardinu