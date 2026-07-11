export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface ServiceCategory {
  id: string;
  title: string;
  items: ServiceItem[];
}

export interface ContactInfo {
  email: string;
  phone: string;
  address: string;
  instagram: string;
}

export interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
  url: string;
  contact: ContactInfo;
  services: readonly ServiceItem[];
  serviceCategories: readonly ServiceCategory[];
}
