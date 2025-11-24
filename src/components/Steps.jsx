import selezioneChicchi from '../img/selezione_chicchi.png';
import usacareBoabe from '../img/usacare_boabe.png';
import prajealaBoabe from '../img/prajeala_boabe.png';

function Steps() {
  const steps = [
    {
      id: 1,
      number: '01',
      image: selezioneChicchi,
      description: 'Recoltare selectivă: Culeșem manual doar cirezele perfect coapte, asigurând calitatea superioară a fiecărui bob.',
      cardMove: false
    },
    {
      id: 2,
      number: '02',
      image: usacareBoabe,
      description: 'Procesare și uscare: Aplicăm metode naturale sau umed pentru a extrage boabele, apoi le uscăm cu grijă pentru a dezvolta aromele complexe.',
      cardMove: true
    },
    {
      id: 3,
      number: '03',
      image: prajealaBoabe,
      description: 'Prăjire artizanală: Prăjim boabele la temperaturi precise pentru a dezvălui aromele unice, apoi le măcinăm proaspăt pentru fiecare ceașcă.',
      cardMove: false
    }
  ];

  return (
    <section className="steps" id="steps">
      <div className="steps__bg section">
        <h2 className="section__title">De la boabă la ceașcă: Procesul nostru</h2>

        <div className="steps__container container grid">
          <div className="steps__content">
            {steps.map((step) => (
              <div key={step.id} className={`steps__card ${step.cardMove ? 'steps__card-move' : ''}`}>
                <div className="steps__circle">
                  <div className="steps__subcircle">{step.number}</div>

                  <div style={{
                    width: '80%',
                    height: '80%',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <img src={step.image} alt="steps image" style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }} />
                  </div>
                </div>

                <p className="steps__description">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Steps;
