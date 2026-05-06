import { sanityClient } from './sanity';

export type ServiceDocument = {
  _id: string;
  title: string;
  slug?: { current?: string };
  description?: string;
  image?: unknown;
  cardTag?: string;
  cardMetric?: string;
  category?: string;
  displayOrder?: number;
};

export type TestimonialDocument = {
  _id: string;
  content: string;
  authorName: string;
  authorRole?: string;
  authorCompany?: string;
  displayOrder?: number;
};

// Fetch all services
export async function getAllServices() {
  const query = `*[_type == "service"] | order(displayOrder asc)`;
  return await sanityClient.fetch<ServiceDocument[]>(query);
}

// Fetch a single service by slug
export async function getServiceBySlug(slug: string) {
  const query = `*[_type == "service" && slug.current == $slug][0]`;
  return await sanityClient.fetch(query, { slug });
}

// Fetch services by category
export async function getServicesByCategory(category: string) {
  const query = `*[_type == "service" && category == $category] | order(displayOrder asc)`;
  return await sanityClient.fetch(query, { category });
}

// Fetch all pricing plans
export async function getAllPricingPlans() {
  const query = `*[_type == "pricingPlan"] | order(displayOrder asc)`;
  return await sanityClient.fetch(query);
}

// Fetch all testimonials
export async function getAllTestimonials() {
  const query = `*[_type == "testimonial"] | order(displayOrder asc)`;
  return await sanityClient.fetch<TestimonialDocument[]>(query);
}

// Fetch testimonials with limit
export async function getTestimonials(limit: number = 6) {
  const query = `*[_type == "testimonial"] | order(displayOrder asc)[0...$limit]`;
  return await sanityClient.fetch<TestimonialDocument[]>(query, { limit: limit - 1 });
}

// Fetch all focus areas
export async function getAllFocusAreas() {
  const query = `*[_type == "focusArea"] | order(displayOrder asc)`;
  return await sanityClient.fetch(query);
}

// Fetch a single focus area by slug
export async function getFocusAreaBySlug(slug: string) {
  const query = `*[_type == "focusArea" && slug.current == $slug][0] {
    ...,
    caseStudies[]->
  }`;
  return await sanityClient.fetch(query, { slug });
}

// Fetch all case studies
export async function getAllCaseStudies() {
  const query = `*[_type == "caseStudy"] | order(_createdAt desc)`;
  return await sanityClient.fetch(query);
}

// Fetch a single case study by slug
export async function getCaseStudyBySlug(slug: string) {
  const query = `*[_type == "caseStudy" && slug.current == $slug][0] {
    ...,
    services[]->,
    testimonialsLink->
  }`;
  return await sanityClient.fetch(query, { slug });
}

// Fetch all team members
export async function getAllTeamMembers() {
  const query = `*[_type == "teamMember"] | order(displayOrder asc)`;
  return await sanityClient.fetch(query);
}

// Fetch all open job postings
export async function getAllOpenPositions() {
  const query = `*[_type == "jobPosting" && isOpen == true] | order(postedDate desc)`;
  return await sanityClient.fetch(query);
}

// Fetch a single job posting by slug
export async function getJobPostingBySlug(slug: string) {
  const query = `*[_type == "jobPosting" && slug.current == $slug][0]`;
  return await sanityClient.fetch(query, { slug });
}

// Fetch page content by page name
export async function getPageContent(page: string) {
  const query = `*[_type == "pageContent" && page == $page][0]`;
  return await sanityClient.fetch(query, { page });
}

// Fetch all blog posts
export async function getAllBlogPosts() {
  const query = `*[_type == "post"] | order(publishedAt desc)`;
  return await sanityClient.fetch(query);
}

// Fetch a single blog post by slug
export async function getBlogPostBySlug(slug: string) {
  const query = `*[_type == "post" && slug.current == $slug][0]`;
  return await sanityClient.fetch(query, { slug });
}

// Fetch recent blog posts
export async function getRecentBlogPosts(limit: number = 3) {
  const query = `*[_type == "post"] | order(publishedAt desc)[0...$limit]`;
  return await sanityClient.fetch(query, { limit: limit - 1 });
}

// Fetch blog posts by category
export async function getBlogPostsByCategory(category: string) {
  const query = `*[_type == "post" && category == $category] | order(publishedAt desc)`;
  return await sanityClient.fetch(query, { category });
}
