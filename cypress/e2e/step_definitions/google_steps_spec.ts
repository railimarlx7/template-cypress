import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import OpenGoogle from '../pages/page_actions/acessar_google';

Given('que acesso o Google', function () {
  OpenGoogle.acessarGoogle();
});

When('pesquiso {string}', function (string) {
  OpenGoogle.fazerPesquisa();
});

Then('visualizo o resultado', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});
