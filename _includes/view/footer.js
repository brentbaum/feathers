(function(views) {

    // Header View
    views.Footer = views.AppView.extend({
        
        el : this.$('#footer'),

        events: {
        
        },

        initialize: function () {
            this.template = _.template($('#tpl-footer').html());
        },

        select: function(className) {
            // highlight tab
            this.$('.nav li').removeClass('active');
            this.$('.' + className).addClass('active');
        },
        
        render: function() {
            $(this.el).html(this.template());
            return this;
        }

    });

}).call(this, app.views);
