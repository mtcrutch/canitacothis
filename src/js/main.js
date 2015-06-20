(function () {

    'use strict';

    // ┈┈┈┈╭╯╭╯╭╯┈┈┈┈┈
    // ┈┈┈╱▔▔▔▔▔╲▔╲┈┈┈
    // ┈┈╱┈╭╮┈╭╮┈╲╮╲┈┈
    // ┈┈▏┈▂▂▂▂▂┈▕╮▕┈┈
    // ┈┈▏┈╲▂▂▂╱┈▕╮▕┈┈
    // ┈┈╲▂▂▂▂▂▂▂▂╲╱┈┈

    var Taco;

    function handleGreeting() {
        var greetings = ['Yes', 'Si'];
        return greetings[Math.floor(Math.random() * greetings.length)];
    }

    function getInitialState() {
        return {
            greeting: handleGreeting()
        };
    }

    function render() {
        return React.createElement('h1', null, this.state.greeting);
    }

    Taco = React.createClass({
        displayName: 'Taco',
        getInitialState: getInitialState,
        render: render
    });

    React.render(React.createElement(Taco, null), document.getElementById('app'));

}());
