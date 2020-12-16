const routes = {
  App: {
    itself: 'App',
    StackA: {
      itself: 'App.StackA',
      FeatureA: 'App.StackA.FeatureA',
      FeatureB: {
        itself: 'App.StackA.FeatureB',
        Onboarding: 'App.StackA.FeatureB.Onboarding',
        EmailInput: 'App.StackA.FeatureB.EmailInput',
      },
      FeatureC: {
        itself: 'App.StackA.FeatureC',
        Onboarding: 'App.StackA.FeatureC.Onboarding',
        ProductList: 'App.StackA.FeatureC.ProductList',
      },
    },
    Home: 'App.Home',
  },
} as const;

export const ROUTE_LIST = [
  routes.App.StackA.itself,
  routes.App.StackA.FeatureA,
  routes.App.StackA.FeatureB.itself,
  routes.App.StackA.FeatureB.Onboarding,
  routes.App.StackA.FeatureB.EmailInput,
  routes.App.StackA.FeatureC.itself,
  routes.App.StackA.FeatureC.Onboarding,
  routes.App.StackA.FeatureC.ProductList,
  routes.App.Home,
];

export default routes;
