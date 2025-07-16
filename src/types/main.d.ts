import {
  type EntryType,
  type CollectionType,
  Stage,
} from "../constants/main";


/**
 * Hygraph
 */
export interface Model {
  id?: string;
  stage?: typeof Stage;
}


/**
 * Components
 */

export interface AddressGroup {
  name?: string;
  street?: string;
  unit?: string | null;
  city?: string;
  state?: string;
  zipcode?: number;
}

export interface FieldSet {
  key?: string;
  value?: string;
}

export interface Asset {
  url?: string;
  width?: number;
  height?: number;
}

export interface ContentGroup {
  name?: string;
  copy?: string;
  image?: Asset | null;
}

export interface ContactGroup {
  name?: string;
  phone?: string;
  email?: string;
  fax?: string;
}


/**
 * Models
 */

export interface Footer extends Model {
  heading?: string;
  resources?: FieldSet[];
  copyright?: string | null;
}

export interface ContactBlock extends Model {
  __typename?: EntryType.CONTACT_BLOCK;
  heading?: string;
  contact?: ContactGroup;
  address?: AddressGroup;
}

export interface ContentBlock extends Model {
  __typename?: EntryType.CONTENT_BLOCK;
  heading?: string;
  content?: ContentGroup;
}

export interface ContentCollection extends Model {
  __typename?: EntryType.CONTENT_COLLECTION;
  heading?: string;
  type?: CollectionType;
  sections?: ContentBlock[];
}

export type Section = ContentBlock | ContentCollection | ContactBlock;

export interface Page extends Model {
  title?: string;
  description?: string;
  shero?: ContentBlock;
  sections?: Section[];
  footer?: Footer;
}

export interface Data {
  pages: Page[];
}
