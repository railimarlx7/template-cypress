// import json from 'cypress/fixtures/example.json';
import GoogleHomeElements from '../page_elements/google_home.elements.js'

export class OpenGoogle {
  static acessarGoogle() {
      cy.fixture('example.json').then((json) => {
        cy.visit(json.url)
      });
  }
static fazerPesquisa() {
cy.get(GoogleHomeElements.INPUT_BUSCA).type('Fellipe Macena LinkedIn')
cy.get(GoogleHomeElements.BTN_BUSCA).click()
  }

}
export default OpenGoogle;
