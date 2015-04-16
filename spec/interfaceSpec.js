describe('Interface', function(){

  describe('Temp Showing', function(){

    beforeEach(function(){
      jasmine.getFixtures().fixturesPath = '.';
      loadFixtures('index');
    });

    it('Displays a temp of 20', function(){
      expect('#temp').toContainText('20');
    });

  });

});
