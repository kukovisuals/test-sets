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
      cy.visit('/products/kiki-sheer-set-bralette-highwaisted');
    });
  
    /*
     *****************************************************************
     * Test product id and variants
     ***************************************************************** 
    */
    const idsBraPanty = '7018305650732::7125173010476';
    const variantIdBra = 'xs_40868761272364:sm_40868761305132:md_40868761337900:lg_40868761370668:xl_40868761403436:sdd_40868764188716:mdd_40868764221484:ldd_40868764254252:xldd_40868764287020';
    const variantIdPanty = 'xs_41187772104748:sm_41187772137516:md_41187772170284:lg_41187772203052:xl_41187772235820:1x_41188409016364:2x_41187772268588:3x_41187772301356:4x_41187772334124';
  
    it(`Test Id and variants are correct`, () => {
      
      cy.get('#eby-bundle-bras23')
        .should('have.attr', 'data-mainvr', idsBraPanty);
      
      cy.get('#eby-bundle-bras23')
        .should('have.attr', 'data-bundlepdp', variantIdBra);
      
      cy.get('#eby-bundle-bras23')
        .should('have.attr', 'data-bundlepdp2', variantIdPanty);
  
    });
  
   
  });
  
  