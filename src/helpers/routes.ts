const routes = {
  App: {
    itself: 'App' as const,
    ExtraMoney: {
      itself: 'App.ExtraMoney' as const,
      Pier: 'App.ExtraMoney.Pier' as const,
      Sky: {
        itself: 'App.ExtraMoney.Sky' as const,
        Onboarding: 'App.ExtraMoney.Sky.Onboarding' as const,
        EmailInput: 'App.ExtraMoney.Sky.EmailInput' as const,
      },
      Ton: {
        itself: 'App.ExtraMoney.Ton' as const,
        Onboarding: 'App.ExtraMoney.Ton.Onboarding' as const,
        ProductList: 'App.ExtraMoney.Ton.ProductList' as const,
      },
    },
    Home: 'App.Home' as const,
  },
};

export const ROUTE_LIST = [
  routes.App.ExtraMoney.itself,
  routes.App.ExtraMoney.Pier,
  routes.App.ExtraMoney.Sky.itself,
  routes.App.ExtraMoney.Sky.Onboarding,
  routes.App.ExtraMoney.Sky.EmailInput,
  routes.App.ExtraMoney.Ton.itself,
  routes.App.ExtraMoney.Ton.Onboarding,
  routes.App.ExtraMoney.Ton.ProductList,
  routes.App.Home,
];

export default routes;
