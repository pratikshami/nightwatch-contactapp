
module.exports = {


  'step one' : function (browser) {
    browser
      .url('http://172.27.59.103:3030')
      .waitForElementVisible('body', 1000)
    // .click('a[id=AddEmployeeLink]')
	  // .waitForElementVisible('a[id=AddEmployeeLink]', 1000)
	   //.end();
	},
 'step two' : function (browser) {
      browser
	   .url('http://172.27.59.103:3030')
	   .waitForElementVisible('body', 1000)
      .setValue('input[name=name]', 'sonik')
     .setValue('input[name=email]', 'pratik@abc.com')
      .setValue('input[name=number]', '12345')
      .waitForElementVisible('button[id=add_button]', 1000)
      .click('button[id=add_button]')
      .pause(1000)
      //.assert.containsText('#code', '4000')*/

   
      },
  
  'step three' : function (browser) {
      browser
	   .url('http://172.27.59.103:3030')
	   .waitForElementVisible('body', 1000)
   
},
                                    
 'step four' : function (browser) {

      browser
	   .url('http://172.27.59.103:3030/')	  
      .waitForElementVisible('button[id=edit_button]', 2000)
      .click('button[id=edit_button]')
       .pause(1000)
      .setValue('input[name=name]', 'soni')
      .setValue('input[name=email]', 'pratik@abc.com')
      .setValue('input[name=number]', '123')
      .pause(1000)
      .waitForElementVisible('button[id=update_button]', 2000)
      .click('button[id=update_button]')
      .pause(1000)
    },

 'step five' : function (browser) {

      browser
	   .url('http://172.27.59.103:3030')
	  .waitForElementVisible('button[id=update_button]', 2000)
    .end();
},






};
