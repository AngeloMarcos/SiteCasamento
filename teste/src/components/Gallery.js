// src/components/Gallery.js
import React, { useMemo } from 'react';
import './Gallery.css';

// Importe aqui suas imagens (repita/importe até 10 ou mais)
import img1  from '../assets/img1.jpg';
import img2  from '../assets/img2.jpg';
import img3  from '../assets/img3.jpg';
import img4  from '../assets/img4.jpg';
import img5  from '../assets/img5.jpg';
import img6  from '../assets/img6.jpg';

// Coloque todas elas num array
const basePhotos = [ img1, img2, img3, img4, img5, img6 ];

// Quantidade total de tiles (ajuste conforme quiser)
const TOTAL_TILES = 30;

// Função que sorteia um tamanho de tile (1×1, 1×2, 2×1 ou 2×2)
function getRandomSpan() {
  const r = Math.random();
  if (r < 0.1)   return { rows: 2, cols: 2 };
  if (r < 0.4)   return { rows: 1, cols: 2 };
  if (r < 0.7)   return { rows: 2, cols: 1 };
  return { rows: 1, cols: 1 };
}

export default function Gallery() {
  // Monta o array de tiles repetindo fotos até TOTAL_TILES
  const tiles = useMemo(() => {
    const arr = [];
    let idx = 0;
    while (arr.length < TOTAL_TILES) {
      const src = basePhotos[idx % basePhotos.length];
      arr.push({
        src,
        span: getRandomSpan()
      });
      idx++;
    }
    return arr;
  }, []);

  return (
    <section className="gallery">
      {tiles.map((tile, i) => (
        <div
          key={i}
          className="photo-tile"
          style={{
            gridRowEnd:    `span ${tile.span.rows}`,
            gridColumnEnd: `span ${tile.span.cols}`
          }}
        >
          <img src={tile.src} alt={`Foto ${i + 1}`} />
        </div>
      ))}
    </section>
  );
}
