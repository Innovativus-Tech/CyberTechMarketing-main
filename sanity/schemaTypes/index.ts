import { type SchemaTypeDefinition } from 'sanity';
import { postType } from './postType';
import { serviceType } from './serviceType';
import { pricingPlanType } from './pricingPlanType';
import { testimonialType } from './testimonialType';
import { focusAreaType } from './focusAreaType';
import { caseStudyType } from './caseStudyType';
import { teamMemberType } from './teamMemberType';
import { jobPostingType } from './jobPostingType';
import { pageContentType } from './pageContentType';
import { siteSettingsType } from './siteSettingsType';
import { homePageType } from './homePageType';

export const schemaTypes: SchemaTypeDefinition[] = [
  siteSettingsType,
  homePageType,
  postType,
  serviceType,
  pricingPlanType,
  testimonialType,
  focusAreaType,
  caseStudyType,
  teamMemberType,
  jobPostingType,
  pageContentType,
];
