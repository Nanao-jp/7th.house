export const navigationLinks = [
  { label: 'Home', href: '/' },
  { label: 'Demo', href: '#demo' },
  { label: 'Features', href: '#features' },
  { label: 'Tech', href: '#tech' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
] as const;

export type NavigationLink = typeof navigationLinks[number]; 