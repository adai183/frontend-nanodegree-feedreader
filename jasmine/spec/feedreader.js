/* feedreader.js
 *
 * This is the spec file, Jasmine will read, contains
 * all of the tests that will be run against the application.
 */
/* All of our tests are placed within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* "RSS Feeds" Test Suite
     * This suite is all about the allFeeds variable in the application.
     */
    describe('RSS Feeds', function() {
        /* tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. 
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* Test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */

        it('are defined', function() {
            allFeeds.forEach(function logArrayElements(element, index, array) {
                expect(element.url).toBeDefined();
                expect(element.url).not.toBe('');
            });
        });


        /* Test that loops through each feed
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


    /* "The menu" Test Suite */

    describe('The menu', function() {

        var bodyClass = function() {
            return $('body').hasClass('menu-hidden');
        };

        var menuIcon = $('.menu-icon-link');

        /* Determine wether body currently has menu-hidden class */
        var menuVisibility = bodyClass();

        /* Test that ensures the menu element is
         * hidden by default.
         */

        it('is hidden by default', function() {
            expect(menuVisibility).toBe(true);
        });

        /* Additional test to check wether menu is hidden
         * when a link in our feedList is clicked on
         */
        it('is hidden when link in feedList is clicked', function() {

            // try functionality for first link from feedlist
            // open menu
            menuIcon.click();
            // click on item
            $(".feed-list a:first").click();
            // check wether body has menu-hidden class
            menuVisibility = bodyClass();
            expect(menuVisibility).toBe(true);
        });


        /* Test that ensures the menu changes
         * visibility when the menu icon is clicked. This test
         * has two expectations: does the menu display when
         * clicked and does it hide when clicked again.
         */

        describe('Menu Visibility', function() {
            beforeEach(function() {
                menuIcon.click();
                // Needs to be run again before each, to determine current value.
                menuVisibility = bodyClass();
            });

            it('displays when clicked', function() {
                expect(menuVisibility).toBe(false);
            });

            it('hides when clicked again', function() {
                expect(menuVisibility).toBe(true);
            });
        });
    });

    /* TODO: Write a new test suite named "Initial Entries" */

    describe('Initial Entries', function() {

        /* Test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         */

        var entryCount;

        beforeEach(function(done) {
            loadFeed(0, done);
        });

        it('has one or more feeds loaded', function() {
            // check how many feeds are in feed container
            entryCount = $('.feed .entry').length;
            expect(entryCount).toBeGreaterThan(0);
            done();
        });
    });
    
    /* "New Feed Selection" Test Suite */

    describe('New Feed Selection', function() {

        /* Test to ensure when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         */

        var oldContent,
            newContent;

        beforeEach(function(done) {
            // save the old content for later comparison
            oldContent = $('.feed a:first > h2').html();

            // Empty the .feed
            $('.feed').empty();
            
            // load next feed
            loadFeed(2, function() {
            //populate newContent
            newContent = $('.entry:first > h2').html();
            done();
            });
        });


        it('has updated content', function() {
            // compare old and new
            expect(oldContent).not.toBe(newContent);
            done();
        });
    });

    /* ADDITIONAL TEST SUITE:  "Article Preview" */
    describe('Article Preview', function() {

        /* Test: For new feature "article preview" make sure
         * each .entry has a content snippet from the article in its
         * p element. 
         */

        var entry = $('.entry-link:first > .entry'),
            contentSnippet = $('.entry-link:first > .entry > p');

        var snippetClass = function() {
            return $(contentSnippet).hasClass('snippet-hidden');
        };

        var previewIcon = $('.preview-icon-link');

        /* Determine wether snippet currently has snippet-hidden class */
        var snippetVisibility = snippetClass();

        // Needs to be async - to populate the .feed div
        beforeEach(function(done) {
            loadFeed(0, function() {
                entry = $('.entry-link:first > .entry');
                contentSnippet = $('.entry-link:first > .entry > p');
                done();
            });
        });

        /* ContentSnippet is not empty */
        it('has content', function(done) {
            expect(contentSnippet.html()).not.toBe('');
            done();
        });

        /* Test to ensure that content snippet is
         * hidden by default.
         */

        it('is hidden by default', function() {
            expect(snippetVisibility).toBe(true);
        });


        /* Test to ensure the content snippet changes
         * visibility when the  preview icon is clicked. This test
         * has two expectations: does the snippet display when
         * clicked and does it hide when clicked again.
         */

        describe('Snippet Visibility', function() {
            beforeEach(function() {
                previewIcon.click();
                // Needs to be run again before each, to determine current value.
                snippetVisibility = snippetClass();
            });

            it('displays when clicked', function() {
                expect(snippetVisibility).toBe(false);
                /* Aditionally expect snippet to have content. 
                 * Otherwise the test would pass even though
                 * the preview feature is not implemented 
                 */
                expect(contentSnippet.html()).not.toBe('');
            });

            it('hides when clicked again', function() {
                expect(snippetVisibility).toBe(true);
            });
        });
    });
}());