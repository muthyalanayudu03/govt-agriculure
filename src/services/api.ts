// Mock API service with simulated network delay

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Simulate API response
async function mockFetch<T>(data: T, delayMs: number = 800): Promise<T> {
  await delay(delayMs);
  return data;
}

// Home data
export async function fetchHomeData() {
  const { sliderData, statsData, aboutPreview, servicesPreview } = await import('@/data/homeData');
  return mockFetch({
    slider: sliderData,
    stats: statsData,
    about: aboutPreview,
    services: servicesPreview
  });
}

// Highlights data
export async function fetchHighlights() {
  const { highlightsData, trustPartners } = await import('@/data/highlights');
  return mockFetch({
    highlights: highlightsData,
    partners: trustPartners
  });
}

// Certifications data
export async function fetchCertifications() {
  const { certificationsData } = await import('@/data/certifications');
  return mockFetch(certificationsData);
}

// Gallery data
export async function fetchGalleryData(category?: string) {
  const { galleryData, videosData, testimonialsData, galleryCategories } = await import('@/data/galleryData');
  
  const filteredGallery = category && category !== 'All'
    ? galleryData.filter(item => item.category === category)
    : galleryData;
  
  return mockFetch({
    gallery: filteredGallery,
    videos: videosData,
    testimonials: testimonialsData,
    categories: galleryCategories
  });
}

// Subsidiaries data
export async function fetchSubsidiaries() {
  const { subsidiariesData } = await import('@/data/subsidiaries');
  return mockFetch(subsidiariesData);
}

// Team data
export async function fetchTeamData() {
  const { teamData } = await import('@/data/teamData');
  return mockFetch(teamData);
}

// Contact form submission (mock)
export async function submitContactForm(data: {
  name: string;
  email: string;
  phone: string;
  message: string;
}) {
  await delay(1500);
  console.log('Form submitted:', data);
  return { success: true, message: 'Thank you for your message. We will contact you soon.' };
}
