import React, { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

const PresupuestoWeb = () => {
  const [total, setTotal] = useLocalStorage("total", 0);
  const [numPaginas, setNumPaginas] = useLocalStorage("numPaginas", 0);
  const [numIdiomas, setNumIdiomas] = useLocalStorage("numIdiomas", 0);
  const [extras, setExtras] = useLocalStorage("extras", false);
  const [seoChecked, setSeoChecked] = useLocalStorage("seoChecked", false);
  const [adsChecked, setAdsChecked] = useLocalStorage("adsChecked", false);
  const [webChecked, setWebChecked] = useLocalStorage("webChecked", false);

  const PRECIO_PAGINAS = 30;
  const PRECIO_WEB = 500;
  const PRECIO_SEO = 300;
  const PRECIO_ADS = 200;

  useEffect(() => {
    const precioPaginas = extras ? numPaginas * numIdiomas * PRECIO_PAGINAS : 0;
    const precioWeb = webChecked ? PRECIO_WEB : 0;
    const precioSeo = seoChecked ? PRECIO_SEO : 0;
    const precioAds = adsChecked ? PRECIO_ADS : 0;

    const totalCalculado = precioPaginas + precioWeb + precioSeo + precioAds;
    const totalValidado = Math.max(totalCalculado, 0);

    setTotal(totalValidado);
  }, [
    numPaginas,
    numIdiomas,
    extras,
    seoChecked,
    adsChecked,
    webChecked,
    setTotal,
  ]);

  const handleNumChange = (
    increment: number,
    setState: React.Dispatch<React.SetStateAction<number>>
  ) => {
    setState((prevValue) => {
      const newValue = prevValue + increment;
      return newValue >= 0 ? newValue : prevValue;
    });
  };

  const handleCheckboxChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    setState: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    setState(e.target.checked);
    setExtras(!extras);
  };

  return (
    <div className="container">
      <h1 className="text-2xl">Qué quieres hacer?</h1>
      <div>
        <input
          type="checkbox"
          id="checkbox1"
          checked={webChecked}
          onChange={(e) => handleCheckboxChange(e, setWebChecked)}
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
                onClick={() => handleNumChange(1, setNumPaginas)}
              >
                +
              </button>
              <span className="mr-2 ml-2">{numPaginas}</span>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => handleNumChange(-1, setNumPaginas)}
              >
                -
              </button>
            </div>
            <div>
              <label htmlFor="numIdiomas">Número de idiomas:</label>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => handleNumChange(1, setNumIdiomas)}
              >
                +
              </button>
              <span className="mr-2 ml-2">{numIdiomas}</span>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => handleNumChange(-1, setNumIdiomas)}
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
          onChange={(e) => setSeoChecked(e.target.checked)}
          className="mr-2"
        />
        <label htmlFor="checkbox2">Una consultoría SEO (300€)</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="checkbox3"
          checked={adsChecked}
          onChange={(e) => setAdsChecked(e.target.checked)}
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
