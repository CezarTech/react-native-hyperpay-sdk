module.exports = {
  dependency: {
    platforms: {
      android: {
        sourceDir: './android',
        packageImportPath: 'import com.reactnativehyperpay.HyperPayPackage;',
        packageInstance: 'new HyperPayPackage()',
      },
      ios: {},
    },
  },
};
