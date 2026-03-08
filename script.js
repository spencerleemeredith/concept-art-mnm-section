const imageData = [
  { "src": "https://images.squarespace-cdn.com/content/v1/603cb2299959d83fcdc26265/d30e71eb-8c30-4ca3-ad05-b6cfafcf1b30/MnMMMO5.1.jpg?format=original", "title": "MnMMMO 5.1", "category": "equipment" },
  { "src": "https://images.squarespace-cdn.com/content/v1/603cb2299959d83fcdc26265/c94d1484-0e9a-4297-a4b9-1bb2e5348932/MnMMMO5.2.jpg?format=original", "title": "MnMMMO 5.2", "category": "equipment" },
  { "src": "https://images.squarespace-cdn.com/content/v1/603cb2299959d83fcdc26265/2376a8f2-1db8-4404-a638-9f811bcebdfb/MnMMMO5.3.jpg?format=original", "title": "MnMMMO 5.3", "category": "equipment" },
  { "src": "https://images.squarespace-cdn.com/content/v1/603cb2299959d83fcdc26265/0a8962f4-2591-46fc-bc58-ddd2a89ccde0/MnMMMO5.4.jpg?format=original", "title": "MnMMMO 5.4", "category": "equipment" },
  { "src": "https://images.squarespace-cdn.com/content/v1/603cb2299959d83fcdc26265/f562aa9b-e730-4686-a7e4-fbf6a38e7408/NightHarbor1.jpg?format=original", "title": "Night Harbor 1", "category": "environment" },
  { "src": "https://images.squarespace-cdn.com/content/v1/603cb2299959d83fcdc26265/b65a4f53-1758-4ec5-97bd-c55bdaadff8c/NightHarbor2.jpg?format=original", "title": "Night Harbor 2", "category": "environment" },

  // all the concept art images with their info

  { "src": "https://images.squarespace-cdn.com/content/v1/603cb2299959d83fcdc26265/878ce7f4-07a7-4e04-a3b6-9314b53e2abe/NightHarbor3.jpg?format=original", "title": "Night Harbor 3", "category": "environment" },
  { "src": "https://images.squarespace-cdn.com/content/v1/603cb2299959d83fcdc26265/60782888-f04d-4343-be52-28e46104bb55/NightHarbor4.jpg?format=original", "title": "Night Harbor 4", "category": "environment" },
  { "src": "https://images.squarespace-cdn.com/content/v1/603cb2299959d83fcdc26265/9d85c768-d91b-4b8f-9f71-2d204a5e3afe/NightHarbor5.jpg?format=original", "title": "Night Harbor 5", "category": "environment" },
  { "src": "https://images.squarespace-cdn.com/content/v1/603cb2299959d83fcdc26265/fa40567e-4a75-42f1-aef1-f52aa94b056c/NightHarbor6.jpg?format=original", "title": "Night Harbor 6", "category": "environment" },
  { "src": "https://images.squarespace-cdn.com/content/v1/603cb2299959d83fcdc26265/93005bc1-4779-41a1-a4ad-6e281eee61a7/NightHarbor7.jpg?format=original", "title": "Night Harbor 7", "category": "environment" },
  { "src": "https://images.squarespace-cdn.com/content/v1/603cb2299959d83fcdc26265/0c95cceb-db8b-456e-bee4-ca87fb666db6/NightHarbor8.jpg?format=original", "title": "Night Harbor 8", "category": "environment" },
  { "src": "https://images.squarespace-cdn.com/content/v1/603cb2299959d83fcdc26265/e4cf4501-e1a4-4b03-9f13-22ecc305d09e/cloth.png?format=original", "title": "Cloth Armor", "category": "equipment" },
  { "src": "https://images.squarespace-cdn.com/content/v1/603cb2299959d83fcdc26265/3fe05dbe-568f-4edd-a33b-6e17c13469f4/Leather.png?format=original", "title": "Leather Armor", "category": "equipment" },
  { "src": "https://images.squarespace-cdn.com/content/v1/603cb2299959d83fcdc26265/bf508eb7-5a76-496e-8211-e1daddcef3ee/Chain.png?format=original", "title": "Chain Armor", "category": "equipment" },
  { "src": "https://images.squarespace-cdn.com/content/v1/603cb2299959d83fcdc26265/a001f748-18ee-49c8-a943-0c1c28153f5d/Plate.png?format=original", "title": "Plate Armor", "category": "equipment" },
  { "src": "https://images.squarespace-cdn.com/content/v1/603cb2299959d83fcdc26265/ce4f4628-68cd-4eb6-b4e1-8880eab5f8ab/Tree.png?format=original", "title": "Concept Tree", "category": "environment" },
  { "src": "https://images.squarespace-cdn.com/content/v1/603cb2299959d83fcdc26265/f0111010-407e-4ef3-8a0a-6f12e6d68ac8/Dragon.png?format=original", "title": "Dragon Concept", "category": "monster" },
  { "src": "https://images.squarespace-cdn.com/content/v1/603cb2299959d83fcdc26265/99765071-f036-41f2-b3db-3155783b07eb/Mudking.png?format=original", "title": "Mudking", "category": "monster" },
  { "src": "https://images.squarespace-cdn.com/content/v1/603cb2299959d83fcdc26265/e57923bb-7ace-4064-b667-93225db68c3a/Frog.png?format=original", "title": "Frog Creature", "category": "monster" },
  { "src": "https://images.squarespace-cdn.com/content/v1/603cb2299959d83fcdc26265/c7a8cdea-9e30-4379-b5a9-8ef96a08d8f6/mnmClassexploration3.1.jpg?format=original", "title": "Class Exploration 3.1", "category": "character" },
  { "src": "https://images.squarespace-cdn.com/content/v1/603cb2299959d83fcdc26265/711c8ca9-3ec0-4dcd-873c-d0f37dd80f45/mnmClassexploration3.2.jpg?format=original", "title": "Class Exploration 3.2", "category": "character" },
  { "src": "https://images.squarespace-cdn.com/content/v1/603cb2299959d83fcdc26265/fbf4d948-3e25-4aa5-a241-7900658c6806/mnmClassexploration3.3.jpg?format=original", "title": "Class Exploration 3.3", "category": "character" },
  { "src": "https://images.squarespace-cdn.com/content/v1/603cb2299959d83fcdc26265/5b3ddaf4-2f93-4f73-9ec1-a008e3e2f510/mnmClassexploration3.4.jpg?format=original", "title": "Class Exploration 3.4", "category": "character" },
  { "src": "https://images.squarespace-cdn.com/content/v1/603cb2299959d83fcdc26265/a9e0d5fb-78be-4542-8186-feeefeabdf5c/mnmClassexploration3.5.jpg?format=original", "title": "Class Exploration 3.5", "category": "character" },
  { "src": "https://images.squarespace-cdn.com/content/v1/603cb2299959d83fcdc26265/6c2f3c13-08d5-4cca-9c27-6d7256e8e045/TelEkir1.jpg?format=original", "title": "Tel Ekir 1", "category": "environment" },
  { "src": "https://images.squarespace-cdn.com/content/v1/603cb2299959d83fcdc26265/28e8cfcf-937e-470f-8907-2de2be98fa9c/TelEkir2.jpg?format=original", "title": "Tel Ekir 2", "category": "environment" },
  { "src": "https://images.squarespace-cdn.com/content/v1/603cb2299959d83fcdc26265/a08f5707-2dfe-4dbd-a09a-eedb9ad6c89f/TelEkir3.jpg?format=original", "title": "Tel Ekir 3", "category": "environment" },
  { "src": "https://images.squarespace-cdn.com/content/v1/603cb2299959d83fcdc26265/9a15c31a-910c-4699-a9a3-ab9d34b7b0c9/TelEkir4.jpg?format=original", "title": "Tel Ekir 4", "category": "environment" },
  { "src": "https://images.squarespace-cdn.com/content/v1/603cb2299959d83fcdc26265/8637bbbb-4ac3-48c1-9c56-6e504d7b589f/TelEkir5.jpg?format=original", "title": "Tel Ekir 5", "category": "environment" },
  { "src": "https://images.squarespace-cdn.com/content/v1/603cb2299959d83fcdc26265/34a323a3-c216-4166-8e8a-1f91de9e2cef/TelEkir6.jpg?format=original", "title": "Tel Ekir 6", "category": "environment" },
  { "src": "https://images.squarespace-cdn.com/content/v1/603cb2299959d83fcdc26265/dbf345e8-bd30-474e-9aff-cf22d74f24e3/TelEkir7.jpg?format=original", "title": "Tel Ekir 7", "category": "environment" },
  { "src": "https://images.squarespace-cdn.com/content/v1/603cb2299959d83fcdc26265/c84861cb-902e-411a-bf5c-0fac2205186d/TelEkir8.jpg?format=original", "title": "Tel Ekir 8", "category": "environment" },
  { "src": "https://images.squarespace-cdn.com/content/v1/603cb2299959d83fcdc26265/caaf002d-3daa-4b45-b47a-b13e4d5cb906/TelEkir9.jpg?format=original", "title": "Tel Ekir 9", "category": "environment" },
  { "src": "https://images.squarespace-cdn.com/content/v1/603cb2299959d83fcdc26265/34af0917-1b23-44a6-8492-ac316654b803/TelEkir10.jpg?format=original", "title": "Tel Ekir 10", "category": "environment" },
  { "src": "https://images.squarespace-cdn.com/content/v1/603cb2299959d83fcdc26265/01ad8f25-962f-4075-bfd4-d9f61fca4082/Slime.png?format=original", "title": "Slime Creature", "category": "monster" },
  { "src": "https://images.squarespace-cdn.com/content/v1/603cb2299959d83fcdc26265/be2ba84f-92e4-4903-90a2-e6b3f0f0af7e/Slog.png?format=original", "title": "Slog", "category": "monster" },
  { "src": "https://images.squarespace-cdn.com/content/v1/603cb2299959d83fcdc26265/3a541903-e0aa-401d-8369-158c8f6b573c/Harpy.png?format=original", "title": "Harpy", "category": "monster" },
  { "src": "https://images.squarespace-cdn.com/content/v1/603cb2299959d83fcdc26265/8d179cdb-b379-4c80-9ccc-578bcdec0aad/EvilEye.png?format=original", "title": "Evil Eye", "category": "monster" },
  { "src": "https://images.squarespace-cdn.com/content/v1/603cb2299959d83fcdc26265/4663daf4-bf8c-45d1-b877-80ce4eb151d4/Observer.png?format=original", "title": "Observer", "category": "monster" },
  { "src": "https://images.squarespace-cdn.com/content/v1/603cb2299959d83fcdc26265/5fdeb8d6-d726-4795-aadb-d005c84cce3f/Bloodyashira.png?format=original", "title": "Bloodyashira", "category": "monster" },
  { "src": "https://images.squarespace-cdn.com/content/v1/603cb2299959d83fcdc26265/9ee0062f-5de8-49e2-97a3-f75d78af9959/Orc.png?format=original", "title": "Orc", "category": "monster" },
  { "src": "https://images.squarespace-cdn.com/content/v1/603cb2299959d83fcdc26265/6e618485-a99f-4506-ad00-9671408c77b9/Orcs.png?format=original", "title": "Orcs Variation", "category": "monster" },
  { "src": "https://images.squarespace-cdn.com/content/v1/603cb2299959d83fcdc26265/33ab57ee-a24d-4439-8c6c-1d4565445d53/scorp.png?format=original", "title": "Scorpion", "category": "monster" },
  { "src": "https://images.squarespace-cdn.com/content/v1/603cb2299959d83fcdc26265/28b57fef-45c2-43cc-98f0-16416bf1a162/Necropolis.png?format=original", "title": "Necropolis", "category": "environment" },
  { "src": "https://images.squarespace-cdn.com/content/v1/603cb2299959d83fcdc26265/ca924bba-db6c-4a29-8ce7-d9dab271526d/Swamp.png?format=original", "title": "Swamp Environment", "category": "environment" },
  { "src": "https://images.squarespace-cdn.com/content/v1/603cb2299959d83fcdc26265/732f99e2-e7fa-40f4-9fb0-5e6f2a5dcde8/Trolls.jpg?format=original", "title": "Trolls", "category": "monster" },
  { "src": "https://images.squarespace-cdn.com/content/v1/603cb2299959d83fcdc26265/1a972525-80e1-4bb4-a1e6-3d7b8e9ee0d9/WoodElves1.jpg?format=original", "title": "Wood Elves 1", "category": "character" },
  { "src": "https://images.squarespace-cdn.com/content/v1/603cb2299959d83fcdc26265/3b7b8d90-d05f-4993-8c5e-6013001ea23b/WoodElves2.jpg?format=original", "title": "Wood Elves 2", "category": "character" },
  { "src": "https://images.squarespace-cdn.com/content/v1/603cb2299959d83fcdc26265/8c0e6399-d130-4003-87b8-7aa8dc1b1e31/WoodElvenCity.png?format=original", "title": "Wood Elven City", "category": "environment" }
];

