modules.define('spec', ['uri', 'location', 'sinon'], function(provide, Uri, location, sinon) {

describe('location native API', function() {

        it('should change location by path', function() {
            location.change({ url : '/desktop.specs/location/spec-js+browser-js+bemhtml/spec-js+browser-js+bemhtml.html?test=a&ololo=123' });
            var u = Uri.parse(window.location.href);
            (u.getPath() + u.getQuery()).should.be.eql('/desktop.specs/location/spec-js+browser-js+bemhtml/spec-js+browser-js+bemhtml.html?test=a&ololo=123');
        });

        it('should change location by params with forceParams flag', function() {
            location.change({ params : { test : [1, 2] }, forceParams : true });
            var u = Uri.parse(window.location.href);
            (u.getPath() + u.getQuery()).should.be.eql('/desktop.specs/location/spec-js+browser-js+bemhtml/spec-js+browser-js+bemhtml.html?test=1&test=2');
        });

        it('should change location by params without forceParams flag', function() {
            location.change({ params : { param2 : [22] } });
            var u = Uri.parse(window.location.href);
            (u.getPath() + u.getQuery()).should.be.eql('/desktop.specs/location/spec-js+browser-js+bemhtml/spec-js+browser-js+bemhtml.html?test=1&test=2&param2=22');
        });

        it('shouldn\'t emit "change" event when silent option passed', function() {
            var spy = sinon.spy();
            var url1 = '/desktop.specs/location/spec-js+browser-js+bemhtml/spec-js+browser-js+bemhtml.html?test=a';
            var url2 = '/desktop.specs/location/spec-js+browser-js+bemhtml/spec-js+browser-js+bemhtml.html?test=b';
            location.on('change', spy);
            location.change({
                url : url1,
                silent : true
            });
            location.change({
                url : url2
            });

            spy.should.have.been.calledOnce;
        });

        it.skip('should emit "change" event when back button pressed', function() {
            // Этот тест будет возможно запускать только на phantomjs2. В 1.9.х не эмитится событие popstate
            // https://github.com/ariya/phantomjs/issues/11738
            var spy = sinon.spy();
            var url1 = '/desktop.specs/location/spec-js+browser-js+bemhtml/spec-js+browser-js+bemhtml.html?test=a';
            var url2 = '/desktop.specs/location/spec-js+browser-js+bemhtml/spec-js+browser-js+bemhtml.html?test=b';
            location.on('change', spy);
            location.change({
                url : url1,
                silent : true
            });
            location.change({
                url : url2,
                silent : true
            });

            window.history.back();

            spy.should.have.been.calledOnce;
        });
});

provide();

});
