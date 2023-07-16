import { useState, useEffect } from "react";

const PresupuestoWeb = () => {
  const [total, setTotal] = useState<number>(0);
  const [numPaginas, setNumPaginas] = useState<number>(0);
  const [numIdiomas, setNumIdiomas] = useState<number>(0);
  const [extras, setextras] = useState<boolean>(false);

  const updateTotal = (amount: number, isChecked: boolean) => {
    setTotal((prevTotal) =>
      isChecked ? prevTotal + amount : prevTotal - amount
    );
  };

  useEffect(() => {
    const precioPaginas = numPaginas * numIdiomas * 30;
    const SEO_PRICE = 300;
    const ADS_PRICE = 200;
    setTotal(precioPaginas + (extras ? SEO_PRICE : 0) + (extras ? ADS_PRICE : 0));
  }, [numPaginas, numIdiomas, extras]);

  const handleNumPaginasChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value >= 0) {
      setNumPaginas(value);
    }
    console.log("paginas cambio");
  };

  const handleNumIdiomasChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value >= 0) {
      setNumIdiomas(value);
    }
    console.log("idiomas cambio");
  };

  return (
    <div className="container">
      <h1 className="text-2xl">Qué quieres hacer?</h1>
      <div>
        <input
          type="checkbox"
          id="checkbox1"
          onChange={(e) => {
            updateTotal(500, e.target.checked);
            setextras(e.target.checked);
          }}
          className="mr-2"
        />
        <label htmlFor="checkbox1">Una página web (500€)</label>
        {extras && (
          <>
            <div>
              <label htmlFor="numPaginas">Número de páginas:</label>
              <input
                type="number"
                id="numPaginas"
                onChange={handleNumPaginasChange}
                value={numPaginas}
                className="mr-2 ml-2"
              />
            </div>
            <div>
              <label htmlFor="numIdiomas">Número de idiomas:</label>
              <input
                type="number"
                id="numIdiomas"
                onChange={handleNumIdiomasChange}
                value={numIdiomas}
                className="mr-2 ml-2"
              />
            </div>
          </>
        )}
      </div>
      <div>
        <input
          type="checkbox"
          id="checkbox2"
          onChange={(e) => updateTotal(300, e.target.checked)}
          className="mr-2"
        />
        <label htmlFor="checkbox2">Una consultoria SEO (300€)</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="checkbox3"
          onChange={(e) => updateTotal(200, e.target.checked)}
          className="mr-2"
        />
        <label htmlFor="checkbox3">Una campaña de Google Ads (200€)</label>
      </div>
      <h2 className="mt-4">
        Precio: <span id="total">{total}€</span>
      </h2>
    </div>
  );
};

export default PresupuestoWeb;