// track current state
let currentFilter = 'all';
let searchQuery = '';
let currentImageIndex = 0;
let filteredData = [];

// grab all the DOM elements we need
const galleryGrid = document.getElementById('galleryGrid');
const searchInput = document.getElementById('searchInput');
const filterChips = document.querySelectorAll('.filter-chip');
const resultCount = document.getElementById('resultCount');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxClose = document.getElementById('lightboxClose');
const lightboxPrev = document.getElementById('lightboxPrev');
const lightboxNext = document.getElementById('lightboxNext');
const lightboxCounter = document.getElementById('lightboxCounter');
const lightboxTitle = document.getElementById('lightboxTitle');

// rebuild gallery based on current filters
function renderGallery() {
  const normalizedQuery = searchQuery.toLowerCase();

  filteredData = imageData
    .filter(item => {
      const matchesFilter = currentFilter === 'all' || item.category === currentFilter;
      const matchesSearch = item.title.toLowerCase().includes(normalizedQuery);
      return matchesFilter && matchesSearch;
    })
    .sort((a, b) => a.title.localeCompare(b.title));

  galleryGrid.innerHTML = '';

  if (filteredData.length === 0) {
    const empty = document.createElement('div');
    empty.className = 'col-span-full text-center py-20 px-8 text-parchment font-serif italic text-xl sm:text-2xl opacity-60';
    empty.textContent = 'No relics found in the archives…';
    galleryGrid.appendChild(empty);
    resultCount.textContent = '0 found';
    return;
  }

  const label = currentFilter === 'all' ? 'artworks' : currentFilter + 's';
  resultCount.textContent = `${filteredData.length} ${label} found`;

  filteredData.forEach((item, index) => {
    const card = document.createElement('div');
    card.className = 'masonry-item relative border border-parchment/20 bg-black/45 cursor-pointer transition-all duration-300 p-2.5 pb-3 hover:border-accent hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.7),0_0_20px_rgba(255,215,0,0.08)] group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-black';
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', `View ${item.title}`);
    card.innerHTML = `
      <div class="absolute top-1 left-1 w-12 h-12 bg-vines bg-contain bg-no-repeat z-10 opacity-0 group-hover:opacity-55 transition-opacity pointer-events-none"></div>
      <div class="absolute bottom-6 right-1 w-12 h-12 bg-vines bg-contain bg-no-repeat z-10 opacity-0 group-hover:opacity-55 transition-opacity rotate-180 pointer-events-none"></div>
      
      <div class="overflow-hidden aspect-[4/3] relative bg-black/50">
        <img src="${item.src}" alt="${item.title}" loading="lazy" class="w-full h-full object-cover transition-transform duration-700 ease-out sepia-[0.15] contrast-[1.05] group-hover:scale-105 group-hover:sepia-0">
      </div>
      <div class="mt-3 text-center">
        <p class="font-sans text-[10px] uppercase tracking-widest text-accent/80 mb-0.5">${item.category}</p>
        <h3 class="font-display text-lg text-parchment">${item.title}</h3>
      </div>
    `;
    card.addEventListener('click', () => openLightbox(index));
    card.addEventListener('keydown', (event) => {
      if (event.key !== 'Enter' && event.key !== ' ') {
        return;
      }

      event.preventDefault();
      openLightbox(index);
    });
    galleryGrid.appendChild(card);
  });
}

