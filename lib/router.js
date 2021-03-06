Router.configure({
    welcomeTemplate: 'welcome',
    loadingTemplate: 'loading',
    waitOn: function() {
        return [Meteor.subscribe('messages')]
    }
});

Router.route('/', {
    name: 'welcome'
});

var requireLogin = function() {
    if (!Meteor.user()) {
        if (Meteor.loggingIn()) {
            this.render(this.loadingTemplate);
        } else {
            this.render('accessDenied');
        }
    } else {
        this.next();
    }
}


Router.onBeforeAction(requireLogin, {
    only: 'welcome'
});
