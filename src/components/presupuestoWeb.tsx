import React, { useState, useEffect } from "react";

const PresupuestoWeb = () => {
  const [total, setTotal] = useState<number>(0);
  const [numPaginas, setNumPaginas] = useState<number>(0);
  const [numIdiomas, setNumIdiomas] = useState<number>(0);
  const [extras, setExtras] = useState<boolean>(false);
  const [seoChecked, setSeoChecked] = useState<boolean>(false);
  const [adsChecked, setAdsChecked] = useState<boolean>(false);

  const PRECIO_PAGINAS = 30;
  const PRECIO_WEB = 500;
  const PRECIO_SEO = 300;
  const PRECIO_ADS = 200;

  useEffect(() => {
    const precioPaginas = extras ? numPaginas * numIdiomas * PRECIO_PAGINAS : 0;
    const precioWeb = extras ? PRECIO_WEB : 0;
    const precioSeo = seoChecked ? PRECIO_SEO : 0;
    const precioAds = adsChecked ? PRECIO_ADS : 0;

    const totalCalculado = precioPaginas + precioWeb + precioSeo + precioAds;
    const totalValidado = Math.max(totalCalculado, 0);

    setTotal(totalValidado);
  }, [numPaginas, numIdiomas, extras, seoChecked, adsChecked]);

  const handleNumPaginasChange = (increment: number) => {
    const newValue = numPaginas + increment;
    if (newValue >= 0) {
      setNumPaginas(newValue);
    }
  };

  const handleNumIdiomasChange = (increment: number) => {
    const newValue = numIdiomas + increment;
    if (newValue >= 0) {
      setNumIdiomas(newValue);
    }
  };

  const handleSeoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSeoChecked(e.target.checked);
  };

  const handleAdsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAdsChecked(e.target.checked);
  };

  return (
    <div className="container">
      <h1 className="text-2xl">Qué quieres hacer?</h1>
      <div>
        <input
          type="checkbox"
          id="checkbox1"
          onChange={() => setExtras(!extras)}
          className="mr-2"
        />
        <label htmlFor="checkbox1">Una página web (500€)</label>
        {extras && (
          <>
            <div>
              <label htmlFor="numPaginas">Número de páginas:</label>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => handleNumPaginasChange(1)}
              >
                +
              </button>
              <span className="mr-2 ml-2">{numPaginas}</span>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => handleNumPaginasChange(-1)}
              >
                -
              </button>
            </div>
            <div>
              <label htmlFor="numIdiomas">Número de idiomas:</label>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => handleNumIdiomasChange(1)}
              >
                +
              </button>
              <span className="mr-2 ml-2">{numIdiomas}</span>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => handleNumIdiomasChange(-1)}
              >
                -
              </button>
            </div>
          </>
        )}
      </div>
      <div>
        <input
          type="checkbox"
          id="checkbox2"
          checked={seoChecked}
          onChange={handleSeoChange}
          className="mr-2"
        />
        <label htmlFor="checkbox2">Una consultoría SEO (300€)</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="checkbox3"
          checked={adsChecked}
          onChange={handleAdsChange}
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
