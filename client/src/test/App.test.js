import React from 'react';
import App from '../components/App.jsx';
import ResponsiveLayoutImageHeader from '../components/ImageHeader/ResponsiveLayoutImageHeader.jsx';
import { shallow, mount } from 'enzyme';
import WindowDimensionProvider from '../components/WindowDimensionProvider.jsx'

describe('App Component', () => {
  let wrapper;


  xit('renders', () => {
    shallow(< App />)
  });

  xit('renders child component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('window')).toEqual(true);
  })

});