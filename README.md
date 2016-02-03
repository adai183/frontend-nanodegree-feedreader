# Feedreader - Javascript Testing + TDD
##### Udacity FEND Feedreader (Project 6)

This web app testing is for the project 6 of Front-End Nanodegree at Udacity. The testing is for RSS feed reader functionality. Project was made with *Jasmine* framework.<br>
I added an additional feed of Wired magazine to make the Feedreader more personal.


## How to use it
* Download the Git Repo and 
* open **index.html** in a browser.

The Feedreader is located at the top of the page and the Jasmine
results can be found at the bottom.


### Additional Tests
#### Test Suite 'The menu'
* Added test to ensure the menu is hidden when link in the feed list is clicked <br>
**This spec passes because the functionality is already implemented.**

#### Test Suite 'Article Preview'
This suite tests for new feature called "article preview" which
displays a content snippet of the article within the feedreader app
when the preview Icon is clicked. This feature is not yet implemented.

* **- the Article Preview has content**
<br>The app code actually has the basic structure for this but the p within the
entry does not get populated.

* **- The article prevew is hidden by default**
<br>Check wether the snippet has the snippet-hidden class. This structure is not yet implemented

* **- The article preview displays when the preview Icon is clicked**
<br> Check wether the hypothetical snippet-hidden class is missing. I had to add a second assertation to check wether the snippet has content to make the test meaningful. Otherwise the test would pass even though the preview feature is not implemented 

* **- The article preview hides when clicked again**
<br>Check wether hypothetical snippet-hidden class is toggled.

**All specs in this test suite fail**

## Dependencies & Resources
The Feedreader and Jasmine tests are built with:

* jQuery 2.1.1
* Jasmine 2.1.2
* handlebars 2.0.0

It also calls:

* Google JS API - _probably_ to collect the RSS-Feeds
* rsstojson.udacity.com/parseFeed - _probably_ to parse the RSS-Feeds


## Additional Resources 
* [Udacity Forum - Async tests](https://discussions.udacity.com/t/async-tests-why-the-second-done-call/40751/3)
* [Udacity Forum - doubting my test](https://discussions.udacity.com/t/testing-wether-the-menu-is-hidden-when-a-link-in-feedlist-is-clicked/46406)
* [jQuery Documentation](http://api.jquery.com)
* [Jasmine Introduction](http://jasmine.github.io/2.0/introduction.html)
* [stackoverflow.com](http://stackoverflow.com/)
