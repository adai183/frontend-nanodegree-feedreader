/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */

        it('are defined', function() {
            allFeeds.forEach(function logArrayElements(element, index, array) {
            expect(element.url).toBeDefined();
            expect(element.url).not.toBe('');
            });
        });
       

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */

        it('are defined', function() {
            allFeeds.forEach(function logArrayElements(element, index, array) {
            expect(element.name).toBeDefined();
            expect(element.name).not.toBe('');
            });
        });
    });


    /* TODO: Write a new test suite named "The menu" */

    describe('The menu', function() {

        var bodyClass = function() {
            return $('body').hasClass('menu-hidden');
        };
        
        var menuIcon = $('.menu-icon-link');

        /* Determine wether body currently has menu-hidden class */
        var menuVisibility = bodyClass();

        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */

        it('is hidden by default', function() {
            expect(menuVisibility).toBe(true);
        });
        /* Additional test to check wether menu is hidden
         * when a link in our feedList is clicked on
         */
        it('is hidden when link in feedList is clicked', function() {
            // get all links from feedlist and push them into an array
            var feedListLinks = [];
            $(".feed-list a").each(function(){ 
                feedListLinks.push($(this)); 
            });

            // try functionality for each of them
            feedListLinks.forEach(function(item){
                // open menu
                menuIcon.click();
                // click on item
                item.click();
                // check wether body has menu-hidden class
                menuVisibility = bodyClass();
                expect(menuVisibility).toBe(true);

            });

        });
   

         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
    
        describe('Menu Visibility', function() {
            beforeEach(function() {
                menuIcon.click();
                // Needs to be run again before each, to determine current value.
                menuVisibility = bodyClass();
            });

            it('displays when clicked', function(){
                expect(menuVisibility).toBe(false);
            });
         
            it('hides when clicked again', function() {
                expect(menuVisibility).toBe(true);
            });
        });
    });

    /* TODO: Write a new test suite named "Initial Entries" */

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

    /* TODO: Write a new test suite named "New Feed Selection"

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
}());
