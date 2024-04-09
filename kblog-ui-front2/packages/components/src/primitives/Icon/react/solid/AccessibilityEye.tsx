import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgAccessibilityEye = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 24 24" accessibilityRole="image" {...props}>
    <Path
      fill="currentColor"
      fillRule="evenodd"
      d="M3.708 2.293a1 1 0 0 0-1.414 1.414l2.815 2.815a13.834 13.834 0 0 0-1.873 1.826 16.264 16.264 0 0 0-1.593 2.236 2.768 2.768 0 0 0 0 2.832c3.011 5.058 7.775 7.3 12.373 6.385a10.924 10.924 0 0 0 3.187-1.184l3.09 3.09a1 1 0 0 0 1.415-1.414l-2.816-2.816c1.3-1.042 2.476-2.4 3.465-4.06a2.77 2.77 0 0 0 0-2.834C19.79 6.273 15.952 4 12 4c-1.794 0-3.564.468-5.203 1.383l-3.09-3.09Zm6.627 6.627 4.744 4.745a3.5 3.5 0 0 0-4.744-4.744Zm-4.954.046c.373-.376.758-.716 1.152-1.02l9.188 9.188c-.52.25-1.05.446-1.585.587L5.38 8.966Zm-1.294 1.535 7.487 7.487c-3.008-.157-6.049-1.96-8.212-5.595a.768.768 0 0 1 0-.786c.232-.39.474-.758.725-1.106Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgAccessibilityEye;
