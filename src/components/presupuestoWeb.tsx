import React, { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

const PresupuestoWeb = () => {
  const [total, setTotal] = useLocalStorage<number>('total', 0);
  const [numPaginas, setNumPaginas] = useLocalStorage<number>('numPaginas', 0);
  const [numIdiomas, setNumIdiomas] = useLocalStorage<number>('numIdiomas', 0);
  const [extras, setExtras] = useLocalStorage<boolean>('extras', false);
  const [seoChecked, setSeoChecked] = useLocalStorage<boolean>('seoChecked', false);
  const [adsChecked, setAdsChecked] = useLocalStorage<boolean>('adsChecked', false);
  const [webChecked, setWebChecked] = useLocalStorage<boolean>('webChecked', false);

  const PRECIO_PAGINAS = 30;
  const PRECIO_WEB = 500;
  const PRECIO_SEO = 300;
  const PRECIO_ADS = 200;

  useEffect(() => {
    const precioPaginas = extras ? numPaginas * numIdiomas * PRECIO_PAGINAS : 0;
    const precioWeb = extras || webChecked ? PRECIO_WEB : 0;
    const precioSeo = seoChecked ? PRECIO_SEO : 0;
    const precioAds = adsChecked ? PRECIO_ADS : 0;

    const totalCalculado = precioPaginas + precioWeb + precioSeo + precioAds;
    const totalValidado = Math.max(totalCalculado, 0);

    setTotal(totalValidado);
  }, [numPaginas, numIdiomas, extras, seoChecked, adsChecked, webChecked]);

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
          checked={webChecked}
          onChange={() => {
            setWebChecked(!webChecked);
            setExtras(!extras);
          }}
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
