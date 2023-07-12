import { useState } from 'react';

const PresupuestoWeb = () => {
  const [total, setTotal] = useState<number>(0);

  const updateTotal = (amount: number, isChecked: boolean) => {
    setTotal(prevTotal => isChecked ? prevTotal + amount : prevTotal - amount);
  };

  return (
    <div className="container">
      <h1 className="text-2xl">Qué quieres hacer?</h1>
      <div>
        <input
          type="checkbox"
          id="checkbox1"
          onChange={e => updateTotal(500, e.target.checked)}
          className="mr-2"
        />
        <label htmlFor="checkbox1">Una página web (500€)</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="checkbox2"
          onChange={e => updateTotal(300, e.target.checked)}
          className="mr-2"
        />
        <label htmlFor="checkbox2">Una consultoria SEO (300€)</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="checkbox3"
          onChange={e => updateTotal(200, e.target.checked)}
          className="mr-2"
        />
        <label htmlFor="checkbox3">Una campaña de Google Ads (200€)</label>
      </div>
      <h2 className="mt-4">Precio: <span id="total">{total}€</span></h2>
    </div>
  );
};

export default PresupuestoWeb;
