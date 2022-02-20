export default () => ({
  footerLinks: [
    {
      route: '/contact',
      label: 'Nous contacter',
    },
    {
      route: '/legal',
      label: 'Mentions légales',
    },
    {
      route: '/gdpr',
      label: 'RGPD',
    },
  ],
  headerLinks: [
    {
      route: `/`,
      label: `l'association`,
    },
    {
      route: `/congress/`,
      label: `le congrès`,
    },
    {
      route: `/archives/`,
      label: `les archives`,
    },
  ],
  isExpanded: ref(false),
})
