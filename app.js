/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'FT891CAT.Application',

    name: 'FT891CAT',

    requires: [
        // This will automatically load all classes in the FT891CAT namespace
        // so that application classes do not need to require each other.
        'FT891CAT.*'
    ],

    // The name of the initial view to create.
    mainView: 'FT891CAT.view.main.Main'
});