// update lightbox with current image
function updateLightboxContent() {
  const item = filteredData[currentImageIndex];
  lightboxImg.src = item.src;
  lightboxImg.alt = item.title;
  lightboxTitle.textContent = item.title;
  lightboxCounter.textContent = `${currentImageIndex + 1} / ${filteredData.length}`;

  const hasMultiple = filteredData.length > 1;
  lightboxPrev.style.display = hasMultiple ? 'flex' : 'none';
  lightboxNext.style.display = hasMultiple ? 'flex' : 'none';
}

// open lightbox and set focus for accessibility
function openLightbox(index) {
  currentImageIndex = index;
  updateLightboxContent();
  lightbox.classList.add('active');
  document.body.style.overflow = 'hidden';
  lightboxClose.focus();
}

function closeLightbox() {
  lightbox.classList.remove('active');
  document.body.style.overflow = '';
}

// navigate between images
function navigateLightbox(direction) {
  currentImageIndex = (currentImageIndex + direction + filteredData.length) % filteredData.length;
  lightboxImg.style.opacity = '0.3';
  setTimeout(() => {
    updateLightboxContent();
    lightboxImg.style.opacity = '1';
  }, 120);
}

// search handler
searchInput.addEventListener('input', (event) => {
  searchQuery = event.target.value;
  renderGallery();
});

