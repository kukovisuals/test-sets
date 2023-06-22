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
    cy.visit('/products/mint-sheer-set');
  });

  /*
   *****************************************************************
   * Test product id and variants
   ***************************************************************** 
  */
  const idsBraPanty = '7018307158060::7125163180076';
  const variantIdBra = 'xs_40868765827116:sm_40868765859884:md_40868765892652:lg_40868765925420:xl_40868765958188:sdd_40868765990956:mdd_40868766023724:ldd_40868766056492:xldd_40868766089260';
  const variantIdPanty = 'xs_41187750051884:sm_41187750084652:md_41187750117420:lg_41187750150188:xl_41187750182956:1x_41187754115116:2x_41187750215724:3x_41187750248492:4x_41187750281260';

  it(`Test Id and variants are correct`, () => {
    
    cy.get('#eby-bundle-bras23')
      .should('have.attr', 'data-mainvr', idsBraPanty);
    
    cy.get('#eby-bundle-bras23')
      .should('have.attr', 'data-bundlepdp', variantIdBra);
    
    cy.get('#eby-bundle-bras23')
      .should('have.attr', 'data-bundlepdp2', variantIdPanty);

  });

 
});

