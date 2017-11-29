module.exports = {
  configs: {
    main: {
      plugins: ['ember'],
      rules: {
        'ember/avoid-leaking-state-in-components': ['error'],
      },
    },
  },
};
