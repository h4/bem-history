module.exports = {
    options: {
        es3: true,
        eqeqeq: true,
        evil: true,
        expr: true,
        forin: true,
        immed: true,
        indent: 4,
        latedef: true,
        maxdepth: 4,
        maxlen: 120,
        maxparams: 4,
        newcap: true,
        noarg: true,
        noempty: true,
        nonew: true,
        quotmark: 'single',
        sub: true,
        trailing: true,
        undef: true,
        unused: true
    },
    groups: {
        client: {
            options: {
                predef: ['BEM'],
                browser: true,
                jquery: true
            },
            includes: ['common.blocks/**/*.js']
        }
    }
};