// filter chip handlers
filterChips.forEach(chip => {
  chip.addEventListener('click', () => {
    filterChips.forEach(c => c.classList.remove('active'));
    chip.classList.add('active');
    currentFilter = chip.dataset.filter;
    renderGallery();
  });
});

// lightbox controls
lightboxClose.addEventListener('click', closeLightbox);
lightboxPrev.addEventListener('click', (event) => {
  event.stopPropagation();
  navigateLightbox(-1);
});
lightboxNext.addEventListener('click', (event) => {
  event.stopPropagation();
  navigateLightbox(1);
});

// close on backdrop click
lightbox.addEventListener('click', (event) => {
  if (event.target === lightbox) {
    closeLightbox();
  }
});

// keyboard navigation
document.addEventListener('keydown', (event) => {
  if (!lightbox.classList.contains('active')) return;
  if (event.key === 'Escape') closeLightbox();
  if (event.key === 'ArrowLeft') navigateLightbox(-1);
  if (event.key === 'ArrowRight') navigateLightbox(1);
});

// touch/swipe support
let touchStartX = 0;
lightbox.addEventListener('touchstart', (event) => {
  touchStartX = event.changedTouches[0].clientX;
}, { passive: true });

lightbox.addEventListener('touchend', (event) => {
  const delta = event.changedTouches[0].clientX - touchStartX;
  if (Math.abs(delta) > 50) navigateLightbox(delta < 0 ? 1 : -1);
}, { passive: true });

// smooth transition between images
lightboxImg.style.transition = 'opacity 0.15s ease';

// initial render
renderGallery();
