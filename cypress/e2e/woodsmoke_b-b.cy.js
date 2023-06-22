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
    cy.visit('/products/woodsmoke-sheer-bralette-set');
  });

  /*
   *****************************************************************
   * Test product id and variants
   ***************************************************************** 
  */
  const idsBraPanty = '7018308304940::7124747255852';
  const variantIdBra = 'xs_40868768251948:sm_40868768284716:md_40868768317484:lg_40868768350252:xl_40868768383020:sdd_40868768415788:mdd_40868768448556:ldd_40868768481324:xldd_40868768514092';
  const variantIdPanty = 'xs_41186835431468:sm_41186835464236:md_41186835497004:lg_41186835529772:xl_41186835562540:1x_41186835595308:2x_41186835628076:3x_41186835660844:4x_41186835693612';

  it(`Test Id and variants are correct`, () => {
    
    cy.get('#eby-bundle-bras23')
      .should('have.attr', 'data-mainvr', idsBraPanty);
    
    cy.get('#eby-bundle-bras23')
      .should('have.attr', 'data-bundlepdp', variantIdBra);
    
    cy.get('#eby-bundle-bras23')
      .should('have.attr', 'data-bundlepdp2', variantIdPanty);

  });

 
});

