export default defineUnlighthouseConfig({
  scanner: {
    device: 'desktop', // 'desktop' or 'mobile'
  },
  ci: {
    reporter: 'csvExpanded',
    buildStatic: true,      
  },
  outputPath: './generated-reports'                     
})