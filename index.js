const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click',function () {
    alert('💓Mi niña chiquita💓 Hoy estamos celebramos 8 maravillosos meses juntos,😾 y quería aprovechar este momento tan especial para expresarme y poder decirte lo mucho significas para mí. Cada día a tu lado ha sido una bendición y quiero que sepas que amo cada momento que compartimos. Cada beso, cada abrazo y cada pequeña cosa que hacemos juntos me encantan y me hacen sentir completo. Eres mi niña consentida, mi compañera incondicional y mi mayor apoyo. Tu presencia en mi vida ha traído una felicidad que no puedo describir con palabras. Me has enseñado el verdadero significado del amor y la importancia de la conexión profunda que compartimos. No puedo evitar pensar en un futuro a tu lado. Sueño con vivir una vida entera junto a ti, crecer juntos, enfrentar los desafíos de la vida y celebrar cada meta cumplida tanto de ti como para mi. Eres la persona con la que quiero construir un hogar y una familia. Eres mi confidente y mi amiga eres todo lo que quiero en mi vida y no puedo imaginar mi vida sin ti. Quiero que sepas que estaré aquí para ti en cada paso que des, apoyándote en tus sueños y ayudándote a alcanzar todas tus metas. Estoy dispuesto a enfrentar cualquier obstáculo que la vida nos presente, sabiendo que siempre podremos superarlos juntos. Te amo más de lo que las palabras pueden expresar, y quiero que sepas que mi amor por ti solo crece con cada día que pasa. Eres la persona con la que quiero pasar el resto de mi vida, y no hay nada que desee más que tener la dicha de tenerte a mi lado siempre. Felices 8 meses,💕 mi amor. Gracias por ser mi fuente constante de alegría y amor. Aquí estoy, listo para seguir construyendo un futuro maravilloso juntos. 🥺 Te extraño mucho, sabias que me caes mal? de verdad amo todo de ti mi niña chiquita. Jamas me arrepentire de haberte conocido. ERES EL AMOR DE MI VIDA 😡💗') 
});

const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('mouseover', function () {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    noBtn.style.setProperty('top',randomY+'%');
    noBtn.style.setProperty('left',randomX+'%');
    noBtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
})