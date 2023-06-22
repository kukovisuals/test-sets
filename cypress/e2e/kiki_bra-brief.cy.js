/*
    ***********************************
    *  :: Paste Array in pdps ::
    *  Change values here
     _._     _,-'""`-._
    (,-.`._,'(       |\`-/|
        `-.-' \ )-`( , o o)
              `-    \`_`"'-
    open cypress -> npx cypress open
    report ---> npx cypress run --reporter mochawesome
    npx cypress run --spec "cypress/e2e/blackBlack.cy.js
    ************************************
*/


describe(`Bralette Bundle Black + Black `, () => {
  beforeEach(() => {
    cy.visit('/products/kiki-sheer-bralette-set');
  });

  /*
   *****************************************************************
   * Test product id and variants
   ***************************************************************** 
  */
  const idsBraPanty = '7018305650732::7124746371116';
  const variantIdBra = 'xs_40868761272364:sm_40868761305132:md_40868761337900:lg_40868761370668:xl_40868761403436:sdd_40868764188716:mdd_40868764221484:ldd_40868764254252:xldd_40868764287020';
  const variantIdPanty = 'xs_41186831368236:sm_41186831401004:md_41186831433772:lg_41186831466540:xl_41186831499308:1x_41186831532076:2x_41186831564844:3x_41186831597612:4x_41186831630380';

  it(`Test Id and variants are correct`, () => {
    
    cy.get('#eby-bundle-bras23')
      .should('have.attr', 'data-mainvr', idsBraPanty);
    
    cy.get('#eby-bundle-bras23')
      .should('have.attr', 'data-bundlepdp', variantIdBra);
    
    cy.get('#eby-bundle-bras23')
      .should('have.attr', 'data-bundlepdp2', variantIdPanty);

  });

 
});

