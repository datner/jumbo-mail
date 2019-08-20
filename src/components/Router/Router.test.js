import React from 'react';
import { shallow } from 'enzyme';
import R from './Router';
import { withLanguage } from 'contexts/languageContext';

const Router = withLanguage(R)

it('renders without crashing', () => {
  shallow(<Router />);
});