// Referencia al contenedor donde se mostrará el visor
var container = document.querySelector('#container_principal');

// Crear la imagen panorámica
var panorama = new PANOLENS.ImagePanorama('imagenes/clinica.jpg');

// Crear el visor con opción para no ocultar los íconos de los infospots
var viewer = new PANOLENS.Viewer({
    container: container,
    output: 'fullscreen',
    autoHideInfospot: false
});
viewer.add(panorama);

// ---------- Infospots ----------

// 1. Silla dental
var infospot1 = new PANOLENS.Infospot(100, PANOLENS.DataImage.Info);
infospot1.position.set(900, -268, -4854);
infospot1.addHoverText('Silla Dental');
infospot1.element.innerHTML = `
  <div style="background-color: rgba(0, 0, 0, 0.85); color:#fff; border-radius: 5px; padding: 10px; width: 220px;">
    <strong>🌍 Silla dental ergonómica</strong><br>
    Tecnología avanzada para mayor confort del paciente.<br>
    <img src="imagenes/silla.jpg" width="100%" style="margin-top:10px;">
  </div>
`;
panorama.add(infospot1);

// 2. Pantalla radiografía
var infospot2 = new PANOLENS.Infospot(100, PANOLENS.DataImage.Info);
infospot2.position.set(-3000, 1261, -3312);
infospot2.addHoverText('Radiografía Digital');
infospot2.element.innerHTML = `
  <div style="background-color: rgba(0, 0, 0, 0.85); color:#fff; border-radius: 5px; padding: 10px; width: 230px;">
    <strong>Radiografía Digital</strong><br>
  <iframe width="560" height="315" src="https://www.youtube.com/embed/6PLTivpZupM?autoplay=1" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

  </div>
`;
panorama.add(infospot2);

// 3. Monitor software
var infospot3 = new PANOLENS.Infospot(100, PANOLENS.DataImage.Info);
infospot3.position.set(-2000, 0, -3312);
infospot3.addHoverText('Software Clínico');
infospot3.element.innerHTML = `
  <div style="background-color: rgba(0, 0, 0, 0.85); color:#fff; border-radius: 5px; padding: 10px; width: 220px;">
    <strong>Software Odontológico</strong><br>
    <audio controls><source src="audios/software.mp3" type="audio/mpeg"></audio>
  </div>
`;
panorama.add(infospot3);

// 4. Brazo robótico
var infospot4 = new PANOLENS.Infospot(100, PANOLENS.DataImage.Info);
infospot4.position.set(2000, 3186, -2616);
infospot4.addHoverText('Brazo de asistencia');
infospot4.element.innerHTML = `

    <strong>Brazo robótico</strong><br>
<div style="background-color: rgba(0, 0, 0, 0.85); color:#fff; border-radius: 5px; padding: 10px; width: 250px;">
  <strong>🌍 Importancia y Beneficios</strong><br><br>
  • Mayor precisión que un ser humano en tareas repetitivas.<br>
  • Reducción de errores en procedimientos delicados.<br>
  • Aumento de la productividad en entornos industriales.<br>
  • Seguridad: pueden trabajar en entornos peligrosos sin riesgo humano.<br>
  • Educación interactiva: ideales para simuladores de aprendizaje técnico.
  </div>
`;
panorama.add(infospot4);

// 5. Luz del techo
var infospot5 = new PANOLENS.Infospot(100, PANOLENS.DataImage.Info);
infospot5.position.set(2240, 4180, -1570);
infospot5.addHoverText('Luz LED del Techo');
infospot5.element.innerHTML = `
  <div style="background-color: rgba(0, 0, 0, 0.85); color:#fff; border-radius: 5px; padding: 10px; width: 220px;">
  
    <details><summary><strong>Luz LED</strong></summary>
    Minimiza sombras y mejora la visibilidad.
    </details>
  </div>
`;
panorama.add(infospot5);

// 6. Instrumental odontológico
var infospot6 = new PANOLENS.Infospot(100, PANOLENS.DataImage.Info);
infospot6.position.set(2402, 600, 4166);
infospot6.addHoverText('Instrumentos Clínicos');

// Imagen clickeable que redirige
infospot6.element.innerHTML = `
  <div style="background-color: rgba(0, 0, 0, 0.85); color:#fff; border-radius: 5px; padding: 10px; width: 220px;">
    <a href="https://clinic-cloud.com/blog/utensilios-de-dentista-imprescindibles-en-una-consulta-dental" target="_blank">
      <img src="imagenes/instrumental.jpg" width="100%" style="cursor: pointer;">
    </a>
    <br>
    Haz clic en la imagen para conocer más sobre instrumentos odontológicos.
  </div>
`;

panorama.add(infospot6);


// 7. Panel de protocolo PDF
var infospot7 = new PANOLENS.Infospot(100, PANOLENS.DataImage.Info);
infospot7.position.set(2402, 1352, 4166);
infospot7.addHoverText('Protocolo en PDF');
infospot7.element.innerHTML = `
  <div style="background-color: rgba(0, 0, 0, 0.85); color:#fff; border-radius: 5px; padding: 10px; width: 220px;">
    <a href="pdf/protocolo.pdf" target="_blank">Ver protocolo clínico en PDF</a>
  </div>
`;
panorama.add(infospot7);

// 8. Silla del asistente
var infospot8 = new PANOLENS.Infospot(100, PANOLENS.DataImage.Info);
infospot8.position.set(-6000, 0, -3312);
infospot8.addHoverText('Asistente');
infospot8.element.innerHTML = `
  <div style="background-color: rgba(0, 0, 0, 0.85); color:#fff; border-radius: 5px; padding: 10px; width: 220px;">
    El asistente dental apoya durante procedimientos clínicos.
  </div>
`;
panorama.add(infospot8);

// 9. Gabinete de almacenamiento
var infospot9 = new PANOLENS.Infospot(100, PANOLENS.DataImage.Info);
infospot9.position.set(-900, 1030, -4804);
infospot9.addHoverText('Gabinete Clínico');
infospot9.element.innerHTML = `
  <div style="background-color: rgba(0, 0, 0, 0.85); color:#fff; border-radius: 5px; padding: 10px; width: 220px;">
    <strong>🌍 Gabinete Clinico</strong><br><br>
    <ul><li>Guantes</li><li>Mascarillas</li><li>Alcohol</li></ul>
    <img src="imagenes/gabinete.jpg" width="100%">
  </div>
`;
panorama.add(infospot9);

// 10. Visión institucional (video YouTube)
var infospot10 = new PANOLENS.Infospot(100, PANOLENS.DataImage.Info);
infospot10.position.set(-100, 234, 2489);
infospot10.addHoverText('Video Institucional');
infospot10.element.innerHTML = `
  <div style="background-color: rgba(0, 0, 0, 0.85); color:#fff; border-radius: 5px; padding: 10px; width: 230px;">
    <iframe width="400" height="250" src="https://www.youtube.com/embed/7e6IdzlWWtk" frameborder="0" allowfullscreen></iframe>
  </div>
`;
panorama.add(infospot10);
