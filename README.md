# Automation Testing Suite with Visual Regression Image Diffing and Built-in Support for eyes.cypress and eyes.storybook.

#### Write Your First Test Tutorial:
[Writing Tests Tutorials](https://docs.cypress.io/guides/getting-started/writing-your-first-test.html)

##### CYPRESS.IO API DOCS:
[API DOCS](https://docs.cypress.io/api/api/table-of-contents.html)

[Storybook React Samples](https://github.com/kadira-samples/react-storybook-demo)

This repo includes support for [React Storybook](https://github.com/kadirahq/react-storybook) testing.

It also includes support for visually testing any other app, component, or page using
Applitools' [Storybook SDK](https://npmjs.com/package/@applitools/eyes.storybook) and [Cypress SDK](https://npmjs.com/package/@applitools/eyes.cypress).

### Some More References To Cook With Fire
Additional PDF crash course cheatsheet called Cypress E2E Test Automation PDF is in this repo, as well as another Readme to walk you through capturing screenshots locally without relying on the Eyes SDK for local testing purposes.

There is also an entire TEST-RECIPES-AND-EXAMPLES directory at the root of thsi project with even more tests and recipes.

## Installation

Run

```sh
npm install
```
## Opening the Interactive Test Runner
This is a great way to interactively work with Cypress and to get started fast the first time. The GUI test runner provides realtime feedback on the tests you write in your text editor in the cypress/integration directory. Write the automations and watch them excute!

Run either the first version, or if you have npx, which is included in all npm versions > 5.2.0, use this command instead:

```sh
node_modules/.bin/cypress open
```

Preferred Way:

```sh
npx cypress open
```

## Simplest Way To Run Tests Locally With Cypress-Visual-Regression Plugin:
```sh
npx cypress open
```
This opens the interactive test runner spec, you can add tests into the integration folder. You should find a few Gap tests to get started and a bunch more random tests to help with ideas.

You can than fire specific tests or the entire suite from the specRunner.

You can make realtime changes to the tests in the cypress/integration/*.js directory and you should see the new tests appear.

There are even more tests in the TEST-RECIPES-AND-EXAMPLES DIR located in the root of this project. Happy Testing!

## Running the Test Spec To Generate Baselines

Run

```sh
npm run get-base-image
```
## Running the Test Spec To Generate Diffing Images

This will compare the bitmaps against the base images and store an image of the capturing differences.

Run

```sh
npm run get-diff-image
```

## Visual Testing using Cypress and Exporting Applitools API Key

CURRENTLY A WORK IN PROGRESS TO CONFIGURE PROPERLY. IT IS RECOMMENDED TO RUN SCREENSHOTS LOCALLY FOR NOW UNTIL UPDATED CODE IS PUSHED. I HAVE INCLUDED AN APPLITOOLS_EXAMPLE_SPEC.JS TO GET AN IDEA.

Cypress allows for plugins and custom commands and essentially is already built to support the Eyes SDK. Simply export the apis using the syntax below which can be found in the applitools.example.config.js. Alternatively, you can remove the 'example' and use the config file for those keys.

Set the environment variable APPLITOOLS_API_KEY to your Applitools api key by running the command below in the command line.

```sh
export APPLITOOLS_API_KEY=<your-api-key> # Mac/Linux
# or...
set APPLITOOLS_API_KEY=<your-api-key> # Windows
```

Now run [Cypress](https://cypress.io).

```sh
npm run eyes-cypress
```

Then click on the single test in the Cypress window to run it.

![Eyes Cypress](.github/eyes-cypress-screenshot.png)

Once the tests passes,
goto [Applitools Eyes Test manager](https://eyes.applitools.com) to see the results.


## Key Commands To Use In Your Tests And Other Stuff To Know

### locale screenshots:
cy.screenshot() will take a local screenshot that usually gets added into screenshots directory which will be created if it does not exist..
To take a manual screenshot you can use the cy.screenshot() command.

Additionally, Cypress will automatically capture screenshots when a failure happens during runs outside of interactive mode.

This behavior can be turned off by setting screenshotOnRunFailure to false in the Cypress.Screenshot.defaults().

Screenshots are stored in the screenshotsFolder which is set to cypress/screenshots by default.

Cypress clears any existing screenshots before cypress run. If you do not want to clear your screenshots folder before a run, you can set trashAssetsBeforeRuns to false.

### Capturing local video
Cypress records a video for each spec file when running tests.

Video recording can be turned off entirely by setting video to false from within your configuration.

Videos are stored in the videosFolder which is set to cypress/videos by default.

After cypress run completes, Cypress automatically compresses the video in order to save on file size. By default it compresses to a 32 CRF, but this is configurable with the videoCompression property.

When using the --record flag while running your tests, videos are processed, compressed, and uploaded to the Dashboard Service after every spec file runs, successful or not. To change this behavior to only process videos in the case that tests fail, set the videoUploadOnPasses configuration option to false.

Cypress clears any existing videos before a cypress run. If you do not want to clear your videos folder before

### Invoking the diffing tool to either capture baselines or diffing image:
Works almost the same as using the native Cypress methods.  Essentially the Mocha/Chai testing structure never changes but what changes across local screencaptures, using the visual regression plugin, or leveraging the Applitools EYES Api is the method that gets called.

Here is how to generate a local screenshot:
```
it('should display the login page correctly', () => {
  cy.visit('/03.html');
  cy.get('H1').contains('Login');
  cy.compareSnapshot('login', 0.0);
  cy.compareSnapshot('login', 0.1);
});
```

### Using the Applitools EYES Integration to run the Visual Regression Tests
Everything is configured to work out of the boxt. Simply run npx eyes-setup and then
Add cy.eyesOpen to start the test inside your it method:


#### Steps to run Visual Regression using Applitools instead of the local plugin

##### Step 1

Export the API Key above if you have not done so already or include it in a file called applitools.config.js that should be in the root of the current working directory.

Configure Eyes plugin and commands by running the following: npx eyes-setup

##### Step 2: Add cy.eyesOpen to start the test inside your it method

```
//Start the test
cy.eyesOpen({
  appName: 'Hello World!',
  testName: 'My first JavaScript test!',
  browser: [
    {width: 800, height: 600, name: 'firefox'},
    {width: 1024, height: 768, name: 'chrome'}
    //Add more variations
  ],
  batchName: 'My batch'
  showLogs: true, // if you want verbose log messages to keep track of
});
other configurations: https://github.com/applitools/eyes-cypress#advanced-configuration
```

##### Step 3: Add one or more eyesCheckWindow checkpoints for various test steps

- for an entire page: cy.eyesCheckWindow('Some window name');

- For a given CSS selector
```
cy.eyesCheckWindow({
  sizeMode: 'selector', //mode
  selector: '.my-element' //CSS Selector
});
```

- For a specific region
```
cy.eyesCheckWindow({
  sizeMode: 'region',
  region: {top: 100, left: 0, width: 1000, height: 200}
});
```
- To Ignore a region
```
cy.eyesCheckWindow({
  ignore: [
    {top: 100, left: 0, width: 1000, height: 100},
    {selector: '.some-div-to-ignore'}
  ]
});
```

##### Step 4: End the test

```
cy.eyesClose();
```

##### Step 5: Running your tests

Interactive Way:
 ./node_modules/cypress/bin/cypress open

CLI:
./node_modules/cypress/bin/cypress run --spec cypress/integration/putNameOfYourTest.js


## Visual Testing using Storybook

WIP

Then wait for the test to pass, and goto [Applitools Eyes Test manager](https://eyes.applitools.com) to see the results.

![Eyes Storybook](.github/eyes-storybook-screenshot.png)

## Configuring more browsers to visually test

Edit the file `applitools.config.js` and play around with the `browser` field
to add or remove more browsers/browser widths. (Storybook & Cypress only)
