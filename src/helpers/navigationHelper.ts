import {
  CompositeNavigationProp,
  ParamListBase,
  RouteProp,
} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

export type FullStackNavigationProp<
  ParamList extends ParamListBase,
  ParentStackNavigationProp extends StackNavigationProp<ParamListBase>
> = CompositeNavigationProp<
  StackNavigationProp<ParamList>,
  ParentStackNavigationProp
>;

export interface ScreenProps<
  ParamList extends ParamListBase,
  ParentStackNavigationProp extends StackNavigationProp<ParamListBase>,
  RouteName extends keyof ParamList
> {
  navigation: FullStackNavigationProp<ParamList, ParentStackNavigationProp>;
  route: RouteProp<ParamList, RouteName>;
}

const getNavigationSubScreenParams = (
  root: string,
  subroutes: string[],
): any => {
  console.log('subroutes:', subroutes);
  if (subroutes.length < 1) {
    return {};
  }
  const screen = `${root}.${subroutes[0]}`;
  return {
    screen,
    params: getNavigationSubScreenParams(
      `${root}.${subroutes[0]}`,
      subroutes.slice(1),
    ),
  };
};

console.log(
  'testando:',
  JSON.stringify(
    getNavigationSubScreenParams(
      'App',
      'StackA.Page01.Page01_02'.split('.'),
    ),
  ),
);

const navigationHelper = (navigation: any, route: string) => {
  const subroutes = route.split('.');

  const screen = subroutes[0];
  navigation.push(
    screen,
    getNavigationSubScreenParams(screen, subroutes.slice(1)),
  );
};

export default navigationHelper;
