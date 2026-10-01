const canvas = document.querySelector('#canvas');
const contexto = canvas.getContext('2d');

contexto.lineWidth = 10;
contexto.lineCap = "round";
contexto.lineJoin = "round";

// CABEÇA
contexto.beginPath();
contexto.arc(250, 150, 45, 0, Math.PI * 2);
contexto.stroke();

// CORPO
contexto.beginPath();
contexto.moveTo(250, 195);
contexto.lineTo(250, 290);
contexto.stroke();

// BRAÇO ESQUERDO
contexto.beginPath();
contexto.moveTo(250, 210);
contexto.lineTo(200, 260);
contexto.lineTo(260, 275);
contexto.stroke();

// BRAÇO DIREITO
contexto.beginPath();
contexto.moveTo(250, 210);
contexto.lineTo(285, 265);
contexto.lineTo(340, 215);
contexto.stroke();

// PERNA ESQUERDA
contexto.beginPath();
contexto.moveTo(250, 290);
contexto.lineTo(205, 330);
contexto.lineTo(200, 390);
contexto.stroke();

// PERNA DIREITA
contexto.beginPath();
contexto.moveTo(250, 290);
contexto.lineTo(295, 320);
contexto.lineTo(305, 385);
contexto.stroke();