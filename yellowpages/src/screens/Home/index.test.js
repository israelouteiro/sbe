import React from 'react';
import { mount } from '@cypress/react';
import Page from './';

it('renders homepage', () => {
  mount(<Page />);
  cy.get('input').type('Chase John 85{enter}');
  cy.contains('1 results found');
  cy.contains('Chase Johnson, 85');
});