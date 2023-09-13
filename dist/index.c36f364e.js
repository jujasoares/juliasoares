// const elements = {
//   aside: `
//     <aside data-bandcamp-aside>
//       <iframe
//         style="border: 0; width: 350px; height: 786px;"
//         src="https://bandcamp.com/EmbeddedPlayer/album=2142467463/size=large/bgcol=ffffff/linkcol=333333/transparent=true/"
//         seamless>
//       </iframe>
//     </aside>
//   `,
//   footer: `
//     <footer data-bandcamp-footer>
//       <iframe
//         style="border: 0; width: 100%; height: 42px;"
//         src="https://bandcamp.com/EmbeddedPlayer/album=2142467463/size=small/bgcol=ffffff/linkcol=f171a2/transparent=true/" seamless>
//       </iframe>
//     </footer>
//   `
// };
// const getBandcampEmbed = () => {
//   const aside = document.querySelector('[data-bandcamp-aside]');
//   const footer = document.querySelector('[data-bandcamp-footer]');
//   return { aside, footer };
// }
// const hideBandcampEmbed = () => {
//   const { aside, footer } = getBandcampEmbed();
//   if (aside) aside.classList.style('display', 'none');
//   if (footer) footer.classList.style('display', 'none');
// }
// const showBandcampEmbed = () => {
//   const embeds = getBandcampEmbed();
//   const pageWidth = window.innerWidth;
//   const kind = pageWidth > 768 ? 'aside' : 'footer';
//   const hasAlreadyEmbeded = embeds[kind];
//   hideBandcampEmbed();
//   if (!hasAlreadyEmbeded) document.body.innerHTML += elements[kind];
//   else embeds[kind].classList.style('display', 'block');
// }
// const init = () => {
//   // run showBandcampEmbed on page load
//   showBandcampEmbed();
//   // run embedBandcamp on window resize
//   window.addEventListener('resize', embedBandcamp);
// }
// init();

//# sourceMappingURL=index.c36f364e.js.map
